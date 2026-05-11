/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  BookOpen, 
  User, 
  Briefcase, 
  ShoppingCart, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  TrendingDown,
  Globe,
  Navigation,
  Info,
  ChevronDown,
  Brain,
  XCircle,
  Building2,
  Scale,
  GraduationCap,
  Building,
  ClipboardCheck,
  Users,
  FileSignature,
  BadgeCheck,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  Gavel,
  Mail,
  Hourglass,
  Ban,
  RefreshCw,
  Banknote,
  ListOrdered
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CHAPTERS = [
  { id: 'kaufmann', title: 'Kaufmann & Handelspraktiken', icon: Briefcase },
  { id: 'gesellschaften', title: 'Gesellschaften', icon: Building2 },
  { id: 'insolvenz', title: 'Insolvenz', icon: Scale },
];

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Wer ist ein Kaufmann im Sinne des Handelsrechts?",
    options: [
      "Jeder, der Waren kauft und verkauft.",
      "Wer Handelsgeschäfte ausführt und dies zu seinem gewöhnlichen Beruf macht.",
      "Nur juristische Personen, wie GmbHs.",
      "Jeder Angestellte eines Unternehmens."
    ],
    correctAnswerIndex: 1,
    explanation: "Ein Kaufmann führt Handelsgeschäfte aus und macht dies zu seinem Haupt- oder Nebenberuf, mit der Absicht, Gewinn zu erzielen."
  },
  {
    id: 2,
    question: "Welches Gesetzbuch hat bei Handelsgeschäften Vorrang?",
    options: [
      "Das Zivilrecht",
      "Das Strafgesetzbuch",
      "Das Handelsgesetzbuch (Code de commerce)",
      "Das Verbraucherschutzgesetz"
    ],
    correctAnswerIndex: 2,
    explanation: "Das Handelsgesetzbuch hat Vorrang vor dem Zivilrecht."
  },
  {
    id: 3,
    question: "Wann genau ist der Schlussverkauf (Soldes) im Juli erlaubt?",
    options: [
      "Vom 1. Juli bis zum 31. Juli.",
      "Vom 3. Juli bis zum 31. Juli.",
      "Den ganzen August.",
      "Das Unternehmen kann den Zeitraum selbst bestimmen."
    ],
    correctAnswerIndex: 0,
    explanation: "Der Schlussverkauf findet gesetzlich geregelt vom 1. Juli bis 31. Juli (sowie 3. Jan bis 31. Jan) statt."
  },
  {
    id: 4,
    question: "Wie definiert das Gesetz ein Handelsgeschäft der 'Distribution' (Verteilung)?",
    options: [
      "Wenn man Waren selbst produziert.",
      "Wenn man Waren für private Zwecke kauft.",
      "Der Einkauf von Waren mit der Absicht, sie mit Gewinn weiterzuverkaufen.",
      "Die kostenlose Verteilung von Mustern."
    ],
    correctAnswerIndex: 2,
    explanation: "Die Verkaufs- oder Vermietabsicht muss bereits beim Einkauf der Waren bestehen (der 'Goldene Moment')."
  },
  {
    id: 5,
    question: "Wie werden unklare Klauseln in Verbraucherverträgen ausgelegt?",
    options: [
      "Zugunsten des Unternehmens.",
      "Es entscheidet immer ein Richter.",
      "Der Vertrag wird komplett ungültig.",
      "Immer zugunsten des Verbrauchers."
    ],
    correctAnswerIndex: 3,
    explanation: "Unklare Klauseln werden immer zugunsten des Verbrauchers ausgelegt (Verbraucherschutz)."
  }
];

