# Pegasys V2

[![Lint](https://github.com/pegasys-fi/v2-core/actions/workflows/lint.yml/badge.svg)](https://github.com/pegasys-fi/v2-core/actions/workflows/lint.yml)
[![Tests](https://github.com/pegasys-fi/v2-core/actions/workflows/tests.yml/badge.svg)](https://github.com/pegasys-fi/v2-core/actions/workflows/tests.yml)
[![Fuzz Testing](https://github.com/pegasys-fi/v2-core/actions/workflows/fuzz-testing.yml/badge.svg)](https://github.com/pegasys-fi/v2-core/actions/workflows/fuzz-testing.yml)
[![Mythx](https://github.com/pegasys-fi/v2-core/actions/workflows/mythx.yml/badge.svg)](https://github.com/pegasys-fi/v2-core/actions/workflows/mythx.yml)
[![npm version](https://img.shields.io/npm/v/@pollum-io/v2-core/latest.svg)](https://www.npmjs.com/package/@pollum-io/v2-core/v/latest)

This repository contains the core smart contracts for the Pegasys V2 Protocol.
For higher level contracts, see the [v2-periphery](https://github.com/pegasys-fi/v2-periphery)
repository.

## Local deployment

In order to deploy this code to a local testnet, you should install the npm package
`@pollum-io/v2-core`
and import the factory bytecode located at
`@pollum-io/v2-core/artifacts/contracts/PegasysV2Factory.sol/PegasysV2Factory.json`.
For example:

```typescript
import {
  abi as FACTORY_ABI,
  bytecode as FACTORY_BYTECODE,
} from '@pollum-io/v2-core/artifacts/contracts/PegasysV2Factory.sol/PegasysV2Factory.json'

// deploy the bytecode
```

This will ensure that you are testing against the same bytecode that is deployed to
mainnet and public testnets, and all Pegasys code will correctly interoperate with
your local deployment.

## Using solidity interfaces

The Pegasys V2 interfaces are available for import into solidity smart contracts
via the npm artifact `@pollum-io/v2-core`, e.g.:

```solidity
import '@pollum-io/v2-core/contracts/interfaces/IPegasysV2Pool.sol';

contract MyContract {
  IPegasysV2Pool pool;

  function doSomethingWithPool() {
    // pool.swap(...);
  }
}

```

## Licensing

The primary license for Pegasys V2 Core is the Business Source License 1.1 (`BUSL-1.1`), see [`LICENSE`](./LICENSE). However, some files are dual licensed under `GPL-2.0-or-later`:

- All files in `contracts/interfaces/` may also be licensed under `GPL-2.0-or-later` (as indicated in their SPDX headers), see [`contracts/interfaces/LICENSE`](./contracts/interfaces/LICENSE)
- Several files in `contracts/libraries/` may also be licensed under `GPL-2.0-or-later` (as indicated in their SPDX headers), see [`contracts/libraries/LICENSE`](contracts/libraries/LICENSE)

### Other Exceptions

- `contracts/libraries/FullMath.sol` is licensed under `MIT` (as indicated in its SPDX header), see [`contracts/libraries/LICENSE_MIT`](contracts/libraries/LICENSE_MIT)
- All files in `contracts/test` remain unlicensed (as indicated in their SPDX headers).
