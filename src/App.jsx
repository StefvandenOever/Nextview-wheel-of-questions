import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { secureRandomInt } from "./random.js";
import ShuffleBag from "./shuffleBag.js";
import ConfettiEngine from "../ConfettiEngine.js";

// Confetti engine shared module
const PARTY = new ConfettiEngine(document.getElementById('party-canvas'));

// ---- App UI (slots + editors) ----
const STORAGE_KEYS = { team: "woq_team_v4", questions: "woq_questions_v1", settings: "woq_settings_v7" };
const DEFAULT_QUESTIONS = [
  "✨ If you could instantly master any skill, what would it be?",
  "🍽️ What’s the weirdest food you’ve ever tried?",
  "🎬 If your life was a movie, what would it be called?",
  "✨ Which emoji do you use the most?",
  "✨ If you were a sandwich, what kind would you be?",
  "🎵 What’s your go-to karaoke song?",
  "💼 What was your childhood dream job?",
  "✈️ If you could time travel for a day, where would you go?",
  "✨ What’s the most random fact you know?",
  "✨ If you were famous, what would it be for?",
  "✈️ Mountains or beach — what’s your happy place?",
  "✈️ Which country is at the top of your bucket list?",
  "✈️ What’s the best trip you’ve ever been on?",
  "✈️ Would you rather travel back in time or to the future?",
  "✨ What’s the strangest place you’ve slept?",
  "✨ Have you ever gotten lost somewhere fun?",
  "🍽️ What’s your favourite travel snack?",
  "✨ If you could live anywhere for a year, where would it be?",
  "🍽️ Window seat or aisle seat?",
  "✈️ What’s the most surprising thing you’ve learned while traveling?",
  "✨ Sweet or savoury?",
  "🍽️ What’s your comfort food?",
  "🍽️ Pineapple on pizza — yes or no?",
  "☕ What’s your coffee/tea order?",
  "🍽️ Which dish could you eat every day without getting bored?",
  "🍽️ What food do you refuse to eat?",
  "🍽️ What’s your “signature” dish if you cook?",
  "🍽️ Have you ever tried to recreate a restaurant meal at home?",
  "🍽️ What’s your guilty pleasure snack?",
  "🍽️ What’s the strangest food combination you secretly love?",
  "✨ What hobby would you take up if you had unlimited free time?",
  "✨ What’s the last thing you binged on Netflix/Prime/etc.?",
  "📚 What book changed the way you think?",
  "✨ If you could start a podcast, what would it be about?",
  "✨ What’s something you wish you were better at?",
  "🎵 Do you prefer painting, singing, or dancing?",
  "✨ What’s the weirdest hobby you’ve ever heard of?",
  "✨ What sport do you love to watch?",
  "🎵 If you could learn an instrument instantly, which one?",
  "✨ What hobby do you admire in others but have no interest in yourself?",
  "💼 What’s the first job you ever had?",
  "☕ Coffee before work or during work?",
  "💼 What’s the best advice you’ve ever received?",
  "💼 Which fictional boss would you work for?",
  "💼 Do you prefer working mornings or evenings?",
  "💼 What’s the most unusual thing you’ve done for work?",
  "💼 If you could swap jobs with anyone for a day, who would it be?",
  "💼 What’s your go-to productivity trick?",
  "💼 What’s the funniest work-related story you have?",
  "💼 Which app could you not work without?",
  "✨ Would you rather be able to fly or be invisible?",
  "✨ Would you rather never use a phone again or never use a computer again?",
  "✨ Would you rather have to sing every word you speak or dance everywhere you go?",
  "✨ Would you rather always be too hot or too cold?",
  "✨ Would you rather fight one horse-sized duck or 100 duck-sized horses?",
  "🍽️ Would you rather live without chocolate or without cheese?",
  "✨ Would you rather explore space or the deep ocean?",
  "📚 Would you rather teleport anywhere or read minds?",
  "🍽️ Would you rather have free travel for life or free food for life?",
  "🐾 Would you rather be able to talk to animals or speak every human language?",
  "✨ Morning person or night owl?",
  "🐾 Cats, dogs, or something else entirely?",
  "🍂 Favourite season of the year?",
  "🎨 If you could only wear one colour forever, what would it be?",
  "✈️ Favourite holiday: beach escape or city break?",
  "✨ What’s your ideal way to spend a Sunday?",
  "✨ Do you prefer group activities or solo time?",
  "✨ What’s your all-time favourite TV show?",
  "📚 Do you prefer audio books, e-books, or paper books?",
  "👃 Favourite smell in the world?",
  "💰 If you won the lottery tomorrow, what’s the first thing you’d buy?",
  "✨ If you could swap lives with a celebrity for a week, who would it be?",
  "🐾 If your pet (real or imaginary) could talk, what would it say about you?",
  "🍽️ If you could only eat one meal for the rest of your life, what would it be?",
  "🎵 If you had a personal theme song, what would it be?",
  "✨ If you could have dinner with any historical figure, who would it be?",
  "🐾 If your house caught fire, what’s the one thing you’d grab (people/pets excluded)?",
  "☕ If you had to teach a class on anything, what would it be?",
  "✨ If you could erase one chore forever, which one?",
  "✨ If you could make one thing free for everyone, what would it be?",
  "🧒 What was your favourite cartoon as a kid?",
  "🎵 What’s a song that takes you back instantly?",
  "🎵 What’s the first album you ever bought?",
  "✨ What toy did you love most growing up?",
  "☕ Did you have a favourite teacher in school?",
  "🎲 What was your favourite playground game?",
  "🎬 What’s the first film you remember watching in a cinema?",
  "🍽️ What was your go-to school lunch?",
  "🧒 Did you have a childhood nickname?",
  "✨ What’s the earliest memory you can recall?",
  "☕ Tea or coffee?",
  "✨ Text or call?",
  "🍽️ Pizza or pasta?",
  "✨ Comedy or drama?",
  "🍂 Summer or winter?",
  "🍽️ Cake or pie?",
  "✨ Early bird or night owl?",
  "🎵 Singing or dancing?",
  "🎲 Board games or video games?",
  "✨ Sunrise or sunset?"
];
const DEFAULT_TEAM = ["Alex","Jamie","Sam","Taylor"];

