export default function VideoPanel() {

  return (
    <aside 
      className="fixed right-0 top-0 h-screen w-80 bg-gradient-to-b from-slate-900 via-slate-950 to-black overflow-y-auto p-4 z-50 flex flex-col"
      style={{ borderLeft: '1px solid rgba(0, 240, 255, 0.2)' }}
    >
      {/* Header Label */}
      <div className="mb-4">
        <div className="inline-block px-2 py-1 bg-neon-cyan-10 border border-neon-cyan-30 rounded text-xs font-bold text-neon-cyan uppercase tracking-widest">
          精選影音
        </div>
      </div>

      {/* Main Video - Takes up most space */}
      <div className="flex-1 mb-6 flex flex-col">
        <div className="relative w-full flex-1 rounded-lg overflow-hidden border border-neon-cyan-30 bg-black">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/IZlMuEshrDk"
            title="全聯數位轉型"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="text-neon-lime font-bold">YouTube</span>
          <span className="text-text-dim">約 8 分鐘</span>
        </div>
      </div>

      {/* Related Topics Section */}
      <div className="border-t border-neon-pink-10 pt-4">
        <h3 className="text-xs font-bold text-neon-pink uppercase tracking-widest mb-3 font-orbitron">
          相關主題
        </h3>
        <div className="space-y-2">
          {[
            { icon: '📊', title: '數據儀表板' },
            { icon: '💬', title: '專題投影片' },
            { icon: '📥', title: '相關附件下載' },
          ].map((item, idx) => (
            <button
              key={idx}
              className="w-full text-left p-2 rounded text-xs transition-all duration-300 group"
              style={{
                border: '1px solid rgba(0, 240, 255, 0.2)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.4)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.2)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">{item.icon}</span>
                <span className="text-neon-cyan group-hover:text-neon-lime transition-colors font-medium">
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Tip */}
      <div className="mt-auto pt-4 border-t border-neon-pink-10">
        <p className="text-xs text-text-dim text-center leading-relaxed">
          💡 點擊左側導航快速跳轉
        </p>
      </div>
    </aside>
  );
}
