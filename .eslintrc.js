module.exports = {
  // 环境
  env: {
    browser: true,
    es2021: true,
  },
  // 继承配置 —— eslint配置方案 省略包名称的前缀 eslint-config-
  extends: [
    // 插件中的配置
    'plugin:vue/vue3-essential',
    'plugin:markdown/recommended',
    // 解决引入路径报错问题时，使用的插件
    'plugin:import/recommended',
    // 设置路径别名时使用的插件
    'airbnb-base',
  ],
  // 插件 —— 包含规则和配置方案 省略插件名称前缀eslint-plugin-
  plugins: [
    // vue插件
    'vue',
    // 支持ts的eslint插件
    '@typescript-eslint',
  ],
  // 设置全局变量(true：读写; false：只读)
  globals: {
    version: true,
  },
  // 自定义分析器
  parserOptions: {
    // 使用的 ECMAScript 语法的版本
    ecmaVersion: 'latest',
    // 解析 .ts 文件
    parser: '@typescript-eslint/parser',
    // 使用模块
    sourceType: 'module',
  },
  // 共享配置
  settings: {
    // 模块解析
    'import/resolver': {
      // 配置alias
      alias: {
        // 多个别名设置
        map: [
          ['@', './src'],
          ['packages', './packages'],
        ],
        // 扩展名
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  // 检测规则
  rules: {
    // 修改函数中的参数 仅限下列中的变量才可以修改（请求接口、vuex中的state）
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'req', // axios requests
          'request', // axios requests
          'config', // axios requests
          'res', // axios responses
          'response', // axios responses
          'state', // vuex state
        ],
      },
    ],
    // 允许使用 ++ --
    'no-plusplus': [
      'off',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    // 配置在插件中定义的规则，必须在规则ID前加上插件名称和 /  例如：'vue/' 'import/'
    // 关闭省略扩展名时的报错
    'import/extensions': 'off',
    // 关闭html文件末尾报错 正常应该是检测只能在template内部注释的问题
    'vue/comment-directive': 'off',
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: true,
      },
    ],
  },
};