class SoundEngine {
  constructor(){ this.ctx = null; }
  async unlock() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === "suspended") await this.ctx.resume();
    const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
    g.gain.value = 0.0001; o.connect(g).connect(this.ctx.destination); o.start(); o.stop(this.ctx.currentTime + 0.01);
  }
  tone({ freq = 880, dur = 0.08, type = "sine", vol = 0.06 } = {}) {
    if (!this.ctx) return;
    const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
    o.type = type; o.frequency.value = freq; o.connect(g).connect(this.ctx.destination);
    const now = this.ctx.currentTime;
    g.gain.setValueAtTime(vol, now); g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    o.start(now); o.stop(now + dur);
  }
  tick(){ this.tone({ freq: 900, dur: 0.06, type: "triangle", vol: 0.05 }); }
  win(){ [660,880,1320].forEach((f,i)=>setTimeout(()=>this.tone({freq:f,dur:0.09,type:"sine",vol:0.06}), i*90)); }
  crazy(){ [220,330,440,550,660,770,880].forEach((f,i)=>setTimeout(()=>this.tone({freq:f,dur:0.05,type:"square",vol:0.07}), i*50)); }
}
const SFX = new SoundEngine();

const Icon = ({ label, className, children }) => (<span aria-label={label} role="img" className={`inline-block align-middle ${className??""}`}>{children}</span>);
const Icons = {
  party: (cls) => <Icon label="party" className={cls}>🎉</Icon>,
  users: (cls) => <Icon label="users" className={cls}>👥</Icon>,
  plus: (cls) => <Icon label="add" className={cls}>＋</Icon>,
  trash: (cls) => <Icon label="Remove" className={cls}>🗑️</Icon>,
  shuffle: (cls) => <Icon label="shuffle" className={cls}>🔀</Icon>,
  volOn: (cls) => <Icon label="volume on" className={cls}>🔊</Icon>,
  volOff: (cls) => <Icon label="volume off" className={cls}>🔇</Icon>,
  download: (cls) => <Icon label="download" className={cls}>⬇️</Icon>,
  upload: (cls) => <Icon label="upload" className={cls}>⬆️</Icon>,
  eye: (cls) => <Icon label="eye" className={cls}>👁️</Icon>,
  eyeOff: (cls) => <Icon label="hide" className={cls}>🙈</Icon>,
  monitor: (cls) => <Icon label="test sound" className={cls}>📱</Icon>,
  boom: (cls) => <Icon label="boom" className={cls}>💥</Icon>,
};

