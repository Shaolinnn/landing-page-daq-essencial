// components/TestimonialsSection.tsx

'use client';

import Image from 'next/image';
import { ReactNode, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

type Testimonial = {
  image: string;
  text: ReactNode;
  author: string;
  role: string;
};

const testimonialsData: Testimonial[] = [
  {
    image: '/img/depoimento_1.webp',
    text: 'Não participo dos encontros presenciais e, ainda assim, consegui nota para 12 órgãos. Estou aguardando a nota da redação.',
    author: 'Aluno DAQ',
    role: 'Aprovado CNU',
  },
  {
    image: '/img/depoimento_2.webp',
    text: 'Saiu o gabarito preliminar e acertei 38 de 40 questões — errei só 2. Nunca imaginei alcançar algo assim. O DAQ mudou minha forma de estudar.',
    author: 'Aluno DAQ',
    role: 'Evolução evidente',
  },
  {
    image: '/img/Depoimento_3.webp',
    text: 'Ganhei 1 ano em 1 mês! Estou amando o método e indico demais o DAQ Essencial.',
    author: 'Fernanda Sodero',
    role: 'Evolução rápida',
  },
  {
    image: '/img/depoimento_8.webp',
    text: 'Em 7 dias aplicando o método, finalizei um caderno com 90% de acertos e cheguei a 73% de aproveitamento em 602 questões. Esse método reacendeu em mim uma vontade insana de estudar.',
    author: 'Aluno DAQ',
    role: 'Resultados em 7 dias',
  },
  {
    image: '/img/depoimento_4.webp',
    text: 'Sem malabarismo mental, planilhas complexas ou cálculos de horas. O DAQ trouxe simplicidade e resultado como eu nunca tinha visto antes.',
    author: 'Aluno DAQ',
    role: 'Método direto ao ponto',
  },
  {
    image: '/img/depoimento_5.webp',
    text: 'Não consegui aplicar o método 100% na rotina, mas uns 80% eu apliquei. E deu certo. Deus me deu essa aprovação através do estudo por questões!',
    author: 'Aluno DAQ',
    role: 'Aprovado TRE-RJ',
  },
  {
    image: '/img/depoimento_6.webp',
    text: 'Conheci a Kyrlla e comecei a estudar só por questões. Pela primeira vez, vi minha evolução acontecer nas questões.',
    author: 'Aluno DAQ',
    role: 'Virada de chave',
  },
  // Depoimento – Lucas (imagem pode ser a mesma da thumb do vídeo)
  {
    image: '/img/video-lucas.jpg', // ajuste esse path se o arquivo tiver outro nome
    text: '“Apliquei o método SPQ com o DAQ Essencial e fui aprovado em menos de 10 meses, mesmo com faculdade, trabalho, estágio e treino de maratona.”',
    author: 'Lucas',
    role: 'Aprovado GCM Poços de Caldas/MG',
  },
  // Novo depoimento – evolução em matemática (com negrito)
  {
    image: '/img/depoimento_9.jpg',
    text: (
      <>
        “Depois que comecei a aplicar o método SPQ, nunca tinha conseguido tanta constância de
        estudar todos os dias como agora. Isso refletiu em toda a minha vida — e,{' '}
        <strong>mesmo tendo extrema dificuldade em matemática</strong>, insisti no método e
        hoje parece loucura o quanto estou{' '}
        <strong>evoluindo na matéria</strong>.”
      </>
    ),
    author: 'Aluno DAQ',
    role: 'Mais constância e avanço em Matemática',
  },
];

const INITIAL_VISIBLE = 6;

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll
    ? testimonialsData
    : testimonialsData.slice(0, INITIAL_VISIBLE);

  const hasMore = testimonialsData.length > INITIAL_VISIBLE && !showAll;

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-amber-500 mr-2" />
            Histórias reais de quem aplicou o Método SPQ
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            Concurseiros comuns que saíram do caos de PDFs, organizaram os estudos e voltaram
            a acreditar na aprovação estudando por questões.
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.author}-${index}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col border border-slate-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Imagem em destaque */}
              <div className="relative h-48 w-full md:h-52">
                <Image
                  src={testimonial.image}
                  alt={`Depoimento de ${testimonial.author}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 3}
                />
              </div>

              {/* Texto */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start gap-3 mb-4">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="text-amber-400 text-2xl mt-1"
                  />
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>

                <div className="mt-auto border-t border-slate-100 pt-4">
                  <h4 className="font-semibold text-slate-800">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botão "Ver mais" */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-amber-600 transition-colors"
            >
              Ver mais depoimentos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}