const hre = require("hardhat");



async function main() {
  // const [deployer] = await ethers.getSigners();

  const feeSetter = "0x1Cb747674331822Bb63971b60f678e76877B98f7"

  const FACTORY = await hre.ethers.getContractFactory("PancakeFactory");
  const factory = await FACTORY.deploy(feeSetter);
  await factory.deployed();
  console.log("factory deployed to:", factory.address.toString());


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
