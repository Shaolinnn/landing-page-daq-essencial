// components/FaqSection.tsx

'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faChevronDown, faBookOpen } from '@fortawesome/free-solid-svg-icons';

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

type FaqGroup = {
  id: string; // Identificador para filtrar
  title: string;
  description?: string;
  items: FaqItem[];
};

// DADOS DAS PERGUNTAS
const allFaqGroups: FaqGroup[] = [
  {
    id: 'metodo', // FAQ 1 - Dúvidas de Venda/Método
    title: 'Dúvidas sobre o Método SPQ',
    description: 'Descubra se o método funciona para o seu caso específico.',
    items: [
      {
        question: '1. Dá pra aplicar o método mesmo sendo iniciante?',
        answer: (
          <>
            Sim — e ele funciona <strong>ainda melhor</strong> para quem está começando.
            <br />
            <br />
            O DAQ te ensina exatamente <strong>como estudar</strong>, não importa o nível em que
            você está. É perfeito para quem:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>está perdido;</li>
              <li>não sabe por onde começar;</li>
              <li>não consegue montar cronograma;</li>
              <li>estuda muito e evolui pouco.</li>
            </ul>
          </>
        ),
      },
      {
        question: '2. E se eu tiver base fraca em alguma disciplina?',
        answer: (
          <>
            Não tem problema.
            <br />
            <br />
            No método SPQ você <strong>aprende pela lógica das questões</strong>, puxando teoria
            apenas quando a lacuna aparece. Isso te permite <strong>criar base mais rápido</strong>{' '}
            do que no estudo tradicional, que costuma te prender por meses em PDF e videoaula antes
            de ir para as questões.
          </>
        ),
      },
      {
        question: '3. O método serve para qualquer área?',
        answer: (
          <>
            Sim. O SPQ é aplicado em várias áreas, como:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Área Fiscal;</li>
              <li>Tribunais;</li>
              <li>Segurança/Policial;</li>
              <li>Administrativo;</li>
              <li>INSS;</li>
              <li>Petrobrás;</li>
              <li>Bancárias;</li>
              <li>Carreiras Jurídicas (com adaptações).</li>
            </ul>
            <br />
            O método é o mesmo — o que muda é <strong>o foco dos cadernos dentro do TEC</strong>.
          </>
        ),
      },
      {
        question: '4. O DAQ é um cursinho? Tem aulas de todas as matérias?',
        answer: (
          <>
            Não. O DAQ <strong>não é cursinho tradicional</strong>, nem um curso de teoria por
            disciplina.
            <br />
            <br />
            Ele é um <strong>método de estudo por questões</strong>, criado para te ensinar:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>como estudar começando pela questão;</li>
              <li>como montar cadernos estratégicos;</li>
              <li>como revisar do jeito certo;</li>
              <li>como organizar seu plano sem cronograma engessado.</li>
            </ul>
            <br />
            Você pode continuar usando seu cursinho teórico como apoio, mas o{' '}
            <strong>DAQ vira o cérebro da sua preparação</strong>.
          </>
        ),
      },
    ],
  },
  {
    id: 'geral', // FAQ 2 e 3 - Ferramentas e Acesso
    title: 'Ferramentas, Acesso e Garantia',
    description: 'Detalhes técnicos sobre a plataforma e o curso.',
    items: [
      {
        question: 'Preciso assinar o TEC Concursos?',
        answer: (
          <>
            Sim, para aplicar o método completo.
            <br />
            <br />
            Todas as aulas práticas do DAQ são ensinadas dentro do TEC.
            <br />
            Exclusivo para alunos: você ganha <strong>cupom de 20% de desconto</strong> no TEC para
            nova assinatura, renovação ou upgrade.
          </>
        ),
      },
      {
        question: 'Posso usar QConcursos ou outro site?',
        answer: (
          <>
            Pode usar como <strong>apoio</strong>, mas não como plataforma principal. O método foi construído em cima das funcionalidades avançadas do TEC.
          </>
        ),
      },
      {
        question: 'Como recebo o acesso e por quanto tempo?',
        answer: (
          <>
            O acesso é <strong>IMEDIATO</strong> via e-mail assim que o pagamento é confirmado.
            <br />
            Você terá <strong>1 ano de acesso completo</strong> para ver e rever as aulas quantas vezes quiser.
          </>
        ),
      },
      {
        question: 'Tem garantia?',
        answer: (
          <>
            Sim! Você tem <strong>7 dias de garantia total</strong>. Se não gostar, devolvemos 100% do seu dinheiro. Sem letras miúdas.
          </>
        ),
      },
    ],
  },
];

interface FaqSectionProps {
  variant: 'metodo' | 'geral'; // Define qual grupo de perguntas mostrar
}

export default function FaqSection({ variant }: FaqSectionProps) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  // Filtra os grupos baseados na variante escolhida
  const groupsToShow = allFaqGroups.filter((g) => g.id === variant);

  const handleToggle = (key: string) => {
    setOpenKey((current) => (current === key ? null : key));
  };

  const isMethod = variant === 'metodo';

  return (
    <section className={`py-12 ${isMethod ? 'bg-white' : 'bg-slate-50'}`} id={isMethod ? "faq-metodo" : "faq-geral"}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${isMethod ? 'text-amber-600' : 'text-slate-900'}`}>
            <FontAwesomeIcon icon={isMethod ? faBookOpen : faQuestionCircle} className="mr-2" />
            {isMethod ? 'Dúvidas frequentes sobre o Método' : 'Dúvidas sobre Acesso e Ferramentas'}
          </h2>
          {isMethod && (
            <p className="text-slate-600">
              Tire suas dúvidas se o SPQ é realmente para o seu momento de estudo.
            </p>
          )}
        </div>

        {groupsToShow.map((group, groupIndex) => (
          <div key={group.title} className="mb-8">
            <div className="space-y-4">
              {group.items.map((faq, itemIndex) => {
                const key = `${groupIndex}-${itemIndex}`;
                const isOpen = openKey === key;

                return (
                  <div
                    key={key}
                    className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
                  >
                    <button
                      onClick={() => handleToggle(key)}
                      className="flex justify-between items-center w-full text-left p-5 md:p-6"
                    >
                      <h4 className="font-semibold text-base text-slate-800 pr-4">
                        {faq.question}
                      </h4>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`text-amber-500 transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[600px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}