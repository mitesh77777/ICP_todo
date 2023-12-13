import { VoyageProvider, Wallet, getLogicDriver } from 'js-moi-sdk';

export const gettingLogicDriver = async(logicId)=>{
    const provider = new VoyageProvider("babylon")
    const wallet = new Wallet(provider)
    await wallet.fromMnemonic("immense prevent umbrella wonder loan antique mandate before impose evidence audit electric", "m/44'/6174'/7020'/0/0")
    return await getLogicDriver(logicId, wallet)
}