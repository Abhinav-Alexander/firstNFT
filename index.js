const pinataSDK = require('@pinata/sdk');
require('dotenv').config()
const fs = require('fs');

const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);
const readableStreamForFile = fs.createReadStream('./images/1.jpg');

const options = {
    pinataMetadata: {
        name: 'FirstNft',
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
const pinFileToIPFS = () => {
    return pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
        return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`

    }).catch((err) => {
        console.log(err);
    });
}
const pinJSONToIPFS = (body) => {
    return pinata.pinJSONToIPFS(body, options).then((result) => {
        return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`
    }).catch((err) => {
        console.log(err);
    });
}
const getMetaData = async () => {
    const imageUrl = await pinFileToIPFS()
    const body = {
        name: 'Second NFT',
        description: 'This is Second NFT',
        image: imageUrl,
    };
    const metaData = await pinJSONToIPFS(body)
    console.log(metaData)
    // console.log(imageUrl)
}

getMetaData()