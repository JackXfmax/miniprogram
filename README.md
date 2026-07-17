<p align="center">
  <img src="https://img.shields.io/badge/platform-WeChat%20Mini%20Program-07C160?style=flat-square&logo=wechat" alt="platform">
  <img src="https://img.shields.io/badge/language-JavaScript%20%2B%20WXML%20%2B%20WXSS-f7df1e?style=flat-square&logo=javascript" alt="language">
  <img src="https://img.shields.io/badge/license-Educational-blue?style=flat-square" alt="license">
  <img src="https://img.shields.io/badge/OCR-Tibet%20University-8B4513?style=flat-square" alt="ocr">
  <img src="https://img.shields.io/badge/fonts-6%20styles-orange?style=flat-square" alt="fonts">
  <img src="https://img.shields.io/badge/dataset-28K%2B%20samples-brightgreen?style=flat-square" alt="dataset">
</p>

<p align="center">
  <h1 align="center">智绘藏韵</h1>
  <p align="center"><strong>藏文 OCR 识别 · 多字体风格迁移 · AI 书法生成 · 文创定制</strong></p>
  <p align="center">基于微信小程序的藏文智能识别与文化创意一体化平台</p>
</p>

---

## 📑 目录

- [项目简介](#-项目简介)
- [功能展示](#-功能展示)
- [快速开始](#-快速开始)
- [项目结构](#-项目结构)
- [功能详解](#-功能详解)
  - [🏠 首页](#-首页)
  - [📷 OCR 识别](#-ocr-识别)
  - [🎨 风格迁移](#-风格迁移)
  - [🖌️ AI 书法生成](#️-ai-书法生成)
  - [✍️ 书法练字](#️-书法练字)
  - [🛍️ 文创定制](#️-文创定制)
  - [📚 历史记录](#-历史记录)
  - [👤 个人中心](#-个人中心)
  - [🔧 调试诊断](#-调试诊断)
- [技术架构](#-技术架构)
- [API 接口](#-api-接口)
- [配置说明](#-配置说明)
- [演示模式](#-演示模式)
- [数据集](#-数据集)
- [开发注意事项](#-开发注意事项)
- [常见问题](#-常见问题)
- [团队与致谢](#-团队与致谢)
- [许可证](#-许可证)

---

## 🔰 项目简介

**智绘藏韵** 是一款集藏文 OCR 光学字符识别、多风格书法迁移、AI 书法生成、在线临摹练字、文创产品定制于一体的微信小程序。项目依托深度学习技术，支持 6 种主流藏文字体（乌金体、朱匝体、柏簇体、簇仁体、丘伊体、簇通体）的智能识别与风格迁移。

**核心能力：**
- 🔍 拍照/相册选图，高精度 OCR 识别藏文/中文/英文
- 🌐 逐行藏→中翻译，一键复制分享
- 🎭 6 种藏文书法风格迁移，输入文字即可生成书法效果图
- 🤖 AI 扩散模型（DDPM）可视化生成过程模拟
- ✍️ 30 个藏文基础字母 Canvas 描红临摹
- 🛍️ 书法作品叠加至手机壳/T恤/帆布袋/卷轴，Canvas 合成预览

---

## 📸 功能展示

<!-- 截图路径：docs/screenshots/xxx.png — 请将实际截图放入该目录 -->

### 首页与识别流程

| 页面 | 核心功能 |
|------|----------|
| 🏠 **首页** | 藏文字符粒子动画（12 种字符飘落 + 240 粒子点击撒花）、OCR识别/风格迁移/文创定制快速入口、使用统计 |
| 📷 **OCR 识别** | 相册/拍照双选图源、自动压缩（>2MB）、Base64 编码、模拟进度条 + 7 条轮播提示语 |
| 📊 **识别结果** | 逐行文字展示 + 置信度、逐行藏→中翻译（串行请求）、单行复制/删除、一键跳转风格迁移 |

### 风格迁移与文创

| 页面 | 核心功能 |
|------|----------|
| 🎨 **风格迁移** | 输入藏文、6 种字体（乌金体/朱匝体/柏簇体/簇仁体/丘伊体/簇通体）选择、预生成效果图展示、生成进度动画 |
| 🖼️ **迁移结果** | 书法效果图展示、保存至相册、跳转文创定制 |
| 🛍️ **文创定制** | 4 种商品模板（手机壳/T恤/帆布袋/卷轴）、Canvas 双层合成（模板 + 书法图）、下单 |

### 练字与 AI 生成

| 页面 | 核心功能 |
|------|----------|
| ✍️ **书法练字** | 30 个藏文基础字母描红、Canvas 手写、引导透明度滑块（0.25–1.0）、练习进度追踪 |
| 🤖 **AI 书法生成** | 6 种字体选择、输入文字、DDPM 5 阶段生成动画、视频预览弹窗 |
| 👤 **个人中心** | 用户信息编辑、Lv.1–Lv.5 等级系统、4 项成就徽章、数据统计、缓存清理 |

---

## 🚀 快速开始

### 环境要求

| 工具 | 版本要求 | 说明 |
|------|----------|------|
| [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) | 稳定版 | 编译与调试 |
| [Node.js](https://nodejs.org/) | ≥ v12 | 运行本地代理服务器 |

### 1. 启动本地代理服务器

微信小程序要求 `wx.request` 目标为 HTTPS 域名，而 OCR API 使用 HTTP，因此需要本地代理转发：

```bash
# Windows - 双击运行
start-server.bat

# 或手动执行
node proxy-server.js
```

> 代理监听 `http://localhost:3000/ocr`，将请求转发至 `http://mtocr.utibet.edu.cn:8000/ocr`

### 2. 测试 API 连通性

```bash
test-connection.bat
# 或: node test-connection.js
```

### 3. 导入微信开发者工具

```
1. 打开微信开发者工具
2. 点击「导入项目」→ 选择 miniprogram 文件夹
3. 填写 AppID（支持使用「测试号」）
4. 点击「确定」→ 按 Ctrl+B 编译运行
```

### 4. 配置域名白名单（可选）

如需真机调试，在 `project.config.json` 或开发者工具设置中勾选 **「不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书」**。

---

## 📁 项目结构

```
miniprogram/
│
├── app.js                          # 应用入口：globalData、统计、动态记录
├── app.json                        # 页面注册、窗口样式、自定义 TabBar
├── app.wxss                        # 全局样式：按钮/卡片/加载动画
├── sitemap.json                    # 微信索引配置
├── project.config.json             # 项目编译配置
├── project.private.config.json     # 开发者私有配置
│
├── proxy-server.js                 # ★ Node.js 本地代理（零依赖）
├── start-server.bat                # 一键启动代理
├── test-connection.js              # API 连通性测试
├── test-connection.bat             # 一键测试连接
│
├── custom-tab-bar/                 # 自定义底部导航栏组件
│   ├── index.js                    # 5 个 Tab：首页/识别/迁移/文创/我的
│   ├── index.json
│   ├── index.wxml
│   └── index.wxss
│
├── common/                         # 公共模块
│   ├── common.wxss                 # 共享样式：卡片/按钮/引导组件/步骤指引
│   └── guide-behavior.js           # 共享行为：可折叠使用说明 toggle
│
├── pages/                          # ★ 12 个业务页面
│   ├── index/                      # [首页]   藏文撒花粒子动画、功能导航入口
│   ├── recognize/                  # [OCR识别] 图片选择、Base64 编码、进度条、API 调用
│   ├── recognize-result/           # [识别结果] 逐行文字展示、逐行翻译、复制/删除/跳转迁移
│   ├── migrate/                    # [风格迁移] 输入藏文、6 种字体选择、Canvas 渲染
│   ├── migrate-result/             # [迁移结果] 效果图展示、保存相册、跳转定制
│   ├── calligraphy/                # [文创入口] 商品/练字/AI生成、团队轮播、字体知识
│   ├── shop/                       # [文创定制] 4 种商品 Canvas 合成预览、下单
│   ├── denoise/                    # [AI生成] DDPM 去噪过程模拟、视频预览
│   ├── practice/                   # [书法练字] 30 字母 Canvas 描红、透明度/进度
│   ├── debug/                      # [调试诊断] 3 步诊断：读图→Base64→API
│   ├── history/                    # [历史记录] 3 个 Tab：动态/OCR 历史/迁移历史
│   └── mine/                       # [我的] 用户信息、等级徽章、统计、缓存管理
│
├── images/
│   ├── styles/                     # 预生成的 7 张书法字体效果图
│   │   ├── uchen.png               # 乌金体
│   │   ├── Drrutsa.png / 朱匝.png   # 朱匝体
│   │   ├── betsu.png               # 柏簇体
│   │   ├── tsuring.png             # 簇仁体
│   │   ├── chuyi.png               # 丘伊体
│   │   └── tsutung.png             # 簇通体
│   ├── tuandui_compressed/         # 团队成员照片（5 张，已压缩）
│   └── qianyi_gundong/             # 风格迁移滚动横幅
│
├── video/
│   └── 1.mp4                       # AI 生成过程演示视频
│
└── scripts/
    └── generate-icons.js           # Tab 图标生成脚本
```

---

## 📖 功能详解

### 🏠 首页

| 特性 | 说明 |
|------|------|
| **藏文粒子动画** | 屏幕两侧持续飘落藏文基础字符（`ༀ` `ཀ` `ག` `ང` 等），支持随机金色高亮 |
| **点击撒花** | 点击屏幕任意位置，瞬间生成 **240 个藏文字符粒子**，向四周飞散并淡出 |
| **快捷入口** | 3 大核心功能卡片 → OCR 识别 / 风格迁移 / 文创定制，一键跳转 |
| **使用统计** | 实时展示 OCR 识别次数、风格迁移次数、数据集规模（28K+） |
| **使用说明** | 可折叠步骤指引（3 步），含识别小贴士 |

**数据来源：** `recognizeCount`、`styleCount`（localStorage）

---

### 📷 OCR 识别

完整的**选图 → 编码 → 识别 → 翻译**工作流。

**功能流程：**
```
选择图片（相册/拍照）
    │
    ├─ 图片压缩（> 2MB 自动压缩至质量 60%）
    │
    ├─ Base64 编码（清理 data URI 前缀、补齐 padding）
    │
    ├─ 调用 OCR API
    │   ├─ POST { image, lang:"tib", type:1, token }
    │   └─ 超时 120s，安全超时 180s
    │
    └─ 结果展示
        ├─ 逐行文字 + 置信度
        ├─ 逐行藏→中翻译
        ├─ 复制/删除单行
        └─ 一键跳转风格迁移
```

**加载体验：**
- 模拟进度条（500ms/步，最高 95%）
- 7 条轮播提示语（1s 切换）
  - "首次识别可能需要较长时间"
  - "正在分析图片特征..."
  - "模型正在识别藏文字符..."
  - "正在解析文本结构..."
  - "图片越清晰，识别越精准"
  - "支持藏文印刷体与手写书法体"
  - "识别后可一键多语言翻译"

**翻译功能：**
- 按行顺序翻译，每行独立请求
- 接口：`http://mtocr.utibet.edu.cn/api/Translate`
- 超时：30s/行
- 失败时显示"（翻译失败）"或"（网络错误）"

---

### 🎨 风格迁移

将用户输入的藏文文字渲染为 6 种书法字体风格。

**支持的字体：**

| # | 中文名 | 英文名 | 别称 | 风格描述 | 
|---|--------|--------|------|----------|
| 1 | 乌金体 | Uchen | 有头体 | 正式印刷标准字体，笔画端庄，用于经文典籍 |
| 2 | 朱匝体 | Drutsa | 珠擦体 | 装饰性变体，笔画有装饰性弯钩 | 
| 3 | 柏簇体 | Betsu | 半草体 | 粗笔半草书写法，笔画粗壮有力 | 
| 4 | 簇仁体 | Tsuring | 长体 | 长形连笔书法，字形修长优美 | 
| 5 | 丘伊体 | Chuyig | 草书 | 快速手写草书，笔画流畅连贯 | 
| 6 | 簇通体 | Tsutung | 行草 | 通用行草字体，墨色最浓 | 

**使用方式：**
1. 输入藏文文字（也可从 OCR 识别结果页自动带入）
2. 点击字体卡片选择风格
3. 点击「生成」按钮
4. 模拟生成进度动画 → 展示效果图
5. 保存至相册 / 跳转文创定制

**技术实现：**
- **主要方式**：使用 `images/styles/` 目录下预生成的效果图进行展示
- **Canvas 备用**：基于数据集的字体特征（羊皮纸背景、墨色明暗、笔画粗细）参数化绘制
- **历史记录**：最多保留 50 条，可在历史页面查看/删除

---

### 🖌️ AI 书法生成

模拟 DDPM（去噪扩散概率模型）从噪声到书法的生成过程。

**功能：**
- 选择 6 种字体之一
- 输入藏文文字
- 模拟 5 阶段生成过程：
  - "正在调用AI模型..."
  - "初始化模型参数..."
  - "处理输入文本..."
  - "生成书法图像..."
  - "优化输出效果..."
- 视频预览弹窗（`video/1.mp4`）
- 生成结果可跳转风格迁移页面继续处理

---

### ✍️ 书法练字

基于 Canvas 的藏文基础字母临摹练习。

**30 个藏文基础字母：**

| # | 字符 | 拉丁转写 | # | 字符 | 拉丁转写 | # | 字符 | 拉丁转写 |
|:--:|:----:|:--------:|:--:|:----:|:--------:|:--:|:----:|:--------:|
| 1 | ཀ | ka | 11 | ད | da | 21 | ཟ | za |
| 2 | ཁ | kha | 12 | ན | na | 22 | འ | 'a |
| 3 | ག | ga | 13 | པ | pa | 23 | ཡ | ya |
| 4 | ང | nga | 14 | ཕ | pha | 24 | ར | ra |
| 5 | ཅ | ca | 15 | བ | ba | 25 | ལ | la |
| 6 | ཆ | cha | 16 | མ | ma | 26 | ཤ | sha |
| 7 | ཇ | ja | 17 | ཙ | tsa | 27 | ས | sa |
| 8 | ཉ | nya | 18 | ཚ | tsha | 28 | ཧ | ha |
| 9 | ཏ | ta | 19 | ཛ | dza | 29 | ཨ | a |
| 10 | ཐ | tha | 20 | ཝ | wa | 30 | — | — |

**交互：**
- 上下滑动切换字母
- Canvas 描红区域，手指书写
- **引导透明度滑块**（0.25–1.0），越淡越不依赖模板
- 练习进度追踪（已练/30）

---

### 🛍️ 文创定制

将书法作品叠加到商品模板上，预览定制效果。

**4 种商品模板：**

| 商品   | 模板尺寸 | 书法图尺寸 | 背景色 | 边框 |
|------|:--------:|:--------:|:------:|:---:|
| 📱 手机壳 | 360×720 | 240×160 | #1A1A2E | ✅ |
| 👕 T 恤 | 400×500 | 200×140 | #FAFAFA | ❌ |
| 👜 帆布袋  | 380×420 | 240×160 | #F5E6D0 | ❌ |
| 📜 卷轴 | 320×600 | 220×220 | #F5ECD7 | ✅ |

**流程：**
```
风格迁移结果 → 点击「定制文创」
    │
    ├─ Canvas 双层合成
    │   ├─ 底层：商品模板（纯色背景 + 边框）
    │   └─ 上层：书法图片（按坐标叠加）
    │
    ├─ 预览效果
    └─ 提交订单（本地存储）
```

---

### 📚 历史记录

3 个 Tab 分类管理所有操作历史：

| Tab | 数据源 | 最多条目 | 操作 |
|-----|--------|:------:|------|
| 📋 最近动态 | `recentActivities` | 20 条 | 删除 / 清空 |
| 📝 OCR 历史 | `ocrHistory` | 50 条 | 复制 / 删除 / 清空 |
| 🎨 迁移历史 | `styleHistory` | 50 条 | 删除 / 清空 |

---

### 👤 个人中心

| 模块 | 功能 |
|------|------|
| **用户信息** | 头像（可更换）、昵称、签名（可编辑）、用户 ID |
| **等级系统** | Lv.1–Lv.5（按总操作数升级），VIP 标识（≥20 次操作） |
| **成就徽章** | 🎯 初次识别 / 🧭 探索达人（≥10 次）/ 🎨 书法新星（≥5 次）/ 💎 收藏家（≥10 次） |
| **使用统计** | OCR 识别 / 风格迁移 / 书法练字 / 收藏 四项计数 |
| **数据管理** | 查看历史、缓存清理（保留用户信息及计数） |
| **系统信息** | 关于页面（版本 1.0.0）、反馈邮箱、隐私说明 |

**等级系统：**

| 等级 | 总操作数 |
|:----:|:------:|
| Lv.1 | 0–4 |
| Lv.2 | 5–19 |
| Lv.3 | 20–49 |
| Lv.4 | 50–99 |
| Lv.5 | ≥ 100 |

---

### 🔧 调试诊断

三步诊断流程，帮助排查 OCR API 连接问题：

| 步骤 | 测试内容 | 成功条件 |
|:----:|----------|----------|
| ① | 图片读取测试 | 成功读取 Base64，首字符合法 |
| ② | Base64 格式校验 | 正则匹配 `[A-Za-z0-9+/]`，补齐 padding |
| ③ | API 直连测试 | `error === 0` 或 `success === true` |

失败时自动输出诊断建议，涵盖网络、API URL、域名校验等常见问题。

---

## 🏗 技术架构

```
┌─────────────────────────────────────────────────────┐
│                  微信小程序前端                        │
│  ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┐        │
│  │index│recog│migra│calli│prac │shop │mine │  ...   │
│  │     │nize │te   │grap │tice │     │     │        │
│  └──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┘        │
│     │     │     │     │     │     │     │            │
│  ┌──┴─────┴─────┴─────┴─────┴─────┴─────┴──┐        │
│  │        app.globalData (跨页共享)          │        │
│  │  · API URLs  · Token  · 桥接数据          │        │
│  └────────────────┬─────────────────────────┘        │
│                   │ wx.request / wx.StorageSync       │
└───────────────────┼─────────────────────────────────┘
                    │
          ┌─────────▼─────────┐
          │  本地代理服务器     │
          │  localhost:3000    │  ← Node.js (零依赖)
          │  proxy-server.js   │
          └─────────┬─────────┘
                    │ HTTP POST
          ┌─────────▼─────────┐
          │   OCR 识别引擎     │
          │ mtocr.utibet       │  
          │ .edu.cn:8000/ocr   │
          └───────────────────┘

  数据层：
  ┌───────────────────────────────────────┐
  │          wx.StorageSync               │
  │  · 用户信息    · 等级徽章              │
  │  · 操作计数    · OCR 历史              │
  │  · 迁移历史    · 练字进度              │
  │  · 最近动态    · 收藏数据              │
  └───────────────────────────────────────┘
```

### 技术特点

| 特性 | 说明 |
|------|------|
| **无框架** | 微信小程序原生 API，无 Taro / uni-app |
| **无 NPM** | 零 npm 依赖，纯手写 JS |
| **无构建** | 直接通过微信开发者工具编译，修改即生效 |
| **Canvas 双路径** | `Canvas type="2d"` 新 API + `wx.createCanvasContext()` 旧 API 降级 |
| **本地存储** | 100% 客户端存储，无云服务依赖 |
| **代理转发** | Node.js 原生 `http` 模块解决 HTTPS 限制，零第三方依赖 |

---

## 🔌 API 接口

### OCR 识别接口

```
POST http://mtocr.utibet.edu.cn:8000/ocr
Content-Type: application/json
```

**请求参数：**

| 参数 | 类型 | 必填 | 说明 |
|------|------|:---:|------|
| `image` | string | ✅ | 纯 Base64 编码图片（不含 data URI 前缀） |
| `lang` | string | ✅ | 语言代码：`tib` 藏文 / `chi` 中文 / `eng` 英文 |
| `type` | number | ✅ | 识别类型，固定为 `1` |
| `token` | string | ✅ | 认证令牌，当前为 `"test"` |

**请求示例：**

```json
{
  "image": "iVBORw0KGgoAAAANSUhEUgAA...",
  "lang": "tib",
  "type": 1,
  "token": "test"
}
```

**成功响应：**

```json
{
  "msg": "success",
  "error": 0,
  "time": 2.36,
  "score": 0.9607,
  "result": [
    {
      "word": "བཀྲ་ཤིས་བདེ་ལེགས།",
      "score": 0.99,
      "x": 100,
      "y": 200,
      "w": 300,
      "h": 50,
      "fm": "宋体",
      "index": 1,
      "words": [
        { "word": "བ", "x": 100, "y": 200, "w": 25, "h": 50, "score": 0.99 },
        { "word": "ཀྲ", "x": 125, "y": 200, "w": 35, "h": 50, "score": 0.98 }
      ]
    }
  ]
}
```

**响应字段：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `error` | number | 错误码，`0` 表示成功 |
| `time` | number | 识别耗时（秒） |
| `score` | number | 整体置信度（0–1） |
| `result` | array | 识别结果行列表 |
| `result[].word` | string | 该行识别文字 |
| `result[].score` | number | 该行置信度 |
| `result[].x / y / w / h` | number | 文字框坐标及宽高 |
| `result[].index` | number | 行序号 |
| `result[].words` | array | 字符级识别详情（单字坐标、置信度） |

**错误响应：**

```json
{ "error": 1, "msg": "识别失败的原因" }
```

### 翻译接口

```
POST http://mtocr.utibet.edu.cn/api/Translate
Content-Type: application/json
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|:---:|------|
| `text` | string | ✅ | 待翻译的藏文文本 |

**成功响应：**

```json
{ "code": 200, "status": true, "data": "吉祥如意" }
```

### 代理服务器

| 配置项 | 值 |
|--------|-----|
| 监听地址 | `http://localhost:3000` |
| 代理路径 | `/ocr` |
| 上游地址 | `http://mtocr.utibet.edu.cn:8000/ocr` |
| 实现 | Node.js `http` 模块（零依赖） |
| CORS | `Access-Control-Allow-Origin: *` |

---

## ⚙ 配置说明

所有核心配置集中在 `app.js` 的 `globalData` 中：

```javascript
// app.js
globalData: {

  // ======== API 配置 ========
  // 开发模式：通过本地代理访问（需先启动 proxy-server.js）
  ocrApiUrl: 'http://localhost:3000/ocr',

  // 外网直连（正式环境）
  // ocrApiUrl: 'http://mtocr.utibet.edu.cn:8000/ocr',

  // 校园网直连
  // ocrApiUrl: 'http://222.19.82.145:8000/ocr',

  // 翻译 API
  translateApiUrl: 'http://mtocr.utibet.edu.cn/api/Translate',
  // 校园网翻译：
  // translateApiUrl: 'http://222.19.82.145/api/Translate',

  // 认证参数
  ocrToken: 'test',
  ocrLang: 'tib',       // 默认识别语言
  ocrType: 1,           // 识别类型

  // ======== 数据集展示信息 ========
  dataset: {
    fontCount: 6,
    totalSamples: '28K+',
    fonts: ['乌金体', '朱匝体', '柏簇体', '簇仁体', '丘伊体', '簇通体']
  },

  // ======== 页面桥接变量 ========
  migrateInputText: '',   // OCR 结果 → 风格迁移
  preselectedStyle: '',   // 字体卡片 → 风格迁移
  shopImagePath: '',      // 迁移结果 → 文创定制
  selectedStyle: '',      // AI 生成 → 风格迁移
  recognizeResult: null   // OCR 结果 → 结果页
}
```

---

## 🎭 演示模式

当后端 API 不可用时，部分功能支持**离线演示模式**，无需启动代理服务器即可体验完整 UI 流程。

### 支持的演示功能

| 功能 | 演示方式 | 说明 |
|------|----------|------|
| OCR 识别 | 模拟数据 | 返回 3 行预设结果，含置信度和坐标 |
| 风格迁移 | 预生成图片 | 使用 `images/styles/` 下的本地效果图 |
| AI 书法生成 | 模拟进度 | 5 阶段进度动画 + 本地图片展示 |
| 文创定制 | Canvas 合成 | 使用预生成图片与模板 Canvas 合成 |
| 书法练字 | Canvas 描红 | 纯前端功能，无需后端 |
| 等级徽章 | 本地存储 | 100% 本地计算 |

### 如何切换

| 场景 | `ocrApiUrl` 配置 |
|------|-------------------|
| 演示模式 | 无需修改，识别失败后自动降级 |
| 代理模式（推荐开发） | `http://localhost:3000/ocr` + 启动 proxy |
| 外网直连 | `http://mtocr.utibet.edu.cn:8000/ocr` |
| 校园网直连 | `http://222.19.82.145:8000/ocr` |

---

## 📊 数据集

风格迁移功能基于**藏文书法数据集**，包含 6 种字体的高分辨率扫描图像。

### 数据集统计

| 字体 | 样本量 | 背景特征 | 墨色特征 |
|------|:-----:|----------|----------|
| 乌金体 (Uchen) | 6,480 | 暖色羊皮纸 | 棕黑，墨色均匀 |
| 朱匝体 (Drutsa) | 4,909 | 暖色羊皮纸 | 棕黑，略有装饰 |
| 柏簇体 (Betsu) | 3,491 | 暖色羊皮纸 | 深棕，墨色较浓 |
| 簇仁体 (Tsuring) | 2,181 | 浅色羊皮纸 | 浅棕，墨色偏淡 |
| 丘伊体 (Chuyig) | 5,004 | 标准羊皮纸 | 中棕 |
| 簇通体 (Tsutung) | 6,283 | 羊皮纸偏深 | 深黑，墨色最浓 |
| **合计** | **28,348** | | |

### 数据集特征总结

- 所有字体均为**暖色羊皮纸背景**（R > G > B）
- 所有墨色均为**棕/黑色**，无彩色装饰
- 无装饰边框、印章、光效，画面干净
- 字体间差异：背景明暗、墨色深浅、笔画粗细、排版方式

---

## ⚠️ 开发注意事项

### 关键约束

1. **无 npm / 无构建工具**
   - 所有代码通过微信开发者工具直接编译
   - 不需要 `npm install`、`webpack`、`vite` 等
   - 没有 `package.json` 文件

2. **Canvas 双 API 路径**
   - 页面 `practice`、`shop`、`migrate`、`denoise` 同时使用了新旧两套 Canvas API
   - 修改 Canvas 相关代码时，务必保持两套路径兼容
   - 旧版 `wx.createCanvasContext()` 用于基础库 < 2.9.0
   - 新版 `Canvas type="2d"` 用于基础库 ≥ 2.9.0

3. **本地存储**
   - 所有用户数据存储在 `wx.StorageSync`
   - 卸载小程序会**永久丢失**所有数据
   - 无云同步功能

4. **打包排除**
   - `project.config.json` → `packOptions.ignore` 排除了：
     - `*.md`（所有 Markdown 文档）
     - `*.bat`（批处理脚本）
     - `proxy-server.js`、`test-connection.js`
     - `scripts/` 目录
   - 这些文件不会上传到微信服务器

5. **代理依赖**
   - OCR 识别**依赖代理服务器**（`proxy-server.js`）
   - 代理仅使用 Node.js 内置 `http` 模块，无第三方依赖
   - 端口 3000 被占用时会启动失败

6. **TabBar 自定义**
   - 使用 `custom-tab-bar/` 组件替代原生 TabBar
   - 每个 Tab 页的 `onShow` 中需调用 `this.getTabBar().setData({ selected: N })` 以同步高亮状态

---

## ❓ 常见问题

<details>
<summary><b>Q: 识别提示"网络请求失败"？</b></summary>

1. 确认代理服务器已启动（双击 `start-server.bat` 或 `node proxy-server.js`）
2. 确认端口 3000 未被其他程序占用
3. 确认网络可访问 `mtocr.utibet.edu.cn:8000`
4. 使用「调试诊断」页面（`pages/debug/debug`）逐步排查
</details>

<details>
<summary><b>Q: 图片识别返回 403？</b></summary>

图片过大，服务器拒绝处理。请选择 **2MB 以内**的图片，或等待小程序自动压缩后再试。
</details>

<details>
<summary><b>Q: Canvas 描红在真机上不显示？</b></summary>

检查基础库版本。真机建议 ≥ 2.9.0 以支持 `Canvas type="2d"`。可在 `project.private.config.json` 中修改 `libVersion`。
</details>

<details>
<summary><b>Q: 代理端口 3000 被占用怎么办？</b></summary>

1. 修改 `proxy-server.js` 中的 `PROXY_PORT` 为其他端口（如 3001）
2. 同步修改 `app.js` 中 `ocrApiUrl` 的端口号
3. 重新启动代理服务器
</details>

<details>
<summary><b>Q: 翻译功能无响应？</b></summary>

翻译接口为逐行串行请求，多行文字翻译时间较长（每行超时 30s）。请耐心等待，或检查翻译 API 是否可达。
</details>

<details>
<summary><b>Q: 风格迁移没有效果？</b></summary>

1. 确认已输入藏文文字
2. 确认已选择一种字体风格
3. 在演示模式下，使用预生成图片展示；真实模式需后端支持
</details>

---

### 技术支持

- **联系邮箱**：`542844242@qq.com`

---

<p align="center">
  <sub>Made with ❤️ for Tibetan culture preservation</sub>
</p>
