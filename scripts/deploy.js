const hre = require("hardhat");
const { ethers } = require("hardhat");
require('dotenv').config()

const {PRIVATE_KEY} = process.env

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);

  const feeSetter = `${PRIVATE_KEY}`
  const wbnb = '0xc778417e063141139fce010982780140aa0cd5ab'
  const FACTORY = await hre.ethers.getContractFactory("PancakeFactory");
  const factory = await FACTORY.deploy(feeSetter);
  await factory.deployed();
  console.log("factory deployed to:", factory.address.toString());

  const ROUTER_01 = await hre.ethers.getContractFactory("PancakeRouter01");
  const router01 = await ROUTER_01.deploy(factory.address, wbnb);
  await router01.deployed();
  console.log("router_01 deployed to:", router01.address.toString());

  const ROUTER_MAIN = await hre.ethers.getContractFactory("PancakeRouter");
  const routerMain = await ROUTER_MAIN.deploy(factory.address, wbnb);
  await routerMain.deployed();
  console.log("router_main deployed to:", routerMain.address.toString());


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
