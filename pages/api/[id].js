import { INFURA_ADDRESS, ADDRESS, ABI } from "../../config.js"
import Web3 from "web3";
import hashes from "../../public/json/hashes.json";
import traits from "../../public/json/traits.json";

const infuraAddress = INFURA_ADDRESS

const younicornApi = async (req, res) => {

  // SOME WEB3 STUFF TO CONNECT TO SMART CONTRACT
  const provider = new Web3.providers.HttpProvider(infuraAddress);
  const web3infura = new Web3(provider);
  const younicornContract = new web3infura.eth.Contract(ABI, ADDRESS);

  // THE ID YOU ASKED IN THE URL
  const query = req.query.id;

  const totalYounicorns = 2200;
  if (parseInt(query) < totalYounicorns) {

    const trait = traits[parseInt(query)];
    let hash = null;

    for (const [key, value] of Object.entries(hashes)) {
      if (value == query) {
        hash = key;
      }
    }

    let metadata = {}


    metadata = {
      "name": "YOUnicorn #" + query,
      "description": "Like unicorns, we all are amazing creatures to be supporting this amazing industry, Crypto. It takes miracles and will to continue to change this world for good - and we are all doing that. We are all unicorns, including YOU.",
      "tokenId": parseInt(query),
      "image": 'https://gateway.pinata.cloud/ipfs/' + hash,
      "external_url": "https://www.younicorns.xyz",
      "attributes": [
        {
          "trait_type": "Unicorn",
          "value": trait["Unicorn"]
        },
        {
          "trait_type": "Horn",
          "value": trait["Horn"]
        },
        {
          "trait_type": "Hair",
          "value": trait["Hair"]
        },
        {
          "trait_type": "Background",
          "value": trait["Background"]
        }
      ]
    }

    res.statusCode = 200
    res.json(metadata)

  } else {

    res.statuscode = 404
    res.json({ error: "The YOUnicorn you requested is out of range" })

  }
}

export default younicornApi