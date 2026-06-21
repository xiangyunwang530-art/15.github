export function Slide1() {
  return (
    <div id="slide1" className="slide-container h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-silver via-gray-300 to-gray-400">
      <h1 className="text-7xl font-bold text-neon-pink font-orbitron mb-6 font-orbitron">
        AI 時代物流行銷
      </h1>
      <p className="text-2xl text-neon-pink font-orbitron mb-12">
        PARADIGM SHIFT: LEGACY VS AI ERA
      </p>
      <img
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663698117928/5cbm2ZAMuNCyQ4m8wrvnDf/ai-logistics-hub-PWm487tp97eub54YDPHX9x.webp"
        alt="AI Logistics Hub"
        className="w-full max-w-2xl border-2 border-neon-cyan rounded-lg"
      />
    </div>
  );
}

export function Slide2() {
  return (
    <div id="slide2" className="slide-container h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-silver via-gray-300 to-gray-400">
      <hr className="w-24 border-2 border-neon-lime mb-8" />
      <h2 className="text-5xl font-bold mb-4 text-neon-pink font-orbitron">核心變革思維</h2>
      <p className="text-3xl text-neon-pink font-bold mb-6">物流即行銷，供應鏈即體驗</p>
      <p className="max-w-2xl text-xl text-neon-pink leading-relaxed">
        在 AI 時代，物流不再是躲在幕後的搬運工，而是品牌與客戶之間最感性的接觸點。AI 消除等待的負擔，將供應鏈轉化為溫暖的品牌承諾。
      </p>
    </div>
  );
}

