# Pegasys V3

[![Lint](https://github.com/pegasys-fi/v3-core/actions/workflows/lint.yml/badge.svg)](https://github.com/pegasys-fi/v3-core/actions/workflows/lint.yml)
[![Tests](https://github.com/pegasys-fi/v3-core/actions/workflows/tests.yml/badge.svg)](https://github.com/pegasys-fi/v3-core/actions/workflows/tests.yml)
[![Fuzz Testing](https://github.com/pegasys-fi/v3-core/actions/workflows/fuzz-testing.yml/badge.svg)](https://github.com/pegasys-fi/v3-core/actions/workflows/fuzz-testing.yml)
[![Mythx](https://github.com/pegasys-fi/v3-core/actions/workflows/mythx.yml/badge.svg)](https://github.com/pegasys-fi/v3-core/actions/workflows/mythx.yml)
[![npm version](https://img.shields.io/npm/v/@pollum-io/v3-core/latest.svg)](https://www.npmjs.com/package/@pollum-io/v3-core/v/latest)

This repository contains the core smart contracts for the Pegasys V3 Protocol.
For higher level contracts, see the [v3-periphery](https://github.com/pegasys-fi/v3-periphery)
repository.

## Local deployment

In order to deploy this code to a local testnet, you should install the npm package
`@pollum-io/v3-core`
and import the factory bytecode located at
`@pollum-io/v3-core/artifacts/contracts/PegasysV3Factory.sol/PegasysV3Factory.json`.
For example:

```typescript
import {
  abi as FACTORY_ABI,
  bytecode as FACTORY_BYTECODE,
} from '@pollum-io/v3-core/artifacts/contracts/PegasysV3Factory.sol/PegasysV3Factory.json'

// deploy the bytecode
```

This will ensure that you are testing against the same bytecode that is deployed to
mainnet and public testnets, and all Pegasys code will correctly interoperate with
your local deployment.

## Using solidity interfaces

The Pegasys V3 interfaces are available for import into solidity smart contracts
via the npm artifact `@pollum-io/v3-core`, e.g.:

```solidity
import '@pollum-io/v3-core/contracts/interfaces/IPegasysV3Pool.sol';

contract MyContract {
  IPegasysV3Pool pool;

  function doSomethingWithPool() {
    // pool.swap(...);
  }
}

```
