# 藏文OCR识别小程序 - 完整解决方案

## 📦 项目文件清单

### 核心文件
- `app.js` - 小程序入口和配置
- `app.json` - 小程序页面配置
- `app.wxss` - 全局样式
- `sitemap.json` - 站点地图

### 页面文件
- `pages/index/` - 首页（图片选择）
- `pages/result/` - 结果页（识别结果）

### 服务器文件
- `proxy-server.js` - 本地代理服务器（解决HTTPS问题）
- `start-server.bat` - 一键启动服务器

### 测试文件
- `test-connection.js` - 连接测试脚本
- `test-connection.bat` - 一键测试连接

### 文档文件
- `README.md` - 项目说明文档
- `快速启动指南.md` - 简化版使用指南
- `故障排除指南.md` - 问题解决方案
- `PROJECT_SUMMARY.md` - 项目总结

---

## 🚀 快速开始（3步完成）

### 第一步：启动代理服务器
```
双击 start-server.bat
```
等待看到：`✓ OCR代理服务器已启动`

### 第二步：重新编译小程序
在微信开发者工具中按 `Ctrl+B` (Windows) 或 `Cmd+B` (Mac)

### 第三步：开始识别
1. 点击「从相册选择」或「拍照识别」
2. 选择包含文字的图片
3. 点击「开始识别」
4. 查看结果！

---

## ✨ 主要功能

### 1. 图片采集
- ✅ 从相册选择图片
- ✅ 拍照识别
- ✅ 图片预览和大小显示
- ✅ 图片压缩处理

### 2. OCR识别
- ✅ 调用远程API识别
- ✅ 支持藏文、中文、英文
- ✅ 识别进度显示
- ✅ 错误处理

### 3. 结果展示
- ✅ 识别结果列表
- ✅ 置信度显示
- ✅ 字符位置信息
- ✅ 一键复制结果

### 4. 调试功能
- ✅ API地址显示
- ✅ 语言设置显示
- ✅ 详细日志输出
- ✅ 连接测试工具

---

## 🔧 技术架构

### 前端
- 微信小程序原生框架
- WXML + WXSS + JavaScript
- 响应式设计

### 后端代理
- Node.js 本地代理服务器
- 解决小程序HTTPS限制
- 转发请求到OCR API

### API
- 西藏民族大学OCR服务
- RESTful设计
- JSON格式

---

## 📋 API接口说明

### 请求地址
- 本地代理：`http://localhost:3000/ocr`
- 外网地址：`http://mtocr.utibet.edu.cn:8000/ocr`
- 校园网：`http://222.19.82.145:8000/ocr`

### 请求格式
```json
{
  "image": "data:image/png;base64,iVBORw0KGgo...",
  "lang": "tib",
  "type": 1,
  "token": "test"
}
```

### 响应格式
```json
{
  "msg": "success",
  "error": 0,
  "time": 2.36,
  "score": 0.96,
  "result": [...]
}
```

---

## 🎯 使用场景

### 1. 文档数字化
- 扫描纸质文档
- 提取文字内容
- 转换为电子文本

### 2. 翻译辅助
- 识别藏文文字
- 辅助翻译工作
- 多语言支持

### 3. 学术研究
- 研究藏文资料
- 文字识别分析
- 数据提取

### 4. 日常使用
- 快速提取图片文字
- 保存识别结果
- 分享识别内容

---

## 🔍 故障排除

### 问题：图片base64编码无效
**解决：**
1. 重新编译小程序 (Ctrl+B)
2. 尝试其他图片
3. 检查图片格式（支持JPG、PNG）

### 问题：网络请求失败
**解决：**
1. 启动代理服务器
2. 检查服务器状态
3. 运行连接测试

### 问题：代理服务器启动失败
**解决：**
1. 安装Node.js
2. 检查端口占用
3. 手动启动服务器

详见：`故障排除指南.md`

---

## 📊 调试信息

### 控制台输出
选择图片时：
```
选择的图片: /path/to/image.jpg
图片大小: 2.5 MB
```

识别时：
```
图片转换成功，base64长度: 1234567
调用OCR API: http://localhost:3000/ocr
API响应: {statusCode: 200, data: {...}}
```

### 页面显示
首页会显示：
- API地址
- 语言设置
- 图片大小

---

## 🎓 学习资源

### 相关文档
- `README.md` - 完整项目文档
- `快速启动指南.md` - 新手指南
- `故障排除指南.md` - 问题解决

### 外部资源
- [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/)
- [Node.js官方文档](https://nodejs.org/)
- [OCR API文档](C:\Users\azh\Desktop\ocr大赛\ocr接口文档-20260511-内部版.docx)

---

## 💡 提示和技巧

### 1. 优化识别效果
- 使用高清晰度图片
- 确保文字清晰可读
- 避免图片过度压缩
- 保持文字水平

### 2. 提高成功率
- 启动代理服务器
- 重新编译小程序
- 检查网络连接
- 查看控制台日志

### 3. 调试技巧
- 查看Console输出
- 查看网络请求
- 运行连接测试
- 检查文件结构

---

## 📁 文件结构

```
miniprogram/
├── app.js                      # 小程序入口
├── app.json                    # 应用配置
├── app.wxss                    # 全局样式
├── sitemap.json                # 站点地图
├── proxy-server.js             # 代理服务器
├── start-server.bat            # 启动脚本
├── test-connection.js          # 测试脚本
├── test-connection.bat         # 测试批处理
├── README.md                   # 项目文档
├── 快速启动指南.md              # 使用指南
├── 故障排除指南.md              # 问题解决
├── PROJECT_SUMMARY.md          # 项目总结
└── pages/
    ├── index/                  # 首页
    │   ├── index.js
    │   ├── index.json
    │   ├── index.wxml
    │   └── index.wxss
    └── result/                 # 结果页
        ├── result.js
        ├── result.json
        ├── result.wxml
        └── result.wxss
```

---

## 🎉 开始使用

现在您已经准备好使用藏文OCR识别小程序了！

1. **双击 `start-server.bat`** 启动代理服务器
2. **在微信开发者工具中按 `Ctrl+B`** 编译项目
3. **选择图片并开始识别**

**祝您使用愉快！** 🎊

---

## 📞 获取帮助

如遇到问题：
1. 查看 `故障排除指南.md`
2. 检查控制台日志
3. 运行 `test-connection.bat` 测试连接
4. 查看相关文档

---

**版本**：1.0.0
**最后更新**：2024年
**开发框架**：微信小程序原生框架
**代理服务器**：Node.js HTTP Server
