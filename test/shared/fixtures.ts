import { BigNumber } from 'ethers'
import { ethers } from 'hardhat'
import { MockTimePegasysV2Pool } from '../../typechain/MockTimePegasysV2Pool'
import { TestERC20 } from '../../typechain/TestERC20'
import { PegasysV2Factory } from '../../typechain/PegasysV2Factory'
import { TestPegasysV2Callee } from '../../typechain/TestPegasysV2Callee'
import { TestPegasysV2Router } from '../../typechain/TestPegasysV2Router'
import { MockTimePegasysV2PoolDeployer } from '../../typechain/MockTimePegasysV2PoolDeployer'

import { Fixture } from 'ethereum-waffle'

interface FactoryFixture {
  factory: PegasysV2Factory
}

async function factoryFixture(): Promise<FactoryFixture> {
  const factoryFactory = await ethers.getContractFactory('PegasysV2Factory')
  const factory = (await factoryFactory.deploy()) as PegasysV2Factory
  return { factory }
}

interface TokensFixture {
  token0: TestERC20
  token1: TestERC20
  token2: TestERC20
}

async function tokensFixture(): Promise<TokensFixture> {
  const tokenFactory = await ethers.getContractFactory('TestERC20')
  const tokenA = (await tokenFactory.deploy(BigNumber.from(2).pow(255))) as TestERC20
  const tokenB = (await tokenFactory.deploy(BigNumber.from(2).pow(255))) as TestERC20
  const tokenC = (await tokenFactory.deploy(BigNumber.from(2).pow(255))) as TestERC20

  const [token0, token1, token2] = [tokenA, tokenB, tokenC].sort((tokenA, tokenB) =>
    tokenA.address.toLowerCase() < tokenB.address.toLowerCase() ? -1 : 1
  )

  return { token0, token1, token2 }
}

type TokensAndFactoryFixture = FactoryFixture & TokensFixture

interface PoolFixture extends TokensAndFactoryFixture {
  swapTargetCallee: TestPegasysV2Callee
  swapTargetRouter: TestPegasysV2Router
  createPool(
    fee: number,
    tickSpacing: number,
    firstToken?: TestERC20,
    secondToken?: TestERC20
  ): Promise<MockTimePegasysV2Pool>
}

// Monday, October 5, 2020 9:00:00 AM GMT-05:00
export const TEST_POOL_START_TIME = 1601906400

export const poolFixture: Fixture<PoolFixture> = async function (): Promise<PoolFixture> {
  const { factory } = await factoryFixture()
  const { token0, token1, token2 } = await tokensFixture()

  const MockTimePegasysV2PoolDeployerFactory = await ethers.getContractFactory('MockTimePegasysV2PoolDeployer')
  const MockTimePegasysV2PoolFactory = await ethers.getContractFactory('MockTimePegasysV2Pool')

  const calleeContractFactory = await ethers.getContractFactory('TestPegasysV2Callee')
  const routerContractFactory = await ethers.getContractFactory('TestPegasysV2Router')

  const swapTargetCallee = (await calleeContractFactory.deploy()) as TestPegasysV2Callee
  const swapTargetRouter = (await routerContractFactory.deploy()) as TestPegasysV2Router

  return {
    token0,
    token1,
    token2,
    factory,
    swapTargetCallee,
    swapTargetRouter,
    createPool: async (fee, tickSpacing, firstToken = token0, secondToken = token1) => {
      const mockTimePoolDeployer = (await MockTimePegasysV2PoolDeployerFactory.deploy()) as MockTimePegasysV2PoolDeployer
      const tx = await mockTimePoolDeployer.deploy(
        factory.address,
        firstToken.address,
        secondToken.address,
        fee,
        tickSpacing
      )

      const receipt = await tx.wait()
      const poolAddress = receipt.events?.[0].args?.pool as string
      return MockTimePegasysV2PoolFactory.attach(poolAddress) as MockTimePegasysV2Pool
    },
  }
}
