import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  CheckCircle2,
  AlertCircle,
  Loader2
} from "lucide-react";
import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import { translations, Language } from "./translations";
import "./styles.css";

interface ProcessResult {
  success: boolean;
  message: string;
  output_path?: string;
}

function ToolCard({ tool, t, onClick, processing }: { tool: any, t: any, onClick: () => void, processing: boolean }) {
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
      onClick={!processing ? onClick : undefined}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`glass card-glow p-6 rounded-[2rem] cursor-pointer flex flex-col items-start space-y-4 group relative transition-all duration-300 border-white/5 hover:border-white/10 ${processing ? 'opacity-50 cursor-wait' : ''}`}
      style={{
        boxShadow: tool.glow ? `0 15px 30px -15px ${tool.glow}` : "none"
      } as any}
    >
      <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${tool.color} shadow-lg ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500`}>
        {processing ? <Loader2 className="w-7 h-7 text-white animate-spin" /> : <tool.icon className="w-7 h-7 text-white" />}
      </div>
      <div>
        <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary transition-colors">{t.tools[tool.id].name}</h3>
        <p className="text-slate-400 text-xs font-medium leading-relaxed">{t.tools[tool.id].desc}</p>
      </div>
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
        <ChevronRight className="w-4 h-4 text-white/40" />
      </div>
    </motion.div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [lang, setLang] = useState<Language>("tr");
  const [status, setStatus] = useState<{ msg: string; type: 'success' | 'error' | 'none' }>({ msg: '', type: 'none' });
  const [processingId, setProcessingId] = useState<string | null>(null);

  const t = translations[lang];

  const tools = [
    { id: "compress", icon: FileUp, color: "from-blue-500 to-cyan-400", glow: "rgba(6, 182, 212, 0.15)" },
    { id: "word", icon: FileText, color: "from-blue-600 to-indigo-500", glow: "rgba(79, 70, 229, 0.15)" },
    { id: "signature", icon: Signature, color: "from-purple-500 to-pink-500", glow: "rgba(236, 72, 153, 0.15)" },
    { id: "resize", icon: ImageIcon, color: "from-emerald-500 to-teal-400", glow: "rgba(20, 184, 166, 0.15)" },
    { id: "ocr", icon: ScanLine, color: "from-orange-500 to-yellow-500", glow: "rgba(234, 179, 8, 0.15)" },
    { id: "merge", icon: Files, color: "from-rose-500 to-red-400", glow: "rgba(244, 63, 94, 0.15)" },
  ];

  const handleToolAction = async (toolId: string) => {
    try {
      setProcessingId(toolId);
      setStatus({ msg: '', type: 'none' });

      if (toolId === 'merge') {
        const selected = await open({ multiple: true, filters: [{ name: 'PDF', extensions: ['pdf'] }] });
        if (selected && Array.isArray(selected)) {
          const result: ProcessResult = await invoke('merge_pdfs', { files: selected, outputPath: selected[0].replace('.pdf', '_merged.pdf') });
          setStatus({ msg: result.message, type: result.success ? 'success' : 'error' });
        }
      } else if (toolId === 'resize') {
        const selected = await open({ multiple: false, filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg'] }] });
        if (selected && typeof selected === 'string') {
          const result: ProcessResult = await invoke('resize_image', { path: selected, width: 800, height: 600 });
          setStatus({ msg: result.message, type: result.success ? 'success' : 'error' });
        }
      } else if (toolId === 'compress') {
        const selected = await open({ multiple: false, filters: [{ name: 'PDF', extensions: ['pdf'] }] });
        if (selected && typeof selected === 'string') {
          const result: ProcessResult = await invoke('compress_pdf', { path: selected, level: 'high' });
          setStatus({ msg: result.message, type: result.success ? 'success' : 'error' });
        }
      } else if (toolId === 'ocr') {
        const selected = await open({ multiple: false, filters: [{ name: 'Documents', extensions: ['pdf', 'png', 'jpg'] }] });
        if (selected && typeof selected === 'string') {
          const result: ProcessResult = await invoke('run_ocr', { path: selected, lang: lang });
          setStatus({ msg: result.message, type: result.success ? 'success' : 'error' });
        }
      } else if (toolId === 'word') {
        const selected = await open({ multiple: false, filters: [{ name: 'PDF', extensions: ['pdf'] }] });
        if (selected && typeof selected === 'string') {
          const result: ProcessResult = await invoke('convert_to_word', { path: selected });
          setStatus({ msg: result.message, type: result.success ? 'success' : 'error' });
        }
      } else if (toolId === 'signature') {
        const selected = await open({ multiple: false, filters: [{ name: 'PDF', extensions: ['pdf'] }] });
        if (selected && typeof selected === 'string') {
          const result: ProcessResult = await invoke('extract_signature', { path: selected });
          setStatus({ msg: result.message, type: result.success ? 'success' : 'error' });
        }
      } else {
        setStatus({ msg: lang === 'tr' ? "Bu özellik yakında gelecek!" : "Coming soon!", type: 'error' });
      }
    } catch (e) {
      setStatus({ msg: String(e), type: 'error' });
    } finally {
      setProcessingId(null);
      setTimeout(() => setStatus({ msg: '', type: 'none' }), 5000);
    }
  };

  return (
    <div className="flex h-screen bg-transparent text-slate-200 select-none overflow-hidden p-4 font-sans letter-tight">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-20 hover:w-64 transition-all duration-500 ease-in-out glass sidebar-glass flex flex-col items-center group/sidebar py-8 px-4 rounded-[2.5rem] shadow-2xl relative z-20 overflow-hidden"
      >
        <div className="flex items-center w-full px-2 mb-10 overflow-hidden">
          <div className="w-12 h-12 flex-shrink-0 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Files className="text-white w-7 h-7" />
          </div>
          <span className="ml-4 text-2xl font-black italic tracking-tighter text-white opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Pdfova
          </span>
        </div>

        <nav className="flex-1 w-full space-y-3">
          {[
            { id: "home", icon: HomeIcon, label: t.dashboard },
            { id: "files", icon: FolderOpen, label: t.history },
            { id: "settings", icon: SettingsIcon, label: t.settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center h-14 rounded-[1.25rem] transition-all duration-300 group/item relative overflow-hidden ${activeTab === item.id
                ? "bg-white/10 text-white shadow-sm ring-1 ring-white/10"
                : "text-slate-500 hover:text-white hover:bg-white/5"
                }`}
            >
              <div className="w-12 h-full flex items-center justify-center flex-shrink-0 relative z-10">
                <item.icon className={`w-6 h-6 ${activeTab === item.id ? "text-primary scale-110" : "group-hover/item:text-primary transition-all"}`} />
              </div>
              <span className="ml-2 font-bold text-sm tracking-tight opacity-0 group-hover/sidebar:opacity-100 transition-all duration-300 whitespace-nowrap relative z-10">
                {item.label}
              </span>
              {activeTab === item.id && (
                <motion.div layoutId="sidebar-active" className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex flex-col space-y-6 w-full pt-6 border-t border-white/5">
          <div className="flex p-1 bg-black/30 rounded-2xl overflow-hidden h-10">
            {(["tr", "en"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`flex-1 flex items-center justify-center rounded-xl text-[10px] font-black uppercase transition-all ${lang === l ? "bg-primary text-black shadow-lg" : "text-slate-500 hover:text-slate-300"
                  }`}
              >
                {l}
              </button>
            ))}
          </div>

          <div className="glass p-5 rounded-[2rem] border-white/5 relative overflow-hidden group/pro h-40 flex flex-col justify-center">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 blur-3xl group-hover/pro:bg-primary/30 transition-colors" />
            <div className="relative z-10">
              <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 opacity-0 group-hover/sidebar:opacity-100 transition-opacity">PRO</p>
              <p className="text-xs text-slate-300 leading-tight mb-4 font-bold opacity-0 group-hover/sidebar:opacity-100 transition-opacity">{t.proPlan}</p>
              <button className="w-full py-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-primary/20 opacity-0 group-hover/sidebar:opacity-100 group-hover/sidebar:visible">
                {t.upgrade}
              </button>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-8 py-6 lg:px-14 overflow-hidden relative">
        <header className="flex justify-between items-center mb-10 relative z-10">
          <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tighter mb-1">
              {t.welcome} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tamer</span>
            </h1>
            <p className="text-slate-500 font-bold text-sm tracking-tight opacity-80">{t.efficiencyText}</p>
          </motion.div>

          <AnimatePresence>
            {status.type !== 'none' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={`flex items-center space-x-3 px-4 py-2.5 rounded-2xl glass ${status.type === 'success' ? 'border-emerald-500/30' : 'border-rose-500/30'}`}
              >
                {status.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <AlertCircle className="w-4 h-4 text-rose-500" />}
                <span className="text-xs font-bold text-white/90">{status.msg}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Drop Zone */}
        <motion.div
          onClick={() => handleToolAction('merge')}
          initial={{ scale: 0.98, opacity: 0 }}
          whileHover={{ scale: 1.005 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-10 min-h-[16rem] border-2 border-dashed border-primary/10 rounded-[3rem] flex flex-col items-center justify-center glass relative overflow-hidden group hover:border-primary/40 transition-all duration-700 cursor-pointer shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />

          <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-700 relative z-10 ring-1 ring-white/5 group-hover:ring-primary/20">
            <Files className="text-slate-400 w-10 h-10 group-hover:text-primary transition-colors duration-700" />
          </div>
          <p className="text-2xl font-black tracking-tighter text-white mb-2 relative z-10 group-hover:text-primary transition-colors">{t.dropZoneTitle}</p>
          <span className="text-slate-500 text-sm font-bold tracking-wide relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">{t.dropZoneSub}</span>

          <div className="absolute bottom-6 right-8 flex items-center space-x-2 text-[10px] font-black text-slate-600 uppercase tracking-widest group-hover:text-primary/60 transition-colors">
            <span>Powered by Lopdf</span>
            <ChevronRight className="w-3 h-3" />
          </div>
        </motion.div>

        {/* Tools Grid */}
        <div className="flex-1 overflow-y-auto pr-2 pb-10 custom-scrollbar relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * index }}
              >
                <ToolCard
                  tool={tool}
                  t={t}
                  processing={processingId === tool.id}
                  onClick={() => handleToolAction(tool.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
