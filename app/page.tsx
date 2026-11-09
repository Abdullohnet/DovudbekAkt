'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Globe2,
  Menu,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react'

const categoryDescriptions: Record<string, string> = {
  Barchasi: 'Kompyuter va raqamli dunyo bo‘yicha barcha asosiy mavzular jamlanmasi.',
  Hardware: 'Kompyuterning jismoniy qismlari: plata, protsessor, xotira va boshqa qurilmalar.',
  Software: 'Dasturlar, operatsion tizimlar va kompyuterda ishlaydigan raqamli vositalar.',
  Tarmoqlar: 'Qurilmalar, internet, IP manzil va tarmoqlar qanday bog‘lanishini o‘rganing.',
  Dasturlash: 'Kod yozish, algoritmlar va dasturlash tillari yordamida yechim yaratish.',
  "Ma'lumotlar bazasi": 'Ma’lumotlarni tartibli saqlash, izlash va boshqarish asoslari.',
  'Web dasturlash': 'Saytlarning tuzilishi, dizayni va interaktivligini yaratish yo‘llari.',
  'Sunʼiy intellekt': 'Mashinalarga ma’lumotlardan o‘rganish va aqlli qarorlar qabul qilishni o‘rgatish.',
  Kiberxavfsizlik: 'Hisoblar, qurilmalar va ma’lumotlarni internetdagi xavflardan himoyalash.',
}

const categories = [
  { name: 'Barchasi', count: 86, icon: Sparkles },
  { name: 'Hardware', count: 18, icon: Boxes },
  { name: 'Software', count: 12, icon: Terminal },
  { name: 'Tarmoqlar', count: 14, icon: Network },
  { name: 'Dasturlash', count: 10, icon: Code2 },
  { name: "Ma'lumotlar bazasi", count: 10, icon: Database },
  { name: 'Web dasturlash', count: 9, icon: Globe2 },
  { name: 'Sunʼiy intellekt', count: 8, icon: BrainCircuit },
  { name: 'Kiberxavfsizlik', count: 5, icon: ShieldCheck },
]

const topics = [
  { title: 'Ona plata', category: 'Hardware', level: 'Boshlang‘ich', time: '8 daqiqa', icon: '◈', color: 'blue', desc: 'Kompyuterning barcha qismlarini bog‘lovchi asosiy plata.' },
  { title: 'Protsessor (CPU)', category: 'Hardware', level: 'Boshlang‘ich', time: '10 daqiqa', icon: '⌁', color: 'violet', desc: 'Buyruqlarni qayta ishlovchi va hisob-kitoblarni bajaruvchi markaz.' },
  { title: 'Python dasturlash', category: 'Dasturlash', level: 'Boshlang‘ich', time: '15 daqiqa', icon: '</>', color: 'yellow', desc: 'Sodda sintaksisga ega, kuchli va universal dasturlash tili.' },
  { title: 'IP address va DNS', category: 'Tarmoqlar', level: 'O‘rta', time: '12 daqiqa', icon: '⌘', color: 'cyan', desc: 'Internetdagi qurilmalar qanday topilishi va muloqot qilishi.' },
  { title: 'SQL asoslari', category: "Ma'lumotlar bazasi", level: 'O‘rta', time: '14 daqiqa', icon: '▤', color: 'orange', desc: 'Maʼlumotlar bazasi bilan ishlash uchun asosiy buyruqlar.' },
  { title: 'HTML & CSS', category: 'Web dasturlash', level: 'Boshlang‘ich', time: '18 daqiqa', icon: '#_', color: 'pink', desc: 'Web sahifalarning tuzilishi va ko‘rinishini yaratish.' },
  { title: 'Machine Learning', category: 'Sunʼiy intellekt', level: 'O‘rta', time: '20 daqiqa', icon: '✦', color: 'green', desc: 'Kompyuterga maʼlumotlardan o‘rganishni o‘rgatish.' },
  { title: 'Phishingdan himoyalanish', category: 'Kiberxavfsizlik', level: 'Boshlang‘ich', time: '9 daqiqa', icon: '⌑', color: 'red', desc: 'Internetdagi aldov va xavflarni aniqlash usullari.' },
]

