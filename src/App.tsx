import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  FileUp,
  Signature,
  Image as ImageIcon,
  ScanLine,
  Files,
  Settings as SettingsIcon,
  Home as HomeIcon,
  FolderOpen,
  ChevronRight,
  Sparkles,
  Languages
} from "lucide-react";
import { translations, Language } from "./translations";
import "./styles.css";

function ToolCard({ tool, t }: { tool: any, t: any }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="glass card-glow p-6 rounded-[2.5rem] cursor-pointer flex flex-col items-start space-y-4 group relative transition-all duration-300 border-white/5 hover:border-white/20"
      style={{
        boxShadow: tool.glow ? `0 20px 40px -20px ${tool.glow}` : "none"
      } as any}
    >
      <div className={`p-4 rounded-3xl bg-gradient-to-br ${tool.color} shadow-lg ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-500`}>
        <tool.icon className="w-8 h-8 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{t.tools[tool.id].name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{t.tools[tool.id].desc}</p>
      </div>
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight className="w-5 h-5 text-white/50" />
      </div>
    </motion.div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [lang, setLang] = useState<Language>("tr");
  const t = translations[lang];

  const tools = [
    { id: "compress", icon: FileUp, color: "from-blue-500 to-cyan-400", glow: "rgba(6, 182, 212, 0.2)" },
    { id: "word", icon: FileText, color: "from-blue-600 to-indigo-500", glow: "rgba(79, 70, 229, 0.2)" },
    { id: "signature", icon: Signature, color: "from-purple-500 to-pink-500", glow: "rgba(236, 72, 153, 0.2)" },
    { id: "resize", icon: ImageIcon, color: "from-emerald-500 to-teal-400", glow: "rgba(20, 184, 166, 0.2)" },
    { id: "ocr", icon: ScanLine, color: "from-orange-500 to-yellow-500", glow: "rgba(234, 179, 8, 0.2)" },
    { id: "merge", icon: Files, color: "from-rose-500 to-red-400", glow: "rgba(244, 63, 94, 0.2)" },
  ];

  return (
    <div className="flex h-screen bg-transparent text-slate-200 select-none overflow-hidden p-6 font-sans">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-24 lg:w-72 glass border-white/10 flex flex-col items-stretch p-6 space-y-12 rounded-[3.5rem] shadow-2xl relative z-10"
      >
        <div className="flex items-center space-x-4 px-2">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 animate-pulse">
            <Files className="text-white w-7 h-7" />
          </div>
          <div className="hidden lg:block">
            <span className="text-2xl font-black italic tracking-tighter text-white">
              Pdfova
            </span>
            <div className="flex items-center space-x-1">
              <span className="text-[10px] uppercase font-bold text-primary/80 tracking-widest">Power Tool</span>
              <Sparkles className="w-3 h-3 text-primary/80" />
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-4">
          {[
            { id: "home", icon: HomeIcon, label: t.dashboard },
            { id: "files", icon: FolderOpen, label: t.history },
            { id: "settings", icon: SettingsIcon, label: t.settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-4 px-5 py-4 rounded-3xl transition-all duration-300 group ${activeTab === item.id
                ? "bg-white/10 text-white shadow-inner ring-1 ring-white/20"
                : "text-slate-500 hover:text-white hover:bg-white/5"
                }`}
            >
              <item.icon className={`w-6 h-6 ${activeTab === item.id ? "text-primary shadow-glow" : "group-hover:text-primary transition-colors"}`} />
              <span className="hidden lg:block font-semibold text-[15px]">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="flex space-x-2 p-1 bg-white/5 rounded-2xl">
          {(["tr", "en"] as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`flex-1 py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${lang === l ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-white"
                }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="glass p-5 rounded-[2rem] border-white/5 hidden lg:block overflow-hidden relative group">
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 blur-3xl group-hover:bg-primary/40 transition-all duration-500" />
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1 relative z-10">{t.proPlan}</p>
          <p className="text-xs text-white/80 leading-relaxed mb-3 relative z-10 italic">{t.proDesc}</p>
          <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all relative z-10 border border-white/5">{t.upgrade}</button>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-12 py-6 overflow-hidden relative">
        <header className="flex justify-between items-center mb-10 relative z-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-2">
              {t.welcome} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tamer</span>
            </h1>
            <p className="text-slate-400 font-medium tracking-tight opacity-80">{t.efficiencyText}</p>
          </motion.div>
        </header>

        {/* Drop Zone */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10 min-h-[14rem] border-[3px] border-dashed border-white/5 rounded-[3.5rem] flex flex-col items-center justify-center glass relative overflow-hidden group hover:border-primary/40 transition-all duration-500 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 relative z-10">
            <FileUp className="text-slate-400 w-8 h-8 group-hover:text-primary transition-colors duration-500" />
          </div>
          <p className="text-xl font-black tracking-tight text-white mb-1 relative z-10">{t.dropZoneTitle}</p>
          <span className="text-slate-500 text-sm font-medium tracking-wide relative z-10 italic">{t.dropZoneSub}</span>

          <div className="absolute -bottom-1 -right-1 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
            <Files className="w-32 h-32 text-primary" />
          </div>
        </motion.div>

        {/* Tools Grid */}
        <div className="flex-1 overflow-y-auto pr-4 pb-12 custom-scrollbar relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index + 0.4 }}
              >
                <ToolCard tool={tool} t={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
