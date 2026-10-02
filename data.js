// ============================================================
//  网站内容数据 —— 维护时只需要编辑这个文件
// ============================================================
//  cats  : 分类（顺序即展示顺序），type 决定版式
//          list = 列表型（公告 / 讨论）     app = 应用卡型（软件 / 游戏）
//  items : 每条内容，字段说明：
//          cat    必填，对应上面某个分类 id（ann/app/game/disc）
//          icon   必填，图标名（见文件底部「可选图标」）
//          color  必填，图标底色：blue / orange / green / purple / red / pink
//          title  必填，主标题
//          desc   必填，副标题（小字说明）
//          tags   选填，搜索关键词，用空格分隔
//          link   选填，点击跳转的链接；留空则不可点
//          content选填，公告/讨论的「全文」，填了则会以大卡片直接铺开全部信息（支持换行）
//  新增一条内容：复制一行 item，改字段即可。
// ============================================================
var SITE_DATA = {
  "cats": [
    { "id": "ann",  "title": "最新公告", "type": "list" },
    { "id": "app",  "title": "热门 App", "type": "app", "unit": "软件" },
    { "id": "game", "title": "热门游戏", "type": "app", "unit": "游戏" },
    { "id": "disc", "title": "加入讨论", "type": "list" }
  ],
  "items": [
    { "cat": "ann", "icon": "horn",   "color": "blue",   "title": "今天上线啦", "desc": "10-02 · 纯免费的网站，不收群众一针一线", "tags": "维护 公告 停服 升级", "link": "", "content": "欢迎来到 i 玩机乐园！\n\n这是一个完全免费、不夹杂任何广告的网站，专为老款 iOS 设备打造。\n\n· 这里会持续更新好用的 App、游戏资源\n· 也会第一时间发布停服、升级、维护等公告\n· 想一起玩机？点底部「加入讨论」找到我们\n\n有问题随时在交流群反馈，我们会认真看每一条消息。" },


    { "cat": "app", "icon": "film",   "color": "black",   "title": "抖音", "desc": "old抖音", "tags": "影视 追剧 视频 播放器", "link": "https://www.ilanzou.com/s/pgq9xObl" },
    { "cat": "app", "icon": "film",   "color": "green",   "title": "酷安", "desc": "old酷安", "tags": "社区", "link": "https://www.ilanzou.com/s/n389xouT" },

    { "cat": "game", "icon": "star",    "color": "orange", "title": "像素勇者传说", "desc": "角色扮演 · 4.8 · 经典重制", "tags": "像素 RPG 角色扮演 冒险", "link": "https://example.com/game1" },
    { "cat": "game", "icon": "puzzle",  "color": "purple", "title": "糖果消消乐", "desc": "休闲益智 · 4.7 · 上百关卡", "tags": "消除 休闲 益智 解谜", "link": "https://example.com/game2" },
    { "cat": "game", "icon": "home",    "color": "green",  "title": "我的小庄园", "desc": "模拟经营 · 4.9 · 治愈放置", "tags": "模拟 经营 养成 建造", "link": "https://example.com/game3" },
    { "cat": "game", "icon": "gamepad", "color": "blue",   "title": "街机怀旧合集", "desc": "动作街机 · 4.6 · 百款经典", "tags": "街机 动作 怀旧 复古", "link": "https://example.com/game4" },

    { "cat": "disc", "icon": "chat", "color": "blue",   "title": "QQ 交流群", "desc": "实时答疑 · 资源分享", "tags": "点击链接加入群聊【ios 玩机乐园交流群】", "link": "https://qun.qq.com/universal-share/share?ac=1&authKey=KAV%2BSQmBBYyWUP44hhawaONVlZlHpD5PQWHYMdbrCcKol6BqV5oqt%2B%2BRSZ8YIhCZ&busi_data=eyJncm91cENvZGUiOiI1NDgxMjM2MzUiLCJ0b2tlbiI6IjBucjd4YmwydEplcU4zVnpYdW42VC9TMFdSVGMvU055SzU3MDhZY2FrUG9iV1doMXEzRjBPYmw2S1NpaVB6OTQiLCJ1aW4iOiIxOTQwNDQ5NzE1In0%3D&data=FScCvtafgcbaBs8wHaBkdZ4QAyX4nei7gzkdPCJ1ntYRuBSqBgMuKNLBwShwYhvhhNvvLV3NjFcHM9u8w7mgQA&svctype=4&tempid=h5_group_info" },
    { "cat": "disc", "icon": "chat", "color": "orange", "title": "QQ", "desc": "1940449715", "tags": "点击链接加入群聊【ios 玩机乐园交流群】", "link": "https://t.me/joinchat/T_80049715" },
    { "cat": "disc", "icon": "chat", "color": "green",  "title": "酷安", "desc": "搜索：酷游好人", "tags": "论坛 帖子 投稿 经验", "link": "https://example.com/forum" },
    { "cat": "disc", "icon": "chat", "color": "red",  "title": "小红书", "desc": "搜索：jesse.se", "tags": "论坛 帖子 投稿 经验", "link": "https://example.com/forum" },
    { "cat": "disc", "icon": "chat", "color": "pink",  "title": "bilibili", "desc": "搜索：烤肠要加沙拉酱", "tags": "论坛 帖子 投稿 经验", "link": "https://example.com/forum" },
  ]
};

// ---- 可选图标（icon 字段可填以下名称）----
// horn 喇叭 / bell 铃铛 / gift 礼包 / film 影视 / music 音乐
// folder 文件夹 / bolt 闪电 / star 星星 / puzzle 拼图 / home 小屋
// gamepad 手柄 / chat 对话气泡
