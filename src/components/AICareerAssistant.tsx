import React, { useState, useRef, useEffect } from 'react';
import type { AIMessage, CareerItem } from '../types';
import { Bot, Send, Sparkles, User, Terminal, HelpCircle, ArrowRight, CornerDownLeft, RefreshCw } from 'lucide-react';

interface AICareerAssistantProps {
  careers: CareerItem[];
  onSelectCareer: (careerId: string) => void;
}

const PRESET_PROMPTS = [
  "What careers can I explore after Class 12?",
  "What does cybersecurity actually look like daily?",
  "What skills should I learn right now for AI?",
  "How is software engineering changing in the next 5 years?",
  "What projects can I build before entering college?",
  "Should I choose a degree, polytechnic diploma, or skill path?"
];

export const AICareerAssistant: React.FC<AICareerAssistantProps> = ({ careers, onSelectCareer }) => {
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: 'msg-init',
      sender: 'assistant',
      timestamp: 'Online Now',
      text: "Greetings. I am CareerPath AI — your holographic career intelligence console. I am here to clarify industries, explain daily job realities, and guide your preparation journey after Class 10/12.\n\nRemember: I do not dictate your choices. You are the architect of your future. What domain would you like to explore today?",
      suggestedPrompts: [
        "What careers can I explore after Class 12?",
        "What skills should I learn right now for AI?",
        "What does cybersecurity actually look like daily?"
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const generateAIResponse = (userQuery: string): { text: string; careerId?: string; suggested: string[] } => {
    const q = userQuery.toLowerCase();

    if (q.includes('after class 12') || q.includes('options after 12')) {
      return {
        text: "After Class 12, your options branch broadly based on your stream and cognitive preferences:\n\n1. **Science (PCM)**: Frontier software architecture, Artificial Intelligence & Robotics, CleanTech engineering, Aerospace, or Quantum research.\n2. **Science (PCB)**: Medical surgery, Clinical research, Biotechnology, or Biomedical device engineering.\n3. **Commerce**: FinTech strategy, Investment Banking, Chartered Accountancy, or Corporate Economics.\n4. **Humanities & Arts**: Cyber & Corporate Law, Public Policy leadership, Spatial UI/UX design, or Investigative Journalism.\n\n**Key Insight**: In the modern era, boundaries are fluid. A humanities student can master spatial design; a commerce student can excel in algorithmic trading.",
        suggested: ["What skills should I learn right now for AI?", "What projects can I build before college?"]
      };
    }

    if (q.includes('cybersecurity') || q.includes('security') || q.includes('hacker')) {
      return {
        text: "**Cybersecurity Daily Reality**:\nCyber defense specialists do not spend all day looking at green matrix code. The role is split into two primary paradigms:\n\n- **Offensive (Red Team)**: Emulating adversaries, testing web vulnerabilities (SQL injection, XSS), auditing APIs, and social engineering penetration tests.\n- **Defensive (Blue Team / SOC)**: Monitoring network telemetry in real time, detecting ransomware intrusions, isolating infected host memory, and implementing zero-trust identity architectures.\n\n**Where it is going**: Transitioning rapidly into autonomous AI defensive agents and post-quantum encryption protocols.",
        careerId: 'cybersecurity-specialist',
        suggested: ["What does an AI Engineer do?", "What projects can I build before college?"]
      };
    }

    if (q.includes('ai') || q.includes('artificial intelligence') || q.includes('machine learning')) {
      return {
        text: "**Essential Skills for AI Preparation**:\nTo build a rock-solid foundation for Artificial Intelligence before or during college:\n\n1. **High School Math**: Comfort with linear algebra (matrices, dot products) and multivariable calculus (gradients, partial derivatives).\n2. **Core Programming**: Python syntax, list comprehensions, and data libraries (NumPy, Pandas).\n3. **Deep Learning Framework**: PyTorch tensor operations and training loops.\n4. **Emerging Architectures**: Understanding transformer attention mechanisms, retrieval-augmented generation (RAG), and multi-agent systems.\n\n**Actionable Step**: Start with Harvard CS50P, then follow Andrej Karpathy's 'Neural Networks: Zero to Hero'.",
        careerId: 'ai-engineer',
        suggested: ["What projects can I build before entering college?", "How is software engineering changing?"]
      };
    }

    if (q.includes('software') || q.includes('changing') || q.includes('future of code')) {
      return {
        text: "**How Software Engineering Is Transforming**:\nWriting repetitive boilerplate syntax is being automated by AI coding assistants. However, software architects are more vital than ever because:\n\n- **System Architecture**: Determining data boundaries, microservice contracts, and database replication.\n- **Reliability & Edge**: Deploying WebAssembly micro-runtimes and local-first offline syncing.\n- **AI Orchestration**: Guiding AI code-generation agents, debugging subtle race conditions, and enforcing security audits.\n\n**Takeaway**: Move beyond basic syntax. Focus on system design, data structures, and end-to-end user experience.",
        careerId: 'fullstack-software-architect',
        suggested: ["What projects can I build before entering college?", "What careers can I explore after Class 12?"]
      };
    }

    if (q.includes('project') || q.includes('build before college')) {
      return {
        text: "**Top 3 Proof-of-Work Projects for High Schoolers**:\n\n1. **Intelligent Study Notes Assistant**: A local web app that ingests your Class 11/12 textbook chapters as PDFs and quizzes you using an AI API.\n2. **Local Network Packet Inspector**: A Python program using Scapy that displays live network traffic and alerts you when insecure HTTP passwords pass through.\n3. **Interactive 3D Web Experience**: A mini physics simulation or portfolio crafted in Spline or Three.js demonstrating spatial interaction.\n\nPublish these on GitHub with clean README documentation!",
        suggested: ["What skills should I learn right now for AI?", "What does cybersecurity actually look like daily?"]
      };
    }

    // Default intelligent response
    return {
      text: `Regarding **${userQuery}**:\n\nThe modern workforce rewards students who cultivate a "T-shaped" skillset: deep conceptual competence in one domain (such as programming, biological sciences, or legal reasoning) combined with broad curiosity across adjacent fields (like AI literacy, communication, and economics).\n\nExplore our interactive career catalog to compare verified growth rates, salary metrics, and education options without pressure.`,
      suggested: ["What careers can I explore after Class 12?", "What skills should I learn right now for AI?"]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputVal;
    if (!text.trim()) return;

    const userMsg: AIMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      timestamp: 'Just now',
      text: text.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAIResponse(text);
      const botMsg: AIMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        timestamp: 'Just now',
        text: response.text,
        linkedCareerId: response.careerId,
        suggestedPrompts: response.suggested
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section className="relative py-24 px-4 max-w-5xl mx-auto" id="ai-assistant">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <Bot className="w-3.5 h-3.5" />
          <span>Holographic Career Intelligence</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-4">
          CareerPath AI Assistant.
        </h2>
        <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
          Ask questions freely about streams, daily work reality, changing skills, and college preparation. Impartial guidance designed to empower your independent choices.
        </p>
      </div>

      {/* Futuristic AI Console Terminal */}
      <div className="glass-panel-glow rounded-3xl border border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col h-[650px] relative">
        {/* Terminal Header */}
        <div className="p-4 bg-gray-950/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="text-xs font-mono text-cyan-300 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>CAREERPATH_AI // NEURAL CONSOLE v4.2</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>READY</span>
          </div>
        </div>

        {/* Chat Message Scroll Window */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 scrollbar-none">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-3xl ${isUser ? 'ml-auto flex-row-reverse' : ''}`}
              >
                {/* Avatar Icon */}
                <div
                  className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center ${
                    isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gradient-to-tr from-cyan-400 to-indigo-600 text-white shadow-md shadow-cyan-500/30'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className={`space-y-2 ${isUser ? 'text-right' : 'text-left'}`}>
                  {/* Message Bubble */}
                  <div
                    className={`p-4 sm:p-5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      isUser
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'glass-panel border border-white/10 text-gray-200 rounded-tl-none font-light'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>

                    {/* Linked Career Quick Jump */}
                    {msg.linkedCareerId && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <button
                          onClick={() => onSelectCareer(msg.linkedCareerId!)}
                          className="px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-cyan-400/30"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Inspect Full Career Roadmap & Future</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Preset Suggestions */}
                  {msg.suggestedPrompts && msg.suggestedPrompts.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.suggestedPrompts.map((prompt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(prompt)}
                          className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 border border-white/10 transition-all cursor-pointer"
                        >
                          💬 {prompt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex gap-3 max-w-md">
              <div className="w-8 h-8 rounded-xl shrink-0 bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Bot className="w-4 h-4" />
              </div>
              <div className="glass-panel px-4 py-3 rounded-2xl text-xs text-cyan-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Analyzing Career Matrix...</span>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-gray-950/80 border-t border-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask CareerPath AI anything about careers, skills, streams, or preparation..."
              className="flex-1 py-3 px-4 rounded-2xl bg-gray-900 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isTyping}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>Transmit</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
