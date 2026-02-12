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
  Info,
  Trash2,
  ArrowUp,
  ArrowDown,
  Plus,
  X
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

  // Merge Tool State
  const [showMergeUI, setShowMergeUI] = useState(false);
  const [mergeFiles, setMergeFiles] = useState<string[]>([]);

  // Resize Tool State
  const [showResizeUI, setShowResizeUI] = useState(false);
  const [resizeFiles, setResizeFiles] = useState<string[]>([]);
  const [resizeMode, setResizeMode] = useState<'exact' | 'percent' | 'width' | 'height'>('percent');
  const [resizeWidth, setResizeWidth] = useState<string>('800');
  const [resizeHeight, setResizeHeight] = useState<string>('600');
  const [resizePercent, setResizePercent] = useState<string>('50');

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
        setShowMergeUI(true);
        // Automatically open file dialog if list is empty
        if (mergeFiles.length === 0) {
          handleAddToMergeList();
        }
        setProcessingId(null); // Stop spinner immediately as we are just showing UI
        return;
      } else if (toolId === 'resize') {
        setShowResizeUI(true);
        if (resizeFiles.length === 0) {
          handleAddToResizeList();
        }
        setProcessingId(null);
        return;
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

  // Merge UI Handlers
  const handleAddToMergeList = async () => {
    const selected = await open({
      multiple: true,
      filters: [{ name: 'PDF', extensions: ['pdf'] }]
    });
    if (selected) {
      if (Array.isArray(selected)) {
        setMergeFiles(prev => [...prev, ...selected]);
      } else if (typeof selected === 'string') {
        setMergeFiles(prev => [...prev, selected]);
      }
    }
  };

  const handleRemoveFromMergeList = (index: number) => {
    setMergeFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleMoveItem = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === mergeFiles.length - 1) return;

    setMergeFiles(prev => {
      const newList = [...prev];
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      [newList[index], newList[targetIndex]] = [newList[targetIndex], newList[index]];
      return newList;
    });
  };

  const handleStartMerge = async () => {
    if (mergeFiles.length < 2) {
      setStatus({ msg: "Please select at least 2 files", type: 'error' });
      return;
    }
    if (!outputDir) {
      setStatus({ msg: t.selectFolderFirst, type: 'error' });
      return;
    }

    try {
      setProcessingId('merge-process');
      setStatus({ msg: t.processing, type: 'none' });

      const result: ProcessResult = await invoke('merge_pdfs', { files: mergeFiles, outputDir: outputDir });

      setStatus({ msg: result.message, type: result.success ? 'success' : 'error' });
      addHistory('merge', result.success);

      if (result.success) {
        setMergeFiles([]);
        setShowMergeUI(false);
      }
    } catch (e) {
      setStatus({ msg: String(e), type: 'error' });
    } finally {
      setProcessingId(null);
      setTimeout(() => setStatus({ msg: '', type: 'none' }), 5000);
    }
  };

  // Resize UI Handlers
  const handleAddToResizeList = async () => {
    const selected = await open({
      multiple: true,
      filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg', 'webp', 'bmp', 'gif'] }]
    });
    if (selected) {
      if (Array.isArray(selected)) {
        setResizeFiles(prev => [...prev, ...selected]);
      } else if (typeof selected === 'string') {
        setResizeFiles(prev => [...prev, selected]);
      }
    }
  };

  const handleRemoveFromResizeList = (index: number) => {
    setResizeFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleStartResize = async () => {
    if (resizeFiles.length === 0) {
      setStatus({ msg: 'No images to resize', type: 'error' });
      return;
    }
    if (!outputDir) {
      setStatus({ msg: t.selectFolderFirst, type: 'error' });
      return;
    }

    try {
      setProcessingId('resize-process');
      setStatus({ msg: t.processing, type: 'none' });

      const params: any = {
        files: resizeFiles,
        mode: resizeMode,
        outputDir: outputDir,
      };

      if (resizeMode === 'exact') {
        params.width = parseInt(resizeWidth) || 800;
        params.height = parseInt(resizeHeight) || 600;
      } else if (resizeMode === 'percent') {
        params.percent = parseFloat(resizePercent) || 50;
      } else if (resizeMode === 'width') {
        params.width = parseInt(resizeWidth) || 800;
      } else if (resizeMode === 'height') {
        params.height = parseInt(resizeHeight) || 600;
      }

      const result: ProcessResult = await invoke('resize_images', params);

      setStatus({ msg: result.message, type: result.success ? 'success' : 'error' });
      addHistory('resize', result.success);

      if (result.success) {
        setResizeFiles([]);
        setShowResizeUI(false);
      }
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
          <span onClick={() => setActiveTab('home')} className="text-xl font-black tracking-tight text-white uppercase italic cursor-pointer">Pdfova</span>
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

        {activeTab === 'home' && !showMergeUI && !showResizeUI && (
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
            {activeTab === 'home' && !showMergeUI && !showResizeUI ? (
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
            ) : showMergeUI ? (
              // Merge UI Overlay
              <div className="px-6 py-4 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-3">
                    <button onClick={() => setShowMergeUI(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                    <h2 className="text-xl font-black uppercase tracking-tight">{t.mergeUI?.mergeTitle || "PDF Merge List"}</h2>
                  </div>
                  <div className="flex space-x-3">
                    <button onClick={() => setMergeFiles([])} className="text-[10px] font-bold text-white/40 hover:text-white uppercase tracking-widest px-3 py-2">
                      {t.mergeUI?.clearList || "CLEAR"}
                    </button>
                    <button onClick={handleAddToMergeList} className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all">
                      <Plus className="w-4 h-4" />
                      <span>{t.mergeUI?.addItems || "ADD"}</span>
                    </button>
                    <button
                      onClick={handleStartMerge}
                      disabled={mergeFiles.length < 2 || processingId === 'merge-process'}
                      className={`flex items-center space-x-2 px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${mergeFiles.length < 2 ? 'bg-[#e53935]/20 text-white/20 cursor-not-allowed' : 'bg-[#e53935] hover:bg-[#d32f2f] text-white shadow-lg shadow-red-900/20'}`}
                    >
                      {processingId === 'merge-process' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Files className="w-4 h-4" />}
                      <span>{t.mergeUI?.startMerge || "MERGE"}</span>
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  {mergeFiles.length === 0 ? (
                    <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-xl">
                      <Files className="w-12 h-12 text-white/10 mb-4" />
                      <p className="text-white/30 text-xs font-bold uppercase tracking-widest">{t.mergeUI?.noFiles || "No files added"}</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {mergeFiles.map((file, idx) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          key={`${file}-${idx}`}
                          className="bg-[#1a1a1a] p-3 rounded-lg flex items-center justify-between group hover:bg-[#222] border border-white/5 transition-colors"
                        >
                          <div className="flex items-center space-x-4 overflow-hidden">
                            <span className="text-[10px] font-bold text-white/20 w-6">{idx + 1}</span>
                            <FileText className="w-4 h-4 text-[#e53935] flex-shrink-0" />
                            <span className="text-xs font-medium text-white/80 truncate dir-rtl text-left" title={file}>
                              {file.split(/[/\\]/).pop()}
                            </span>
                          </div>

                          <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => handleMoveItem(idx, 'up')}
                              disabled={idx === 0}
                              className={`p-1.5 rounded hover:bg-white/10 ${idx === 0 ? 'text-white/10' : 'text-white/60'}`}
                            >
                              <ArrowUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleMoveItem(idx, 'down')}
                              disabled={idx === mergeFiles.length - 1}
                              className={`p-1.5 rounded hover:bg-white/10 ${idx === mergeFiles.length - 1 ? 'text-white/10' : 'text-white/60'}`}
                            >
                              <ArrowDown className="w-3.5 h-3.5" />
                            </button>
                            <div className="w-px h-4 bg-white/10 mx-2" />
                            <button onClick={() => handleRemoveFromMergeList(idx)} className="p-1.5 rounded hover:bg-red-500/20 text-white/40 hover:text-red-400 transition-colors">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : showResizeUI ? (
              // Resize UI
              <div className="px-6 py-4 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-3">
                    <button onClick={() => setShowResizeUI(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                    <h2 className="text-xl font-black uppercase tracking-tight">{t.resizeUI?.title || "Batch Resize"}</h2>
                  </div>
                  <div className="flex space-x-3">
                    <button onClick={() => setResizeFiles([])} className="text-[10px] font-bold text-white/40 hover:text-white uppercase tracking-widest px-3 py-2">
                      {t.resizeUI?.clearList || "CLEAR"}
                    </button>
                    <button onClick={handleAddToResizeList} className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all">
                      <Plus className="w-4 h-4" />
                      <span>{t.resizeUI?.addImages || "ADD"}</span>
                    </button>
                    <button
                      onClick={handleStartResize}
                      disabled={resizeFiles.length === 0 || processingId === 'resize-process'}
                      className={`flex items-center space-x-2 px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${resizeFiles.length === 0 ? 'bg-[#e53935]/20 text-white/20 cursor-not-allowed' : 'bg-[#e53935] hover:bg-[#d32f2f] text-white shadow-lg shadow-red-900/20'}`}
                    >
                      {processingId === 'resize-process' ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
                      <span>{t.resizeUI?.startResize || "RESIZE"}</span>
                    </button>
                  </div>
                </div>

                {/* Resize Mode Selector */}
                <div className="mb-6">
                  <div className="grid grid-cols-4 gap-2 mb-5">
                    {(['exact', 'percent', 'width', 'height'] as const).map(mode => (
                      <button
                        key={mode}
                        onClick={() => setResizeMode(mode)}
                        className={`py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${resizeMode === mode ? 'bg-white text-black border-white' : 'bg-transparent border-white/10 text-white/40 hover:border-white/20'}`}
                      >
                        {t.resizeUI?.[`mode${mode.charAt(0).toUpperCase() + mode.slice(1)}` as keyof typeof t.resizeUI] || mode}
                      </button>
                    ))}
                  </div>

                  {/* Mode-specific inputs */}
                  <div className="bg-white/[0.02] rounded-xl p-5 border border-white/5">
                    {resizeMode === 'exact' && (
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t.resizeUI?.widthLabel || "Width (px)"}</label>
                          <input type="number" value={resizeWidth} onChange={e => setResizeWidth(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white font-medium focus:outline-none focus:border-[#e53935]" />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t.resizeUI?.heightLabel || "Height (px)"}</label>
                          <input type="number" value={resizeHeight} onChange={e => setResizeHeight(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white font-medium focus:outline-none focus:border-[#e53935]" />
                        </div>
                      </div>
                    )}
                    {resizeMode === 'percent' && (
                      <div>
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t.resizeUI?.percentLabel || "Scale (%)"}</label>
                        <div className="flex items-center space-x-4">
                          <input type="range" min="5" max="200" value={resizePercent} onChange={e => setResizePercent(e.target.value)} className="flex-1 accent-[#e53935]" />
                          <input type="number" value={resizePercent} onChange={e => setResizePercent(e.target.value)} className="w-20 bg-black/40 border border-white/10 rounded-lg px-3 py-3 text-sm text-white font-medium text-center focus:outline-none focus:border-[#e53935]" />
                          <span className="text-white/30 text-xs font-bold">%</span>
                        </div>
                      </div>
                    )}
                    {resizeMode === 'width' && (
                      <div>
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t.resizeUI?.widthLabel || "Width (px)"}</label>
                        <input type="number" value={resizeWidth} onChange={e => setResizeWidth(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white font-medium focus:outline-none focus:border-[#e53935]" />
                        <p className="text-[9px] text-white/20 mt-2 font-medium uppercase tracking-widest">{t.resizeUI?.widthHint || "Height auto-calculated"}</p>
                      </div>
                    )}
                    {resizeMode === 'height' && (
                      <div>
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">{t.resizeUI?.heightLabel || "Height (px)"}</label>
                        <input type="number" value={resizeHeight} onChange={e => setResizeHeight(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white font-medium focus:outline-none focus:border-[#e53935]" />
                        <p className="text-[9px] text-white/20 mt-2 font-medium uppercase tracking-widest">{t.resizeUI?.heightHint || "Width auto-calculated"}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* File List */}
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  {resizeFiles.length === 0 ? (
                    <div className="h-48 flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-xl">
                      <ImageIcon className="w-12 h-12 text-white/10 mb-4" />
                      <p className="text-white/30 text-xs font-bold uppercase tracking-widest">{t.resizeUI?.noFiles || "No images"}</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {resizeFiles.map((file, idx) => (
                        <div
                          key={`${file}-${idx}`}
                          className="bg-[#1a1a1a] p-3 rounded-lg flex items-center justify-between group hover:bg-[#222] border border-white/5 transition-colors"
                        >
                          <div className="flex items-center space-x-4 overflow-hidden">
                            <span className="text-[10px] font-bold text-white/20 w-6">{idx + 1}</span>
                            <ImageIcon className="w-4 h-4 text-orange-400 flex-shrink-0" />
                            <span className="text-xs font-medium text-white/80 truncate" title={file}>
                              {file.split(/[/\\]/).pop()}
                            </span>
                          </div>
                          <button onClick={() => handleRemoveFromResizeList(idx)} className="p-1.5 rounded hover:bg-red-500/20 text-white/20 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
