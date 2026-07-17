const http = require('http');

// 测试代理服务器连�function testProxyServer() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/ocr',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result);
        } catch (e) {
          reject(new Error('无法解析响应数据'));
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    // 发送测试数�const testData = {
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
      lang: 'tib',
      type: 1,
      token: 'test'
    };

    req.write(JSON.stringify(testData));
    req.end();
  });
}

// 主测试函�async function runTest() {
  console.log('========================================');
  console.log('  OCR代理服务器测�);
  console.log('========================================\n');

  console.log('正在测试代理服务器连�..\n');

  try {
    const result = await testProxyServer();

    console.log('�代理服务器连接成功\n');
    console.log('响应结果�);
    console.log(JSON.stringify(result, null, 2));

    if (result.error === 0) {
      console.log('\n�OCR API调用成功');
      console.log('  识别结果�, result.msg);
      console.log('  耗时�, result.time, '�);
    } else {
      console.log('\n�OCR API返回错误�);
      console.log('  错误信息�, result.msg);
    }
  } catch (err) {
    console.log('�测试失败\n');
    console.log('错误信息�, err.message);

    if (err.code === 'ECONNREFUSED') {
      console.log('\n提示：代理服务器未启动);
      console.log('请先运行 start-server.bat �node proxy-server.js');
    }
  }

  console.log('\n========================================');
  console.log('测试完成');
  console.log('========================================');
}

// 运行测试
runTest();
