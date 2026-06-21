import { useEffect, useState } from 'react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const sections = [
  { id: 'slide1', label: '01 典範轉移報告' },
  { id: 'slide2', label: '02 物流即行銷' },
  { id: 'slide3', label: '03 價值維度對比' },
  { id: 'slide4', label: '04 市場趨勢分析' },
  { id: 'slide5', label: '05 數據的角色' },
  { id: 'slide6', label: '06 體驗革命' },
  { id: 'slide7', label: '07 深度對比表' },
  { id: 'slide8', label: '08 Amazon 實例' },
  { id: 'slide9', label: '09 全聯智慧物流' },
  { id: 'slide10', label: '10 綠色競爭力' },
];

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 border-r-4 border-neon-pink z-100 flex flex-col p-6 overflow-y-auto">
      {/* Logo */}
      <div className="mb-8">
        <h2 className="text-xl font-bold uppercase tracking-widest text-neon-pink font-orbitron">
          AI Logistics
        </h2>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-3 flex-grow">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => handleNavClick(section.id)}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-all duration-300 ${
                activeSection === section.id
                  ? 'text-neon-pink bg-neon-pink/10 shadow-lg shadow-neon-pink/30 border-l-4 border-neon-pink'
                  : 'text-neon-pink hover:text-neon-pink hover:bg-neon-pink/5'
              }`}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Video Column */}
      <div className="mt-8 pt-5 border-t-2 border-neon-pink">
        <h3 className="text-xs font-bold uppercase tracking-wider text-neon-pink mb-4 font-orbitron">
          <i className="fab fa-youtube mr-2"></i> 全聯數位轉型
        </h3>
        <div className="w-full aspect-video border-2 border-neon-pink bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded overflow-hidden">
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
      </div>
    </nav>
  );
}
