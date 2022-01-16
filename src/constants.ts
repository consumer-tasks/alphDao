export const THE_GRAPH_URL = "http://localhost:8000/subgraphs/name/Factory";
export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  4: {
    DAI_ADDRESS: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C", // duplicate
    PID_ADDRESS: "0xC0b491daBf3709Ee5Eb79E603D73289Ca6060932",
    STAKING_ADDRESS: "0xC5d3318C0d74a72cD7C55bdf844e24516796BaB2",
    STAKING_HELPER_ADDRESS: "0xf73f23Bb0edCf4719b12ccEa8638355BF33604A1",
    OLD_STAKING_ADDRESS: "0xb640AA9082ad720c60102489b806E665d67DCE32",
    SPID_ADDRESS: "0x1Fecda1dE7b6951B248C0B62CaeBD5BAbedc2084",
    OLD_SPID_ADDRESS: "0x8Fc4167B0bdA22cb9890af2dB6cB1B818D6068AE",
    MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    DISTRIBUTOR_ADDRESS: "0x0626D5aD2a230E05Fb94DF035Abbd97F2f839C3a",
    BONDINGCALC_ADDRESS: "0xaDBE4FA3c2fcf36412D618AfCfC519C869400CEB",
    CIRCULATING_SUPPLY_ADDRESS: "0x5b0AA7903FD2EaA16F1462879B71c3cE2cFfE868",
    TREASURY_ADDRESS: "0x0d722D813601E48b7DAcb2DF9bae282cFd98c6E7",
    REDEEM_HELPER_ADDRESS: "0xBd35d8b2FDc2b720842DB372f5E419d39B24781f",
    PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
  },
  56: {
    DAI_ADDRESS: "0x5edC7520b04Ec84FEeAcA55490d7b9e32116Df08", // duplicate
    BNB_ADDRESS: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    PID_ADDRESS: "0xce1aD4E2810E413e2e3684DeCC58A0Bd01c907d9",
    STAKING_ADDRESS: "0x0D1ef04547846143c2D364d22319b1A9A9276f10", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xc9744b3eA6f968F3daeAAE0061b5Bddd76BBEe01", // Helper contract used for Staking only
    SPID_ADDRESS: "0x06cae0720fA3147E2d8dB66A18B7883221D84246",
    DISTRIBUTOR_ADDRESS: "0x8421aA5b4f863c5105998F0cbae512Dd3855fA12",
    BONDINGCALC_ADDRESS: "0x855D0eb9CcAFB566dEeBc7089396c5f8af4937C2",
    TREASURY_ADDRESS: "0x950D8C342bC6e0Bcf9c1DEb87D039947f35b3eb9",
    REDEEM_HELPER_ADDRESS: "0xE8eE0bE2d8BAABf9924d7f1459d9467E4399badB",
    IDO_ADDRESS:'0x3Ae07374d7C89f608906321444e8AFdED91aDA5E',
    BUSD_ADDRESS:'0xe9e7cea3dedca5984780bafc599bd69add087d56'
  },
};
