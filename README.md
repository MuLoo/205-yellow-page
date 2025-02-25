# README.md

# CSV to HTML Converter

该项目是一个简单的工具，用于将 CSV 文件内容转换为 HTML 格式。它可以读取指定的 CSV 文件，并生成一个包含表格的 HTML 文件，方便通过 Nginx 或其他 Web 服务器进行访问。

## 文件结构

```

├── src
│   ├── generateHtml.js       # 负责读取 CSV 文件并生成 HTML 文件
│   └── utils
│       └── csvParser.js      # CSV 数据解析工具函数
├── urls.csv                  # 输入的 CSV 数据文件
├── package.json              # npm 配置文件
└── README.md                 # 项目文档
```

## 使用说明

1. **安装依赖**
   在项目根目录下运行以下命令以安装所需的依赖项：
   ```
   npm install
   ```

2. **生成 HTML 文件**
   运行以下命令以读取 `urls.csv` 文件并生成 HTML 文件：
   ```
   npm run generate
   ```

3. **查看生成的 HTML 文件**
   生成的 HTML 文件将保存在指定的位置，可以通过 Nginx 或其他 Web 服务器进行访问。

## 功能

- 从 CSV 文件中读取数据
- 将 CSV 数据转换为 HTML 表格
- 生成完整的 HTML 文件以供浏览器查看

## 注意：
csv是以英文`,` 作为分隔符的，所以，中文中的逗号，注意不要写成英文逗号。

