// app/page.tsx (Versão FINAL, completa e com todas as correções)

'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Carregamento dinâmico para componentes "abaixo da dobra" para otimizar a performance inicial
const FaqSection = dynamic(() => import('@/components/FaqSection'));
const FormModal = dynamic(() => import('@/components/FormModal'));
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'));
const VideoTestimonials = dynamic(() => import('@/components/VideoTestimonials'));

// Importação dos ícones para um carregamento otimizado
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, faBolt, faTimesCircle, faCheckCircle, faSearch, faGraduationCap, 
  faProjectDiagram, faPlayCircle, faLaptop, faUsers, faComments, faHandsHelping, 
  faHeart, faFire, faCheck, faUserGraduate, faMedal, faTag, faTrophy, faGift, 
  faMapMarkedAlt, faTasks, faShieldAlt, faSyncAlt, faCalendarCheck, faFlagCheckered, faCopyright, faLock, faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <main>
      {/* Componentes Flutuantes */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-emerald-600 z-50 shadow-lg flex justify-center animate-bounce">
        <button onClick={openModal} className="w-full text-center text-white font-semibold py-3 px-4">
          <FontAwesomeIcon icon={faBolt} className="mr-2" /> Quero parar de estudar errado - R$ 497/ano
        </button>
      </div>
      <div className="hidden lg:block fixed bottom-6 right-6 z-40 animate-bounce">
        <button onClick={openModal} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-emerald-500/30 transform hover:scale-105 transition-all flex items-center">
          <FontAwesomeIcon icon={faBolt} className="mr-2" /> Quero parar de estudar errado
          <span className="ml-2 bg-white text-emerald-600 text-xs font-bold px-2 py-1 rounded-full">R$ 497/ano</span>
        </button>
      </div>

      {/* Seção Header */}
      <header className="relative bg-gradient-to-b from-white to-slate-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 hero-background-image bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:flex items-center gap-12">
          <div className="lg:w-1/2">
            <span className="inline-block text-sm font-semibold text-amber-600 uppercase tracking-widest mb-4">
              <FontAwesomeIcon icon={faStar} className="mr-1" /> DAQ ESSENCIAL
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Aprenda com a <span className="text-amber-500">prova</span>, na prática
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-lg">
              Você estuda tudo… menos o que <span className="highlight-text font-semibold">realmente cai</span>? Descubra o método que transforma cada questão em um mapa direto para sua aprovação.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={openModal} className="bg-emerald-600 hover:bg-emerald-700 transition-all text-white font-semibold py-3 px-8 rounded-xl shadow-lg shadow-emerald-500/30 transform hover:scale-105">
                <FontAwesomeIcon icon={faBolt} className="mr-2" /> Quero aprender do jeito certo, agora
              </button>
              <a href="https://wa.me/64999965777?text=Oi%20Kyrlla%2C%20vim%20da%20p%C3%A1gina%20de%20vendas.%20Quero%20mais%20detalhes%20do%20DAQ%20Essencial" target="_blank" rel="noopener" className="flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800">
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl" /> Fale conosco
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4 flex-wrap">
              <span className="text-sm text-slate-500">Aprovado em bancas como:</span>
              <div className="flex gap-6 items-center">
                <Image src="/img/FGV.webp" alt="FGV" width="80" height="24" className="h-6 w-auto" />
                <Image src="/img/cespe.webp" alt="Cespe" width="90" height="24" className="h-6 w-auto" />
                <Image src="/img/fcc-1.webp" alt="FCC" width="50" height="24" className="h-6 w-auto" />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2 relative">
            <div className="relative">
              <Image 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-xl border-4 border-white"
                src="/img/Aluno-estudando.webp"
                width={1280} height={853}
                alt="Estudo por questões" 
                priority={true}
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                Método Comprovado
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Seção Faixa de Destaque */}
      <section className="bg-amber-50 py-4 text-center text-sm font-medium text-amber-800 tracking-wide shine">
        <div className="max-w-4xl mx-auto px-6">
          <FontAwesomeIcon icon={faBolt} className="mr-2" /> SEM PDF • SEM VIDEOAULA INFINITA • SEM TEORIA QUE VOCÊ NÃO USA
        </div>
      </section>

      {/* Seção O que é / não é */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-rose-500">
            <h2 className="text-xl font-bold text-rose-600 mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faTimesCircle} /> O que o DAQ <span className="underline decoration-rose-400">não</span> é
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><FontAwesomeIcon icon={faTimesCircle} className="text-rose-400 mt-1" /><span>Curso com 200h de aula que você nunca vai terminar</span></li>
              <li className="flex items-start gap-3"><FontAwesomeIcon icon={faTimesCircle} className="text-rose-400 mt-1" /><span>PDF de 800 páginas pra decorar</span></li>
              <li className="flex items-start gap-3"><FontAwesomeIcon icon={faTimesCircle} className="text-rose-400 mt-1" /><span>Cronograma engessado que não se adapta à sua realidade</span></li>
            </ul>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-emerald-500">
            <h2 className="text-xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faCheckCircle} /> O que o DAQ <span className="underline decoration-emerald-400">é</span>
            </h2>
            <blockquote className="italic text-slate-700 border-l-4 border-emerald-500 pl-4 py-2 mb-4">
            Um método direto, simples e transformador pra você aprender <strong className="font-semibold">fazendo questões</strong> com lógica de banca.
            </blockquote>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1" /><span>Foco no que realmente cai na prova</span></li>
              <li className="flex items-start gap-3"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1" /><span>Adaptável à sua rotina</span></li>
              <li className="flex items-start gap-3"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1" /><span>Resultados mensuráveis</span></li>
            </ul>
        </div>
      </section>

      {/* Seção Como funciona */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
              <FontAwesomeIcon icon={faSearch} className="text-amber-500 mr-2" /> Como funciona o Método SPQ
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
              Um passo a passo claro para estudar por questões com lógica de prova
              </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
                <FontAwesomeIcon icon={faGraduationCap} className="text-amber-500 mr-2" /> O que você vai receber
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
                Tudo que você precisa para transformar sua forma de estudar
            </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 text-center feature-card h-full">
                  <div className="text-amber-500 text-3xl mb-4"><FontAwesomeIcon icon={faProjectDiagram} /></div>
                  <h3 className="font-semibold mb-2">Método SPQ</h3>
                  <p className="text-sm text-slate-600">Passo a passo claro para estudar por questões com lógica de prova</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 text-center feature-card h-full">
                  <div className="text-amber-500 text-3xl mb-4"><FontAwesomeIcon icon={faPlayCircle} /></div>
                  <h3 className="font-semibold mb-2">Aprenda a estudar com IA</h3>
                  <p className="text-sm text-slate-600">Aprenda a montar questões inéditas e estudar discursivas com profundidade</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 text-center feature-card h-full">
                  <div className="text-amber-500 text-3xl mb-4"><FontAwesomeIcon icon={faLaptop} /></div>
                  <h3 className="font-semibold mb-2">Aprenda a usar o TEC Concursos</h3>
                  <p className="text-sm text-slate-600">Use com intenção estratégica, e não como banco de questões solto</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 text-center feature-card h-full">
                  <div className="text-amber-500 text-3xl mb-4"><FontAwesomeIcon icon={faUsers} /></div>
                  <h3 className="font-semibold mb-2">Acesso a comunidade de alunos</h3>
                  <p className="text-sm text-slate-600">Espaço exclusivo para interação e networking entre os alunos do DAQ</p>
              </div>
            </div>
        </div>
      </section>

      {/* Seção Comunidade */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center">
                <div className="inline-flex items-center justify-center relative">
                    <div className="w-32 h-32 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-5xl relative z-10"><FontAwesomeIcon icon={faUsers} /></div>
                    <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-3xl"><FontAwesomeIcon icon={faComments} /></div>
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl"><FontAwesomeIcon icon={faHandsHelping} /></div>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-slate-900 mb-4"><FontAwesomeIcon icon={faHeart} className="text-amber-500 mr-2" /> Você não vai estudar sozinho(a)</h2>
                <p className="text-lg text-slate-700 mb-6">O DAQ não é só um método - é uma comunidade vibrante de concurseiros que estudam com inteligência. Aqui você encontra:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1" /><span>Troca de experiências com outros alunos</span></div>
                    <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1" /><span>Suporte automatizado para tirar todas as suas dúvidas</span></div>
                    <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1" /><span>Motivação diária para manter o foco</span></div>
                    <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"><FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mt-1" /><span>Celebração coletiva das aprovações</span></div>
                </div>
              </div>
          </div>
        </div>
      </section>
      
      {/* Componentes Carregados Dinamicamente */}
      <TestimonialsSection />
      <VideoTestimonials />

      {/* Seção Pra quem é */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-600 mb-2"><FontAwesomeIcon icon={faFire} className="mr-2" /> Pra quem é o DAQ Essencial?</h2>
              <p className="text-slate-700 max-w-2xl mx-auto">Se você se identifica com algum desses pontos, o método foi feito para você</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"><span className="text-amber-500 text-xl mt-1"><FontAwesomeIcon icon={faCheck} /></span><span className="text-slate-700">Pra quem estuda há anos e continua travado</span></li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"><span className="text-amber-500 text-xl mt-1"><FontAwesomeIcon icon={faCheck} /></span><span className="text-slate-700">Pra quem acerta pouco mesmo estudando muito</span></li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"><span className="text-amber-500 text-xl mt-1"><FontAwesomeIcon icon={faCheck} /></span><span className="text-slate-700">Pra quem já entendeu que o problema não é o concurso: é o método</span></li>
                <li className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"><span className="text-amber-500 text-xl mt-1"><FontAwesomeIcon icon={faCheck} /></span><span className="text-slate-700">Pra quem quer estudar com raciocínio, não com decoreba</span></li>
              </ul>
          </div>
        </div>
      </section>

      {/* Seção Conheça a Fundadora */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-2/5 lg:w-1/3 text-center px-4">
                  <div className="relative inline-block">
                  <Image src="/img/Kyrlla-2.webp" alt="Kyrlla Pattyelly" className="w-full max-w-md rounded-2xl shadow-xl border-4 border-white" width="450" height="560" style={{minWidth: '280px'}} />
                  <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg"><FontAwesomeIcon icon={faMedal} className="mr-1" /> Auditora Fiscal</div>
                  </div>
              </div>
              <div className="md:w-2/3">
                  <span className="inline-block text-sm font-semibold text-amber-600 uppercase tracking-widest mb-2"><FontAwesomeIcon icon={faUserGraduate} className="mr-1" /> CONHEÇA A FUNDADORA</span>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">A mente por trás do método que transformou centenas de concurseiros</h2>
                  <p className="text-lg text-slate-700 mb-6">Kyrlla Pattyelly é Auditora Fiscal, mentora e ex-concurseira que transformou sua jornada de desafios em um método eficiente de estudo por questões.</p>
                  <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-500 mb-6">
                    <p className="text-slate-700 italic mb-4">{`"Sabe aquela sensação de estudar horas e não ver resultado? Eu vivi isso na pele. Depois de anos enfrentando a pressão dos concursos, descobri que o segredo estava na `}<strong className="font-semibold">forma</strong>{` de estudar, não apenas no tempo dedicado."`}</p>
                    <p className="text-slate-700">Essa percepção deu origem ao <strong className="text-amber-600">Método SPQ</strong>, um sistema baseado em prática inteligente, análise estatística e constância - tudo que eu gostaria de ter conhecido quando comecei.</p>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center"><span className="block text-2xl font-bold text-amber-600">+5</span><span className="text-sm text-slate-600">anos transformando a vida de concurseiros</span></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center"><span className="block text-2xl font-bold text-amber-600">1.000+</span><span className="text-sm text-slate-600">alunos mentorados</span></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center"><span className="block text-2xl font-bold text-amber-600">100%</span><span className="text-sm text-slate-600">comprometida com seu sucesso</span></div>
                  </div>
              </div>
            </div>
        </div>
      </section>

      {/* Seção Investimento */}
      <section id="checkout" className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-2"><FontAwesomeIcon icon={faTag} className="text-emerald-600 mr-2" /> Investimento</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Um método que muda a sua lógica de estudo pra sempre</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-200 text-center relative">
                <span className="absolute -top-3 -right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">7 dias de garantia</span>
                <h3 className="text-xl font-bold text-slate-800 mb-4">DAQ Essencial</h3>
                {/* 1. Mensagem de ancoragem */}
                <p className="text-slate-600 text-base mb-3 px-4">
                  Tudo isso pelo preço mensal daquele combo de fast-food que você pede sem pensar (e se arrepende 1 hora depois):
                </p>

                {/* 2. Novo preço (somente parcelado) */}
                <p className="text-slate-500 text-lg mb-1">Apenas 12x de</p>
                <p className="text-5xl font-bold text-emerald-600 mb-4 font-poppins">R$ 51,40</p>
                
                {/* --- FIM DA MUDANÇA --- */}
                
                <ul className="space-y-3 text-left text-slate-700 mb-8">
                    <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheck} className="text-emerald-500 mt-1" /><span>Método SPQ completo</span></li>
                    <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheck} className="text-emerald-500 mt-1" /><span>Aulas sobre como usar IA</span></li>
                    <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheck} className="text-emerald-500 mt-1" /><span>Comunidade de alunos</span></li>
                    <li className="flex items-start gap-2"><FontAwesomeIcon icon={faCheck} className="text-emerald-500 mt-1" /><span>7 dias de garantia</span></li>
                </ul>
                <button onClick={openModal} className="inline-block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-105">
                  <FontAwesomeIcon icon={faTrophy} className="mr-2" /> Quero meu plano de aprovação hoje
                </button>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-amber-600 mb-4 flex items-center"><FontAwesomeIcon icon={faGift} className="mr-2" /> Bônus especiais:</h4>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100"><h5 className="font-semibold text-slate-800 flex items-center gap-2"><FontAwesomeIcon icon={faMapMarkedAlt} className="text-amber-500" /> Mini Treinamento</h5><p className="text-sm text-slate-600 mt-1">Mapa de Interpretação de Questões</p></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100"><h5 className="font-semibold text-slate-800 flex items-center gap-2"><FontAwesomeIcon icon={faTasks} className="text-amber-500" /> Checklist Exclusivo</h5><p className="text-sm text-slate-600 mt-1">Os 7 erros que sabotam sua lógica de prova</p></div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100"><h5 className="font-semibold text-slate-800 flex items-center gap-2"><FontAwesomeIcon icon={faStar} className="text-amber-500" /> Acesso Prioritário</h5><p className="text-sm text-slate-600 mt-1">Às vagas da mentoria SPQ</p></div>
                </div>
              </div>
          </div>
          <div className="mt-8 text-center text-sm text-slate-500"><FontAwesomeIcon icon={faLock} className="mr-1" /> Pagamento 100% seguro • Renovação automática • Suporte em até 24h</div>
        </div>
      </section>

      {/* Seção Garantia */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 text-center"><div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 text-3xl"><FontAwesomeIcon icon={faShieldAlt} /></div></div>
              <div className="md:w-2/3 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2"><FontAwesomeIcon icon={faSyncAlt} className="text-emerald-500 mr-2" /> Garantia de satisfação</h2>
                  <p className="text-slate-600">{`Você tem 7 dias pra testar o DAQ. Se não curtir, basta um clique e devolvemos seu dinheiro. Sem perguntas. Sem ressentimentos.`}</p>
                  <p className="text-sm text-slate-500 mt-4"><FontAwesomeIcon icon={faInfoCircle} className="mr-1" /> Risco zero para você</p>
              </div>
              </div>
          </div>
        </div>
      </section>

      {/* Componente FAQ Carregado Dinamicamente */}
      <FaqSection />
      
      {/* Seção CTA Final */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4"><FontAwesomeIcon icon={faCalendarCheck} className="text-amber-500 mr-2" /> A mudança começa agora</h2>
          <p className="text-lg text-slate-600 mb-8">Pronto pra parar de estudar como todo mundo estuda... e começar a estudar como quem vai passar?</p>
          <button onClick={openModal} className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105">
            <FontAwesomeIcon icon={faFlagCheckered} className="mr-2" /> Quero minha vaga na próxima aprovação
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-sm"><FontAwesomeIcon icon={faCopyright} className="mr-1" /> 2025 DAQ Essencial. Todos os direitos reservados.</p>
                <p className="mt-6 text-sm text-slate-500">*Kyrlla Pattyelly* – Auditora Fiscal • Criadora do SPQ • Mentora de milhares de aprovados</p>
              </div>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/soporquestoes/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-amber-500 transition-colors" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.youtube.com/@soporquestoes" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-amber-500 transition-colors" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="https://wa.me/64999965777?text=Oi%20Kyrlla%2C%20vim%20da%20p%C3%A1gina%20de%20vendas.%20Quero%20mais%20detalhes%20do%20DAQ%20Essencial" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-amber-500 transition-colors" aria-label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a>
              </div>
          </div>
        </div>
      </footer>

      {/* O Modal é carregado apenas quando necessário */}
      {isModalOpen && <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}