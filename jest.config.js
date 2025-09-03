const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  // Ignore transforming all node_modules except @faker-js/faker since it is ESM
  transformIgnorePatterns: [
    '/node_modules/(?!@faker-js\\/faker)/'
  ],
};

// Create the Jest config and then override transformIgnorePatterns to ensure it's not overridden by Next.js
const jestConfig = createJestConfig(customJestConfig);

module.exports = jestConfig;

// Override transformIgnorePatterns like below works - proving Next.js's setting of the config is not working
// module.exports = async () => {
//   const config = await jestConfig();
//   config.transformIgnorePatterns = [
//     '/node_modules/(?!(swr-openapi|change-case|@faker-js\\/faker)/)'
//   ];
//   return config;
// };
