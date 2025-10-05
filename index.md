<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>千恋 * 万花 機器人</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <h1>🤖 千恋 * 万花 機器人</h1>
        <p>專為柚子社遊戲愛好者打造的 Discord 機器人，提供語錄分享、娛樂互動、攻略教學等功能！</p>
    </header>

    <nav>
        <a href="#home">首頁</a>
        <a href="https://discord.com/oauth2/authorize?client_id=1379034361579438161&permissions=8&integration_type=0&scope=applications.commands+bot" class="button">邀請機器人</a>
        <a href="https://discord.gg/nNn8GsF5bA" class="button">支援群 Discord</a>
        <a href="#usage">使用說明</a>
        <a href="#about">關於機器人</a>
        <a href="#updates">更新日誌</a>
    </nav>

    <section id="home">
        <h2>📌 專案簡介</h2>
        <p>「千恋 * 万花 機器人」是一款專為柚子社遊戲粉絲設計的 Discord 機器人，支援《千恋＊万花》《魔女的夜宴》等遊戲的語錄分享、查詢與申請，並提供槍斃、婚姻系統等趣味功能，增強社群互動。</p>
        <h3>🧩 主要功能</h3>
        <ul>
            <li><strong>語錄系統</strong>：分享遊戲經典語錄，支援暴雷模式，快速查詢與申請。</li>
            <li><strong>娛樂互動</strong>：槍斃/砲決、電子口球、婚姻系統（含小三機制）、成就系統。</li>
            <li><strong>幫助教學</strong>：提供遊戲攻略、補丁下載、唐詩 Ciallo 等功能。</li>
            <li><strong>社群管理</strong>：支援伺服器政策查詢、定時重啟、錯誤回報。</li>
        </ul>
        <h3>⚙️ 技術亮點</h3>
        <ul>
            <li>基於 Node.js + Discord.js v14 開發，高效穩定。</li>
            <li>支援語錄資料庫，定期備份（每 5 分鐘）。</li>
            <li>模組化設計，易於擴展新遊戲或功能。</li>
            <li>符合 Discord API 規範，未啟用特權意圖，保障隱私。</li>
        </ul>
        <h3>🎯 應用價值</h3>
        <p>本機器人將 Discord 轉化為柚子社粉絲的互動中心，提升社群活躍度，減少管理負擔。完全免費，立即邀請加入你的伺服器！</p>
    </section>

    <section id="usage" style="display:none;">
        <h2>使用說明</h2>
        <nav class="subnav">
            <a href="#usage-quotes">機器人語錄類指令</a> |
            <a href="#usage-entertainment">機器人娛樂類指令</a> |
            <a href="#usage-help">機器人幫助教學指令</a>
        </nav>

        <div id="usage-quotes">
            <h3>機器人語錄類指令</h3>
            <nav class="subsubnav">
                <a href="#quotes-a">語錄發送指令A類</a> |
                <a href="#quotes-b">語錄發送指令B類</a> |
                <a href="#quotes-query">查詢語錄</a> |
                <a href="#quotes-apply">申請語錄</a> |
                <a href="#quotes-special">專門訊息指令</a> |
                <a href="#quotes-poem">唐詩Ciallo指令</a>
            </nav>
            <div id="quotes-a">
                <h4>語錄發送指令A類</h4>
                <p>指令列表：<code>/語錄-千恋万花</code>, <code>/語錄-魔女的夜宴</code> 等，支援指定語錄名稱（quote_name）與暴雷模式（enable_spoiler）。</p>
                <div class="note">範例：選擇《千恋＊万花》語錄，啟用暴雷模式將模糊圖片。</div>
                <!-- 從 yuzusoft 複製相關內容並轉為 HTML -->
            </div>
            <!-- 其他子子頁面：quotes-b, quotes-query 等，逐一從 yuzusoft 拆分 -->
        </div>
        <!-- 其他子頁面：usage-entertainment, usage-help -->
    </section>

    <section id="about" style="display:none;">
        <h2>關於機器人</h2>
        <nav class="subnav">
            <a href="#about-policy">政策</a>
        </nav>
        <div id="about-policy">
            <h3>政策</h3>
            <nav class="subsubnav">
                <a href="#policy-service">服務政策</a> |
                <a href="#policy-privacy">隱私權政策</a> |
                <a href="#policy-license">使用許可</a> |
                <a href="#policy-quote">語錄提交申請政策</a> |
                <a href="#policy-exam">柚子廚資格考試規則</a> |
                <a href="#policy-copyright">柚子社版權指南</a> |
                <a href="#policy-community">支援群社群規範</a> |
                <a href="#policy-other">其他辦法</a>
            </nav>
            <div id="policy-service">
                <h4>服務政策</h4>
                <p>第一條、名詞定義：本機器人指「千恋 * 万花 機器人」...</p>
                <!-- 從 yuzusofttos 複製內容並轉為 HTML -->
            </div>
            <!-- 其他政策子頁面 -->
        </div>
    </section>

    <section id="updates" style="display:none;">
        <h2>更新日誌</h2>
        <p>目前版本：<strong>Release 8.1.0</strong></p>
        <!-- 從 yuzusoft_version 複製完整內容並轉為 HTML -->
    </section>

    <footer>
        <p>版權所有 © 2025 頑固苗獨份子。禁止抄襲或過度借鑑，違者嚴懲不貸！</p>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
