import { useState } from "react";
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
  FolderOpen
} from "lucide-react";
import "./styles.css";

const tools = [
  { id: "compress", name: "Compress PDF", icon: FileUp, color: "from-blue-500 to-cyan-400" },
  { id: "word", name: "PDF to Word", icon: FileText, color: "from-blue-600 to-indigo-500" },
  { id: "signature", name: "Signature Extract", icon: Signature, color: "from-purple-500 to-pink-500" },
  { id: "resize", name: "Bulk Image Resize", icon: ImageIcon, color: "from-emerald-500 to-teal-400" },
  { id: "ocr", name: "OCR Tool", icon: ScanLine, color: "from-orange-500 to-yellow-500" },
  { id: "merge", name: "Merge PDF", icon: Files, color: "from-rose-500 to-red-400" },
];

function ToolCard({ tool }: { tool: typeof tools[0] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="glass card-hover p-6 rounded-2xl cursor-pointer flex flex-col items-center justify-center space-y-4 group"
    >
      <div className={`p-4 rounded-xl bg-gradient-to-br ${tool.color} shadow-lg group-hover:shadow-glow transition-all`}>
        <tool.icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-sm font-medium text-slate-200">{tool.name}</h3>
    </motion.div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex h-screen bg-[#0a0c10] text-slate-200 select-none">
      {/* Sidebar */}
      <div className="w-20 lg:w-64 border-r border-white/5 flex flex-col items-center lg:items-stretch p-4 space-y-8 glass mt-4 mb-4 ml-4 rounded-3xl">
        <div className="flex items-center space-x-3 px-4 py-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Files className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 hidden lg:block">
            Pdfova
          </span>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { id: "home", icon: HomeIcon, label: "Dashboard" },
            { id: "files", icon: FolderOpen, label: "Recent Files" },
            { id: "settings", icon: SettingsIcon, label: "Settings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="hidden lg:block font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-8 overflow-hidden">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome, Tamer</h1>
            <p className="text-slate-400 text-sm mt-1">What would you like to do today?</p>
          </div>
        </header>

        {/* Drop Zone */}
        <div className="mb-8 h-48 border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center glass hover:border-primary/50 transition-colors cursor-pointer group">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <FileUp className="text-slate-400 group-hover:text-primary transition-colors" />
          </div>
          <p className="text-slate-400 font-medium">Drag and drop files here to start</p>
          <span className="text-slate-500 text-xs mt-1">Supports PDF, JPG, PNG, WebP</span>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 overflow-y-auto pr-2 pb-8">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>
    </div>
  );
}
