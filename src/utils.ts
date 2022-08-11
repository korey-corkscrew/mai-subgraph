import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Vault as VaultContract } from "../generated/WethVault/Vault"
import { Vault, Token } from "../generated/schema"



function fetchVault(_vault: Address): Vault {
    let vault = Vault.load(_vault.toHex())
    if(vault === null) {
        const vaultContract = VaultContract.bind(_vault)
        vault = new Vault(_vault.toHex())
        vault.collateralToken = vaultContract.collateral()
        vault.tokenCount = BigInt.zero()
        vault.save()
    }
    return vault as Vault
}

function addVaultToken(_vault: Address, _token: Token): void {
    let vault = fetchVault(_vault)
    const tokens = vault.tokens
    if(tokens === null) {
        vault.tokens = [_token.id]
    } else {
        vault.tokens = tokens.concat([_token.id])
    }
    vault.tokenCount = vault.tokenCount.plus(BigInt.fromI32(1))
    vault.save()
}

export function fetchToken(_vault: Address, _tokenId: BigInt): Token {
    const id = _vault.toHex().concat("-").concat(_tokenId.toString())
    let token = Token.load(id)
    if(token === null) {
        token = new Token(id)
        token.tokenId = _tokenId
        token.collateralAmount = BigInt.zero()
        token.debtAmount = BigInt.zero()
        token.owner = Address.zero()
        token.active = true
        token.save()

        addVaultToken(_vault, token)
    }
    return token as Token
}