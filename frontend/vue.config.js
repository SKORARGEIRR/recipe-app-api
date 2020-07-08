module.exports = {
  chainWebpack: config => {
    // Disable ESlint
    config.module.rules.delete('eslint');
  }
}
