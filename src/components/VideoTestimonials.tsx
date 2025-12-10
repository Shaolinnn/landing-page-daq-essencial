// components/VideoTestimonials.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import dynamic from 'next/dynamic'; // Importação para carregar o modal se necessário, ou usar a prop

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlayCircle,
  faChevronLeft,
  faChevronRight,
  faPlay,
  faTimes,
  faTrophy,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';
// Precisamos importar o componente do Modal para que o botão funcione, 
// ou receber a função openModal via props. 
// Para facilitar e manter a independência, vou adicionar um State local simples 
// ou podemos apenas linkar para o ID #checkout se preferir uma navegação suave.
// **MELHOR OPÇÃO:** Vamos usar um link <a> que rola suavemente até a seção de Checkout (#checkout),
// pois abrir o modal aqui pode exigir passar props complexas do pai para o filho.
// Ou melhor: Vamos disparar o Modal se você passar a função, mas o scroll suave é mais seguro para componentes isolados.

// VOU USAR A ESTRATÉGIA DE SCROLL SUAVE PARA O CHECKOUT PARA NÃO QUEBRAR A ARQUITETURA DE PROPS
// Se preferir o Modal, me avise que altero a injeção de props no page.tsx.

type VideoTestimonial = {
  videoId: string;
  thumbnail: string;
  title: string;
  subtitle: string;
  hook: string;
  bullets: string[];
};

const videoData: VideoTestimonial[] = [
  {
    videoId: 'Ben8sTjaVLI',
    thumbnail: '/img/thumb_pp_ce.jpg',
    title: 'Gabriel — Polícia Penal do Ceará (PP-CE)',
    subtitle: 'Aprovado Polícia Penal do Ceará (IDECAN)',
    hook: 'Transformou 1 ano e meio batendo na trave em aprovação numa prova longa e difícil.',
    bullets: [
      'Vivia preso em cursinho, PDF e videoaula, inclusive errando a aprovação por 1 questão.',
      'Desconfiou meses do DAQ, até decidir estudar 100% por questões no TEC com o método SPQ.',
      'Em poucos meses fez cerca de 9–10 mil questões e viu a porcentagem encostar na nota de corte até ser aprovado.',
    ],
  },
  {
    videoId: 'c9liS9Sk6cc',
    thumbnail: '/img/thumb_senado.jpg',
    title: 'Victor — Aprovado no Senado Federal',
    subtitle: 'Jornalista, 32 anos — Senado Federal',
    hook: 'Depois de 7 anos no modelo tradicional, virou o jogo estudando por questões.',
    bullets: [
      'Anos acumulando teoria em PDF, cursinho e livros sem ver resultado consistente.',
      'Com o método SPQ e o TEC Concursos, passou a focar em questões e acompanhar a própria evolução.',
      'Mesmo trabalhando e estudando 3–4h por dia, praticamente fechou específicos e conquistou o Senado Federal.',
    ],
  },
  {
    videoId: 'Z1-uV0VOk5U',
    thumbnail: '/img/thumb_trt_mg.jpg',
    title: 'Lorena — Analista Judiciária TRT-MG',
    subtitle: '30 anos, Belo Horizonte (MG)',
    hook: 'Mãe, rotina puxada e aprovação como Analista Judiciária — sem rotina “perfeita” de estudos.',
    bullets: [
      'Estudava 1h30–2h por dia, muitas vezes pelo celular com o filho no colo.',
      'Ao entrar no DAQ e aplicar o SPQ, passou a estudar 100% por questões no TEC.',
      'Fez mais de 26 mil questões, levou a porcentagem para perto dos 78% e foi aprovada no TRT-MG.',
    ],
  },
  {
    videoId: 's-ivfFmnGbs',
    thumbnail: '/img/thumb_cbm_mg.jpg',
    title: 'Arthur — Corpo de Bombeiros de MG',
    subtitle: 'Aprovado Corpo de Bombeiros Militar de Minas Gerais',
    hook: 'Rompeu com o estudo tradicional e entrou entre os 5% aprovados.',
    bullets: [
      'Fez o concurso quatro vezes estudando no modo “PDF + cursinho + vídeo” sem converter esforço em resultado.',
      'Com o SPQ, montou seus próprios cadernos no TEC e focou 100% em questões, ganhando autonomia total.',
      'Resolveu mais de 15 mil questões, chegou a ~84% de acertos e 48/50 na redação, subindo 141 posições.',
    ],
  },
  {
    videoId: 'IBPbX_tK14E',
    thumbnail: '/img/thumb_seduc_go.jpg',
    title: 'Renata — 2º lugar SEDUC Goiás',
    subtitle: 'Pedagoga — Aprovada SEDUC-GO e Prefeitura de Anápolis',
    hook: 'Quase desistiu dos concursos e hoje tem cerca de 90% de acertos em prova.',
    bullets: [
      'Vinha de reprovações seguidas estudando no modelo tradicional e quase abandonou os concursos.',
      'Migrou para o estudo 100% por questões no TEC, acumulando 34–35 mil questões resolvidas.',
      'Chegou perto de 90% de acertos, foi 2º lugar na SEDUC-GO e ainda aprovada na Prefeitura de Anápolis.',
    ],
  },
  {
    videoId: '_r289yBCU34',
    thumbnail: '/img/video-lucas.jpg',
    title: 'Lucas — Guarda Civil Municipal de Poços de Caldas',
    subtitle: '28 anos — Sudoeste de Minas (MG)',
    hook: 'Conciliou trabalho, faculdade, estágio e treinos de maratona até a aprovação na GCM.',
    bullets: [
      'Desde 2016 nas carreiras policiais, preso no combo cursinho + PDF + videoaula e quase sem questões.',
      'Entrou no DAQ Essencial e passou a estudar 100% por questões no TEC com o método SPQ.',
      'Em menos de 1 ano transformou suas maiores travas em pontos fortes e foi aprovado na GCM de Poços de Caldas.',
    ],
  },
];

