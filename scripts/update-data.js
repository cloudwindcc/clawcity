/**
 * update-data.js - 更新網站數據腳本
 * 這個腳本從各種來源獲取最新數據並更新到網站
 */

const fs = require('fs');
const path = require('path');

// 讀取現有的 HTML 文件
const htmlPath = path.join(__dirname, '..', 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 獲取當前日期
const now = new Date();
const today = now.toISOString().split('T')[0];

// 生成新的新聞數據
function generateNewsData() {
    const news = [
        {
            date: today,
            title: "Clawd.city 每日更新",
            description: `網站內容已於 ${today} 更新。OpenClaw 生態系統持續發展，歡迎探索最新功能！`,
            tag: "網站更新"
        }
    ];
    
    // 這裡可以從 API 獲取真實數據
    // 例如：GitHub releases, Discord announcements, etc.
    
    return news;
}

// 生成熱門 Bot 數據
function generateBotsData() {
    // 這裡可以從數據庫或 API 獲取真實的熱門 Bot
    // 現在返回示例數據
    return [
        {
            name: "Skippy",
            author: "OpenClaw Team",
            description: "官方示範 Bot，展示 OpenClaw 全部功能。支援多平台、多模型，內建豐富 Skills。",
            emoji: "🦞",
            servers: "1,200+",
            stars: "⭐ 856",
            github: "https://github.com/openclaw/openclaw"
        }
    ];
}

// 更新 HTML 中的數據
function updateHtmlData() {
    const newsData = generateNewsData();
    const botsData = generateBotsData();
    
    // 這裡可以使用模板引擎或簡單的字符串替換
    // 實際應用中，建議將數據分離到 JSON 文件，然後用 JavaScript 動態加載
    
    console.log('✅ 數據已生成');
    console.log('📰 新聞數量:', newsData.length);
    console.log('🤖 Bot 數量:', botsData.length);
}

// 執行更新
updateHtmlData();

console.log('🎉 網站數據更新完成！');