export function Slide3() {
  return (
    <div id="slide3" className="slide-container min-h-screen flex flex-col justify-center bg-gradient-to-b from-silver via-gray-300 to-gray-400 p-12">
      <h2 className="slide-title">傳統 vs AI：價值維度對比</h2>
      <div className="grid grid-cols-2 gap-12 mt-8">
        <div className="bg-neon-cyan/5 border border-neon-pink/20 p-8 rounded">
          <h3 className="text-3xl text-neon-pink font-bold mb-4">傳統物流行銷</h3>
          <p className="text-lg text-neon-pink mb-4">強調硬體資產：車隊數量、倉庫面積。</p>
          <ul className="space-y-3 text-neon-pink">
            <li>• 核心賣點：準時、安全、便宜</li>
            <li>• 溝通方式：標準 SLA 協議與報價</li>
            <li>• 競爭策略：價格驅動的削價競爭</li>
          </ul>
        </div>
        <div className="bg-neon-cyan/5 border border-neon-pink/20 p-8 rounded">
          <h3 className="text-3xl text-neon-pink font-bold mb-4">AI 時代物流行銷</h3>
          <p className="text-lg text-neon-pink mb-4">強調預測能力：動態履約、黑天鵝免疫。</p>
          <ul className="space-y-3 text-neon-pink">
            <li>• 核心賣點：承諾與交付的精準度</li>
            <li>• 溝通方式：AI 調度的運力韌性展示</li>
            <li>• 競爭策略：品牌體驗與效率驅動</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Slide4() {
  return (
    <div id="slide4" className="slide-container min-h-screen flex flex-col justify-center bg-gradient-to-b from-silver via-gray-300 to-gray-400 p-12">
      <h2 className="slide-title">市場趨勢分析</h2>
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="bg-neon-cyan/5 border border-neon-cyan/20 p-6 rounded text-center">
          <div className="text-6xl font-bold text-neon-lime mb-4 font-orbitron">85%</div>
          <p className="text-neon-pink font-bold mb-2">消費者期待</p>
          <p className="text-neon-pink">實時物流追蹤與智能提醒</p>
        </div>
        <div className="bg-neon-cyan/5 border border-neon-cyan/20 p-6 rounded text-center">
          <div className="text-6xl font-bold text-neon-lime mb-4 font-orbitron">3x</div>
          <p className="text-neon-pink font-bold mb-2">效率提升</p>
          <p className="text-neon-pink">AI 調度相比傳統方式</p>
        </div>
        <div className="bg-neon-cyan/5 border border-neon-cyan/20 p-6 rounded text-center">
          <div className="text-6xl font-bold text-neon-lime mb-4 font-orbitron">42%</div>
          <p className="text-neon-pink font-bold mb-2">成本節省</p>
          <p className="text-neon-pink">通過路線優化與預測</p>
        </div>
      </div>
    </div>
  );
}

export function Slide5() {
  return (
    <div id="slide5" className="slide-container min-h-screen flex flex-col justify-center bg-gradient-to-b from-silver via-gray-300 to-gray-400 p-12">
      <h2 className="slide-title">數據的角色</h2>
      <div className="grid grid-cols-2 gap-12 mt-8">
        <div>
          <h3 className="text-2xl text-neon-pink font-bold mb-4">傳統物流</h3>
          <p className="text-neon-pink leading-relaxed">
            數據被視為「後驗式歷史報告」。企業在事件發生後才收集數據，用於分析過去的績效。這種被動的數據使用方式無法預測未來需求或提前應對風險。
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-neon-pink font-bold mb-4">AI 時代</h3>
          <p className="text-neon-pink leading-relaxed">
            數據成為「前瞻式需求感測」。AI 系統實時分析市場信號、天氣、消費者行為等多維度數據，提前預測需求並動態調整供應鏈。
          </p>
        </div>
      </div>
      <img
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663698117928/5cbm2ZAMuNCyQ4m8wrvnDf/data-flow-network-M7MMdVwvdXzscVB9DtQP9o.webp"
        alt="Data Flow Network"
        className="mt-12 w-full rounded-lg border border-neon-cyan/20"
      />
    </div>
  );
}

export function Slide6() {
  return (
    <div id="slide6" className="slide-container min-h-screen flex flex-col justify-center bg-gradient-to-b from-silver via-gray-300 to-gray-400 p-12">
      <h2 className="slide-title">體驗革命</h2>
      <div className="grid grid-cols-2 gap-12 mt-8">
        <div>
          <h3 className="text-2xl text-neon-pink font-bold mb-6 flex items-center">
            <i className="fas fa-user-tie mr-3"></i> 傳統客戶體驗
          </h3>
          <p className="text-neon-pink mb-4">
            消費者只能「被動查單」——登入系統、輸入訂單號、等待頁面加載。整個過程冗長且缺乏人性化。
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-neon-pink font-bold mb-6 flex items-center">
            <i className="fas fa-robot mr-3"></i> AI 時代體驗
          </h3>
          <p className="text-neon-pink mb-4">
            系統從「被動查單」轉向「主動預警」。消費者收到智能推送：「您的包裹即將在下午 2-4 點送達，天氣晴朗，配送員已出發」。
          </p>
        </div>
      </div>
    </div>
  );
}

export function Slide7() {
  return (
    <div id="slide7" className="slide-container min-h-screen flex flex-col justify-center bg-gradient-to-b from-silver via-gray-300 to-gray-400 p-12">
      <h2 className="slide-title">深度對比表：維度矩陣</h2>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-opacity-20 bg-neon-pink">
              <th className="border border-neon-cyan/20 px-6 py-4 text-left text-neon-pink font-orbitron">維度</th>
              <th className="border border-neon-cyan/20 px-6 py-4 text-left text-neon-pink font-orbitron">傳統物流行銷</th>
              <th className="border border-neon-cyan/20 px-6 py-4 text-left text-neon-pink font-orbitron">AI 時代物流行銷</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-neon-cyan/5">
              <td className="border border-neon-cyan/20 px-6 py-4 text-neon-pink font-bold">核心價值</td>
              <td className="border border-neon-cyan/20 px-6 py-4 text-neon-pink">資產與標準 SLA 競爭</td>
              <td className="border border-neon-cyan/20 px-6 py-4 text-neon-pink">預測精準度與韌性承諾</td>
            </tr>
            <tr className="hover:bg-neon-cyan/5">
              <td className="border border-neon-cyan/20 px-6 py-4 text-neon-pink font-bold">數據角色</td>
              <td className="border border-neon-cyan/20 px-6 py-4 text-neon-pink">後驗式歷史報告</td>
              <td className="border border-neon-cyan/20 px-6 py-4 text-neon-pink">前瞻式需求感測</td>
            </tr>
            <tr className="hover:bg-neon-cyan/5">
              <td className="border border-neon-cyan/20 px-6 py-4 text-neon-pink font-bold">客戶體驗</td>
              <td className="border border-neon-cyan/20 px-6 py-4 text-neon-pink">單向查詢、被動告知</td>
              <td className="border border-neon-cyan/20 px-6 py-4 text-neon-pink">AI Agent 智能共感、主動預警</td>
            </tr>
            <tr className="hover:bg-neon-cyan/5">
              <td className="border border-neon-cyan/20 px-6 py-4 text-neon-pink font-bold">ESG 敘事</td>
              <td className="border border-neon-cyan/20 px-6 py-4 text-neon-pink">表面綠化 (Greenwashing)</td>
              <td className="border border-neon-cyan/20 px-6 py-4 text-neon-pink">數據化綠色競爭力 (範疇三)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Slide8() {
  return (
    <div id="slide8" className="slide-container min-h-screen flex flex-col justify-center bg-gradient-to-b from-silver via-gray-300 to-gray-400 p-12">
      <h2 className="slide-title">實例分析：Amazon 預測式發貨</h2>
      <div className="grid grid-cols-2 gap-12 items-center mt-8">
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full border-4 border-neon-pink overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
              alt="Amazon Anticipatory Shipping"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h3 className="text-3xl text-neon-pink font-bold mb-6">Anticipatory Shipping</h3>
          <p className="text-lg text-neon-pink leading-relaxed mb-6">
            傳統物流是「下單後才出貨」；Amazon 運用專利算法分析瀏覽紀錄、購物車與停留時間。在消費者點擊購買前，系統便提前將商品運往距離該市場最近的衛星倉儲。
          </p>
          <p className="text-lg text-neon-pink font-bold">
            這種極致速度創造了傳統行銷無法比擬的「品牌驚艷體驗」。
          </p>
        </div>
      </div>
    </div>
  );
}

export function Slide9() {
  return (
    <div id="slide9" className="slide-container min-h-screen grid grid-cols-2 bg-gradient-to-b from-silver via-gray-300 to-gray-400 overflow-hidden">
      <div className="flex flex-col justify-center p-12">
        <h2 className="slide-title">實例分析：全聯智慧物流</h2>
        <div className="mt-8">
          <h3 className="text-2xl text-neon-pink font-bold mb-4">智慧補貨與動態履約</h3>
          <p className="text-lg text-neon-pink leading-relaxed mb-6">
            全聯引進高速自動化物流中心，自動分揀過程僅需 3 分鐘，效能提升 10 倍以上。更與氣象、歷史大數據連動，在風雨來臨前透過 AI 感測提早調配路徑。
          </p>
          <p className="text-lg text-neon-lime font-bold">
            當消費者在關鍵時刻看到滿滿的生鮮，便建立了極高的品牌依賴感。
          </p>
        </div>
      </div>
      <div className="overflow-hidden h-full">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663698117928/5cbm2ZAMuNCyQ4m8wrvnDf/green-logistics-LHEUtNjmoQNt7RuDzKnRpD.webp"
          alt="全聯智慧物流"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export function Slide10() {
  return (
    <div id="slide10" className="slide-container min-h-screen flex flex-col justify-center bg-gradient-to-b from-silver via-gray-300 to-gray-400 p-12">
      <h2 className="slide-title">ESG 品牌敘事：綠色競爭力</h2>
      <div className="grid grid-cols-2 gap-12 mt-8">
        <div className="bg-black/40 p-8 rounded border border-neon-lime">
          <ul className="space-y-6">
            <li className="flex items-start">
              <i className="fas fa-leaf text-neon-lime mr-4 mt-1 text-xl"></i>
              <div>
                <strong className="text-neon-pink">演算法優化：</strong>
                <p className="text-neon-pink mt-1">透過 AI 即時計算最優低碳路徑，減少無效里程。</p>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fas fa-chart-line text-neon-lime mr-4 mt-1 text-xl"></i>
              <div>
                <strong className="text-neon-pink">範疇三數據：</strong>
                <p className="text-neon-pink mt-1">提供清晰、可驗證的減碳儀表板，助品牌主滿足綠色法規。</p>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fas fa-shield-halved text-neon-lime mr-4 mt-1 text-xl"></i>
              <div>
                <strong className="text-neon-pink">法律效益：</strong>
                <p className="text-neon-pink mt-1">將綠色物流從「口號」轉變為具備法律效益的數據支持。</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663698117928/5cbm2ZAMuNCyQ4m8wrvnDf/green-logistics-LHEUtNjmoQNt7RuDzKnRpD.webp"
            alt="Green Tech"
            className="w-full rounded-lg border border-neon-lime/30"
          />
        </div>
      </div>
    </div>
  );
}

export function RecommendedVideos() {
  const videos = [
    { id: 'IZlMuEshrDk', title: '2030年的物流長什麼樣？AI物流', channel: '黑貓國際智庫', duration: '8分鐘' },
    { id: 'video2', title: 'Amazon 自動化物流中心', channel: '科技頻道', duration: '12分鐘' },
    { id: 'video3', title: '全聯智慧倉儲系統介紹', channel: '零售創新', duration: '10分鐘' },
    { id: 'video4', title: 'AI 驅動的供應鏈優化', channel: '物流專家', duration: '15分鐘' },
    { id: 'video5', title: '綠色物流的未來趨勢', channel: '永續發展', duration: '9分鐘' },
  ];

  return (
    <div id="recommended-videos" className="min-h-screen bg-gradient-to-b from-white via-white to-white p-12 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-bold text-neon-lime uppercase tracking-widest mb-4">推薦影片</p>
          <h2 className="text-5xl font-bold text-neon-pink font-orbitron mb-4">相關視頻資源</h2>
          <p className="text-lg text-neon-pink max-w-2xl mx-auto">
            精選行業專家分享的 AI 物流、自動化倉儲、供應鏈優化等深度內容
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-lg overflow-hidden border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 bg-slate-900/50 hover:bg-slate-900/80"
            >
              <div className="flex gap-4 p-4">
                {/* Thumbnail */}
                <div className="relative w-48 h-28 flex-shrink-0 rounded bg-slate-800 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20">
                    <span className="text-3xl text-neon-lime group-hover:scale-110 transition-transform duration-300">▶</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-neon-pink group-hover:text-neon-lime transition-colors mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-neon-pink mb-3">
                    {video.channel} • {video.duration}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-neon-lime opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>在 YouTube 上觀看</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


export function PPTPresentation() {
  const pdfUrl = '/manus-storage/AI_Logistics_Marketing_Transformation_03e67033.pdf';

  return (
    <div id="ppt-presentation" className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 p-12 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-bold text-neon-lime uppercase tracking-widest mb-4">完整簡報</p>
          <h2 className="text-5xl font-bold text-neon-pink font-orbitron mb-4">AI 物流行銷典範轉移</h2>
          <p className="text-lg text-neon-pink max-w-2xl mx-auto">
            完整 PowerPoint 簡報檔案，包含詳細的市場分析、案例研究與戰略建議
          </p>
        </div>

        {/* PDF Viewer using embed */}
        <div className="rounded-lg overflow-hidden border-2 border-neon-pink shadow-2xl" style={{ height: '800px', backgroundColor: '#FFFFFF' }}>
          <embed
            src={pdfUrl}
            type="application/pdf"
            width="100%"
            height="100%"
            className="w-full h-full"
          />
        </div>

        {/* Download Section */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-neon-pink text-sm">無法在瀏覽器中查看？</p>
          <a
            href={pdfUrl}
            download
            className="px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-cyan text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 transform hover:scale-105"
          >
            📥 下載 PDF 簡報
          </a>
          <p className="text-xs text-neon-pink">檔案大小：20.5 MB</p>
        </div>
      </div>
    </div>
  );
}
