const hre = require("hardhat");

async function main() {
    const factoryAddress =  "0x6337350924AdABd0345dAD410f8Eb60b2f2d9162"
    const wbnb = '0xc778417e063141139fce010982780140aa0cd5ab'
    
    const ROUTER_01 = await hre.ethers.getContractFactory("PancakeRouter01");
    const router01 = await ROUTER_01.deploy(factoryAddress, wbnb);
    await router01.deployed();
    console.log("router_01 deployed to:", router01.address.toString());
    
    const ROUTER_MAIN = await hre.ethers.getContractFactory("PancakeRouter");
    const routerMain = await ROUTER_MAIN.deploy(factoryAddress, wbnb);
    await routerMain.deployed();
    console.log("router_main deployed to:", routerMain.address.toString());
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
    });
