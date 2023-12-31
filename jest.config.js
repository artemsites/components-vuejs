module.exports = {
  testEnvironment: 'jsdom',
  'moduleFileExtensions': ['js', 'json', 'vue'],
  'transform': {
    'transform': {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.vue$': '@vue/vue3-jest'
    }
  }
}