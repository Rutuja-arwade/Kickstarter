import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x10E8BA97a2DAE791CD3719Af7467195D12951b3d"
);

export default instance;
