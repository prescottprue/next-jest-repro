import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  // Ignore transforming all node_modules except @faker-js/faker since it is ESM
  transformIgnorePatterns: [
    '/node_modules/(?!@faker-js\\/faker)/'
  ],
};

// Create the Jest config and then override transformIgnorePatterns to ensure it's not overridden by Next.js
const jestConfig = createJestConfig(config);

// export default jestConfig;

// Override transformIgnorePatterns like below works - proving Next.js's setting of the config is not working
export default async () => {
  const newConfig = await jestConfig();
  newConfig.transformIgnorePatterns = [
    '/node_modules/(?!(swr-openapi|change-case|@faker-js\\/faker)/)'
  ];
  return newConfig;
};
