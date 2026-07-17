App({
  onLaunch() {
    console.log('藏文OCR小程序启动');
  },
  globalData: {
    // OCR API配置 - 直接使用真实API
    ocrApiUrl: 'http://mtocr.utibet.edu.cn:8000/ocr',

    // 校园网用户请使用：
    // ocrApiUrl: 'http://222.19.82.145:8000/ocr',

    // 翻译API配置
    translateApiUrl: 'http://mtocr.utibet.edu.cn/api/Translate',
    // 校园网翻译：
    // translateApiUrl: 'http://222.19.82.145/api/Translate',

    ocrToken: 'test',
    ocrLang: 'tib',
    ocrType: 1,

    // 识别页传递文字到风格迁移
    migrateInputText: '',
    // 商店图片传递
    shopImagePath: '',
    // 数据集统计
    dataset: {
      fontCount: 6,
      totalSamples: '28K+',
      fonts: ['乌金体', '朱匝体', '柏簇体', '簇仁体', '丘伊体', '簇通体']
    }
  },

  // 全局：增加统计计数
  addStat(key) {
    try {
      const count = wx.getStorageSync(key) || 0;
      wx.setStorageSync(key, count + 1);
    } catch (e) {
      console.error('统计写入失败:', e);
    }
  },

  // 全局：记录最近动态
  addRecentActivity(action, detail) {
    try {
      const activities = wx.getStorageSync('recentActivities') || [];
      activities.unshift({
        action: action,
        detail: detail || '',
        time: this._formatTime(new Date())
      });
      // 最多保留20条
      if (activities.length > 20) activities.length = 20;
      wx.setStorageSync('recentActivities', activities);
    } catch (e) {
      console.error('动态记录失败:', e);
    }
  },

  // 格式化时间
  _formatTime(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMin = Math.floor(diffMs / 60000);
    if (diffMin < 1) return '刚刚';
    if (diffMin < 60) return diffMin + '分钟前';
    const diffHour = Math.floor(diffMin / 60);
    if (diffHour < 24) return diffHour + '小时前';
    const M = (date.getMonth() + 1).toString().padStart(2, '0');
    const D = date.getDate().toString().padStart(2, '0');
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    return M + '-' + D + ' ' + h + ':' + m;
  }
});
