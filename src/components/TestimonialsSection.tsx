// components/TestimonialsSection.tsx (Refatorado com react-fontawesome)

'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// MUDANÇA 1: Importamos o componente e os ícones necessários
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonialsData = [
  { image: '/img/depoimento_1.webp', text: 'Não participo dos encontros presenciais devido ao meu trabalho, mas graças as suas dicas consegui passar no CNU. Consegui nota para 12 órgãos estou aguardando a nota da redação.', author: 'Aluno DAQ', role: 'Aprovado CNU', },
  { image: '/img/depoimento_2.webp', text: 'Saiu o gabarito preliminar e acertei 38/40... errei só 2 questões. Estou muito feliz por que nunca imaginei alcançar algo assim. O DAQ mudou minha forma de estudar.', author: 'Aluno DAQ', role: 'Evolução evidente', },
  { image: '/img/Depoimento_3.webp', text: 'Ganhei 1 ano em 1 mês!! Estou amando e indico pra todo mundo! Super feliz com minha evolução depois que comecei a aplicar o método SPQ do DAQ Essencial.', author: 'Fernanda Sodero', role: 'Evolução rápida', },

  { 
    image: '/img/depoimento_8.webp', 
    text: 'Em 7 dias aplicando o método, finalizei um caderno com 90% de acertos. Alcancei 73% de aproveitamento em 602 questões. Esse método reacendeu em mim uma vontade insana de estudar.', //
    author: 'Aluno DAQ', 
    role: 'Resultados em 7 dias', 
  },

  { image: '/img/depoimento_4.webp', text: 'Sem malabarismo mental, planilhas complexas, cálculos de horas. O DAQ trouxe simplicidade e resultados. É libertador não ter que ficar lendo PDFs gigantes.', author: 'Aluno DAQ', role: 'Método direto ao ponto', },
  { image: '/img/depoimento_5.webp', text: 'Não consegui aplicar 100% do método por começar no pós-edital, mas uns 80% eu apliquei. E deu certo. Deus me deu essa aprovação através do estudo por questões!', author: 'Aluno DAQ', role: 'Aprovado TRE-RJ', },
  { image: '/img/depoimento_6.webp', text: 'Conheci a Kyrlla e comecei a estudar só por questões e os resultados mudaram da água pro vinho. Se eu puder dar um conselho: abandona o excesso de teoria e mergulha nas questões.', author: 'Aluno DAQ', role: 'Virada de chave', },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            {/* MUDANÇA 2: A tag <i> foi substituída */}
            <FontAwesomeIcon icon={faQuoteLeft} className="text-amber-500 mr-2" /> O que nossos alunos dizem
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Resultados reais de quem já aplicou o Método SPQ</p>
        </div>
        <div className="relative">
          <button className="depoimento-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-amber-500 hover:bg-amber-50 transition-colors">
            {/* MUDANÇA 3: A tag <i> foi substituída */}
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
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
            className="!pb-12"
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src={testimonial.image} 
                      alt={`Depoimento de ${testimonial.author}`} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }} 
                      priority={index < 3} // Otimiza o carregamento das primeiras 3 imagens
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      {/* MUDANÇA 4: A tag <i> foi substituída */}
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-amber-400 text-2xl mr-3 mt-1" />
                      <p className="text-slate-700">{testimonial.text}</p>
                    </div>
                    <div className="border-t border-slate-100 pt-4">
                      <h4 className="font-semibold text-slate-800">{testimonial.author}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className="depoimento-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-amber-500 hover:bg-amber-50 transition-colors">
            {/* MUDANÇA 5: A tag <i> foi substituída */}
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
}