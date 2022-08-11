import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  LinkVaultApproval,
  LinkVaultApprovalForAll,
  LinkVaultBorrowToken,
  LinkVaultCreateVault,
  LinkVaultDepositCollateral,
  LinkVaultDestroyVault,
  LinkVaultLiquidateVault,
  LinkVaultOwnershipTransferred,
  LinkVaultPayBackToken,
  LinkVaultTransfer,
  LinkVaultTransferVault,
  LinkVaultWithdrawCollateral
} from "../generated/LinkVault/LinkVault"

export function createLinkVaultApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): LinkVaultApproval {
  let linkVaultApprovalEvent = changetype<LinkVaultApproval>(newMockEvent())

  linkVaultApprovalEvent.parameters = new Array()

  linkVaultApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  linkVaultApprovalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  linkVaultApprovalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return linkVaultApprovalEvent
}

export function createLinkVaultApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): LinkVaultApprovalForAll {
  let linkVaultApprovalForAllEvent = changetype<LinkVaultApprovalForAll>(
    newMockEvent()
  )

  linkVaultApprovalForAllEvent.parameters = new Array()

  linkVaultApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  linkVaultApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  linkVaultApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return linkVaultApprovalForAllEvent
}

export function createLinkVaultBorrowTokenEvent(
  vaultID: BigInt,
  amount: BigInt
): LinkVaultBorrowToken {
  let linkVaultBorrowTokenEvent = changetype<LinkVaultBorrowToken>(
    newMockEvent()
  )

  linkVaultBorrowTokenEvent.parameters = new Array()

  linkVaultBorrowTokenEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  linkVaultBorrowTokenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return linkVaultBorrowTokenEvent
}

export function createLinkVaultCreateVaultEvent(
  vaultID: BigInt,
  creator: Address
): LinkVaultCreateVault {
  let linkVaultCreateVaultEvent = changetype<LinkVaultCreateVault>(
    newMockEvent()
  )

  linkVaultCreateVaultEvent.parameters = new Array()

  linkVaultCreateVaultEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  linkVaultCreateVaultEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return linkVaultCreateVaultEvent
}

export function createLinkVaultDepositCollateralEvent(
  vaultID: BigInt,
  amount: BigInt
): LinkVaultDepositCollateral {
  let linkVaultDepositCollateralEvent = changetype<LinkVaultDepositCollateral>(
    newMockEvent()
  )

  linkVaultDepositCollateralEvent.parameters = new Array()

  linkVaultDepositCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  linkVaultDepositCollateralEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return linkVaultDepositCollateralEvent
}

export function createLinkVaultDestroyVaultEvent(
  vaultID: BigInt
): LinkVaultDestroyVault {
  let linkVaultDestroyVaultEvent = changetype<LinkVaultDestroyVault>(
    newMockEvent()
  )

  linkVaultDestroyVaultEvent.parameters = new Array()

  linkVaultDestroyVaultEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )

  return linkVaultDestroyVaultEvent
}

export function createLinkVaultLiquidateVaultEvent(
  vaultID: BigInt,
  owner: Address,
  buyer: Address,
  debtRepaid: BigInt,
  collateralLiquidated: BigInt,
  closingFee: BigInt
): LinkVaultLiquidateVault {
  let linkVaultLiquidateVaultEvent = changetype<LinkVaultLiquidateVault>(
    newMockEvent()
  )

  linkVaultLiquidateVaultEvent.parameters = new Array()

  linkVaultLiquidateVaultEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  linkVaultLiquidateVaultEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  linkVaultLiquidateVaultEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  linkVaultLiquidateVaultEvent.parameters.push(
    new ethereum.EventParam(
      "debtRepaid",
      ethereum.Value.fromUnsignedBigInt(debtRepaid)
    )
  )
  linkVaultLiquidateVaultEvent.parameters.push(
    new ethereum.EventParam(
      "collateralLiquidated",
      ethereum.Value.fromUnsignedBigInt(collateralLiquidated)
    )
  )
  linkVaultLiquidateVaultEvent.parameters.push(
    new ethereum.EventParam(
      "closingFee",
      ethereum.Value.fromUnsignedBigInt(closingFee)
    )
  )

  return linkVaultLiquidateVaultEvent
}

export function createLinkVaultOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): LinkVaultOwnershipTransferred {
  let linkVaultOwnershipTransferredEvent = changetype<
    LinkVaultOwnershipTransferred
  >(newMockEvent())

  linkVaultOwnershipTransferredEvent.parameters = new Array()

  linkVaultOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  linkVaultOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return linkVaultOwnershipTransferredEvent
}

export function createLinkVaultPayBackTokenEvent(
  vaultID: BigInt,
  amount: BigInt,
  closingFee: BigInt
): LinkVaultPayBackToken {
  let linkVaultPayBackTokenEvent = changetype<LinkVaultPayBackToken>(
    newMockEvent()
  )

  linkVaultPayBackTokenEvent.parameters = new Array()

  linkVaultPayBackTokenEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  linkVaultPayBackTokenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  linkVaultPayBackTokenEvent.parameters.push(
    new ethereum.EventParam(
      "closingFee",
      ethereum.Value.fromUnsignedBigInt(closingFee)
    )
  )

  return linkVaultPayBackTokenEvent
}

export function createLinkVaultTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): LinkVaultTransfer {
  let linkVaultTransferEvent = changetype<LinkVaultTransfer>(newMockEvent())

  linkVaultTransferEvent.parameters = new Array()

  linkVaultTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  linkVaultTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  linkVaultTransferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return linkVaultTransferEvent
}

export function createLinkVaultTransferVaultEvent(
  vaultID: BigInt,
  from: Address,
  to: Address
): LinkVaultTransferVault {
  let linkVaultTransferVaultEvent = changetype<LinkVaultTransferVault>(
    newMockEvent()
  )

  linkVaultTransferVaultEvent.parameters = new Array()

  linkVaultTransferVaultEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  linkVaultTransferVaultEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  linkVaultTransferVaultEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return linkVaultTransferVaultEvent
}

export function createLinkVaultWithdrawCollateralEvent(
  vaultID: BigInt,
  amount: BigInt
): LinkVaultWithdrawCollateral {
  let linkVaultWithdrawCollateralEvent = changetype<
    LinkVaultWithdrawCollateral
  >(newMockEvent())

  linkVaultWithdrawCollateralEvent.parameters = new Array()

  linkVaultWithdrawCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  linkVaultWithdrawCollateralEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return linkVaultWithdrawCollateralEvent
}
