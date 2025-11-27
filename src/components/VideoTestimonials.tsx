// components/VideoTestimonials.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';

type VideoTestimonial = {
  videoId: string;
  title: string;
  thumbnail: string;
  name: string;
  role: string;
  summary: string;
};

const videoData: VideoTestimonial[] = [
  {
    videoId: 'Ben8sTjaVLI',
    title: 'Gabriel — Polícia Penal do Ceará (PP-CE)',
    thumbnail: '/img/thumb_pp_ce.jpg',
    name: 'Gabriel',
    role: 'Aprovado Polícia Penal do Ceará (IDECAN)',
    summary: `Gabriel, 21 anos, Fortaleza (CE)
Vinha de 1 ano e meio de estudo, várias provas batendo na trave com cursinho, PDF e videoaula (inclusive errando a aprovação por 1 questão e mínimo em ética).
Depois de 5 meses desconfiando se o DAQ era “mais um picareta”, decidiu investir no método SPQ e estudar 100% por questões no TEC.
Em poucos meses, fez cerca de 9–10 mil questões estudadas, viu sua porcentagem no TEC encostar na nota de corte e foi aprovado na Polícia Penal do Ceará (IDECAN), numa prova longa e difícil (80 questões + redação), conseguindo se manter focado até o final.
Ele resume assim: o DAQ foi o divisor de águas entre continuar reprovando e, enfim, passar.`,
  },
  {
    videoId: 'c9liS9Sk6cc',
    title: 'Victor — Aprovado no Senado Federal',
    thumbnail: '/img/thumb_senado.jpg',
    name: 'Victor',
    role: 'Aprovado Senado Federal',
    summary: `Victor, 32 anos – aprovado no Senado Federal
Jornalista, passou 7 anos estudando de forma tradicional (PDF, cursinho, livros) sem ver o resultado que esperava. Ao conhecer o método SPQ, migrou para o estudo por questões com o TEC Concursos e, em poucos meses, viu o que não via há anos: porcentagem subindo, confiança aumentando e desempenho em prova acima do treino.
Mesmo trabalhando e estudando 3–4h por dia, foi aprovado para o Senado Federal, praticamente fechando conhecimentos específicos e, enfim, “se aposentando dos estudos” com estratégia.`,
  },
  {
    videoId: 'Z1-uV0VOk5U',
    title: 'Lorena — Analista Judiciário TRT-MG',
    thumbnail: '/img/thumb_trt_mg.jpg',
    name: 'Lorena',
    role: 'Aprovada TRT/MG — Analista Judiciário',
    summary: `Lorena, 30 anos – Belo Horizonte (MG)
Casada, mãe de um bebê pequeno e sem ajuda em casa, estudava em média 1h30–2h por dia, muitas vezes pelo celular, com o filho no colo, e à noite no computador.
Veio do estudo tradicional, mas só viu evolução real quando entrou no DAQ, aplicou o método SPQ e passou a estudar 100% por questões no TEC.
Em pouco tempo, fez mais de 26 mil questões, levou sua porcentagem para perto dos 78% na objetiva e foi aprovada como Analista Judiciário – Área Judiciária no TRT/MG, mesmo longe da rotina “perfeita” de estudos.`,
  },
  {
    videoId: 's-ivfFmnGbs',
    title: 'Arthur — Corpo de Bombeiros de MG',
    thumbnail: '/img/thumb_cbm_mg.jpg',
    name: 'Arthur',
    role: 'Aprovado Corpo de Bombeiros MG',
    summary: `Arthur – Minas Gerais (MG)
Fez o concurso dos Bombeiros de MG quatro vezes, sempre estudando “no modo tradicional” (PDF, cursinho, vídeo) e sentindo que o esforço não se convertia em resultado.
Quando conheceu o método SPQ, rompeu com o antigo jeito de estudar, passou a montar seus próprios cadernos no TEC e focar 100% em questões, com autonomia total.
Resultado: mais de 15 mil questões resolvidas, cerca de 84% de acertos no TEC, 48/50 na redação, subindo 141 posições na lista e entrando entre os 5% aprovados no Corpo de Bombeiros de Minas Gerais.`,
  },
  {
    videoId: 'IBPbX_tK14E',
    title: 'Renata — 2º lugar SEDUC-GO (Pedagoga)',
    thumbnail: '/img/thumb_seduc_go.jpg',
    name: 'Renata',
    role: '2º lugar SEDUC-GO — Pedagoga em Anápolis',
    summary: `Renata – Anápolis (GO)
Pedagoga, vinha de reprovações seguidas e quase desistiu dos concursos depois de mais um insucesso estudando no modelo tradicional (cursinho, PDF, vídeo).
Ao conhecer o método SPQ, decidiu dar uma última chance aos estudos, migrando para o TEC e estudando 100% por questões, sem PDFs.
Em poucos anos, acumulou cerca de 34–35 mil questões resolvidas, levou sua porcentagem para perto dos 90% e replicou esse desempenho na prova: fez 90% de acertos e foi aprovada em 2º lugar na SEDUC Goiás (Pedagoga em Anápolis), além de também ser aprovada na Prefeitura de Anápolis.
Mesmo trabalhando de manhã e estudando em média 3–4h por dia, transformou Português — que antes a reprovava — em ponto forte, passou a dominar autores de Pedagogia só pelas questões e hoje diz que o estudo por questões foi o que, de fato, mudou a vida dela na área de concursos.`,
  },
  {
    videoId: '_r289yBCU34',
    title: 'Lucas — Guarda Civil Municipal Poços de Caldas',
    thumbnail: '/img/video-lucas.webp', // mesma imagem usada em outros lugares
    name: 'Lucas',
    role: 'Aprovado GCM Poços de Caldas/MG',
    summary: `Lucas, 28 anos – sudoeste de Minas (MG)
Estuda para carreiras militares desde 2016, começou com apostila de banca e depois anos preso no combo cursinho + PDF + videoaula, quase sem fazer questões e sempre sentindo que a aprovação estava longe.
Desconfiou por meses do DAQ (“mais um curso de como estudar?”), até decidir entrar no DAQ Essencial e migrar de vez para o método SPQ, estudando 100% por questões no TEC – encaixando estudo na rotina puxada de trabalho, faculdade de Direito, estágio e treinos de maratona (corre cerca de 100 km por mês).
Em menos de um ano, transformou raciocínio lógico e informática — que eram suas maiores travas — em pontos fortes, viu seu desempenho crescer tanto no TEC quanto na faculdade e foi aprovado na Guarda Civil Municipal de Poços de Caldas, num concurso que não saía há 26 anos.
Ele diz que o DAQ devolveu a confiança, mudou sua relação com o erro e hoje é a base que está usando para voos maiores, como Polícia Penal de Minas e, no futuro, Polícia Federal.`,
  },
];

