// components/TestimonialsSection.tsx

'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Testimonial = {
  id: string;
  image: string;
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    id: 'simone-fiscal',
    image: '/img/depoimento_1.webp',
    quote:
      '“Eu tinha 3–4h por dia e vivia perdida em PDF. Com o DAQ Essencial, consegui organizar meus estudos em cadernos e, pela primeira vez, senti que estava avançando de verdade.”',
    name: 'Simone',
    role: 'Área fiscal — pré-edital',
  },
  {
    id: 'gabriel-policial',
    image: '/img/depoimento_2.webp',
    quote:
      '“Depois de anos batendo na trave, estudar por questões com lógica de banca foi o divisor de águas. A porcentagem no TEC começou a subir e a aprovação veio.”',
    name: 'Gabriel',
    role: 'Aprovado em concurso policial',
  },
  {
    id: 'victor-senado',
    image: '/img/depoimento_3.webp',
    quote:
      '“Eu estudava há 7 anos do jeito tradicional. Quando mudei a estratégia com o SPQ, parei de acumular teoria e comecei a acumular acertos.”',
    name: 'Victor',
    role: 'Aprovado Senado Federal',
  },
  {
    id: 'lucas-gcm',
    image: '/img/video-lucas.webp', // mesma imagem da thumb do vídeo
    quote:
      '“Apliquei o método SPQ com o DAQ Essencial e fui aprovado em menos de 10 meses, mesmo com faculdade, trabalho, estágio e treino de maratona.”',
    name: 'Lucas',
    role: 'Aprovado GCM Poços de Caldas/MG',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Histórias reais de quem aplicou o Método SPQ
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Concurseiros comuns que saíram do caos de PDFs, organizaram os estudos e voltaram a acreditar na aprovação
            estudando por questões.
          </p>
        </div>

        <div className="relative">
          {/* Botão anterior */}
          <button
            className="depoimento-prev absolute -left-4 top-1/2 z-10 hidden md:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-500 hover:bg-amber-50 transition-colors"
            aria-label="Depoimento anterior"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Botão próximo */}
          <button
            className="depoimento-next absolute -right-4 top-1/2 z-10 hidden md:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-500 hover:bg-amber-50 transition-colors"
            aria-label="Próximo depoimento"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: '.depoimento-prev',
              nextEl: '.depoimento-next',
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <article className="h-full rounded-2xl bg-white p-6 shadow-md border border-slate-100 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-amber-100 bg-slate-100">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 leading-tight">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="relative flex-1">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="text-amber-200 text-3xl mb-3"
                    />
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {testimonial.quote}
                    </p>
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