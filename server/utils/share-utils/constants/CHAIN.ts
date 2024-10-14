import _ from "lodash";
import contractAddressMap from "./contractAddressMap.json";

// import DiamondLoupeFacet from './abis/DiamondLoupeFacet.json'
// import OwnershipFacet from './abis/OwnershipFacet.json'
import UNIBridgeStaking from "./abis/UNIBridgeStaking.json";
import UNIBridgeWormhole from "./abis/UNIBridgeWormhole.json";
import BSTEntropy from "./abis/BSTEntropy.json";
import UBStake from "./abis/UBStake.json";
import MockERC20 from "./abis/MockERC20.json";
import BSTSwapForAO from "./abis/BSTSwapForAO.json";
const allABIJsons = {
  // DiamondLoupeFacet,
  // OwnershipFacet,
  UNIBridgeStaking,
  UNIBridgeWormhole,
  BSTEntropy,
  UBStake,
  USDC: MockERC20,
  BSTSwapForAO,
};
const allABIs = {};
_.map(allABIJsons, (val, key) => {
  key = key.replace("./abis/", "").replace(".json", "");
  allABIs[key] = val;
});

export const CONTRACT_ADDRESS_MAP = contractAddressMap;

export const CHAIN_CONTRACT_ABI_MAP = {
  ...allABIs,
};