export default function VideoTestimonials() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const openVideo = (videoId: string) => {
    setActiveVideoId(videoId);
  };

  const closeVideo = () => {
    setActiveVideoId(null);
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              <FontAwesomeIcon icon={faPlayCircle} className="text-amber-500 mr-2" /> Depoimentos em vídeo
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Histórias reais de quem aplicou o Método SPQ, estudou por questões e finalmente viu a aprovação sair do
              papel.
            </p>
          </div>

          <div className="relative">
            {/* Botão anterior */}
            <button
              className="video-carousel-prev absolute top-1/2 -left-4 z-10 hidden md:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-500 hover:bg-amber-50 transition-colors"
              aria-label="Depoimento anterior"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            {/* Botão próximo */}
            <button
              className="video-carousel-next absolute top-1/2 -right-4 z-10 hidden md:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-500 hover:bg-amber-50 transition-colors"
              aria-label="Próximo depoimento"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
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
                  <article className="bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col">
                    {/* Thumb / Vídeo */}
                    <button
                      type="button"
                      className="relative cursor-pointer group aspect-video w-full overflow-hidden rounded-t-xl"
                      onClick={() => openVideo(video.videoId)}
                    >
                      <Image
                        src={video.thumbnail}
                        alt={`Thumbnail do vídeo: ${video.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <FontAwesomeIcon
                          icon={faPlayCircle}
                          className="text-4xl md:text-5xl text-amber-400 drop-shadow-md group-hover:scale-110 transition-transform"
                        />
                        <span className="text-xs font-semibold uppercase tracking-wide text-white">
                          Assistir depoimento
                        </span>
                      </div>
                    </button>

                    {/* Texto embaixo do vídeo */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-semibold text-slate-900 mb-1">{video.title}</h3>
                      <p className="text-xs text-slate-500 mb-3">
                        {video.name} — {video.role}
                      </p>
                      <p className="text-sm text-slate-700 whitespace-pre-line">{video.summary}</p>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Modal de vídeo */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white hover:text-amber-400 text-2xl"
              aria-label="Fechar vídeo"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                className="w-full h-full"
                frameBorder={0}
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