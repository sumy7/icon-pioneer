# SVG图标项目

## 描述

这个项目是一个SVG图标的集合，它在不同的文件中以各种方式实现。该项目使用JavaScript，Vue和React来创建和操作SVG图标。

## 项目结构

- `icons/`: 这个目录包含所有的SVG图标文件。
- `playground/`: 这个目录包含一个用于预览SVG图标的简单示例。
- `components/`: 这个目录包含Vue和React组件，用于引用对应的SVG图标。

构建完成之后，在项目主入口引入 `dist/icons.js` 文件。然后在Vue或React组件中使用 `Icon` 组件引入SVG图标。

## 设置

要设置项目，请按照以下步骤操作：

1. 克隆仓库
2. 运行 `npm install` 安装依赖项
3. 在你喜欢的开发环境中运行项目

## 命令

- `npm run dev`: 执行一个开发服务器，用来预览生成的图标
- `npm run build`: 构建项目

## 贡献

欢迎贡献。如果有任何增强功能，请提交拉取请求。

## 许可

该项目在 MIT 许可下授权。

图标 `emoji-kss.svg` 和 `github.svg` 来自 [Bootstrap Icons](https://icons.getbootstrap.com/)。