export default function App() {
  const [activeChapter, setActiveChapter] = useState('kaufmann');

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
              <BookOpen size={24} />
            </div>
            <h1 className="font-display font-bold text-xl tracking-tight text-slate-800">JuraMaster</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-1">
            {CHAPTERS.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveChapter(c.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeChapter === c.id 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                <c.icon size={16} className={activeChapter === c.id ? "text-indigo-600" : "text-slate-400"} />
                {c.title}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
              Prüfungsvorbereitung
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pt-12 pb-24 space-y-24">
        {activeChapter === 'kaufmann' && (
          <div className="space-y-24 animate-in fade-in duration-500">
            {/* Intro */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto space-y-6"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Handelsrecht & <span className="text-indigo-600 uppercase">Handelspraktiken</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Deine strukturierte Zusammenfassung für die Prüfung. Reduziert auf das Wesentliche, ideal zum Lernen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <Info size={16} className="text-indigo-500" />
              Basierend auf dem Code de commerce
            </div>
          </div>
        </motion.section>

        {/* Part 1: Grundlagen */}
        <section id="part1" className="scroll-mt-24 space-y-8">
          <SectionHeader 
            title="TEIL 1: Grundlagen des Handelsrechts" 
            subtitle="Das Sonderrecht der Kaufleute" 
            color="indigo" 
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Was ist Handelsrecht?" className="border-indigo-100">
              <p className="text-slate-600 mb-4">Regelt die Rechtsverhältnisse zwischen Unternehmen mit dem Ziel von Schnelligkeit und Rechtssicherheit.</p>
              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-start gap-3">
                <CheckCircle2 className="text-indigo-600 mt-1 shrink-0" size={18} />
                <p className="text-sm text-indigo-900 font-medium italic">Vorrangregel: Das Handelsgesetzbuch (Code de commerce) hat Vorrang vor dem Zivilrecht!</p>
              </div>
            </Card>

            <Card title="Definition: Der Kaufmann" className="border-indigo-100">
              <p className="text-slate-600">Jemand, der Handelsgeschäfte zu seinem gewöhnlichen Beruf macht (mit Gewinnabsicht).</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Natürliche Person (Menschen)
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Juristische Person (Gesellschaften)
                </li>
              </ul>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h4 className="font-display font-bold text-xl flex items-center gap-2">
                <User size={20} className="text-indigo-600" />
                Die 4 Bedingungen
              </h4>
              <div className="grid gap-4">
                {[
                  { t: 'Fähigkeit', d: 'Mind. 18 Jahre & hohe Autonomie.' },
                  { t: 'Ausführung', d: 'Tatsächliche Handelsgeschäfte.' },
                  { t: 'Eigenkonto', d: 'Nicht als Angestellter (Gesellschaft ist Kaufmann).' },
                  { t: 'Gewöhnlicher Beruf', d: 'Regelmäßiger Charakter.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <span className="flex-none w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </span>
                    <div>
                      <h5 className="font-semibold text-slate-800">{item.t}</h5>
                      <p className="text-sm text-slate-500">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                  <AlertCircle size={120} />
               </div>
               <h4 className="font-display font-bold text-xl flex items-center gap-2 text-amber-700">
                <AlertCircle size={20} />
                Pflichten (Sehr prüfungsrelevant!)
              </h4>
              <div className="space-y-3">
                {[
                  'Eintragung beim Unternehmensschalter',
                  'Eröffnung eines Bankkontos',
                  'Führen einer Buchhaltung (Beweismittel)',
                  'Veröffentlichung des Ehevertrags',
                  'Erklärung bei Zahlungseinstellung (Insolvenz)',
                  'Eintragung bei MwSt.-Amt & Sozialkasse'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <CheckCircle2 size={16} className="text-indigo-500" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: Handelsgeschäfte */}
        <section id="part2" className="scroll-mt-24 space-y-8">
          <SectionHeader 
            title="TEIL 2: Die Handelsgeschäfte (Art. 2)" 
            subtitle="Kategorisierung nach Code de commerce" 
            color="emerald" 
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: 'Distribution', d: 'Einkauf von Waren mit Verkaufsabsicht.', icon: ShoppingCart },
              { t: 'Produktion', d: 'Fabriken, Bau, Handwerker mit Materiallieferung.', icon: Briefcase },
              { t: 'Dienstleistungen', d: 'Transport, Energie, Banken, Versicherungen, Kinos.', icon: Globe },
              { t: 'Zwischenhändler', d: 'Makler- oder Kommissionsgeschäfte.', icon: ArrowRight },
            ].map((item, i) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={i} 
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-lg text-slate-800">{item.t}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-emerald-900 text-white rounded-3xl p-8 shadow-xl">
            <div className="max-w-2xl">
              <h4 className="text-emerald-400 font-bold tracking-wider text-xs uppercase mb-2">Merksatz für die Prüfung</h4>
              <p className="text-2xl font-display font-medium leading-relaxed">
                Der "Goldene Moment": Die Verkaufs- oder Vermietabsicht muss bereits <span className="text-emerald-400 underline decoration-2 underline-offset-4">zum Zeitpunkt des Einkaufs</span> bestehen!
              </p>
            </div>
          </div>
        </section>

        {/* Part 3: Praktiken */}
        <section id="part3" className="scroll-mt-24 space-y-12">
          <SectionHeader 
            title="TEIL 3: Handelspraktiken & Verbraucherschutz" 
            subtitle="Regeln für den Markt" 
            color="purple" 
          />

          <div className="grid md:grid-cols-3 gap-6">
             <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col gap-4">
                <h5 className="font-bold text-purple-700 uppercase text-xs tracking-widest">Werbung</h5>
                <h4 className="font-display font-bold text-xl">Vergleichende Werbung</h4>
                <p className="text-sm text-slate-500">Erlaubt unter Bedingungen:</p>
                <ul className="space-y-2 mt-auto">
                   <li className="text-xs bg-slate-100 p-2 rounded-lg">Nicht irreführend</li>
                   <li className="text-xs bg-slate-100 p-2 rounded-lg">Objektive Eigenschaften (Preis)</li>
                   <li className="text-xs bg-slate-100 p-2 rounded-lg">Keine Herabsetzung</li>
                </ul>
             </div>

             <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 space-y-6">
                <div className="flex items-center gap-3">
                  <TrendingDown className="text-purple-600" />
                  <h4 className="font-display font-bold text-2xl">Ausverkauf vs. Schlussverkauf</h4>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h5 className="font-bold flex items-center justify-between">
                      A) Ausverkauf <span className="text-[10px] font-normal text-slate-400">LIQUIDATION</span>
                    </h5>
                    <p className="text-sm text-slate-600 leading-normal">
                      Strenge Auflagen. Nur bei Tod des Inhabers, Umbau {'>'}20 Tage, Umzug oder Geschäftsaufgabe.
                    </p>
                    <div className="text-[10px] text-amber-600 bg-amber-50 p-2 rounded-md font-medium">
                      Nicht wiederholbar innerhalb von 3 Jahren aus gleichem Grund.
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-bold flex items-center justify-between text-purple-600">
                      B) Schlussverkauf <span className="text-[10px] font-normal text-slate-400 uppercase tracking-tighter">Soldes</span>
                    </h5>
                    <div className="text-xs font-bold p-3 bg-purple-50 text-purple-900 border border-purple-100 rounded-xl">
                      DATEN: 03. Jan - 31. Jan <br /> & 01. Juli - 31. Juli
                    </div>
                    <p className="text-sm text-slate-600">
                      Ware muss mind. 30 Tage vorher angeboten worden sein.
                    </p>
                  </div>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6">
              <h4 className="font-display font-bold text-xl">Wichtige Definitionen</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-indigo-400">Unternehmen</span>
                  <span className="text-sm">Dauerhafter wirtsch. Zweck</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-indigo-400">Verbraucher</span>
                  <span className="text-sm">Rein private Zwecke</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-indigo-400">Werktage</span>
                  <span className="text-sm">Mo-Sa (keine Sonn- & Feiertage)</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
               <h4 className="font-display font-bold text-xl flex items-center gap-2">
                 <ShoppingCart size={20} className="text-purple-600" />
                 Preisauszeichnung
               </h4>
               <ul className="space-y-3">
                  <li className="flex gap-2 text-sm text-slate-600">
                    <span className="text-purple-600 font-bold">•</span>
                    Muss schriftlich, unmissverständlich & lesbar sein.
                  </li>
                  <li className="flex gap-2 text-sm text-slate-600">
                    <span className="text-purple-600 font-bold">•</span>
                    Gesamtpreis in Euro inkl. MwSt. & Zusatzkosten.
                  </li>
                  <li className="flex gap-2 text-sm text-slate-600">
                    <span className="text-purple-600 font-bold">•</span>
                    Verständliche Sprache für Durchschnittsverbraucher.
                  </li>
               </ul>
            </div>
          </div>
        </section>

        {/* Part 4: Verträge */}
        <section id="part4" className="scroll-mt-24 space-y-8">
          <SectionHeader 
            title="TEIL 4: Verträge mit Verbrauchern" 
            subtitle="Schutz am Point of Sale" 
            color="rose" 
          />

          <div className="bg-rose-50 border border-rose-100 rounded-3xl p-8 space-y-6">
             <h4 className="font-display font-bold text-2xl text-rose-900">Fernabsatzverträge</h4>
             <p className="text-rose-800 max-w-2xl">Verträge ohne gleichzeitige körperliche Anwesenheit (Internet, Telefon).</p>
             
             <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <h5 className="text-xs uppercase font-bold text-rose-400 tracking-widest italic">Informationspflichten</h5>
                   <ul className="grid grid-cols-2 gap-2">
                      {['Identität', 'Eigenschaften', 'Gesamtpreis', 'Lieferkosten'].map(item => (
                        <li key={item} className="bg-white px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 shadow-sm border border-rose-100">
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-rose-100 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-rose-600 transition-transform -translate-y-full group-hover:translate-y-0 duration-300 opacity-[0.02]" />
                  <h5 className="font-bold text-rose-600 mb-2 flex items-center justify-between">
                    Das Widerrufsrecht
                    <AlertCircle size={16} />
                  </h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Muss <span className="font-bold underline">fett gedruckt</span> in einem extra Rahmen auf der ersten Seite stehen. Standard: 14 Kalendertage.
                  </p>
                </div>
             </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
             <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm border border-slate-100">
                <Navigation size={20} />
             </div>
             <div>
                <h5 className="font-bold text-slate-800">Unklare Klauseln?</h5>
                <p className="text-sm text-slate-500 italic font-medium underline underline-offset-4 decoration-rose-400">
                  Werden immer zugunsten des Verbrauchers ausgelegt!
                </p>
             </div>
          </div>
        </section>

        {/* Part 5: Quiz */}
        <section id="part5" className="scroll-mt-24 space-y-8">
          <SectionHeader 
            title="TEIL 5: Wissenstest" 
            subtitle="Interaktives Quiz zur Prüfungsvorbereitung" 
            color="indigo" 
          />
          <QuizSection />
        </section>

        {/* Footer / Tip Section */}
        <section className="bg-indigo-600 rounded-[3rem] p-8 md:p-16 text-white text-center space-y-12 shadow-2xl shadow-indigo-200 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <h3 className="text-3xl md:text-5xl font-display font-bold">💡 Lerntipps für die Prüfung</h3>
            <p className="text-indigo-100 max-w-xl mx-auto">Vier Punkte, die du sicher beherrschen musst.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 relative z-10">
            {[
              { id: '1', text: 'Kaufmanns-Pflichten auswendig lernen.' },
              { id: '2', text: 'Verbraucher (privat) vs. Unternehmen (geschäftlich) trennen.' },
              { id: '3', text: 'Strikte Daten für Schlussverkäufe (Jan/Juli) einprägen.' },
              { id: '4', text: 'Absicht beim Zeitpunkt des Einkaufs = Handelsgeschäft.' },
            ].map((tip) => (
              <div key={tip.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-left flex gap-4 items-start hover:scale-[1.02] transition-transform">
                <span className="text-2xl font-display font-black text-white/30">{tip.id}</span>
                <p className="font-medium">{tip.text}</p>
              </div>
            ))}
          </div>

          <p className="text-indigo-200 font-display text-lg relative z-10">
            Viel Erfolg! Du schaffst das! 🚀
          </p>
        </section>
          </div>
        )}

        {/* Placeholders */}
        {activeChapter === 'gesellschaften' && <GesellschaftenChapter />}
        {activeChapter === 'insolvenz' && <InsolvenzChapter />}
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <p className="text-xs text-slate-400 font-medium uppercase tracking-[0.2em]">Juristische Zusammenfassung • Kursunterlagen</p>
          <p className="text-sm text-slate-500 italic">"Geringer Aufwand, maximales Wissen."</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ title, subtitle, color }: { title: string, subtitle: string, color: 'indigo' | 'emerald' | 'purple' | 'rose' }) {
  const colors = {
    indigo: 'text-indigo-600 border-indigo-200 bg-indigo-50/50',
    emerald: 'text-emerald-600 border-emerald-200 bg-emerald-50/50',
    purple: 'text-purple-600 border-purple-200 bg-purple-50/50',
    rose: 'text-rose-600 border-rose-200 bg-rose-50/50',
  };

  return (
    <div className="space-y-2 border-l-4 border-current pl-6 py-2 transition-all">
      <h3 className={`text-sm font-bold uppercase tracking-widest ${colors[color].split(' ')[0]}`}>{subtitle}</h3>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
    </div>
  );
}

function Card({ title, children, className = "" }: { title: string, children: import('react').ReactNode, className?: string }) {
  return (
    <div className={`bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group ${className}`}>
      <h4 className="font-display font-bold text-xl mb-4 text-slate-800">{title}</h4>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const q = QUIZ_QUESTIONS[currentQuestion];

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === q.correctAnswerIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center space-y-6">
        <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
          <Brain size={40} />
        </div>
        <h3 className="font-display font-bold text-3xl">Quiz Beendet!</h3>
        <p className="text-xl text-slate-600">
          Du hast <span className="font-bold text-indigo-600">{score}</span> von <span className="font-bold text-indigo-600">{QUIZ_QUESTIONS.length}</span> Fragen richtig beantwortet.
        </p>
        <button
          onClick={resetQuiz}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
        >
          Nochmal versuchen
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
      <div className="flex justify-between items-center border-b border-slate-100 pb-4">
        <span className="text-sm font-bold text-indigo-500 tracking-wider uppercase">
          Frage {currentQuestion + 1} von {QUIZ_QUESTIONS.length}
        </span>
        <span className="text-sm font-medium text-slate-500">
          Punktestand: {score}
        </span>
      </div>

      <h3 className="font-display font-bold text-2xl text-slate-800">
        {q.question}
      </h3>

      <div className="space-y-3">
        {q.options.map((option, index) => {
          let style = "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700 bg-white";
          let icon = null;

          if (isAnswered) {
            if (index === q.correctAnswerIndex) {
              style = "border-emerald-500 bg-emerald-50 text-emerald-900";
              icon = <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />;
            } else if (index === selectedOption) {
              style = "border-rose-500 bg-rose-50 text-rose-900";
              icon = <XCircle className="text-rose-500 shrink-0" size={20} />;
            } else {
              style = "border-slate-200 bg-slate-50 text-slate-400 opacity-50";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={isAnswered}
              className={`w-full flex items-center justify-between p-4 rounded-xl border-2 text-left transition-all ${style} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <span className="font-medium">{option}</span>
              {icon && <span>{icon}</span>}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div
          className={`p-5 rounded-xl border ${selectedOption === q.correctAnswerIndex ? 'bg-emerald-50 border-emerald-100' : 'bg-indigo-50 border-indigo-100'} flex items-start gap-3`}
        >
          <Info className={`mt-0.5 shrink-0 ${selectedOption === q.correctAnswerIndex ? 'text-emerald-600' : 'text-indigo-600'}`} size={20} />
          <div className="space-y-1">
            <h4 className={`font-bold ${selectedOption === q.correctAnswerIndex ? 'text-emerald-800' : 'text-indigo-800'}`}>
              {selectedOption === q.correctAnswerIndex ? 'Richtig!' : 'Nicht ganz richtig.'}
            </h4>
            <p className={`text-sm ${selectedOption === q.correctAnswerIndex ? 'text-emerald-700' : 'text-indigo-700'}`}>
              {q.explanation}
            </p>
          </div>
        </div>
      )}

      {isAnswered && (
        <div className="flex justify-end pt-4">
          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
          >
            {currentQuestion < QUIZ_QUESTIONS.length - 1 ? 'Nächste Frage' : 'Ergebnisse anzeigen'}
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

function PlaceholderChapter({ title }: { title: string }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center max-w-2xl mx-auto space-y-6 pt-12 pb-32"
    >
      <div className="w-20 h-20 bg-indigo-50 text-indigo-300 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-indigo-100">
        <BookOpen size={40} />
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
        {title}
      </h2>
      <p className="text-lg text-slate-500 leading-relaxed max-w-lg mx-auto">
        Die Inhalte für dieses Kapitel werden derzeit erstellt und sind bald verfügbar. Bitte schaue später wieder vorbei!
      </p>
    </motion.section>
  );
}

function GesellschaftenChapter() {
  return (
    <div className="space-y-24 animate-in fade-in duration-500">
      {/* Intro */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto space-y-6"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Unternehmensgründung & <span className="text-indigo-600 uppercase">Gesellschaften</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Kompakte, strukturierte und auf Prüfungsrelevanz optimierte Zusammenfassung.
        </p>
      </motion.section>

      {/* 1. Grundvoraussetzungen */}
      <section className="scroll-mt-24 space-y-8">
        <SectionHeader 
          title="1. Grundvoraussetzungen für die Gründung" 
          subtitle="Für alle Berufe" 
          color="indigo" 
        />
        
        <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 text-indigo-900 font-medium flex items-center justify-center gap-2 mb-8">
          <Info size={20} className="text-indigo-500" />
          Für <strong>alle</strong> Berufe gilt: Mindestalter <strong>18 Jahre</strong> und Nachweis der <strong>Betriebsführungskenntnisse</strong>.
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card title="A. Betriebsführungskenntnisse" className="border-indigo-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <GraduationCap size={120} />
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Wie beweisen?</h5>
                <ul className="space-y-3">
                  {[
                    'Hochschuldiplom, Abiturzeugnis (je nach Datum mit Zusatz)',
                    'Meisterbrief, Schnellkursdiplom (ZAWM)',
                    'Ausländische Diplome, EG-Bescheinigung',
                    'Berufserfahrung (letzte 15 Jahre: mind. 3 Jahre haupt- oder 5 Jahre nebenberuflich)'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700 items-start">
                      <CheckCircle2 size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-4 relative z-10">
                <h5 className="text-sm font-bold text-slate-800 mb-2">Wer darf sie vorweisen?</h5>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><strong>Einzelunternehmen:</strong> Unternehmer selbst, Ehepartner, Gehilfe (Familie bis 3. Grad) oder Angestellter.</p>
                  <p><strong>Gesellschaften:</strong> Bei der <strong>GmbH</strong> nur der Geschäftsführer; bei der <strong>AG</strong> der delegierte Verwalter.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card title="B. Fachkenntnisse" className="border-indigo-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Briefcase size={120} />
            </div>
            <div className="space-y-4 relative z-10">
               <div className="inline-flex px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full mb-2 border border-amber-200">
                Nur für 34 geschützte Berufe!
              </div>
              <p className="text-sm text-slate-600">
                Pflicht für Berufe z.B. im Bau-, Kfz-, Nahrungsmittelbereich und persönliche Dienstleistungen.
              </p>
              <div>
                <h5 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Beweis</h5>
                <ul className="space-y-2">
                  {[
                    'Gesellendiplom, Meisterbrief',
                    'Spezielle Schulabschlüsse',
                    'Berufserfahrung (letzte 15 Jahre: 3 Jahre haupt- oder 5 Jahre nebenberuflich)'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700 items-start">
                      <CheckCircle2 size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 mt-4 flex items-start gap-3">
                <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 font-medium">
                  <strong>Ausnahmen:</strong> Bestimmte Berufe erfordern zwingend bestimmte Diplome.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 2. Pflichtformalitäten */}
      <section className="scroll-mt-24 space-y-8">
        <SectionHeader 
          title="2. Die Pflichtformalitäten (Schritt-für-Schritt)" 
          subtitle="Ablauf der Gründung" 
          color="emerald" 
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
              <User size={120} />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <User className="text-emerald-600" size={24} />
              <h4 className="font-display font-bold text-2xl text-slate-800">Einzelunternehmen</h4>
            </div>
            <div className="space-y-6 relative z-10">
              {[
                { title: 'Geschäftskonto', desc: 'Eröffnung (getrennt vom Privatkonto)' },
                { title: 'ZDU Eintragung', desc: 'Zentrale Unternehmensdatenbank beim Unternehmensschalter' },
                { title: 'MwSt.-Nummer', desc: 'Aktivierung der Steuernummer' },
                { title: 'Sozialversicherung', desc: 'Beitritt als Selbstständiger' },
                { title: 'Krankenkasse', desc: 'Eintragung/Meldung' },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 group items-start">
                  <span className="flex-none w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h5 className="font-semibold text-slate-800">{step.title}</h5>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Building size={120} />
            </div>
             <div className="flex items-center justify-between mb-6 relative z-10">
               <div className="flex items-center gap-3 flex-wrap">
                 <Building className="text-emerald-700" size={24} />
                 <h4 className="font-display font-bold text-2xl text-emerald-900">Gesellschaften</h4>
               </div>
               <span className="text-xs font-bold bg-emerald-200 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">Notar-Weg</span>
             </div>
             
             <div className="space-y-4 relative z-10">
                <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm space-y-4">
                  <h5 className="font-bold text-emerald-800 text-sm">ZUSÄTZLICH VORAB PFLICHT:</h5>
                  <div className="flex gap-3 items-start">
                    <FileSignature className="text-emerald-500 mt-1 shrink-0" size={18} />
                    <p className="text-sm text-slate-700"><strong>Gang zum Notar:</strong> Hinterlegung Finanzplan, Bankbescheinigung (Kapital) und Erstellung der Gründungsurkunde.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Scale className="text-emerald-500 mt-1 shrink-0" size={18} />
                    <p className="text-sm text-slate-700">Hinterlegung beim Handelsgericht & Veröffentlichung im <strong>Belgischen Staatsblatt</strong>.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <ClipboardCheck className="text-emerald-500 mt-1 shrink-0" size={18} />
                    <p className="text-sm text-slate-700">Eintragung beim Föderalen Öffentlichen Dienst Finanzen.</p>
                  </div>
                </div>

                <div className="flex items-center justify-center py-2">
                  <ArrowRight className="text-emerald-400 rotate-90" size={24} />
                </div>

                <div className="bg-emerald-100/50 p-4 rounded-xl border border-emerald-200 text-sm text-emerald-800 text-center font-medium">
                  Danach folgen die Schritte 2 bis 5 des Einzelunternehmens!
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Zusätzliche Genehmigungen */}
      <section className="scroll-mt-24 space-y-8">
        <SectionHeader 
          title="3. Zusätzliche Genehmigungen" 
          subtitle="Fallabhängig" 
          color="purple" 
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: 'FASNK', d: 'Bei Zubereitung/Verkauf von Lebensmitteln.', icon: ShoppingCart },
              { t: 'Wandergewerbe', d: 'Für Märkte und öffentliche Plätze.', icon: Globe },
              { t: 'Umwelt', d: 'Handwerk, Car-Wash, Campingplätze, etc.', icon: Info },
              { t: 'Sozio-wirtschaftlich', d: 'Einzelhandel mit Verkaufsfläche > 400 m².', icon: CheckCircle2 },
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-lg text-slate-800">{item.t}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
      </section>

      {/* 4. Einzel VS Gesellschaft */}
      <section className="scroll-mt-24 space-y-8">
        <SectionHeader 
          title="4. Einzelunternehmen vs. Gesellschaft" 
          subtitle="Häufiges Prüfungsthema!" 
          color="rose" 
        />
        
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="bg-slate-50 p-4 border-b border-slate-200 text-slate-500 font-bold w-[20%]">Kriterium</th>
                  <th className="bg-rose-50/50 p-4 border-b border-rose-100 border-l font-bold text-rose-900 w-[40%]">
                    <div className="flex items-center gap-2">
                       <User size={18} className="text-rose-500" /> Einzelunternehmen
                    </div>
                  </th>
                  <th className="bg-indigo-50/50 p-4 border-b border-indigo-100 border-l font-bold text-indigo-900 w-[40%]">
                    <div className="flex items-center gap-2">
                      <Building2 size={18} className="text-indigo-500" /> Gesellschaft
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ['Gründung', 'Einfach, schnell, kostengünstig.', 'Aufwendig, teuer, notarielle Urkunde nötig.'],
                  ['Haftung', <span key="1" className="font-bold text-rose-600 block">Unbeschränkt</span>, <span key="2" className="font-bold text-indigo-600 block">Meist beschränkt</span>],
                  ['Steuern', 'Einkommenssteuer der natürlichen Personen.', 'Körperschaftssteuer.'],
                  ['Entscheidung', 'Unternehmer entscheidet allein, flexibel.', 'Geschäftsführer eingeschränkt.'],
                  ['Fortbestand', 'Endet oft bei Tod/Krankheit des Inhabers.', 'Besteht unabhängig weiter.'],
                  ['Kapital', 'Begrenzt auf eine Person. Schwerer Kredit zu bekommen.', 'Mehrere Geldgeber möglich.'],
                  ['Buchhaltung', 'Vereinfachte Buchhaltung meist ausreichend.', 'Strikte buchhalterische Vorschriften.'],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 border-b border-slate-100 font-semibold text-slate-700">{row[0]}</td>
                    <td className="p-4 border-b border-slate-100 border-l text-slate-600">
                      {row[0] === 'Haftung' ? (
                        <div>{row[1]}<span className="text-xs text-slate-500 mt-1 block">(Privat- & Betriebsvermögen eins)</span></div>
                      ) : row[1]}
                    </td>
                    <td className="p-4 border-b border-slate-100 border-l text-slate-600">
                      {row[0] === 'Haftung' ? (
                         <div>{row[2]}<span className="text-xs text-slate-500 mt-1 block">(auf Einlage, Privatvermögen sicher)</span></div>
                      ) : row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="w-12 h-12 rounded-full bg-rose-100 flex flex-none items-center justify-center text-rose-600 shrink-0">
            <ShieldAlert size={24} />
          </div>
          <div>
            <h5 className="font-bold text-rose-900 mb-1">Achtung: Gründerhaftung bei Gesellschaften!</h5>
            <p className="text-sm text-rose-800">
              Wenn eine Gesellschaft in den ersten 3 Jahren Pleite geht und der Finanzplan ein offensichtlich zu geringes Startkapital aufwies, können die Gründer <strong>trotzdem mit ihrem Privatvermögen</strong> haftbar gemacht werden!
            </p>
          </div>
        </div>
      </section>

      {/* 5. Rechtsformen */}
      <section className="scroll-mt-24 space-y-8">
        <SectionHeader 
          title="5. Die Gesellschaftsformen im Überblick" 
          subtitle="Formen" 
          color="indigo" 
        />
        
        <p className="text-slate-600 bg-white p-4 rounded-xl border border-slate-200 inline-block text-sm">
          <strong>Definition laut ZGB:</strong> Ein Vertrag, durch den 2 oder mehr Personen bestimmen, etwas zusammen zu tun, um den Gewinn zu teilen.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Beschränkt */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xl flex items-center gap-2 text-indigo-700 bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100">
              <ShieldCheck size={24} />
              MIT beschränkter Haftung
            </h4>
            <div className="space-y-4">
              <Card title="GmbH (Gesellschaft mit beschränkter Haftung)" className="border-indigo-100">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><strong>Ideal für:</strong> KMU</li>
                  <li><strong>Gründer:</strong> Mindestens 1</li>
                  <li><strong>Kapital:</strong> Kein gesetzliches Mindestkapital mehr (muss aber "ausreichend" sein).</li>
                  <li><strong>Art:</strong> "Geschlossene" Gesellschaft (Anteile schwer übertragbar).</li>
                  <li><strong>Pflicht:</strong> Notarpflicht + Finanzplanpflicht.</li>
                </ul>
              </Card>
              <Card title="AG (Aktiengesellschaft)" className="border-indigo-100">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><strong>Ideal für:</strong> Großunternehmen & kapitalintensive KMU</li>
                  <li><strong>Gründer:</strong> Mindestens 1</li>
                  <li><strong>Kapital:</strong> Mindestkapital <span className="font-bold text-indigo-600">61.500 Euro</span></li>
                  <li><strong>Art:</strong> "Offene" Gesellschaft (Anteile frei übertragbar).</li>
                  <li><strong>Pflicht:</strong> Notarpflicht + Finanzplanpflicht.</li>
                </ul>
              </Card>
              <Card title="Genossenschaft (Gen)" className="border-indigo-100">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><strong>Gründer:</strong> Mindestens 3</li>
                  <li>Oft im Bereich Sozialwirtschaft. Kein Mindestkapital.</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Unbeschränkt */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xl flex items-center gap-2 text-rose-700 bg-rose-50/50 p-4 rounded-2xl border border-rose-100">
              <ShieldAlert size={24} />
              OHNE beschränkte Haftung
            </h4>
            <p className="text-sm text-rose-700 font-medium px-2 py-1 bg-rose-50 rounded-lg inline-block">Personengesellschaften - Das Privatvermögen haftet mit!</p>
            <div className="space-y-4">
              <Card title="OHG (Offene Handelsgesellschaft)" className="border-rose-100">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Kein Mindestkapital, wenig Formalitäten.</li>
                  <li className="text-rose-700 font-medium bg-rose-50 p-2 rounded block mt-2 border border-rose-100">Unbeschränkte und gesamtschuldnerische Haftung aller Gesellschafter!</li>
                </ul>
              </Card>
              <Card title="KoGe (Kommanditgesellschaft)" className="border-rose-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-5">
                  <Users size={80} />
                </div>
                <div className="space-y-3 relative z-10">
                  <p className="text-sm font-semibold text-slate-700">Zwei Arten von Partnern:</p>
                  <div className="bg-rose-50 p-3 rounded-lg border border-rose-100">
                    <span className="font-bold text-rose-800 text-sm block mb-1">1. Aktive Gesellschafter</span>
                    <p className="text-xs text-rose-700">Leiten die Firma, haften unbeschränkt.</p>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                    <span className="font-bold text-indigo-800 text-sm block mb-1">2. Stille Gesellschafter (Kommanditisten)</span>
                    <p className="text-xs text-indigo-700">Geben nur Geld, haften nur bis zur Höhe ihrer Einlage, haben kein Mitspracherecht.</p>
                  </div>
                </div>
              </Card>
              <Card title="Partnerschaft" className="border-rose-100">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Keine Rechtspersönlichkeit.</li>
                  <li>Unbeschränkte Haftung.</li>
                  <li>Muss in der ZDU registriert werden.</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lerntipps */}
      <section className="bg-slate-800 rounded-[3rem] p-8 md:p-12 text-white space-y-8 shadow-xl mt-16 relative overflow-hidden">
         <div className="absolute top-[-20%] right-[-10%] opacity-10">
           <BadgeCheck size={300} />
         </div>
         <div className="relative z-10">
            <h3 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
              <Brain className="text-amber-400" size={32} />
              Lerntipps für die Prüfung
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:-translate-y-1 transition-transform">
                <span className="text-4xl mb-4 font-bold text-amber-400 block">1.</span>
                <p className="text-sm leading-relaxed">Lerne den Unterschied der <strong>Haftung</strong> (beschränkt vs. unbeschränkt) in- und auswendig.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:-translate-y-1 transition-transform">
                <span className="text-4xl mb-4 font-bold text-emerald-400 block">2.</span>
                <p className="text-sm leading-relaxed">Kenne die <strong>Formalitäten</strong> bei der Gründung (vor allem den Unterschied: für GmbH/AG zwingend zum Notar).</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:-translate-y-1 transition-transform">
                <span className="text-4xl mb-4 font-bold text-rose-400 block">3.</span>
                <p className="text-sm leading-relaxed">Merke dir die Besonderheit der <strong>KoGe</strong> (aktiv = haftet voll / still = haftet beschränkt) – das wird sehr gerne abgefragt!</p>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
}

function InsolvenzChapter() {
  return (
    <div className="space-y-24 animate-in fade-in duration-500">
      {/* Intro */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto space-y-6"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Die <span className="text-indigo-600 uppercase">Insolvenz</span> (Konkurs)
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Kompakte, strukturierte und auf Prüfungsrelevanz optimierte Zusammenfassung.
        </p>
      </motion.section>

      {/* 1. Was ist ein Konkurs? */}
      <section className="scroll-mt-24 space-y-8">
        <SectionHeader 
          title="1. Was ist ein Konkurs?" 
          subtitle="Grundlagen & Voraussetzungen" 
          color="indigo" 
        />
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Zwei Bedeutungen" className="border-indigo-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Scale size={120} />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-start gap-4">
                <span className="flex-none w-6 h-6 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center font-bold text-sm">1</span>
                <div>
                   <p className="font-bold text-indigo-900 mb-1">Ein Zustand:</p>
                   <p className="text-sm text-indigo-800">Ein Kaufmann hat seine Zahlungen dauerhaft eingestellt <strong>UND</strong> seine Kreditwürdigkeit ist beeinträchtigt.</p>
                </div>
              </div>
              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-start gap-4">
                <span className="flex-none w-6 h-6 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center font-bold text-sm">2</span>
                <div>
                   <p className="font-bold text-indigo-900 mb-1">Ein Verfahren:</p>
                   <p className="text-sm text-indigo-800">Maßnahmen, um alle Gläubiger gleichberechtigt zu behandeln.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Wer & Wie?" className="border-indigo-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <AlertTriangle size={120} />
            </div>
            <div className="space-y-4 relative z-10">
              <div>
                <h5 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Wer kann in Konkurs gehen?</h5>
                <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <strong>Jeder Kaufmann</strong>, der die Bedingungen erfüllt.<br/>
                  <span className="text-xs text-slate-500 italic">Sonderregeln: Auch gegen Personen, die den Handel aufgegeben haben, Verstorbene (bis 6 Mon.) oder aufgelöste Gesellschaften (bis 6 Mon.).</span>
                </p>
              </div>
              <div>
                <h5 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Eröffnung (Handelsgericht)</h5>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2 items-start">
                    <span className="font-bold text-indigo-500">•</span>
                    <span><strong>Geständnis des Schuldners:</strong> Zwingend binnen 1 Monat!</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="font-bold text-indigo-500">•</span>
                    <span><strong>Ladung durch Gläubiger</strong></span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="font-bold text-indigo-500">•</span>
                    <span><strong>Die Staatsanwaltschaft</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3 items-center mx-auto max-w-2xl justify-center text-amber-800 font-medium">
          <Info size={20} className="text-amber-500" />
          Ein Auszug des Urteils wird zwingend im Belgischen Staatsblatt und in Zeitungen veröffentlicht.
        </div>
      </section>

      {/* 2. Folgen */}
      <section className="scroll-mt-24 space-y-8">
        <SectionHeader 
          title="2. Die Folgen der Konkurseröffnung" 
          subtitle="Auswirkungen" 
          color="rose" 
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-rose-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
              <User size={120} />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                <User size={20} />
              </div>
              <h4 className="font-display font-bold text-2xl text-slate-800">Für den Schuldner</h4>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="bg-rose-50 p-4 rounded-xl border border-rose-100 flex items-start gap-3">
                <Ban className="text-rose-600 shrink-0 mt-0.5" size={18} />
                <p className="text-sm font-medium text-rose-900">Verwirkt sofort das Recht, sein eigenes Vermögen zu verwalten (macht nun der Verwalter).</p>
              </div>
              <div className="bg-rose-600 p-4 rounded-xl border border-rose-700 flex items-start gap-3 text-white shadow-md shadow-rose-200">
                <Mail className="text-rose-100 shrink-0 mt-0.5" size={18} />
                <p className="text-sm font-bold">Darf keine Post mehr öffnen! (Geht direkt an den Konkursverwalter).</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
              <Users size={120} />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Users size={20} />
              </div>
              <h4 className="font-display font-bold text-2xl text-slate-800">Für die Gläubiger</h4>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex gap-3 text-sm text-slate-700 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <Ban className="text-emerald-500 shrink-0" size={18} />
                <span>Einzelne Pfändungen sind ab sofort verboten (bereits laufende werden gestoppt).</span>
              </div>
              <div className="flex gap-3 text-sm text-slate-700 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <Hourglass className="text-emerald-500 shrink-0" size={18} />
                <span><strong>Zinsstopp:</strong> Zinsen auf Schulden hören auf (Ausnahme: Hypotheken).</span>
              </div>
              <div className="flex gap-3 text-sm text-slate-700 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                <span>Nicht fällige Schulden werden sofort fällig (einforderbar).</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Akteure */}
      <section className="scroll-mt-24 space-y-8">
        <SectionHeader 
          title="3. Die 3 Akteure des Verfahrens" 
          subtitle="Verantwortlichkeiten" 
          color="purple" 
        />
        
        <div className="grid md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-2xl border border-purple-200 shadow-sm text-center relative overflow-hidden hover:-translate-y-1 transition-transform group">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                 <Briefcase size={32} />
              </div>
              <h4 className="font-display font-bold text-xl text-slate-800 mb-2">Konkursverwalter</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Die zentrale Figur. Vom Gericht ernannt. Erstellt Inventar, verwaltet Vermögen, treibt Schulden ein und zahlt Gläubiger aus.
              </p>
           </div>
           
           <div className="bg-white p-6 rounded-2xl border border-purple-200 shadow-sm text-center relative overflow-hidden hover:-translate-y-1 transition-transform group">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                 <Gavel size={32} />
              </div>
              <h4 className="font-display font-bold text-xl text-slate-800 mb-2">Konkursrichter</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Überwacht den Verwalter. Ordnet dringende Maßnahmen an und führt Vorsitz bei Gläubigerversammlungen.
              </p>
           </div>
           
           <div className="bg-white p-6 rounded-2xl border border-purple-200 shadow-sm text-center relative overflow-hidden hover:-translate-y-1 transition-transform group">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                 <ShieldCheck size={32} />
              </div>
              <h4 className="font-display font-bold text-xl text-slate-800 mb-2">Prokurator des Königs</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Beobachtet das Verfahren. Wird bei Verdacht auf Straftaten eingeschaltet. Darf alle Bücher einsehen.
              </p>
           </div>
        </div>
      </section>

      {/* 4. Konkursmasse */}
      <section className="scroll-mt-24 space-y-8">
        <SectionHeader 
          title="4. Konkursmasse & Verteilung" 
          subtitle="Wer bekommt wann sein Geld?" 
          color="emerald" 
        />

        <div className="space-y-6">
          <Card title="A. Die Aktivmasse (Vorhandenes Geld/Vermögen)" className="border-emerald-200">
            <p className="text-sm text-slate-600 mb-4">
              Alles, was der Schuldner am Tag der Eröffnung besitzt + was während des Verfahrens reinkommt.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 text-amber-700 mb-3">
                <AlertTriangle size={24} />
                <h5 className="font-bold text-lg">Wichtiges Konzept: Die Sperrfrist!</h5>
              </div>
              <p className="text-sm text-amber-900 leading-relaxed">
                Der Zeitraum zwischen Zahlungseinstellung und Verfahrenseröffnung (max. 6 Monate zurückdatiert). Güter, die in dieser Zeit "anormal" (z.B. viel zu billig) verkauft wurden, um sie zu retten, können in die Masse <strong>zurückgeholt werden</strong>.
              </p>
            </div>
          </Card>

          <Card title="B. Die Passivmasse & Verteilung" className="border-emerald-200">
            <p className="text-sm text-slate-600 mb-6 font-medium">Reihenfolge der Gläubiger bei der Liquidation:</p>
            
            <div className="space-y-4">
              {[
                { n: '1', t: 'Masseschulden', d: 'Kosten des Verfahrens (Honorare, Gerichtskosten).', c: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
                { n: '2', t: 'Beihilfen', d: 'Ggf. Unterhalt für den Schuldner/Familie.', c: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
                { n: '3', t: 'Bevorrechtigte Gläubiger', d: 'Gläubiger mit Hypotheken oder Sonderrechten.', c: 'bg-slate-50 text-slate-700 border-slate-200' },
                { n: '4', t: 'Kurrentgläubiger (Ordentliche)', d: 'Bekommen den Rest. Identische Dividende (gleicher %).', c: 'bg-slate-50 text-slate-600 border-slate-200' },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${item.c}`}>
                   <span className="flex-none w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm font-black text-lg">
                     {item.n}
                   </span>
                   <div>
                     <span className="font-bold block">{item.t}</span>
                     <span className="text-sm opacity-90">{item.d}</span>
                   </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-xs text-slate-500 italic flex gap-2">
               <Info size={14} className="shrink-0" />
               <p>Hinweis: "Rückforderungsschulden" (Güter, die nur aufbewahrt wurden) werden vorher an wahre Eigentümer zurückgegeben.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* 5. Strafrecht & Berufsverbot */}
      <section className="scroll-mt-24 space-y-8">
        <SectionHeader 
          title="5. Strafrecht & Berufsverbot" 
          subtitle="Vergehen & Rehabilitierung" 
          color="indigo" 
        />
        
        <p className="text-slate-600">Ein Konkurs ist <strong>keine Straftat</strong>, aber Handlungen darum herum können strafbar sein.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <h4 className="font-display font-bold text-lg text-slate-800 flex items-center gap-2">
               <Gavel size={20} className="text-slate-500" />
               Strafbare Handlungen
            </h4>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-sm">
                <span className="font-bold text-rose-600 block mb-1">Missbrauch von Gesellschaftsgütern</span>
                Betrügerische Nutzung für persönliche Zwecke (schwerer Schaden).
              </li>
              <li className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-sm">
                <span className="font-bold text-rose-600 block mb-1">Besondere Straftaten</span>
                Konkursverschleppung, Verbergen von Aktiva, Vernichtung von Büchern, Bevorzugung einzelner Gläubiger.
              </li>
            </ul>
          </div>

          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 space-y-4">
            <h4 className="font-display font-bold text-lg text-indigo-900 flex items-center gap-2">
               <RefreshCw size={20} className="text-indigo-500" />
               Erholung (Rehabilitierung)
            </h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-indigo-50 shadow-sm text-sm">
                <span className="font-bold text-indigo-700 block mb-1">Für entschuldbar erklärt:</span>
                Automatisch rehabilitiert!
              </div>
              <div className="bg-white p-4 rounded-xl border border-indigo-50 shadow-sm text-sm">
                <span className="font-bold text-rose-600 block mb-1">Für unentschuldbar erklärt:</span>
                Rehabilitierung (Appellationshof) nur möglich, wenn <strong>alle</strong> Schulden inkl. Zinsen bis auf den letzten Cent bezahlt wurden.
                <div className="mt-2 text-rose-800 bg-rose-50 p-2 rounded text-xs font-medium border border-rose-100">
                  Folge: 3 bis 10 Jahre Berufsverbot möglich!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lerntipps */}
      <section className="bg-slate-800 rounded-[3rem] p-8 md:p-12 text-white space-y-8 shadow-xl mt-16 relative overflow-hidden">
         <div className="absolute top-[-20%] right-[-10%] opacity-10">
           <Brain size={300} />
         </div>
         <div className="relative z-10">
            <h3 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
              <Brain className="text-amber-400" size={32} />
              Lerntipps für die Prüfung
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { id: '1', t: 'Zahlungseinstellung + Kreditwürdigkeit beeinträchtigt = Konkurs.', c: 'text-amber-400' },
                { id: '2', t: 'Merke dir unbedingt den Begriff "Sperrfrist".', c: 'text-emerald-400' },
                { id: '3', t: 'Der Konkursverwalter (Masseschulden) wird VOR den normalen Gläubigern bezahlt.', c: 'text-rose-400' },
                { id: '4', t: 'Die "Post-Regel": Schuldner darf keine Post mehr öffnen.', c: 'text-purple-400' },
              ].map((tip) => (
                <div key={tip.id} className="bg-white/10 p-6 rounded-2xl border border-white/20 flex gap-4 items-start hover:-translate-y-1 transition-transform">
                  <span className={`text-4xl font-black font-display opacity-80 ${tip.c}`}>{tip.id}</span>
                  <p className="font-medium mt-1 leading-relaxed">{tip.t}</p>
                </div>
              ))}
            </div>
         </div>
      </section>
    </div>
  );
}