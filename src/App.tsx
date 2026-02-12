import { useState, useEffect } from "react";
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
  Loader2,
  MoreVertical,
  HelpCircle,
  Info
} from "lucide-react";
import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import { translations, versionInfo, Language } from "./translations";
import "./styles.css";

interface ProcessResult {
  success: boolean;
  message: string;
  output_path?: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [category, setCategory] = useState("all");
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("pdfova-lang");
    return (saved as Language) || "tr";
  });
  const [outputDir, setOutputDir] = useState<string>(() => {
    return localStorage.getItem("pdfova-output-dir") || "";
  });
  const [status, setStatus] = useState<{ msg: string; type: 'success' | 'error' | 'none' }>({ msg: '', type: 'none' });
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [history, setHistory] = useState<{ id: string, tool: string, status: string, time: string }[]>(() => {
    const saved = localStorage.getItem("pdfova-history");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("pdfova-lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("pdfova-output-dir", outputDir);
  }, [outputDir]);

  useEffect(() => {
    localStorage.setItem("pdfova-history", JSON.stringify(history));
  }, [history]);

  const addHistory = (toolId: string, success: boolean) => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      tool: toolId,
      status: success ? 'success' : 'error',
      time: new Date().toLocaleTimeString()
    };
    setHistory(prev => [newItem, ...prev].slice(0, 20));
  };

  const handleSelectOutputDir = async () => {
    const selected = await open({
      directory: true,
      multiple: false,
      title: lang === 'tr' ? 'Çıktı Klasörünü Seç' : 'Select Output Directory'
    });
    if (selected && typeof selected === 'string') {
      setOutputDir(selected);
    }
  };

  const t = translations[lang] as any;

  type ToolId = "compress" | "word" | "signature" | "resize" | "ocr" | "merge";

  const tools: { id: ToolId; icon: any; colorClass: string; type: string; ext: string }[] = [
    { id: "compress", icon: FileUp, colorClass: "file-icon-pdf", type: "PDF", ext: "PDF" },
    { id: "word", icon: FileText, colorClass: "file-icon-word", type: "Word", ext: "DOC" },
    { id: "signature", icon: Signature, colorClass: "file-icon-pdf", type: "PDF", ext: "SIG" },
    { id: "resize", icon: ImageIcon, colorClass: "file-icon-ppt", type: "Image", ext: "IMG" },
    { id: "ocr", icon: ScanLine, colorClass: "file-icon-excel", type: "OCR", ext: "TXT" },
    { id: "merge", icon: Files, colorClass: "file-icon-pdf", type: "PDF", ext: "MIX" },
  ];

  const filteredTools = category === 'all'
    ? tools
    : tools.filter(tool => tool.type.toLowerCase() === category.toLowerCase());

  const handleToolAction = async (toolId: string) => {
    if (!outputDir) {
      setActiveTab('settings');
      setStatus({ msg: t.selectFolderFirst, type: 'error' });
      return;
    }

    try {
      setProcessingId(toolId);
      setStatus({ msg: t.processing, type: 'none' });

      let result: ProcessResult;
      if (toolId === 'merge') {
        const selected = await open({ multiple: true, filters: [{ name: 'PDF', extensions: ['pdf'] }] });
        if (selected && Array.isArray(selected)) {
          result = await invoke('merge_pdfs', { files: selected, outputDir: outputDir });
        } else return;
      } else if (toolId === 'resize') {
        const selected = await open({ multiple: false, filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg'] }] });
        if (selected && typeof selected === 'string') {
          result = await invoke('resize_image', { path: selected, width: 800, height: 600, outputDir: outputDir });
        } else return;
      } else if (toolId === 'compress') {
        const selected = await open({ multiple: false, filters: [{ name: 'PDF', extensions: ['pdf'] }] });
        if (selected && typeof selected === 'string') {
          result = await invoke('compress_pdf', { path: selected, level: 'high', outputDir: outputDir });
        } else return;
      } else if (toolId === 'ocr') {
        const selected = await open({ multiple: false, filters: [{ name: 'Documents', extensions: ['pdf', 'png', 'jpg'] }] });
        if (selected && typeof selected === 'string') {
          result = await invoke('run_ocr', { path: selected, lang: lang, outputDir: outputDir });
        } else return;
      } else if (toolId === 'word') {
        const selected = await open({ multiple: false, filters: [{ name: 'PDF', extensions: ['pdf'] }] });
        if (selected && typeof selected === 'string') {
          result = await invoke('convert_to_word', { path: selected, outputDir: outputDir });
        } else return;
      } else if (toolId === 'signature') {
        const selected = await open({ multiple: false, filters: [{ name: 'PDF', extensions: ['pdf'] }] });
        if (selected && typeof selected === 'string') {
          result = await invoke('extract_signature', { path: selected, outputDir: outputDir });
        } else return;
      } else return;

      setStatus({ msg: result.message, type: result.success ? 'success' : 'error' });
      addHistory(toolId, result.success);
    } catch (e) {
      setStatus({ msg: String(e), type: 'error' });
    } finally {
      setProcessingId(null);
      setTimeout(() => setStatus({ msg: '', type: 'none' }), 5000);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans select-none">

      {/* Top Header & Navigation */}
      <header className="pt-8 px-6 bg-[#0a0a0a] z-20 shrink-0">
        <div className="flex items-center justify-between mb-8">
          <span onClick={() => setActiveTab('home')} className="text-xl font-black tracking-tight text-white uppercase italic cursor-pointer">pdfova</span>
          <div className="flex items-center space-x-5">
            {[
              { id: 'home', icon: HomeIcon, label: t.dashboard },
              { id: 'files', icon: FolderOpen, label: t.history },
              { id: 'settings', icon: SettingsIcon, label: t.settings },
              { id: 'help', icon: HelpCircle, label: t.help },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-1.5 transition-all ${activeTab === item.id ? "text-[#e53935]" : "text-white/40 hover:text-white/60"}`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'home' && (
          <nav className="flex space-x-6 overflow-x-auto no-scrollbar border-b border-white/5">
            {['all', 'pdf', 'word', 'image', 'ocr'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`pb-3 text-xs font-bold uppercase tracking-widest transition-all relative ${category === cat ? "text-white" : "text-white/30"}`}
              >
                {t.categories[cat as keyof typeof t.categories]}
                {category === cat && (
                  <motion.div layoutId="cat-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e53935]" />
                )}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Main Workspace */}
      <main className="flex-1 overflow-y-auto custom-scrollbar relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="h-full"
          >
            {activeTab === 'home' ? (
              <div className="flux-grid">
                {filteredTools.map((tool) => (
                  <div
                    key={tool.id}
                    onClick={() => handleToolAction(tool.id)}
                    className="flux-card p-6 cursor-pointer relative group"
                  >
                    <div className={`file-icon-base ${tool.colorClass} mb-4`}>
                      {processingId === tool.id ? <Loader2 className="w-5 h-5 animate-spin" /> : tool.ext}
                    </div>
                    <h3 className="text-[12px] font-bold text-white uppercase tracking-wider mb-1">{t.tools[tool.id].name}</h3>
                    <p className="text-[9px] text-white/30 font-medium uppercase tracking-tight line-clamp-2 px-2 leading-relaxed">
                      {t.tools[tool.id].desc}
                    </p>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="w-3 h-3 text-white/20" />
                    </div>
                  </div>
                ))}

              </div>
            ) : activeTab === 'files' ? (
              <div className="px-6 py-8 max-w-2xl mx-auto w-full">
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                  <h2 className="text-xl font-black uppercase tracking-tight">{t.history}</h2>
                  <button onClick={() => setHistory([])} className="text-[10px] font-bold text-[#e53935] uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full">{lang === 'tr' ? 'TEMİZLE' : 'CLEAR'}</button>
                </div>
                {history.length > 0 ? (
                  <div className="space-y-3">
                    {history.map((item) => (
                      <div key={item.id} className="bg-white/[0.02] rounded-xl p-4 flex items-center justify-between border border-white/5">
                        <div className="flex items-center space-x-4">
                          <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'success' ? 'bg-[#43a047]' : 'bg-[#e53935]'}`} />
                          <div>
                            <p className="text-xs font-bold uppercase">{t.tools[item.tool as keyof typeof t.tools]?.name || item.tool}</p>
                            <p className="text-[10px] text-white/30 font-medium">{item.time}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-white/10" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 opacity-10">
                    <FolderOpen className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-[10px] font-bold uppercase tracking-widest">{lang === 'tr' ? 'İŞLEM KAYDI BULUNAMADI' : 'NO ACTIVITY FOUND'}</p>
                  </div>
                )}
              </div>
            ) : activeTab === 'settings' ? (
              <div className="px-6 py-8 max-w-2xl mx-auto w-full">
                <h2 className="text-xl font-black uppercase tracking-tight mb-8 border-b border-white/5 pb-4">{t.settings}</h2>
                <div className="space-y-6">
                  <div className="bg-white/[0.02] rounded-2xl p-6 border border-white/5">
                    <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">{t.outputDir}</h3>
                    <div className="mb-4 text-[11px] font-medium text-white/60 bg-black/40 p-4 rounded-xl truncate border border-white/5">
                      {outputDir || t.noFolder}
                    </div>
                    <button onClick={handleSelectOutputDir} className="w-full py-4 bg-[#e53935] rounded-xl text-xs font-bold uppercase tracking-widest">
                      {t.selectFolder}
                    </button>
                  </div>

                  <div className="bg-white/[0.02] rounded-2xl p-6 border border-white/5">
                    <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">{lang === 'tr' ? 'DİL SEÇİMİ' : 'UI LANGUAGE'}</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['tr', 'en'].map(l => (
                        <button key={l} onClick={() => setLang(l as Language)} className={`py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest border transition-all ${lang === l ? "bg-white text-black border-white" : "bg-transparent border-white/10 text-white/40 hover:border-white/20"}`}>
                          {l === 'tr' ? 'Türkçe' : 'English'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="px-6 py-8 max-w-2xl mx-auto w-full">
                <h2 className="text-xl font-black uppercase tracking-tight mb-8 border-b border-white/5 pb-4">{t.help}</h2>
                <div className="space-y-8">
                  {/* About Section */}
                  <div className="bg-white/[0.02] rounded-2xl p-6 border border-white/5">
                    <div className="flex items-center space-x-3 mb-4">
                      <Info className="w-5 h-5 text-[#e53935]" />
                      <h3 className="text-sm font-bold uppercase tracking-widest">{t.about}</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-white/60 leading-relaxed uppercase font-bold">
                        {t.efficiencyText}
                      </p>
                      <div className="pt-4 flex items-center justify-between text-[10px] font-bold text-white/20">
                        <span>{t.version}</span>
                        <span className="text-[#e53935]">{versionInfo.current} ({versionInfo.releaseName})</span>
                      </div>
                    </div>
                  </div>

                  {/* Release Notes */}
                  <div className="bg-white/[0.02] rounded-2xl p-6 border border-white/5">
                    <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-6">{t.releaseNotes} ({versionInfo.current})</h3>
                    <div className="space-y-4">
                      {(versionInfo.notes as any)[lang].map((note: string, idx: number) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-1 h-1 bg-[#e53935] rounded-full mt-1.5 flex-shrink-0" />
                          <p className="text-[11px] text-white/70 font-medium leading-relaxed">{note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Status */}
      <footer className="h-10 bg-black px-6 flex items-center justify-between text-white/10 text-[8px] font-bold uppercase tracking-[2px]">
        <span>PDFOVA_CORE_V3</span>
        {status.type !== 'none' && <span className="text-[#e53935]">{status.msg}</span>}
      </footer>
    </div >
  );
}
