module.exports = {
  transform: {
    '^.+\\.js?$': '<rootDir>/jest-preprocess.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  testPathIgnorePatterns: ['node_modules', '.cache'],
  modulePathIgnorePatterns: ['<rootDir>/.cache', '<rootDir>/node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/loadershim.js'],
  globals: {
    __PATH_PREFIX__: '',
  },
}
