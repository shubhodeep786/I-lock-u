/**
 * Deploys contracts and initializes SolidityDidRegistry.
 * @returns {Promise<void>}
 */
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const SolidityDidRegistry = await ethers.getContractFactory(
    "SolidityDidRegistry"
  );
  const solidityDidRegistry = await SolidityDidRegistry.deploy();

  console.log("SolidityDidRegistry deployed to:", solidityDidRegistry);

  await solidityDidRegistry.initialize();
  console.log("SolidityDidRegistry initialized");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