export default function VideoTestimonials() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Função para rolar suavemente até o checkout
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              <FontAwesomeIcon icon={faPlayCircle} className="text-amber-500 mr-2" /> Depoimentos em vídeo
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Histórias reais de quem aplicou o Método SPQ, estudou por questões e finalmente viu a aprovação sair do papel.
            </p>
          </div>

          <div className="relative px-10 md:px-0">
            {/* Botão anterior */}
            <button
              className="video-carousel-prev absolute left-0 top-1/2 z-10 hidden md:flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-500 hover:bg-amber-50 transition-colors shadow-sm"
              aria-label="Vídeo anterior"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {/* Carrossel */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              loop
              navigation={{
                prevEl: '.video-carousel-prev',
                nextEl: '.video-carousel-next',
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {videoData.map((video) => (
                <SwiperSlide key={video.videoId}>
                  <article className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col h-full group hover:border-amber-200 transition-colors">
                    {/* Thumbnail */}
                    <div
                      className="relative aspect-video cursor-pointer"
                      onClick={() => setActiveVideoId(video.videoId)}
                    >
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-2">
                          <span className="inline-flex items-center justify-center rounded-full bg-amber-500 text-white w-14 h-14 shadow-lg group-hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faPlay} className="text-2xl ml-1" />
                          </span>
                          <span className="text-xs font-semibold tracking-wide uppercase text-white/90">
                            Assistir depoimento
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Texto / resumo */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1 leading-tight">
                        {video.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-3">{video.subtitle}</p>

                      <p className="text-sm text-slate-700 mb-3 font-medium">{video.hook}</p>

                      <ul className="space-y-1.5 text-xs text-slate-600 flex-1">
                        {video.bullets.map((item, index) => (
                          <li key={index} className="flex gap-2 items-start">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Botão próximo */}
            <button
              className="video-carousel-next absolute right-0 top-1/2 z-10 hidden md:flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-500 hover:bg-amber-50 transition-colors shadow-sm"
              aria-label="Próximo vídeo"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          {/* --- NOVO CTA ESTRATÉGICO --- */}
          <div className="mt-12 text-center">
            <button
              onClick={scrollToCheckout}
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-1 hover:shadow-xl group"
            >
              <FontAwesomeIcon icon={faTrophy} className="mr-2 group-hover:text-amber-300 transition-colors" />
              Quero ter resultados como esses
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-3 text-xs sm:text-sm text-slate-500">
              Junte-se aos alunos que pararam de rodar em círculos.
            </p>
          </div>

        </div>
      </section>

      {/* Modal do vídeo */}
      {activeVideoId && (
        <div
          onClick={() => setActiveVideoId(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-4xl mx-auto animate-fade-in-up">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveVideoId(null);
              }}
              className="absolute -top-12 right-0 text-white/80 hover:text-white hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center transition-all"
              aria-label="Fechar vídeo"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
            <div
              className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}