// components/TestimonialsSection.tsx

'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteLeft,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Testimonial = {
  id: string;
  image: string;
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 'simone',
    image: '/img/depoimento_simone.webp', // ajuste pro caminho real
    name: 'Simone',
    role: 'Área fiscal — pré-edital',
    quote:
      '“Eu tinha 3–4h por dia e vivia perdida em PDF. Com o DAQ Essencial, consegui organizar meus estudos em cadernos e, pela primeira vez, senti que estava avançando de verdade.”',
  },
  {
    id: 'gabriel',
    image: '/img/depoimento_gabriel.webp',
    name: 'Gabriel',
    role: 'Aprovado em concurso policial',
    quote:
      '“Depois de anos batendo na trave, estudar por questões com lógica de banca foi o divisor de águas. A porcentagem no TEC começou a subir e a aprovação veio.”',
  },
  {
    id: 'victor',
    image: '/img/depoimento_victor.webp',
    name: 'Victor',
    role: 'Aprovado Senado Federal',
    quote:
      '“Eu estudava há 7 anos do jeito tradicional. Quando mudei a estratégia com o SPQ, parei de acumular teoria e comecei a acumular acertos.”',
  },
  {
    id: 'lucas',
    image: '/img/depoimento_lucas.webp', // mesma imagem que você usa na thumb do Lucas
    name: 'Lucas',
    role: 'Aprovado GCM Poços de Caldas/MG',
    quote:
      '“Apliquei o método SPQ com o DAQ Essencial e fui aprovado em menos de 10 meses, mesmo com faculdade, trabalho, estágio e treino de maratona.”',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título / subtítulo */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Histórias reais de quem aplicou o Método SPQ
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Concurseiros comuns que saíram do caos de PDFs, organizaram os estudos e voltaram
            a acreditar na aprovação estudando por questões.
          </p>
        </div>

        <div className="relative">
          {/* Botão anterior */}
          <button
            className="depoimento-prev absolute -left-6 top-1/2 z-10 hidden md:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-500 hover:bg-amber-50 transition-colors shadow-sm"
            aria-label="Depoimento anterior"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Botão próximo */}
          <button
            className="depoimento-next absolute -right-6 top-1/2 z-10 hidden md:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-500 hover:bg-amber-50 transition-colors shadow-sm"
            aria-label="Próximo depoimento"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.depoimento-prev',
              nextEl: '.depoimento-next',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <article className="h-full rounded-2xl bg-white shadow-md border border-slate-100 overflow-hidden flex flex-col">
                  {/* IMAGEM GRANDE EM CIMA */}
                  <div className="relative w-full aspect-square bg-slate-100">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 320px"
                      className="object-cover"
                    />
                  </div>

                  {/* TEXTO / RESUMO */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>

                    <div className="relative flex-1">
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="text-amber-200 text-3xl mb-2"
                      />
                      <p className="text-sm text-slate-700 leading-relaxed">{t.quote}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}