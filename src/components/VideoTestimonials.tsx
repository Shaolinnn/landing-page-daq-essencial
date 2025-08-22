// components/VideoTestimonials.tsx (Versão Definitiva Baseada na Análise)

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const videoData = [
    { videoId: 'Ben8sTjaVLI', title: 'Polícia Penal do Ceará (PP-CE) - Como Fui Aprovado', description: 'Gabriel Barbosa - Aprovado para Policial Penal do Ceará(PP-CE)', thumbnail: '/img/thumb_pp_ce.jpg' },
    { videoId: 'c9liS9Sk6cc', title: 'Senado Federal - Como Fui Aprovado', description: 'Victor Correia - Aprovado em 44º lugar para o cargo de Analista Legislativo, Especialidade Administração do Senado Federal', thumbnail: '/img/thumb_senado.jpg' },
    { videoId: 'Z1-uV0VOk5U', title: 'Como Fui Aprovada - TRT-MG', description: 'Lorena Maia - Aprovada em 14º lugar (Negros) para o cargo de Analista Juridiário do TRT-MG', thumbnail: '/img/thumb_trt_mg.jpg' },
    { videoId: 's-ivfFmnGbs', title: 'Como Fui Aprovado - CBM-MG', description: 'Arthur Vieitas - Aprovado em 291º lugar para o cargo de Soldado do Corpo de Bombeiros Militar de Minas Gerais', thumbnail: '/img/thumb_cbm_mg.jpg' },
    { videoId: 'IBPbX_tK14E', title: 'Como Fui Aprovada - SEDUC-GO', description: 'Renata Nery - Aprovada em 2º lugar para o cargo de Pedagogo - SEDUC-GO.', thumbnail: '/img/thumb_seduc_go.jpg' },
];

export default function VideoTestimonials() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              <i className="fas fa-play-circle text-amber-500 mr-2"></i> Depoimentos em Vídeo
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Veja e ouça diretamente de alunos que transformaram seus estudos com o DAQ Essencial
            </p>
          </div>
          <div className="relative px-12 md:px-0">
            <button className="video-carousel-prev absolute top-1/2 -translate-y-1/2 left-0 z-20 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-amber-500 hover:bg-amber-50 transition-colors">
                <i className="fas fa-chevron-left"></i>
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
              {videoData.map((video, index) => (
                <SwiperSlide key={video.videoId}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                    <div
                      className="relative cursor-pointer group aspect-video"
                      onClick={() => setActiveVideoId(video.videoId)}
                    >
                      <Image
                        src={video.thumbnail}
                        alt={`Thumbnail do vídeo: ${video.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover z-0"
                        // MUDANÇA 1: Adicionada a prop 'priority' para otimizar o carregamento da primeira imagem visível
                        priority={index === 0}
                      />
                      {/* MUDANÇA 2: Overlay agora é transparente por padrão e só aparece no hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300 z-10">
                        <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                          <i className="fas fa-play text-white text-xl"></i>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 flex-grow">
                      <h3 className="font-bold text-lg text-slate-800 mb-1">{video.title}</h3>
                      <p className="text-slate-600 text-sm">{video.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="video-carousel-next absolute top-1/2 -translate-y-1/2 right-0 z-20 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-amber-500 hover:bg-amber-50 transition-colors">
                <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* O Modal de Vídeo (sem alteração) */}
      {activeVideoId && (
        <div 
          onClick={() => setActiveVideoId(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
        >
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={(e) => { e.stopPropagation(); setActiveVideoId(null); }}
              className="absolute -top-10 right-0 text-white hover:text-amber-400 text-2xl"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="aspect-video bg-black" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}