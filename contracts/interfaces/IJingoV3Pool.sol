// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/IJingoV3PoolImmutables.sol';
import './pool/IJingoV3PoolState.sol';
import './pool/IJingoV3PoolDerivedState.sol';
import './pool/IJingoV3PoolActions.sol';
import './pool/IJingoV3PoolOwnerActions.sol';
import './pool/IJingoV3PoolEvents.sol';

/// @title The interface for a Jingo V3 Pool
/// @notice A Jingo pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface IJingoV3Pool is
    IJingoV3PoolImmutables,
    IJingoV3PoolState,
    IJingoV3PoolDerivedState,
    IJingoV3PoolActions,
    IJingoV3PoolOwnerActions,
    IJingoV3PoolEvents
{

}
