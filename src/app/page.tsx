// app/page.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Carregamento dinâmico dos componentes pesados
const FaqSection = dynamic(() => import('@/components/FaqSection'));
const FormModal = dynamic(() => import('@/components/FormModal'));
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'));
const VideoTestimonials = dynamic(() => import('@/components/VideoTestimonials'));

// Importação dos ícones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faTimesCircle,
  faCheckCircle,
  faSearch,
  faGraduationCap,
  faProjectDiagram,
  faPlayCircle,
  faLaptop,
  faUsers,
  faMedal,
  faTrophy,
  faShieldAlt,
  faCopyright,
  faFire,
  faCheck,
  faUserGraduate
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* --- BANNER DE NATAL --- */}
      <div className="bg-red-600 text-white py-2 px-4 text-center font-bold uppercase tracking-wider text-xs sm:text-sm shadow-md animate-pulse z-50">
        <FontAwesomeIcon icon={faTrophy} className="mr-2" />
        Oferta Especial de Aniversário — Por Tempo Limitado
      </div>

      {/* --- HERO SECTION DO SITE --- */}
      <header className="relative bg-gradient-to-b from-white to-slate-50 py-12 md:py-20 overflow-hidden">
        {/* CORREÇÃO: Usando a imagem leve (640) para o background para evitar travamento */}
        <div className="absolute inset-0 -z-10 select-none pointer-events-none opacity-5">
          <Image 
            src="/img/background-hero-640.webp" 
            alt="Background"
            fill
            priority
            quality={60} // Qualidade reduzida para performance máxima
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:flex items-center gap-12">
          {/* Texto Hero */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold text-amber-600 uppercase tracking-[0.2em] mb-4 bg-amber-50 px-3 py-1 rounded-full">
              <FontAwesomeIcon icon={faFire} /> Método SPQ
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Aprenda com a{' '}
              <span className="text-amber-500 relative whitespace-nowrap">
                prova
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
              , na prática.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-6">
              Um método simples, baseado em questões, neurociência e clareza mental, para estudar sem
              caos, aprender de verdade e parar de repetir o mesmo ciclo todos os anos.
            </p>
            
            {/* Frase de Impacto */}
            <div className="mb-8 p-4 rounded-lg bg-emerald-50 border-l-4 border-emerald-500 max-w-lg">
                <p className="text-sm sm:text-base font-bold text-emerald-800 leading-snug">
                  Mesmo que você já tenha tentado de TUDO ou esteja começando do completo zero!
                </p>
            </div>
            
            {/* --- CTAS HERO --- */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
                >
                  <FontAwesomeIcon icon={faTrophy} />
                  Quero garantir minha vaga
                </button>

                <a
                  href="https://wa.me/64999965777?text=Oi%20Kyrlla%2C%20estou%20na%20p%C3%A1gina%20principal%20e%20tenho%20d%C3%BAvida%20sobre%20o%20DAQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-slate-600 hover:text-emerald-600 font-semibold py-4 px-6 transition-colors border-2 border-slate-200 hover:border-emerald-200 rounded-xl bg-white/80 hover:bg-white"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                  Tenho dúvida, falar no Whats
                </a>
            </div>

          </div>

          {/* Imagem Hero Principal */}
          <div className="lg:w-1/2 relative">
            <div className="relative max-w-xl ml-auto">
              <div className="absolute -inset-6 bg-amber-100/40 blur-3xl rounded-[2.5rem] -z-10" />
              <Image
                className="w-full rounded-2xl shadow-2xl border-4 border-white object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500"
                src="/img/Kyrlla.webp"
                width={800} // Reduzido de 1280 para otimizar mobile
                height={533}
                alt="Kyrlla Pattyelly"
                priority 
                sizes="(max-width: 768px) 100vw, 600px" 
                quality={85}
              />
              
              {/* Badge Flutuante */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-emerald-500"><FontAwesomeIcon icon={faCheckCircle} /></div>
                  <span className="font-bold text-slate-800 text-sm">Método Validado</span>
                </div>
                <p className="text-xs text-slate-500">Sem PDFs gigantes, direto ao ponto.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Faixa */}
      <section className="bg-amber-50 py-4 text-center text-xs sm:text-sm font-medium text-amber-800 tracking-wide shine px-4">
        <div className="max-w-4xl mx-auto relative z-20">
          <FontAwesomeIcon icon={faBolt} className="mr-2" /> 
          SEM PDF • SEM VIDEOAULA INFINITA • SEM TEORIA QUE VOCÊ NÃO USA
        </div>
      </section>

      <TestimonialsSection />
      <VideoTestimonials />

      {/* Bio Mentora */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5 lg:w-1/3 text-center px-4">
              <div className="relative inline-block">
                <Image
                  src="/img/Kyrlla-2.webp"
                  alt="Kyrlla Pattyelly"
                  className="w-full max-w-md rounded-2xl shadow-xl border-4 border-white"
                  width={450}
                  height={560}
                  style={{ minWidth: '280px' }}
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                  <FontAwesomeIcon icon={faMedal} className="mr-1" /> Auditora Fiscal
                </div>
              </div>
              <p className="mt-6 text-sm font-semibold text-slate-800">
                Kyrlla Pattyelly — Auditora Fiscal e Criadora do Método SPQ
              </p>
            </div>
            <div className="md:w-2/3">
              <span className="inline-block text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-widest mb-2">
                <FontAwesomeIcon icon={faUserGraduate} className="mr-1" /> QUEM SOU EU
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Meu nome é Kyrlla Pattyelly e eu sou Auditora Fiscal e criadora do Método SPQ.
              </h2>
              
              <p className="text-lg text-slate-700 mb-4">
                Passei anos estudando do jeito errado, repetindo ciclos de reprovação e acumulando PDFs que não serviram
                para nada — até descobrir que o que aprova não é quantidade de horas, e sim o jeito de estudar.
              </p>
              <p className="text-lg text-slate-700 mb-4">
                Nos últimos anos, transformei essa descoberta no SPQ, um método baseado em questões e princípios da
                neurociência do aprendizado, que já ajudou milhares de alunos a destravarem a mente, estudarem com
                clareza e avançarem de verdade.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                Pode ser diferente de tudo que você já ouviu por aí, mas funcionou para muita gente — e vai funcionar
                para você também.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-500 mb-6">
                <p className="text-slate-700 italic mb-2">
                  “Você não reprova por falta de esforço. Reprova pelo método errado — e isso dá pra consertar.”
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <span className="block text-2xl font-bold text-amber-600">+5</span>
                  <span className="text-sm text-slate-600">anos transformando vidas</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <span className="block text-2xl font-bold text-amber-600">1.000+</span>
                  <span className="text-sm text-slate-600">alunos mentorados</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <span className="block text-2xl font-bold text-amber-600">100%</span>
                  <span className="text-sm text-slate-600">comprometida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que é / não é */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-rose-500">
          <h2 className="text-xl font-bold text-rose-600 mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faTimesCircle} /> O que o DAQ{' '}
            <span className="underline decoration-rose-400">não</span> é
          </h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faTimesCircle} className="text-rose-400 mt-1" />
              <span>Curso com 200h de aula que você nunca vai terminar</span>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faTimesCircle} className="text-rose-400 mt-1" />
              <span>PDF de 800 páginas pra decorar</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-emerald-500">
          <h2 className="text-xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faCheckCircle} /> O que o DAQ{' '}
            <span className="underline decoration-emerald-400">é</span>
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1" />
              <span>Foco no que realmente cai na prova</span>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1" />
              <span>Adaptável à sua rotina</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            <FontAwesomeIcon icon={faSearch} className="text-amber-500 mr-2" /> Como funciona o Método SPQ
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Análise do Edital', desc: 'Identifique os tópicos que realmente importam' },
              { title: 'Seleção de Questões', desc: 'Filtre as questões mais relevantes' },
              { title: 'Estudo Ativo', desc: 'Aprenda estudando questões' },
              { title: 'Revisão Estratégica', desc: 'Consolide o conhecimento' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400 feature-card">
                <span className="text-amber-500 font-bold text-2xl">{idx + 1}</span>
                <h3 className="font-semibold mt-2">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            <FontAwesomeIcon icon={faGraduationCap} className="text-amber-500 mr-2" /> O que você vai receber
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 feature-card">
              <FontAwesomeIcon icon={faProjectDiagram} className="text-amber-500 text-3xl mb-4" />
              <h3 className="font-semibold mb-2">Método SPQ</h3>
              <p className="text-sm text-slate-600">Passo a passo claro com lógica de prova</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 feature-card">
              <FontAwesomeIcon icon={faPlayCircle} className="text-amber-500 text-3xl mb-4" />
              <h3 className="font-semibold mb-2">Estudar com IA</h3>
              <p className="text-sm text-slate-600">Monte questões inéditas e estude discursivas</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 feature-card">
              <FontAwesomeIcon icon={faLaptop} className="text-amber-500 text-3xl mb-4" />
              <h3 className="font-semibold mb-2">TEC Concursos</h3>
              <p className="text-sm text-slate-600">Use com intenção estratégica</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 feature-card">
              <FontAwesomeIcon icon={faUsers} className="text-amber-500 text-3xl mb-4" />
              <h3 className="font-semibold mb-2">Comunidade</h3>
              <p className="text-sm text-slate-600">Interação e networking exclusivo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pra Quem é */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-2">
              <FontAwesomeIcon icon={faFire} className="mr-2" /> Pra quem é o DAQ Essencial?
            </h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-sm sm:text-base">
              Se você se identifica com algum desses pontos, o método foi feito para você
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-amber-500 text-xl mt-1"><FontAwesomeIcon icon={faCheck} /></span>
                <span className="text-slate-700">Pra quem estuda há anos e continua travado</span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-amber-500 text-xl mt-1"><FontAwesomeIcon icon={faCheck} /></span>
                <span className="text-slate-700">Pra quem acerta pouco mesmo estudando muito</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-amber-500 text-xl mt-1"><FontAwesomeIcon icon={faCheck} /></span>
                <span className="text-slate-700">Pra quem já entendeu que o problema não é o concurso: é o método</span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-amber-500 text-xl mt-1"><FontAwesomeIcon icon={faCheck} /></span>
                <span className="text-slate-700">Pra quem quer estudar com raciocínio, não com decoreba</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl group"
            >
              <FontAwesomeIcon icon={faCheck} className="mr-2 group-hover:scale-110 transition-transform" />
              Me identifiquei! Quero começar agora 
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Método */}
      <FaqSection variant="metodo" />

      {/* Checkout / Investimento */}
      <section id="checkout" className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              <FontAwesomeIcon icon={faTrophy} className="text-emerald-600 mr-2" /> Investimento
            </h2>
            <p className="text-slate-600">Um método que muda a sua lógica de estudo pra sempre</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Card Preço */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-200 text-center relative transform hover:scale-[1.01] transition-transform">
              <span className="absolute -top-3 -right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                7 dias de garantia
              </span>
              <h3 className="text-xl font-bold text-slate-800 mb-4">DAQ Essencial</h3>
              <p className="text-slate-500 text-lg mb-1">Apenas 12x de</p>
              <p className="text-5xl font-bold text-emerald-600 mb-4 font-poppins">R$ 54,47</p>
              
              <ul className="space-y-2 text-left text-slate-700 mb-6 text-sm bg-slate-50 p-4 rounded-lg">
                <li className="flex items-center gap-2"><FontAwesomeIcon icon={faCheck} className="text-emerald-500"/> Método SPQ Completo</li>
                <li className="flex items-center gap-2"><FontAwesomeIcon icon={faCheck} className="text-emerald-500"/> Aulas de IA para Estudo</li>
                <li className="flex items-center gap-2"><FontAwesomeIcon icon={faCheck} className="text-emerald-500"/> Comunidade de Alunos</li>
              </ul>

              <div className="mb-4 flex flex-col items-center gap-2">
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden relative">
                    <Image src="/img/depoimento_8.webp" alt="Aluno 1" fill sizes="32px" className="object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden relative">
                    <Image src="/img/depoimento_11.jpg" alt="Aluno 2" fill sizes="32px" className="object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden relative">
                    <Image src="/img/depoimento_2.webp" alt="Aluno 3" fill sizes="32px" className="object-cover" />
                    </div>
                </div>
                <p className="text-xs text-slate-500 font-medium">Junte-se a +1.000 alunos aprovados</p>
              </div>

              <button
                onClick={openModal}
                className="inline-block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-105 text-lg"
              >
                <FontAwesomeIcon icon={faTrophy} className="mr-2" /> Quero meu plano de aprovação
              </button>
              <a
                href="https://wa.me/64999965777?text=Oi%20Kyrlla%2C%20vim%20pela%20oferta%20de%20Natal%20e%20tenho%20d%C3%BAvidas"
                target="_blank"
                className="mt-4 flex items-center justify-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> Dúvidas? Fale com a gente
              </a>
            </div>

            {/* Bônus */}
            <div>
              <h4 className="text-xl font-semibold text-amber-600 mb-4">Bônus especiais:</h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:border-amber-200 transition-colors">
                  <strong className="block text-slate-800 flex items-center gap-2">
                    <FontAwesomeIcon icon={faTrophy} className="text-amber-500"/> Cupom de 20% no TEC
                  </strong>
                  <p className="text-xs text-slate-500 mt-1">Economize na assinatura da melhor plataforma de questões.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:border-amber-200 transition-colors">
                  <strong className="block text-slate-800 flex items-center gap-2">
                    <FontAwesomeIcon icon={faUsers} className="text-amber-500"/> Comunidade Exclusiva
                  </strong>
                  <p className="text-xs text-slate-500 mt-1">Networking e troca de experiências com outros alunos.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:border-amber-200 transition-colors">
                  <strong className="block text-slate-800 flex items-center gap-2">
                    <FontAwesomeIcon icon={faPlayCircle} className="text-amber-500"/> Mini Treinamento
                  </strong>
                  <p className="text-xs text-slate-500 mt-1">Mapa de Interpretação de Questões.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:border-amber-200 transition-colors">
                  <strong className="block text-slate-800 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-amber-500"/> Checklist Exclusivo
                  </strong>
                  <p className="text-xs text-slate-500 mt-1">Os 7 erros que sabotam sua lógica de prova.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center bg-slate-50 p-8 rounded-xl border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            <FontAwesomeIcon icon={faShieldAlt} className="text-emerald-500 mr-2" /> Garantia de satisfação
          </h2>
          <p className="text-slate-600 mb-6">
            Você tem 7 dias pra testar. Se não curtir, devolvemos seu dinheiro.
          </p>
          <button
                onClick={openModal}
                className="inline-block bg-white text-emerald-600 border border-emerald-200 hover:bg-emerald-50 font-semibold py-2 px-6 rounded-full transition-colors"
              >
                Começar sem riscos
          </button>
        </div>
      </section>

      <FaqSection variant="geral" />

      <footer className="py-8 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            <FontAwesomeIcon icon={faCopyright} className="mr-1" /> 2025 DAQ Essencial.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/soporquestoes/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-amber-500 cursor-pointer" /></a>
            <a href="https://www.youtube.com/@soporquestoes" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} className="text-xl hover:text-amber-500 cursor-pointer" /></a>
            <a href="https://wa.me/64999965777" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className="text-xl hover:text-amber-500 cursor-pointer" /></a>
          </div>
        </div>
      </footer>

      {isModalOpen && <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}