function Panel({ title, icon, children }){
  return (
    <div className="relative rounded-3xl bg-white/70 backdrop-blur border border-white/30 shadow-xl p-5 overflow-hidden">
      <div className="absolute -inset-32 bg-[conic-gradient(from_0deg,rgba(255,255,255,.25),transparent_30%,transparent_70%,rgba(255,255,255,.25))] animate-huepulse opacity-40"></div>
      <div className="relative flex items-center gap-2 mb-4">{icon}<h2 className="text-lg font-semibold">{title}</h2></div>
      <div className="relative">{children}</div>
    </div>
  );
}

function TeamManager({ team, onToggle, onAdd, onRemove, onSetAll }){
  const [name, setName] = useState("");
  const presentCount = team.filter(t => t.present).length;
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { onAdd(name); setName(""); } }} placeholder="Add teammate name" className="flex-1 rounded-2xl px-4 py-2 bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400" />
        <button type="button" onClick={() => { onAdd(name); setName(""); }} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-amber-500 text-white shadow hover:shadow-lg">{Icons.plus("text-base")} Add</button>
      </div>
      <div className="flex justify-between items-center text-sm text-slate-600">
        <span>Present: <strong>{presentCount}</strong> / {team.length}</span>
        <div className="flex gap-2">
          <button type="button" onClick={() => onSetAll(true)} className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs shadow">All present</button>
          <button type="button" onClick={() => onSetAll(false)} className="px-3 py-1 rounded-full bg-slate-400/90 text-white text-xs shadow">All away</button>
        </div>
      </div>
      <div className="max-h-[380px] overflow-auto pr-1">
        <ul className="divide-y divide-white/40">
          {team.map(p => (
            <li key={p.id} className="flex items-center gap-3 py-2">
              <input type="checkbox" checked={p.present} onChange={() => onToggle(p.id)} className="accent-emerald-600 w-4 h-4" />
              <span className={`flex-1 ${p.present ? "" : "opacity-50"}`}>{p.name}</span>

              <button type="button" onClick={() => onRemove(p.id)} className="p-1.5 rounded-full hover:bg-rose-100/60" title="Remove" aria-label="Remove">{Icons.trash("text-base")}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


function SlotCard({ bigText, smallText, emoji, highlight=false, spotlight=false, spotlightIcon='👑', spotlightSubtitle='On the spot!', spotlightShowBig=true }){
  return (
    <div className="relative flex-1">
      <div className={`relative w-full min-h-[240px] sm:min-h-[260px] rounded-3xl p-4 sm:p-6 bg-white/90 backdrop-blur border border-white/40 shadow-2xl ring-4 ${highlight ? 'ring-amber-300/70' : 'ring-white/30'}`}>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.6),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,.35),transparent_45%)] rounded-3xl" />
        <div className="relative flex items-stretch gap-4 h-full">
          <div className="self-stretch flex-shrink-0 w-20 sm:w-24 flex items-center justify-center rounded-2xl bg-slate-100/80 border border-white/40 text-5xl select-none animate-floaty">
            {emoji || '🎰'}
          </div>
          <div className="flex-1 grid place-items-center text-center px-2">
            <div className="w-full">
              {React.createElement(motion.div, {
                key: bigText,
                initial: { y: 8, opacity: 0, rotate: -0.5 },
                animate: { y: 0, opacity: 1, rotate: 0 },
                transition: { type: 'spring', stiffness: 500, damping: 30 },
                className: "text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-snug whitespace-pre-wrap break-words"
              }, bigText)}
              {smallText && React.createElement(motion.div, {
                key: smallText,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.25 },
                className: "mt-3 text-slate-600 text-base sm:text-lg whitespace-pre-wrap break-words"
              }, smallText)}
            </div>
          </div>
        </div>
      </div>

      {React.createElement(AnimatePresence, null,
        spotlight ? React.createElement('div', { className:"absolute inset-0 rounded-3xl bg-black/40 backdrop-blur-sm flex items-center justify-center z-10" },
          React.createElement(motion.div, {
            initial:{ scale: 0.9, rotate: -2 },
            animate:{ scale: 1, rotate: 0 },
            exit:{ scale: 0.95, opacity: 0 },
            transition:{ type: 'spring', stiffness: 280, damping: 20 },
            className:"px-8 py-6 rounded-3xl bg-white/95 border border-white/40 shadow-2xl text-center"
          },
            React.createElement('div', { className:"text-5xl mb-2" }, spotlightIcon),
            spotlightShowBig ? React.createElement('div', { className:"text-2xl font-extrabold tracking-wide" }, bigText) : null,
            React.createElement('div', { className:"mt-2 text-sm text-slate-500" }, spotlightSubtitle)
          )
        ) : null
      )}
    </div>
  );
}
function QuestionsEditor({ questions, setQuestions }){
  const [draft, setDraft] = useState("");
  function addQuestion(q){ const t = (q||"").trim(); if (!t) return; setQuestions([t, ...questions]); setDraft(""); }
  function removeQuestion(idx){ setQuestions(questions.filter((_, i) => i !== idx)); }
  function resetDefaults(){ if (confirm("Replace all questions with the default set?")) setQuestions(DEFAULT_QUESTIONS); }
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addQuestion(draft)} placeholder="Add a question (tip: start with an emoji!)" className="flex-1 rounded-2xl px-4 py-2 bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
        <button type="button" onClick={() => addQuestion(draft)} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-fuchsia-600 text-white shadow hover:shadow-lg">{Icons.plus("text-base")} Add</button>
      </div>
      <div className="flex justify-between items-center text-sm text-slate-600">
        <span>{questions.length} questions</span>
        <button type="button" onClick={resetDefaults} className="px-3 py-1 rounded-full bg-slate-500/90 text-white text-xs shadow">Reset defaults</button>
      </div>
      <div className="max-h-[380px] overflow-auto pr-1">
        <ul className="divide-y divide-white/40">
          {questions.map((q, i) => (
            <li key={i} className="flex items-start gap-3 py-2">
              <span className="text-slate-500 text-xs mt-1">{i + 1}.</span>
              <span className="flex-1 text-sm">{q}</span>

              <button type="button" onClick={() => removeQuestion(i)} className="p-1.5 rounded-full hover:bg-rose-100/60" title="Remove" aria-label="Remove">{Icons.trash("text-base")}</button>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App(){
  const [team, setTeam] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEYS.team);
    if (raw) {
      try { return JSON.parse(raw); }
      catch { localStorage.removeItem(STORAGE_KEYS.team); }
    }
    const id = () => (crypto.randomUUID ? crypto.randomUUID() : String(Math.random() * 1e9));
    return DEFAULT_TEAM.map(n => ({ id: id(), name: n, present: true }));
  });
  const [questions, setQuestions] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEYS.questions);
    if (raw) {
      try { return JSON.parse(raw); }
      catch { localStorage.removeItem(STORAGE_KEYS.questions); }
    }
    return DEFAULT_QUESTIONS;
  });
  const [settings, setSettings] = useState(() => {
    const raw = localStorage.getItem(STORAGE_KEYS.settings);
    if (raw) {
      try { return JSON.parse(raw); }
      catch { localStorage.removeItem(STORAGE_KEYS.settings); }
    }
    return { sfx: true, showTeam: false, showQuestions: false, party: true };
  });

  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const [slotPersonRunning, setSlotPersonRunning] = useState(false);
  const [slotQuestionRunning, setSlotQuestionRunning] = useState(false);

  const [slotName, setSlotName] = useState("");
  const [slotText, setSlotText] = useState("");

  const [showSpotlight, setShowSpotlight] = useState(false);
  const [showQSpotlight, setShowQSpotlight] = useState(false);

  useEffect(() => { localStorage.setItem(STORAGE_KEYS.team, JSON.stringify(team)); }, [team]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.questions, JSON.stringify(questions)); }, [questions]);
  useEffect(() => { localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings)); }, [settings]);
  useEffect(() => {
    const handler = () => { SFX.unlock().catch(()=>{}); };
    window.addEventListener("pointerdown", handler, { once: true });
    return () => window.removeEventListener("pointerdown", handler);
  }, []);

  const personBag = useRef(new ShuffleBag());
  const questionBag = useRef(new ShuffleBag());

  const presentTeam = useMemo(() => team.filter(t => t.present), [team]);

  useEffect(() => { personBag.current.reset(presentTeam); }, [presentTeam]);
  useEffect(() => { questionBag.current.reset(questions); }, [questions]);

  function pickRandomPersonSlot(){
    if (!presentTeam.length || slotPersonRunning) return;
    setSelectedQuestion(null);
    setSlotPersonRunning(true);
    let i = 0;
    const interval = setInterval(() => {
      const p = presentTeam[i % presentTeam.length];
      setSlotName(p.name);
      if (settings.sfx) SFX.tick();
      if (settings.party && secureRandomInt(100) < 18) PARTY.addRain({ count: 4 });
      i++;
    }, 70);
    const stopAfter = secureRandomInt(800) + 1800;
    setTimeout(() => {
      clearInterval(interval);
      const final = personBag.current.next();
      setSlotName(final.name);
      setSelectedPerson(final);
      setSlotPersonRunning(false);
      setShowSpotlight(true);
      if (settings.party) PARTY.megaShow(4800);
      if (settings.sfx) { SFX.win(); SFX.crazy(); }
      setTimeout(() => setShowSpotlight(false), 2600);
    }, stopAfter);
  }

  function pickRandomQuestionSlot(){
    if (!questions.length || slotQuestionRunning) return;
    setSlotQuestionRunning(true);
    let i = 0;
    const interval = setInterval(() => {
      const q = questions[i % questions.length];
      setSlotText(q);
      if (settings.sfx) SFX.tick();
      if (settings.party && secureRandomInt(100) < 18) PARTY.addRain({ count: 4 });
      i++;
    }, 70);
    const stopAfter = secureRandomInt(800) + 1800;
    setTimeout(() => {
      clearInterval(interval);
      const final = questionBag.current.next();
      setSlotText(final);
      setSelectedQuestion(final);
      setSlotQuestionRunning(false);
      setShowQSpotlight(true);
      if (settings.party) PARTY.megaShow(5000);
      if (settings.sfx) { SFX.win(); SFX.crazy(); }
      setTimeout(() => setShowQSpotlight(false), 2600);
    }, stopAfter);
  }

  function importData(file){
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const payload = JSON.parse(String(reader.result));
        if (Array.isArray(payload.team)) {
          const id = () => (crypto.randomUUID ? crypto.randomUUID() : String(Math.random() * 1e9));
          setTeam(payload.team.map(n => ({
            id: id(),
            name: String(n.name ?? n),
            present: Boolean(n.present ?? true)
          })));
        }
        if (Array.isArray(payload.questions)) setQuestions(payload.questions.map(String));
      } catch {
        alert("Couldn’t import JSON. Make sure it contains { team: [], questions: [] }...");
      }
    };
    reader.readAsText(file);
  }

  function exportData(){
    const blob = new Blob([JSON.stringify({ team: team.map(({ name, present }) => ({ name, present })), questions }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "wheel-of-questions.json"; a.click(); URL.revokeObjectURL(url);
  }

  const layoutCols = settings.showTeam && settings.showQuestions ? "lg:grid-cols-3" : (settings.showTeam || settings.showQuestions) ? "lg:grid-cols-2" : "lg:grid-cols-1";

  return (
    <div className="min-h-screen w-full text-slate-800 relative">
      <header className={`sticky top-0 z-30 backdrop-blur ${settings.party ? 'bg-gradient-to-r from-rose-200/60 via-amber-200/60 to-lime-200/60' : 'bg-white/40'} border-b border-white/20`}>
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <img src="nextview-logo.png" alt="Nextview Consulting" className={`h-7 object-contain ${settings.party ? 'animate-huepulse' : ''}`} />
          <h1 className="text-xl font-semibold">Nextview Wheel of Questions</h1>
          <span className="ml-auto flex items-center gap-2">
            <button type="button" onMouseDown={() => SFX.unlock()} onClick={() => setSettings(s => ({ ...s, sfx: !s.sfx }))} className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-white/60 shadow-sm hover:shadow transition" title={settings.sfx ? "Disable sounds" : "Enable sounds"}>
              {settings.sfx ? "🔊" : "🔇"}<span className="text-sm">SFX</span>
            </button>
            <button type="button" onClick={() => { SFX.unlock(); settings.sfx && SFX.tick(); }} className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-white/60 shadow-sm hover:shadow transition" title="Test sound">
              📱<span className="text-sm">Test</span>
            </button>
            <button type="button" onClick={() => setSettings(s => ({ ...s, showTeam: !s.showTeam }))} className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-white/60 shadow-sm hover:shadow transition" title={settings.showTeam ? "Hide team" : "Show team"}>
              {settings.showTeam ? "🙈" : "👁️"}<span className="text-sm">Team</span>
            </button>
            <button type="button" onClick={() => setSettings(s => ({ ...s, showQuestions: !s.showQuestions }))} className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-white/60 shadow-sm hover:shadow transition" title={settings.showQuestions ? "Hide questions" : "Show questions"}>
              {settings.showQuestions ? "🙈" : "👁️"}<span className="text-sm">Questions</span>
            </button>
            <button type="button" onClick={exportData} className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-white/60 shadow-sm hover:shadow transition" title="Export team & questions">
              ⬇️<span className="text-sm">Export</span>
            </button>
            <label className="cursor-pointer inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-white/60 shadow-sm hover:shadow transition">
              ⬆️<span className="text-sm">Import</span>
              <input type="file" accept="application/json" className="hidden" onChange={(e) => e.target.files && importData(e.target.files[0])} />
            </label>
            <button type="button" onClick={() => setSettings(s => ({ ...s, party: !s.party }))} className={`inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 shadow hover:shadow-lg transition ${settings.party ? 'bg-lime-500 text-white' : 'bg-white/60'}`} title={settings.party ? "Disable party mode" : "Enable party mode"}>
              💥<span className="text-sm">{settings.party ? 'Party ON' : 'Party'}</span>
            </button>
            <button type="button" onClick={() => { PARTY.megaShow(5000); if (settings.sfx){ SFX.unlock(); SFX.crazy(); } }} className="inline-flex items-center gap-2 rounded-2xl px-3 py-1.5 bg-rose-500 text-white shadow hover:shadow-lg">
              🎉 Test Party
            </button>
          </span>
        </div>
      </header>

      <main className={`relative z-10 mx-auto max-w-7xl px-4 py-8 grid grid-cols-1 ${layoutCols} gap-6`}>
        {settings.showTeam && (
          <section>
            <Panel title="Team" icon={"👥"}>
              <TeamManager
                team={team}
                onToggle={(id) => setTeam(t => t.map(p => p.id === id ? ({ ...p, present: !p.present }) : p))}
                onAdd={(name)=>{ const trimmed = (name || "").trim(); if (trimmed) setTeam(t => [{ id: (crypto.randomUUID ? crypto.randomUUID() : String(Math.random() * 1e9)), name: trimmed, present: true }, ...t]); }}
                onRemove={(id)=>{ setTeam(t => t.filter(p => p.id !== id)); if(selectedPerson?.id===id) setSelectedPerson(null); }}
                onSetAll={(present) => setTeam(t => t.map(p => ({ ...p, present })))}
              />
            </Panel>
          </section>
        )}

        <section>
          <Panel title="The Slots" icon={"🎉"}>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                <SlotCard
                  bigText={slotName || "—"}
                  smallText={selectedPerson ? "On the spot!" : "Tap PICK to choose a person"}
                  emoji="👤"
                  highlight={Boolean(selectedPerson)}
                  spotlight={showSpotlight}
                />
                <div className="flex sm:flex-col gap-3 sm:w-40">
                  <button type="button" onClick={pickRandomPersonSlot} disabled={slotPersonRunning || presentTeam.length===0} className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-white shadow hover:shadow-lg active:translate-y-[1px] ${slotPersonRunning || presentTeam.length===0 ? "bg-amber-300 cursor-not-allowed" : "bg-amber-500"}`}>
                    🔀 Pick person
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                <SlotCard
                  bigText={slotText || "—"}
                  smallText={selectedQuestion ? "This is what we'd like to know from you" : "Tap SPIN to get a question"}
                  emoji="❓"
                  highlight={Boolean(selectedQuestion)}
                  spotlight={showQSpotlight}
                  spotlightIcon="❓"
                  spotlightSubtitle="This is what we'd like to know from you"
                  spotlightShowBig={false}
                />
                <div className="flex sm:flex-col gap-3 sm:w-40">
                  <button type="button" onClick={pickRandomQuestionSlot} disabled={slotQuestionRunning || questions.length===0} className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-white shadow hover:shadow-lg active:translate-y-[1px] ${slotQuestionRunning || questions.length===0 ? "bg-fuchsia-300 cursor-not-allowed" : "bg-fuchsia-600"}`}>
                    🔀 Spin question
                  </button>
                </div>
              </div>
            </div>
          </Panel>
        </section>

        {settings.showQuestions && (
          <section>
            <Panel title="Questions" icon={"🎉"}>
              <QuestionsEditor questions={questions} setQuestions={setQuestions} />
            </Panel>
          </section>
        )}
      </main>

      <footer className="mx-auto max-w-7xl px-4 pb-10 -mt-2 text-center text-xs text-slate-700 relative z-10">
        Nextview Wheel of Questions · Party Mode (no external confetti libs) · Built by ChatGPT
      </footer>
    </div>
  );
}

export default App;
