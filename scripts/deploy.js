const hre = require("hardhat");
const args = require("../arguments");
async function main() {
    const DhoomToken = await hre.ethers.getContractFactory("DhoomToken");
    const dhoomToken = await DhoomToken.deploy(...args);

    await dhoomToken.waitForDeployment();

    console.log("Dhoom Token deployed: ", await dhoomToken.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});