import React from 'react';

// Devopstrio Azure OpenAI Secure Reference
// Executive AI Foundation Command Center & Platform Engineering Dashboard

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#020205] text-slate-100 font-sans selection:bg-purple-500/30">
            {/* Global AI Platform Header */}
            <header className="border-b border-white/5 bg-black/60 backdrop-blur-3xl sticky top-0 z-50">
                <div className="max-w-screen-2xl mx-auto px-10 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-black text-white shadow-[0_0_25px_rgba(147,51,234,0.4)] border border-white/10 relative overflow-hidden">
                            AI
                            <div className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full m-1 border border-black shadow-[0_0_50px_10px_rgba(192,132,252,0.5)]"></div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-white tracking-widest leading-none uppercase">OpenAI Secure Foundation</h1>
                            <p className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.3em] mt-2 italic">Production-Ready GenAI Architectures</p>
                        </div>
                    </div>
                    <nav className="flex gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
                        <a href="#" className="text-purple-400 border-b-2 border-purple-500 pb-10 pt-10">AI Control</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Blueprints</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Model Hub</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">PromptOps</a>
                        <a href="#" className="hover:text-white transition-all pt-10 pb-10">Responsible AI</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-screen-2xl mx-auto px-10 py-12">

                {/* Global AI Health KPIs */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    {[
                        { label: 'Total Inferences (24h)', value: '14,200', status: 'Healthy', color: 'purple' },
                        { label: 'Average Latency', value: '1,240ms', status: 'Within SLA', color: 'emerald' },
                        { label: 'PII Redacted', value: '842', status: 'Auto-Blocked', color: 'emerald' },
                        { label: 'Total Program Cost', value: '£1,420', status: 'Under Budget', color: 'purple' }
                    ].map((kpi, idx) => (
                        <div key={idx} className="bg-neutral-900/40 p-10 rounded-[2.5rem] border border-white/5 hover:border-purple-500/40 transition-all shadow-2xl relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/10 transition-all"></div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">{kpi.label}</span>
                            <div className="text-4xl font-black text-white tracking-tighter mb-4 font-mono">{kpi.value}</div>
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full bg-${kpi.color}-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]`}></div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{kpi.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Automation Intelligence & AI Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">

                    {/* Live Inference & Guardrail Feed */}
                    <div className="xl:col-span-2 bg-neutral-900 p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <h2 className="text-3xl font-black text-white tracking-tight">Enterprise Model Orchestration</h2>
                                <p className="text-slate-400 text-sm mt-2 max-w-lg">Monitoring global inference traffic, responsible AI guardrail triggers, and RAG knowledge base utilization across all business units.</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-black hover:bg-neutral-800 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border border-white/10">
                                    Export AI Audit Logs
                                </button>
                                <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-purple-900/40">
                                    Deploy New Blueprint
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[
                                { name: 'Finance Knowledge Bot', model: 'GPT-4o', latency: '1,120ms', status: 'Healthy', icon: 'zap' },
                                { name: 'Legal Drafting Hub', model: 'GPT-4-mini', latency: '640ms', status: 'Healthy', icon: 'file' },
                                { name: 'IT Support Copilot', model: 'GPT-4o', latency: '1,420ms', status: 'Policy-Warning', icon: 'message' },
                                { name: 'Marketing Studio v2', model: 'GPT-4o', latency: '1,280ms', status: 'Healthy', icon: 'image' }
                            ].map((row, idx) => (
                                <div key={idx} className="p-8 bg-black/40 rounded-[2rem] border border-white/5 group hover:border-purple-500/20 transition-all flex justify-between items-center">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center border border-purple-500/20">
                                            <span className="text-purple-400 text-xs font-black italic">{row.icon[0].toUpperCase()}</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-black text-white">{row.name}</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Provider: {row.model}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-12">
                                        <div className="w-32 text-right">
                                            <div className="text-[9px] font-black text-slate-500 uppercase mb-1">Avg Latency</div>
                                            <div className="text-lg font-black text-white font-mono">{row.latency}</div>
                                        </div>
                                        <div className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${row.status === 'Healthy' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-orange-500/10 text-orange-400'}`}>
                                            {row.status}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reference Blueprint & Security Stack */}
                    <div className="flex flex-col gap-10">
                        <div className="bg-neutral-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl flex-1 flex flex-col">
                            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-8 border-b border-purple-500/20 pb-6">AI Deployment Catalog</h3>
                            <div className="space-y-8 flex-1">
                                {[
                                    { bp: 'Enterprise Chat Assistant', type: 'Hardened', drift: 'Low', color: 'purple' },
                                    { bp: 'Knowledge RAG Platform', type: 'Private-Link', drift: 'Low', color: 'purple' },
                                    { bp: 'Autonomous Ops Agent', type: 'Experimental', drift: 'Medium', color: 'orange' },
                                    { bp: 'Executive Insights AI', type: 'Air-Gapped', drift: 'None', color: 'purple' }
                                ].map((b, i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-xs font-bold text-slate-300 group-hover:text-purple-400 transition-colors uppercase tracking-tight">{b.bp}</span>
                                            <span className="text-[10px] font-black text-slate-500 font-mono tracking-widest">{b.type}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full bg-${b.color}-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]`}></div>
                                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Logic Drift: {b.drift}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-10 bg-black hover:bg-neutral-800 text-white text-[11px] font-black py-4 rounded-2xl border border-white/10 uppercase tracking-widest transition-all">
                                Manage Blueprints
                            </button>
                        </div>

                        <div className="bg-purple-600 p-10 rounded-[3rem] shadow-[0_0_50px_rgba(147,51,234,0.3)] relative overflow-hidden group border border-white/10">
                            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-all"></div>
                            <h4 className="text-[10px] font-black text-purple-200 uppercase tracking-widest mb-4 leading-none">Responsible AI Insight</h4>
                            <div className="text-2xl font-black text-white tracking-tight mb-4">Prompt Filter Triggered</div>
                            <p className="text-xs text-white/90 font-black px-6 py-4 rounded-2xl bg-black/20 shadow-xl leading-relaxed">
                                System successfully blocked a jailbreak attempt on the 'Legal Hub' endpoint from user ID 882.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Cognitive Intelligence & Cost Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div className="bg-neutral-900 p-10 rounded-[3.5rem] border border-white/5 shadow-xl relative overflow-hidden">
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-3">Model Distribution (Tokens)</h5>
                                <div className="text-3xl font-black text-white font-mono tracking-tighter">1.4B <span className="text-xs font-bold text-emerald-400 ml-1 uppercase tracking-normal">SENT</span></div>
                            </div>
                            <div className="text-right text-[10px] font-black text-slate-500 uppercase italic">Monthly Aggregate</div>
                        </div>
                        <div className="flex items-end gap-1.5 h-32 px-2">
                            {[12, 28, 42, 14, 18, 32, 64, 42, 28, 14, 12, 18, 22, 38, 54, 42, 48, 22, 18, 14, 12, 10].map((v, i) => (
                                <div key={i} className="flex-1 bg-purple-500/20 rounded-t-lg hover:bg-purple-500 transition-all relative group cursor-pointer" style={{ height: `${v}%` }}>
                                    <div className="absolute -top-10 left-1/2 -ms-4 opacity-0 group-hover:opacity-100 bg-white text-black text-[10px] font-black px-2 py-1 rounded shadow-xl pointer-events-none transition-all">
                                        {v}M Tokens
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-neutral-900 p-10 rounded-[3.5rem] border border-white/5 shadow-xl flex flex-col justify-between">
                        <div>
                            <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-10 border-b border-purple-500/20 pb-4">Responsible AI Performance</h5>
                            <div className="space-y-6">
                                {[
                                    { metric: 'Hallucination Suppression Rate', score: '99.2%', color: 'emerald' },
                                    { metric: 'Inappropriate Content Filtering', score: '100%', color: 'emerald' },
                                    { metric: 'System Prompt Integrity', score: '98%', color: 'emerald' },
                                    { metric: 'Data Sovereignty Compliance', score: '100%', color: 'purple' }
                                ].map((row, idx) => (
                                    <div key={idx} className="flex justify-between items-center group cursor-pointer">
                                        <div>
                                            <div className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors uppercase tracking-tight mb-1">{row.metric}</div>
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Continuous Logic Validation</div>
                                        </div>
                                        <div className={`text-[11px] font-black text-${row.color}-400 font-mono`}>{row.score}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="w-full mt-10 bg-white hover:bg-slate-200 text-black text-[11px] font-black py-4 rounded-2xl uppercase tracking-widest transition-all">
                            View Global AI Audit Report
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
