import {
    LOAD_WEB3_SUCCESS,
    LOAD_WEB3_FAIL,
    LOAD_BLOCKCHAIN_DATA_SUCCESS,
    LOAD_BLOCKCHAIN_DATA_FAIL,
    LOAD_MURKIVA_CONTRACT_SUCCESS,
    LOAD_MURKIVA_CONTRACT_FAIL,
    LOAD_NFT_TOTALSUPPLY_SUCCESS,
    LOAD_NFT_TOTALSUPPLY_FAIL,
    LOAD_MURKIVA_NFTS_SUCCESS,
    LOAD_MURKIVA_NFTS_FAIL
} from '../actions/types'


const initialState = {
    web3: null,
    account: null,
    murkiva: null,
    totalSupply: null,
    nfts: []
}

export default function ethereum(state = initialState, action) {
    const {type, payload} = action;

    switch(type){
        case LOAD_BLOCKCHAIN_DATA_SUCCESS:
            return {
                ...state,
                account: payload
            }
        case LOAD_MURKIVA_CONTRACT_SUCCESS:
            return {
                ...state,
                murkiva: payload
            }
        case LOAD_NFT_TOTALSUPPLY_SUCCESS:
            return {
                ...state,
                totalSupply: payload
            }
        case LOAD_MURKIVA_NFTS_SUCCESS:
            return {
                ...state,
                nfts: payload
            }
        case LOAD_WEB3_SUCCESS:
            return {
                ...state,
                web3: payload
            }

        case LOAD_BLOCKCHAIN_DATA_FAIL:
            return {
                ...state,
                account: null
            }
        case LOAD_MURKIVA_CONTRACT_FAIL:
            return {
                ...state,
                murkiva: null
            }
        case LOAD_NFT_TOTALSUPPLY_FAIL:
            return {
                ...state,
                totalSupply: null
            }
        case LOAD_MURKIVA_NFTS_FAIL:
            return {
                ...state,
                nfts: null
            }
        case LOAD_WEB3_FAIL:
            return {
                ...state,
                web3: null
            }
        default:
            return state
    }
}