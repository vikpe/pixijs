module.exports = {
  // benchmark options
  reporters: [
    "default",
    "jest-bench/reporter"
  ],
  testMatch: ["**/?(*.)+(bench).ts"],
  testEnvironment: "jest-bench/environment",

  // from jest.config.js
  testEnvironmentOptions: {
    testEnvironment: 'jest-electron/environment',
  },
  testPathIgnorePatterns: ['/node_modules/', '/src/', '/dist/', '/lib/', '/out/', '/bundles/'],
  preset: 'ts-jest/presets/js-with-ts',
  runner: 'jest-electron/runner',
  setupFilesAfterEnv: [
    'jest-extended/all',
  ],
  globalSetup: '<rootDir>/test/jest-global-setup.ts',
  globalTeardown: '<rootDir>/test/jest-global-teardown.ts',
  transform: {
    '\\.vert$': 'jest-raw-loader',
    '\\.frag$': 'jest-raw-loader',
  },
  moduleNameMapper: {
    '^@pixi/(.*)$': '<rootDir>/packages/$1/src',
  },
  globals: {
    'ts-jest': {
      tsconfig: {
        module: 'ESNext',
        esModuleInterop: true,
      },
      diagnostics: false,
    },
  }
}