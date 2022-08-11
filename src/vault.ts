import { BigInt } from "@graphprotocol/graph-ts"
import {
  BorrowToken,
  CreateVault,
  DepositCollateral,
  DestroyVault,
  LiquidateVault,
  PayBackToken,
  TransferVault,
  WithdrawCollateral
} from "../generated/WethVault/WethVault"
import { fetchToken } from "./utils"



export function handleBorrowToken(event: BorrowToken): void {}

export function handleCreateVault(event: CreateVault): void {
  let token = fetchToken(event.address, event.params.vaultID)
  token.owner = event.params.creator
  token.save()
}

export function handleDepositCollateral(event: DepositCollateral): void {}

export function handleDestroyVault(event: DestroyVault): void {
  let token = fetchToken(event.address, event.params.vaultID)
  token.collateralAmount = BigInt.zero()
  token.active = false
  token.save()
}

export function handleLiquidateVault(event: LiquidateVault): void {}

export function handlePayBackToken(event: PayBackToken): void {}

export function handleTransferVault(event: TransferVault): void {
  let token = fetchToken(event.address, event.params.vaultID)
  token.owner = event.params.to
  token.save()
}

export function handleWithdrawCollateral(event: WithdrawCollateral): void {}
