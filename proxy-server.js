const http = require('http');
const https = require('https');

// 本地代理服务器配�const PROXY_PORT = 3000;
const OCR_API_URL = 'http://mtocr.utibet.edu.cn:8000/ocr';

// 创建HTTP服务�const server = http.createServer((req, res) => {
  // 设置CORS�res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 处理预检请求
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // 只处理POST请求
  if (req.method === 'POST' && req.url === '/ocr') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      console.log('收到OCR请求，转发到API...');

      // 解析请求数据
      const requestData = JSON.parse(body);

      // 构建转发请求选项
      const options = {
        hostname: 'mtocr.utibet.edu.cn',
        port: 8000,
        path: '/ocr',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body)
        }
      };

      // 转发请求到OCR API
      const proxyReq = http.request(options, (proxyRes) => {
        let data = '';

        proxyRes.on('data', (chunk) => {
          data += chunk;
        });

        proxyRes.on('end', () => {
          console.log('API响应成功');
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(data);
        });
      });

      proxyReq.on('error', (err) => {
        console.error('转发请求失败:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 1, msg: '代理请求失败: ' + err.message }));
      });

      proxyReq.write(body);
      proxyReq.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 1, msg: '未找到请求路�}));
  }
});

// 启动服务�server.listen(PROXY_PORT, () => {
  console.log(`�OCR代理服务器已启动`);
  console.log(`�本地地址: http://localhost:${PROXY_PORT}`);
  console.log(`�代理地址: http://localhost:${PROXY_PORT}/ocr`);
  console.log(`��Ctrl+C 停止服务器`);
});

// 错误处理
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`�端口 ${PROXY_PORT} 已被占用`);
    console.log('请关闭占用该端口的程序，或修�PROXY_PORT 变量');
  } else {
    console.error('服务器错�', err);
  }
});