export default function Page() {
  const [activeCategory, setActiveCategory] = useState('Barchasi')
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<(typeof topics)[number] | null>(null)

  const filteredTopics = useMemo(() => topics.filter((topic) => {
    const categoryMatch = activeCategory === 'Barchasi' || topic.category === activeCategory
    const queryMatch = `${topic.title} ${topic.category} ${topic.desc}`.toLowerCase().includes(query.toLowerCase())
    return categoryMatch && queryMatch
  }), [activeCategory, query])

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Dovudbek's akt-website bosh sahifa">
          <span className="brand-mark"><span /></span>
          <span>Dovudbek&apos;s <span>akt-website</span></span>
        </a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
          <a className="active" href="#top">Bosh sahifa</a>
          <a href="#mavzular">Mavzular</a>
          <a href="#loyihalar">Loyihalar</a>
          <a href="#haqida">Biz haqimizda</a>
        </nav>
        <div className="header-actions">
          <button className="search-button" onClick={() => document.getElementById('search')?.focus()} aria-label="Qidirish"><Search size={18} /></button>
          <button className="login-button">Kirish</button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menyu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> BILIM OLAMI</div>
          <h1>Texnologiyani<br /><em>birga o‘rganamiz.</em></h1>
          <p>Kompyuter, dasturlash va zamonaviy texnologiyalar haqida sodda va tushunarli darslar.</p>
          <div className="hero-buttons"><a className="primary-cta" href="#mavzular">O‘rganishni boshlash <ArrowRight size={17} /></a><a className="text-cta" href="#haqida">Ko‘proq bilish <ChevronRight size={16} /></a></div>
          <div className="hero-stats"><div><strong>86+</strong><span>Mavzular</span></div><div><strong>24</strong><span>Amaliy loyiha</span></div><div><strong>100%</strong><span>Bepul</span></div></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="grid-plane" />
          <div className="terminal-card"><div className="terminal-top"><span /><span /><span /><b>techbilim.py</b></div><div className="terminal-line"><i>01</i><span className="purple">def</span> <span className="blue">o'rganish</span>():</div><div className="terminal-line indent"><i>02</i><span className="muted"># Bilim — kelajak</span></div><div className="terminal-line indent"><i>03</i><span className="purple">return</span> <span className="green">"Salom, dunyo!"</span></div><div className="terminal-line"><i>04</i></div><div className="terminal-line"><i>05</i><span className="blue">print</span>(o'rganish())</div></div>
          <div className="floating-chip chip-one"><Code2 size={16} /> <span>CODE</span></div><div className="floating-chip chip-two"><BrainCircuit size={16} /> <span>AI</span></div><div className="floating-chip chip-three"><Network size={16} /> <span>NETWORK</span></div>
        </div>
      </section>

      <section className="explore-section" id="mavzular">
        <div className="section-heading"><div><p className="eyebrow">BILIM KATALOGI</p><h2>O‘zingizga mos mavzuni toping</h2></div><p className="heading-note">Bilimni bosqichma-bosqich egallang.<br />Har bir mavzu — yangi imkoniyat.</p></div>
        <div className="explore-layout">
          <aside className="category-panel"><div className="panel-label">KATEGORIYALAR</div>{categories.map((category) => { const Icon = category.icon; return <button key={category.name} className={activeCategory === category.name ? 'category active' : 'category'} onClick={() => setActiveCategory(category.name)}><Icon size={17} /><span>{category.name}</span><small>{category.count}</small></button> })}<div className="category-info"><span className="info-kicker">TANLANGAN KATEGORIYA</span><strong>{activeCategory}</strong><p>{categoryDescriptions[activeCategory]}</p></div></aside>
          <div className="topics-area"><div className="search-row"><label className="search-field"><Search size={18} /><input id="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Mavzu qidiring..." /></label><span className="result-count">{filteredTopics.length} ta mavzu</span></div><div className="topic-grid">{filteredTopics.map((topic) => <article className="topic-card" key={topic.title} onClick={() => setSelectedTopic(topic)}><div className={`topic-icon ${topic.color}`}>{topic.icon}</div><div className="topic-meta"><span>{topic.category}</span><span>·</span><span>{topic.time}</span></div><h3>{topic.title}</h3><p>{topic.desc}</p><div className="card-footer"><span className={`level ${topic.level === 'O‘rta' ? 'medium' : ''}`}><CheckCircle2 size={14} /> {topic.level}</span><button aria-label={`${topic.title} mavzusini ochish`}><ArrowRight size={16} /></button></div></article>)}</div>{filteredTopics.length === 0 && <div className="empty-state">Mavzu topilmadi. Boshqa so‘z bilan qidirib ko‘ring.</div>}</div>
        </div>
      </section>

      {selectedTopic && <div className="topic-modal-backdrop" role="presentation" onClick={() => setSelectedTopic(null)}><div className="topic-modal" role="dialog" aria-modal="true" aria-labelledby="topic-modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedTopic(null)} aria-label="Yopish"><X size={20} /></button><div className={`topic-icon ${selectedTopic.color}`}>{selectedTopic.icon}</div><div className="topic-meta"><span>{selectedTopic.category}</span><span>·</span><span>{selectedTopic.time}</span></div><h2 id="topic-modal-title">{selectedTopic.title}</h2><p>{selectedTopic.desc}</p><div className="modal-note"><BookOpen size={18} /><span>Bu mavzuda asosiy tushunchalar va amaliy misollarni sodda tilda o‘rganasiz.</span></div><button className="primary-cta" onClick={() => setSelectedTopic(null)}>Tushunarli</button></div></div>}

      <section className="project-banner" id="loyihalar"><div><p className="eyebrow">AMALIYOT VAQTI</p><h2>Bilimni loyihaga aylantiring.</h2><p>O‘rganganlaringizni real loyihalarda sinab ko‘ring. Tayyor kodlar va bosqichma-bosqich yo‘riqnomalar bilan.</p></div><a className="outline-cta" href="#mavzular">Loyihalarni ko‘rish <ArrowRight size={16} /></a></section>
      <footer id="haqida"><div className="brand"><span className="brand-mark"><span /></span><span>tech<span>bilim</span></span></div><p>Texnologiyani sodda tilda o‘rgatuvchi platforma.</p><span>© 2026 techbilim</span></footer>
    </main>
  )
}
