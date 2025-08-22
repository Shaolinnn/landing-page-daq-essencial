// components/FaqSection.tsx

'use client'; // <-- Isso transforma o arquivo em um Componente Cliente

import { useState } from 'react';

// Dados do FAQ para facilitar a manutenção
const faqData = [
  {
    question: 'Como funciona o acesso ao conteúdo?',
    answer: 'Após a confirmação do pagamento, você receberá acesso imediato à plataforma com todo o material, incluindo a aula gravada, materiais de apoio e orientações para começar.',
  },
  {
    question: 'Preciso assinar a plataforma TEC Concursos?',
    answer: 'Sim, o método foi desenvolvido para ser aplicado usando a plataforma TEC Concursos, que é a mais completa para estudos por questões. O DAQ Essencial não inclui a assinatura do TEC, mas te ensina a usá-lo com máxima eficiência.',
  },
  {
    question: 'O método serve para qualquer concurso?',
    answer: 'Sim! O DAQ Essencial é um método universal de estudo por questões que pode ser aplicado a qualquer concurso público. As técnicas são adaptáveis a todas as áreas e níveis de concursos.',
  },
];

export default function FaqSection() {
  // O 'useState' guarda o estado de qual item do FAQ está aberto.
  // 'null' significa que todos estão fechados.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // Se o item clicado já estiver aberto, feche-o. Senão, abra-o.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-slate-50" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            <i className="fas fa-question-circle text-amber-500 mr-2"></i> Perguntas frequentes
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Tire suas dúvidas sobre o DAQ Essencial</p>
        </div>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <button
                onClick={() => handleToggle(index)}
                className="flex justify-between items-center w-full text-left p-6"
              >
                <h4 className="font-semibold text-lg text-slate-800">{faq.question}</h4>
                <i
                  className={`fas fa-chevron-down text-amber-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}