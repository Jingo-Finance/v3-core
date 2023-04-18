// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/IPegasysV2PoolImmutables.sol';
import './pool/IPegasysV2PoolState.sol';
import './pool/IPegasysV2PoolDerivedState.sol';
import './pool/IPegasysV2PoolActions.sol';
import './pool/IPegasysV2PoolOwnerActions.sol';
import './pool/IPegasysV2PoolEvents.sol';

/// @title The interface for a Pegasys V2 Pool
/// @notice A Pegasys pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface IPegasysV2Pool is
    IPegasysV2PoolImmutables,
    IPegasysV2PoolState,
    IPegasysV2PoolDerivedState,
    IPegasysV2PoolActions,
    IPegasysV2PoolOwnerActions,
    IPegasysV2PoolEvents
{

}
