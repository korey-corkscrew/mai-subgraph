import { BigInt } from "@graphprotocol/graph-ts"
import {
  WethVault,
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
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.approved = event.params.approved

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract._meta(...)
  // - contract._minimumCollateralPercentage(...)
  // - contract.balanceOf(...)
  // - contract.base(...)
  // - contract.baseURI(...)
  // - contract.checkCollateralPercentage(...)
  // - contract.checkCost(...)
  // - contract.checkExtract(...)
  // - contract.checkLiquidation(...)
  // - contract.closingFee(...)
  // - contract.collateral(...)
  // - contract.collateralDecimals(...)
  // - contract.createVault(...)
  // - contract.debtRatio(...)
  // - contract.ethPriceSource(...)
  // - contract.exists(...)
  // - contract.gainRatio(...)
  // - contract.getApproved(...)
  // - contract.getClosingFee(...)
  // - contract.getDebtCeiling(...)
  // - contract.getEthPriceSource(...)
  // - contract.getOpeningFee(...)
  // - contract.getTokenPriceSource(...)
  // - contract.isApprovedForAll(...)
  // - contract.isOwner(...)
  // - contract.mai(...)
  // - contract.maticDebt(...)
  // - contract.name(...)
  // - contract.openingFee(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.stabilityPool(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenPeg(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
  // - contract.treasury(...)
  // - contract.vaultCollateral(...)
  // - contract.vaultCount(...)
  // - contract.vaultDebt(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleBorrowToken(event: BorrowToken): void {}

export function handleCreateVault(event: CreateVault): void {}

export function handleDepositCollateral(event: DepositCollateral): void {}

export function handleDestroyVault(event: DestroyVault): void {}

export function handleLiquidateVault(event: LiquidateVault): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePayBackToken(event: PayBackToken): void {}

export function handleTransfer(event: Transfer): void {}

export function handleTransferVault(event: TransferVault): void {}

export function handleWithdrawCollateral(event: WithdrawCollateral): void {}
