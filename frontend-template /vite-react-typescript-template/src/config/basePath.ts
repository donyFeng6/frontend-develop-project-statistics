// 开发环境环境标记 BasePath/production/test
let development_environment = process.env.NODE_ENV
if (
  window.location.host.includes('m.test') ||
  window.location.host.includes('api.test') ||
  window.location.host.includes('dev.test')
) {
  development_environment = 'test'
}

let Base = 'https://www.donyfeng.com'
/**
 * 全局配置文件
 */
let BasePath = {
  Base: Base,
  Prefix: `${Base}/donyfengos-api/`,
  developmentEnvironment: development_environment,
  Passport: 'https://passport.donyfeng.com',
  PrefixBase: 'https://mpay.donyfeng.com',
}

if (development_environment === 'test') {
  BasePath = {
    ...BasePath,
    Base: 'https://m.test.donyfeng.com',
    Prefix: `https://m.test.donyfeng.com/donyfengos-api/`,
    Passport: 'https://passport.test.donyfeng.com',
    PrefixBase: `https://ops.test.donyfeng.com`,
  }
}

export default BasePath
