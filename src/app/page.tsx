// app/page.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const FaqSection = dynamic(() => import('@/components/FaqSection'));
const FormModal = dynamic(() => import('@/components/FormModal'));
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'));
const VideoTestimonials = dynamic(() => import('@/components/VideoTestimonials'));

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faBolt,
  faTimesCircle,
  faCheckCircle,
  faSearch,
  faGraduationCap,
  faProjectDiagram,
  faPlayCircle,
  faLaptop,
  faUsers,
  faComments,
  faHandsHelping,
  faHeart,
  faFire,
  faCheck,
  faUserGraduate,
  faMedal,
  faTag,
  faTrophy,
  faGift,
  faMapMarkedAlt,
  faTasks,
  faShieldAlt,
  faSyncAlt,
  faCopyright,
  faLock,
  faInfoCircle,
  faTicketAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <main className="flex flex-col min-h-screen">
      
      {/* --- BANNER DE NATAL --- */}
      <div className="bg-red-600 text-white py-2 px-4 text-center font-bold uppercase tracking-wider text-xs sm:text-sm shadow-md animate-pulse z-50">
        <FontAwesomeIcon icon={faGift} className="mr-2" />
        Oferta Especial de Natal — Por Tempo Limitado
      </div>

      {/* Seção Header (Hero) */}
      <header className="relative bg-gradient-to-b from-white to-slate-50 py-10 md:py-20 overflow-hidden">
        
        {/* OTIMIZAÇÃO LCP */}
        <div className="absolute inset-0 -z-10 select-none pointer-events-none opacity-5">
          <Image 
            src="/img/background-hero.webp" 
            alt="Background Texture"
            fill
            priority
            quality={50}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:flex items-center gap-12">
          {/* COLUNA TEXTO */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            {/* HEADLINE ORIGINAL (MANTIDA COM CORREÇÃO DE VÍRGULA) */}
            <h1
              className="
                text-4xl sm:text-5xl lg:text-[4rem]
                font-extrabold text-slate-900
                leading-[1.1] tracking-tight
                mb-6
              "
            >
              Aprenda com a{' '}
              <span className="text-amber-500 relative whitespace-nowrap">
                prova
                {/* Sublinhado decorativo */}
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-amber-200 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
              , na prática.
            </h1>

            {/* SUBHEADLINE ORIGINAL (MANTIDA) */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-6">
              Um método simples, baseado em questões, neurociência e clareza mental, para estudar sem
              caos, aprender de verdade e parar de repetir o mesmo ciclo todos os anos.
            </p>
            
            {/* NOVA FRASE (SUBSTITUINDO PROVA SOCIAL NA HERO) */}
            <div className="mb-8 p-3 rounded-lg bg-emerald-50/80 border-l-4 border-emerald-500 inline-block">
                <p className="text-sm sm:text-base font-bold text-emerald-800 leading-snug">
                  Mesmo que você já tenha tentado de TUDO ou esteja começando do completo zero!
                </p>
            </div>
          </div>

          {/* COLUNA IMAGEM */}
          <div className="lg:w-1/2 relative">
            <div className="relative max-w-xl ml-auto">
              <div className="absolute -inset-6 bg-amber-100/40 blur-3xl rounded-[2.5rem] -z-10" />
              <Image
                className="w-full rounded-2xl shadow-2xl border-4 border-white object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500"
                src="/img/Kyrlla.webp"
                width={1280}
                height={853}
                alt="Kyrlla Pattyelly - Método SPQ"
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" 
                quality={85}
              />
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-emerald-500">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">Método Validado</span>
                </div>
                <p className="text-xs text-slate-500">Sem PDFs gigantes, direto ao ponto.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Seção Faixa de Destaque */}
      <section className="bg-amber-50 py-4 text-center text-xs sm:text-sm font-medium text-amber-800 tracking-wide shine px-4">
        <div className="max-w-4xl mx-auto relative z-20"> 
          <FontAwesomeIcon icon={faBolt} className="mr-2" /> 
          SEM PDF • SEM VIDEOAULA INFINITA • SEM TEORIA QUE VOCÊ NÃO USA
        </div>
      </section>

      {/* Depoimentos em texto */}
      <TestimonialsSection />

      {/* Depoimentos em vídeo */}
      <VideoTestimonials />

      {/* Seção BIO da Mentora */}
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
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ minWidth: '280px' }}
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg text-sm sm:text-base">
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
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Meu nome é Kyrlla Pattyelly e eu sou Auditora Fiscal e criadora do Método SPQ.
              </h2>
              <p className="text-base sm:text-lg text-slate-700 mb-4">
                Passei anos estudando do jeito errado, repetindo ciclos de reprovação e acumulando PDFs que não serviram
                para nada — até descobrir que o que aprova não é quantidade de horas, e sim o jeito de estudar.
              </p>
              <p className="text-base sm:text-lg text-slate-700 mb-4">
                Nos últimos anos, transformei essa descoberta no SPQ, um método baseado em questões e princípios da
                neurociência do aprendizado, que já ajudou milhares de alunos a destravarem a mente, estudarem com
                clareza e avançarem de verdade.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-500 mb-6">
                <p className="text-slate-700 italic mb-2 text-sm sm:text-base">
                  “Você não reprova por falta de esforço. Reprova pelo método errado — e isso dá pra consertar.”
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm text-center">
                  <span className="block text-xl sm:text-2xl font-bold text-amber-600">+5</span>
                  <span className="text-xs sm:text-sm text-slate-600">anos de exp.</span>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm text-center">
                  <span className="block text-xl sm:text-2xl font-bold text-amber-600">1k+</span>
                  <span className="text-xs sm:text-sm text-slate-600">alunos</span>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm text-center">
                  <span className="block text-xl sm:text-2xl font-bold text-amber-600">100%</span>
                  <span className="text-xs sm:text-sm text-slate-600">foco</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção O que é / não é */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-rose-500">
          <h2 className="text-xl font-bold text-rose-600 mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faTimesCircle} /> O que o DAQ{' '}
            <span className="underline decoration-rose-400">não</span> é
          </h2>
          <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faTimesCircle} className="text-rose-400 mt-1 flex-shrink-0" />
              <span>Curso com 200h de aula que você nunca vai terminar</span>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faTimesCircle} className="text-rose-400 mt-1 flex-shrink-0" />
              <span>PDF de 800 páginas pra decorar</span>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faTimesCircle} className="text-rose-400 mt-1 flex-shrink-0" />
              <span>Cronograma engessado que não se adapta à sua realidade</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-emerald-500">
          <h2 className="text-xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faCheckCircle} /> O que o DAQ{' '}
            <span className="underline decoration-emerald-400">é</span>
          </h2>
          <blockquote className="italic text-slate-700 border-l-4 border-emerald-500 pl-4 py-2 mb-4 text-sm sm:text-base">
            Um método direto, simples e transformador pra você aprender{' '}
            <strong className="font-semibold">fazendo questões</strong> com lógica de banca.
          </blockquote>
          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 flex-shrink-0" />
              <span>Foco no que realmente cai na prova</span>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 flex-shrink-0" />
              <span>Adaptável à sua rotina</span>
            </li>
            <li className="flex items-start gap-3">
              <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 flex-shrink-0" />
              <span>Resultados mensuráveis</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Seção Como funciona */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              <FontAwesomeIcon icon={faSearch} className="text-amber-500 mr-2" /> Como funciona o Método SPQ
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Um passo a passo claro para estudar por questões com lógica de prova
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400 feature-card">
              <span className="text-amber-500 font-bold text-2xl">1</span>
              <h3 className="font-semibold mt-2">Análise do Edital</h3>
              <p className="text-sm text-slate-600 mt-2">Identifique os tópicos que realmente importam</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400 feature-card">
              <span className="text-amber-500 font-bold text-2xl">2</span>
              <h3 className="font-semibold mt-2">Seleção de Questões</h3>
              <p className="text-sm text-slate-600 mt-2">Filtre as questões mais relevantes</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400 feature-card">
              <span className="text-amber-500 font-bold text-2xl">3</span>
              <h3 className="font-semibold mt-2">Estudo Ativo</h3>
              <p className="text-sm text-slate-600 mt-2">Aprenda estudando questões</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-400 feature-card">
              <span className="text-amber-500 font-bold text-2xl">4</span>
              <h3 className="font-semibold mt-2">Revisão Estratégica</h3>
              <p className="text-sm text-slate-600 mt-2">Consolide o conhecimento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção O que você vai receber */}
      <section id="beneficios" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              <FontAwesomeIcon icon={faGraduationCap} className="text-amber-500 mr-2" /> O que você vai receber
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              Tudo que você precisa para transformar sua forma de estudar
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 text-center feature-card h-full">
              <div className="text-amber-500 text-3xl mb-4">
                <FontAwesomeIcon icon={faProjectDiagram} />
              </div>
              <h3 className="font-semibold mb-2">Método SPQ</h3>
              <p className="text-sm text-slate-600">
                Passo a passo claro para estudar por questões com lógica de prova
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 text-center feature-card h-full">
              <div className="text-amber-500 text-3xl mb-4">
                <FontAwesomeIcon icon={faPlayCircle} />
              </div>
              <h3 className="font-semibold mb-2">Aprenda a estudar com IA</h3>
              <p className="text-sm text-slate-600">
                Aprenda a montar questões inéditas e estudar discursivas com profundidade
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 text-center feature-card h-full">
              <div className="text-amber-500 text-3xl mb-4">
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <h3 className="font-semibold mb-2">Aprenda a usar o TEC Concursos</h3>
              <p className="text-sm text-slate-600">
                Use com intenção estratégica, e não como banco de questões solto
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 text-center feature-card h-full">
              <div className="text-amber-500 text-3xl mb-4">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="font-semibold mb-2">Acesso a comunidade de alunos</h3>
              <p className="text-sm text-slate-600">
                Espaço exclusivo para interação e networking entre os alunos do DAQ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Comunidade */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 text-center mb-8 md:mb-0">
              <div className="inline-flex items-center justify-center relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-4xl sm:text-5xl relative z-10">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl sm:text-3xl">
                  <FontAwesomeIcon icon={faComments} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl sm:text-3xl">
                  <FontAwesomeIcon icon={faHandsHelping} />
                </div>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                <FontAwesomeIcon icon={faHeart} className="text-amber-500 mr-2" /> Você não vai estudar sozinho(a)
              </h2>
              <p className="text-base sm:text-lg text-slate-700 mb-6">
                O DAQ não é só um método - é uma comunidade vibrante de concurseiros que estudam com inteligência. Aqui
                você encontra:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Troca de experiências com outros alunos</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Suporte automatizado para tirar todas as suas dúvidas</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Motivação diária para manter o foco</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Celebração coletiva das aprovações</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Pra quem é */}
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
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-amber-500 text-xl mt-1">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className="text-slate-700">Pra quem estuda há anos e continua travado</span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-amber-500 text-xl mt-1">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className="text-slate-700">Pra quem acerta pouco mesmo estudando muito</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-amber-500 text-xl mt-1">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className="text-slate-700">
                  Pra quem já entendeu que o problema não é o concurso: é o método
                </span>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-amber-500 text-xl mt-1">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className="text-slate-700">Pra quem quer estudar com raciocínio, não com decoreba</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- NOVA SEÇÃO FAQ MÉTODO (POSIÇÃO ESTRATÉGICA ANTES DO PREÇO) --- */}
      <FaqSection variant="metodo" />

      {/* Seção Investimento */}
      <section id="checkout" className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              <FontAwesomeIcon icon={faTag} className="text-emerald-600 mr-2" /> Investimento
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Um método que muda a sua lógica de estudo pra sempre
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Card de Preço */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-200 text-center relative h-full flex flex-col justify-center transform hover:scale-[1.02] transition-transform duration-300">
              <span className="absolute -top-3 -right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                7 dias de garantia
              </span>
              <h3 className="text-xl font-bold text-slate-800 mb-4">DAQ Essencial</h3>
              {/* Ancoragem + preço parcelado */}
              <p className="text-slate-600 text-base mb-3 px-4">
                Mais barato que aquela assinatura vitalícia do cursinho que você não usa — e, diferente dela, te
                aproxima da aprovação:
              </p>
              <p className="text-slate-500 text-lg mb-1">Apenas 12x de</p>
              <p className="text-5xl font-bold text-emerald-600 mb-4 font-poppins">R$ 51,40</p>

              <ul className="space-y-3 text-left text-slate-700 mb-8 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-emerald-500 mt-1" />
                  <span>Método SPQ completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-emerald-500 mt-1" />
                  <span>Aulas sobre como usar IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-emerald-500 mt-1" />
                  <span>Comunidade de alunos</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-emerald-500 mt-1" />
                  <span>7 dias de garantia</span>
                </li>
              </ul>
              
              {/* PROVA SOCIAL MOVIDA PARA CÁ (Aumenta confiança na hora de clicar) */}
              <div className="mb-6 flex flex-col items-center gap-2">
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
                href="https://wa.me/64999965777?text=Oi%20Kyrlla%2C%20ainda%20estou%20com%20d%C3%BAvida%20sobre%20o%20DAQ%20Essencial"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> Ainda está com dúvida? Fale com a gente
              </a>
            </div>

            {/* Lista de Bônus */}
            <div>
              <h4 className="text-xl font-semibold text-amber-600 mb-4 flex items-center">
                <FontAwesomeIcon icon={faGift} className="mr-2" /> Bônus especiais:
              </h4>
              <div className="space-y-4">
                {/* Bônus 1: Desconto TEC */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 transform transition-transform hover:translate-x-1">
                  <h5 className="font-semibold text-slate-800 flex items-center gap-2">
                    <FontAwesomeIcon icon={faTicketAlt} className="text-amber-500" /> Cupom de 20% no TEC
                  </h5>
                  <p className="text-sm text-slate-600 mt-1">Desconto exclusivo para assinatura, renovação ou upgrade.</p>
                </div>

                 {/* Bônus 2: Comunidade */}
                 <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 transform transition-transform hover:translate-x-1">
                  <h5 className="font-semibold text-slate-800 flex items-center gap-2">
                    <FontAwesomeIcon icon={faUsers} className="text-amber-500" /> Comunidade Exclusiva de Alunos
                  </h5>
                  <p className="text-sm text-slate-600 mt-1">Networking, troca de dúvidas e suporte.</p>
                </div>

                {/* Bônus 3 */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 transform transition-transform hover:translate-x-1">
                  <h5 className="font-semibold text-slate-800 flex items-center gap-2">
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="text-amber-500" /> Mini Treinamento
                  </h5>
                  <p className="text-sm text-slate-600 mt-1">Mapa de Interpretação de Questões</p>
                </div>
                {/* Bônus 4 */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 transform transition-transform hover:translate-x-1">
                  <h5 className="font-semibold text-slate-800 flex items-center gap-2">
                    <FontAwesomeIcon icon={faTasks} className="text-amber-500" /> Checklist Exclusivo
                  </h5>
                  <p className="text-sm text-slate-600 mt-1">Os 7 erros que sabotam sua lógica de prova</p>
                </div>
                {/* Bônus 5 */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 transform transition-transform hover:translate-x-1">
                  <h5 className="font-semibold text-slate-800 flex items-center gap-2">
                    <FontAwesomeIcon icon={faStar} className="text-amber-500" /> Acesso Prioritário
                  </h5>
                  <p className="text-sm text-slate-600 mt-1">Às vagas da mentoria SPQ</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-slate-500">
            <FontAwesomeIcon icon={faLock} className="mr-1" /> Pagamento 100% seguro • Renovação automática • Suporte em
            até 24h
          </div>
        </div>
      </section>

      {/* Seção Garantia */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 text-3xl">
                  <FontAwesomeIcon icon={faShieldAlt} />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  <FontAwesomeIcon icon={faSyncAlt} className="text-emerald-500 mr-2" /> Garantia de satisfação
                </h2>
                <p className="text-slate-600">
                  {`Você tem 7 dias pra testar o DAQ. Se não curtir, basta um clique e devolvemos seu dinheiro. Sem perguntas. Sem ressentimentos.`}
                </p>
                <p className="text-sm text-slate-500 mt-4">
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-1" /> Risco zero para você
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO FAQ GERAL (FICA NO FINAL) --- */}
      <FaqSection variant="geral" />

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-6 md:mb-0">
              <p className="text-sm">
                <FontAwesomeIcon icon={faCopyright} className="mr-1" /> 2025 DAQ Essencial. Todos os direitos
                reservados.
              </p>
              <p className="mt-4 text-xs sm:text-sm text-slate-500">
                *Kyrlla Pattyelly* – Auditora Fiscal • Criadora do SPQ • Mentora de milhares de aprovados
              </p>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/soporquestoes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.youtube.com/@soporquestoes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-amber-500 transition-colors"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://wa.me/64999965777?text=Oi%20Kyrlla%2C%20vim%20da%20p%C3%A1gina%20de%20vendas.%20Quero%20mais%20detalhes%20do%20DAQ%20Essencial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-amber-500 transition-colors"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal de checkout */}
      {isModalOpen && <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}