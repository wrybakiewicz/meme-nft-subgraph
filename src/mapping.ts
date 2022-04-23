import {MemeEntity} from "../generated/schema"
import {MemeNFTOpen, Transfer} from "../generated/MemeNFTOpen/MemeNFTOpen";

export function handleMint(event: Transfer): void {
    let entity = MemeEntity.load(event.params.tokenId.toHex())
    if (!entity) {
        const memeNFT = MemeNFTOpen.bind(event.address)
        const tokenId = event.params.tokenId
        entity = new MemeEntity(tokenId.toHex())
        entity.link = memeNFT.tokenURI(tokenId)
        entity.save()
    }
}
