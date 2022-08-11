import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  BorrowToken,
  CreateVault,
  DepositCollateral,
  DestroyVault,
  LiquidateVault,
  OwnershipTransferred,
  PayBackToken,
  Transfer,
  TransferVault,
  WithdrawCollateral
} from "../generated/WethVault/WethVault"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBorrowTokenEvent(
  vaultID: BigInt,
  amount: BigInt
): BorrowToken {
  let borrowTokenEvent = changetype<BorrowToken>(newMockEvent())

  borrowTokenEvent.parameters = new Array()

  borrowTokenEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  borrowTokenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return borrowTokenEvent
}

export function createCreateVaultEvent(
  vaultID: BigInt,
  creator: Address
): CreateVault {
  let createVaultEvent = changetype<CreateVault>(newMockEvent())

  createVaultEvent.parameters = new Array()

  createVaultEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  createVaultEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return createVaultEvent
}

export function createDepositCollateralEvent(
  vaultID: BigInt,
  amount: BigInt
): DepositCollateral {
  let depositCollateralEvent = changetype<DepositCollateral>(newMockEvent())

  depositCollateralEvent.parameters = new Array()

  depositCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  depositCollateralEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositCollateralEvent
}

export function createDestroyVaultEvent(vaultID: BigInt): DestroyVault {
  let destroyVaultEvent = changetype<DestroyVault>(newMockEvent())

  destroyVaultEvent.parameters = new Array()

  destroyVaultEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )

  return destroyVaultEvent
}

export function createLiquidateVaultEvent(
  vaultID: BigInt,
  owner: Address,
  buyer: Address,
  debtRepaid: BigInt,
  collateralLiquidated: BigInt,
  closingFee: BigInt
): LiquidateVault {
  let liquidateVaultEvent = changetype<LiquidateVault>(newMockEvent())

  liquidateVaultEvent.parameters = new Array()

  liquidateVaultEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  liquidateVaultEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  liquidateVaultEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  liquidateVaultEvent.parameters.push(
    new ethereum.EventParam(
      "debtRepaid",
      ethereum.Value.fromUnsignedBigInt(debtRepaid)
    )
  )
  liquidateVaultEvent.parameters.push(
    new ethereum.EventParam(
      "collateralLiquidated",
      ethereum.Value.fromUnsignedBigInt(collateralLiquidated)
    )
  )
  liquidateVaultEvent.parameters.push(
    new ethereum.EventParam(
      "closingFee",
      ethereum.Value.fromUnsignedBigInt(closingFee)
    )
  )

  return liquidateVaultEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPayBackTokenEvent(
  vaultID: BigInt,
  amount: BigInt,
  closingFee: BigInt
): PayBackToken {
  let payBackTokenEvent = changetype<PayBackToken>(newMockEvent())

  payBackTokenEvent.parameters = new Array()

  payBackTokenEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  payBackTokenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  payBackTokenEvent.parameters.push(
    new ethereum.EventParam(
      "closingFee",
      ethereum.Value.fromUnsignedBigInt(closingFee)
    )
  )

  return payBackTokenEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createTransferVaultEvent(
  vaultID: BigInt,
  from: Address,
  to: Address
): TransferVault {
  let transferVaultEvent = changetype<TransferVault>(newMockEvent())

  transferVaultEvent.parameters = new Array()

  transferVaultEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  transferVaultEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferVaultEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return transferVaultEvent
}

export function createWithdrawCollateralEvent(
  vaultID: BigInt,
  amount: BigInt
): WithdrawCollateral {
  let withdrawCollateralEvent = changetype<WithdrawCollateral>(newMockEvent())

  withdrawCollateralEvent.parameters = new Array()

  withdrawCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "vaultID",
      ethereum.Value.fromUnsignedBigInt(vaultID)
    )
  )
  withdrawCollateralEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawCollateralEvent
}
