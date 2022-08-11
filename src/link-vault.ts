import {
  LinkVaultApproval as LinkVaultApprovalEvent,
  LinkVaultApprovalForAll as LinkVaultApprovalForAllEvent,
  LinkVaultBorrowToken as LinkVaultBorrowTokenEvent,
  LinkVaultCreateVault as LinkVaultCreateVaultEvent,
  LinkVaultDepositCollateral as LinkVaultDepositCollateralEvent,
  LinkVaultDestroyVault as LinkVaultDestroyVaultEvent,
  LinkVaultLiquidateVault as LinkVaultLiquidateVaultEvent,
  LinkVaultOwnershipTransferred as LinkVaultOwnershipTransferredEvent,
  LinkVaultPayBackToken as LinkVaultPayBackTokenEvent,
  LinkVaultTransfer as LinkVaultTransferEvent,
  LinkVaultTransferVault as LinkVaultTransferVaultEvent,
  LinkVaultWithdrawCollateral as LinkVaultWithdrawCollateralEvent
} from "../generated/LinkVault/LinkVault"
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
} from "../generated/schema"

export function handleLinkVaultApproval(event: LinkVaultApprovalEvent): void {
  let entity = new LinkVaultApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleLinkVaultApprovalForAll(
  event: LinkVaultApprovalForAllEvent
): void {
  let entity = new LinkVaultApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleLinkVaultBorrowToken(
  event: LinkVaultBorrowTokenEvent
): void {
  let entity = new LinkVaultBorrowToken(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.vaultID = event.params.vaultID
  entity.amount = event.params.amount
  entity.save()
}

export function handleLinkVaultCreateVault(
  event: LinkVaultCreateVaultEvent
): void {
  let entity = new LinkVaultCreateVault(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.vaultID = event.params.vaultID
  entity.creator = event.params.creator
  entity.save()
}

export function handleLinkVaultDepositCollateral(
  event: LinkVaultDepositCollateralEvent
): void {
  let entity = new LinkVaultDepositCollateral(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.vaultID = event.params.vaultID
  entity.amount = event.params.amount
  entity.save()
}

export function handleLinkVaultDestroyVault(
  event: LinkVaultDestroyVaultEvent
): void {
  let entity = new LinkVaultDestroyVault(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.vaultID = event.params.vaultID
  entity.save()
}

export function handleLinkVaultLiquidateVault(
  event: LinkVaultLiquidateVaultEvent
): void {
  let entity = new LinkVaultLiquidateVault(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.vaultID = event.params.vaultID
  entity.owner = event.params.owner
  entity.buyer = event.params.buyer
  entity.debtRepaid = event.params.debtRepaid
  entity.collateralLiquidated = event.params.collateralLiquidated
  entity.closingFee = event.params.closingFee
  entity.save()
}

export function handleLinkVaultOwnershipTransferred(
  event: LinkVaultOwnershipTransferredEvent
): void {
  let entity = new LinkVaultOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleLinkVaultPayBackToken(
  event: LinkVaultPayBackTokenEvent
): void {
  let entity = new LinkVaultPayBackToken(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.vaultID = event.params.vaultID
  entity.amount = event.params.amount
  entity.closingFee = event.params.closingFee
  entity.save()
}

export function handleLinkVaultTransfer(event: LinkVaultTransferEvent): void {
  let entity = new LinkVaultTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleLinkVaultTransferVault(
  event: LinkVaultTransferVaultEvent
): void {
  let entity = new LinkVaultTransferVault(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.vaultID = event.params.vaultID
  entity.from = event.params.from
  entity.to = event.params.to
  entity.save()
}

export function handleLinkVaultWithdrawCollateral(
  event: LinkVaultWithdrawCollateralEvent
): void {
  let entity = new LinkVaultWithdrawCollateral(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.vaultID = event.params.vaultID
  entity.amount = event.params.amount
  entity.save()
}
