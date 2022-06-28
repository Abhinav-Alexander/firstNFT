
const hre = require("hardhat");

// uncomment when you want to deploy erc721 or else erc721a will be deployed
// async function main() {

//   const Collection = await hre.ethers.getContractFactory("Collection");
//   const collection = await Collection.deploy();

//   await collection.deployed();

//   console.log("Collection deployed to:", collection.address);



async function main() {

  const NewNFT = await hre.ethers.getContractFactory("NewNFT");
  const newNFT = await NewNFT.deploy();

  await newNFT.deployed();

  console.log("newNFT deployed to:", newNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

