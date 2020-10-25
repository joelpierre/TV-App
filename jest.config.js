module.exports = {
  bail: 10,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.test.json"
    },
    __PATH_PREFIX__: ``,
    __BASE_PATH__: ``,
  },
  maxWorkers: "1",
  moduleDirectories: [
    "node_modules",
    "src/utils/tests"
  ],
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
  ],
  moduleNameMapper: {
    "\\.(scss|css)$": "identity-obj-proxy",
    "^.+\\.svg": "<rootDir>/config/jest/svg-mock.js",
    "^@atoms(.*)$": "<rootDir>/src/components/_atoms$1",
    "^@molecules(.*)$": "<rootDir>/src/components/_molecules$1",
    "^@organisms(.*)$": "<rootDir>/src/components/_organisms$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@layouts(.*)$": "<rootDir>/src/layouts$1",
    "^@context(.*)$": "<rootDir>/src/context$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^common(.*)$": "<rootDir>/src/$1",
    "^common/utils(.*)$": "<rootDir>/src/utils/$1",
    "^test-utils(.*)$": "<rootDir>/src/utils/tests",
  },
  preset: "ts-jest",
  roots: [
    "<rootDir>/src"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/config/jest/setup-tests.ts",
    "<rootDir>/config/jest/loader-shim.js"
  ],
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/"
  ],
  transform: {
    "^.+\\.ts?(x)$": "ts-jest",
    "^.+\\.tsx?$": "<rootDir>/config/jest/preprocess.js",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/file-transform.js",
    "^(?!.*\\.(png)$)": "<rootDir>/config/jest/image-transform.js"
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/node_modules/(?!lodash-es/.*)"
  ],
};
