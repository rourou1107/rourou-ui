## 肉肉 UI 组件库
这是作者在学习 Vue 时，写的一些组件库

## 开始使用
1. 添加 css 样式，使用本框架前，请在 css 中开启 border-box
```
*, *::after, *::before {
    box-sizing: border-box;
}
```

2. 设置默认字体等变量
```
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```
IE 15 及以上浏览器支持

3. 安装 rourou-ui-1
`npm i --save rourou-ui-1`

4. 引入 rourou-ui-1
```
import {Button, ButtonGroup, Icon} from 'rourou-ui-1'

export default {
  name: 'app',
  components: {
    Button,
    Icon
  }
}
```
