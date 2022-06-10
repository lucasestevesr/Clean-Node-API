export default {

  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
