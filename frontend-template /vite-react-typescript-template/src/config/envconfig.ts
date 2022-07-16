import BasePath from './basePath'

/**
 * 全局配置文件
 */
const Development: any = {
  URL: {},
  ...BasePath,
}

export const URL = {
}

Development.URL = URL

export default Development
