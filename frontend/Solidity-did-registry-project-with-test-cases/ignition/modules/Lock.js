const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("LockModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const lock = m.contract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  return { lock };
});

/* like following script write the similar type of deployment script for deployPolygonDidRegistry.js */
// scripts/deployPolygonDidRegistry.js

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const PolygonDidRegistry = await ethers.getContractFactory("PolygonDidRegistry");
  const polygonDidRegistry = await PolygonDidRegistry.deploy();

  console.log("PolygonDidRegistry deployed to:", polygonDidRegistry.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });
