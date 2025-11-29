// components/FaqSection.tsx

'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

type FaqGroup = {
  title: string;
  description?: string;
  items: FaqItem[];
};

const faqGroups: FaqGroup[] = [
  {
    title: 'FAQ 1 — Sobre o Método SPQ e o DAQ Essencial',
    description: 'Entenda o que é o DAQ, como o método SPQ funciona e para quem ele foi pensado.',
    items: [
      {
        question: '1. O DAQ é um cursinho? Tem aulas de todas as matérias?',
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
      {
        question: '2. Dá pra aplicar o método mesmo sendo iniciante?',
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
        question:
          '3. E se eu tiver base fraca em alguma disciplina (Português, Matemática, Física, Química etc.)?',
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
        question: '4. O método serve para qualquer área?',
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
    ],
  },
  {
    title: 'FAQ 2 — Sobre o TEC Concursos e ferramentas',
    description: 'Como o TEC se encaixa no método e o que fazer com outras plataformas e cursinhos.',
    items: [
      {
        question: '5. Preciso assinar o TEC Concursos?',
        answer: (
          <>
            Sim, para aplicar o método completo.
            <br />
            <br />
            Todas as aulas práticas do DAQ são ensinadas dentro do TEC, porque ele tem:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>estatísticas avançadas;</li>
              <li>filtros por banca, área e assunto;</li>
              <li>evolução por desempenho;</li>
              <li>cruzamento de dados.</li>
            </ul>
            <br />
            Exclusivo para alunos: você ganha <strong>cupom de 20% de desconto</strong> no TEC para
            nova assinatura, renovação ou upgrade.
          </>
        ),
      },
      {
        question: '6. Posso usar QConcursos, GranQuestões ou outro site?',
        answer: (
          <>
            Pode usar como <strong>apoio</strong>, mas não como plataforma principal.
            <br />
            <br />
            O método foi construído em cima das funcionalidades do TEC, então é nele que você vai
            aplicar o SPQ do jeito completo. Outras plataformas podem complementar, mas não
            substituem a estrutura do TEC.
          </>
        ),
      },
      {
        question: '7. Preciso cancelar meu cursinho atual?',
        answer: (
          <>
            Não.
            <br />
            <br />
            O cursinho deixa de ser <strong>“o centro”</strong> do estudo e passa a ser apenas{' '}
            <strong>apoio teórico</strong> para complementar o que as questões mostram que você
            precisa revisar.
            <br />
            <br />
            Em vez de montar o dia em cima das aulas, você passa a montar o estudo em cima{' '}
            <strong>dos cadernos e do desempenho nas questões</strong>.
          </>
        ),
      },
    ],
  },
  {
    title: 'FAQ 3 — Sobre acesso, valor, garantia e mentoria',
    description:
      'O que você precisa saber sobre tempo de acesso, mentoria, preço, garantia e renovação.',
    items: [
      {
        question: '8. O DAQ Essencial dá acesso à mentoria?',
        answer: (
          <>
            O DAQ é sempre o <strong>primeiro passo</strong>.
            <br />
            <br />
            A <strong>Mentoria SPQ</strong> aparece após a compra do Essencial, como{' '}
            <strong>upgrade opcional</strong>, com:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>encontros quinzenais;</li>
              <li>acompanhamento mais próximo;</li>
              <li>suporte individual;</li>
              <li>comunidade exclusiva.</li>
            </ul>
            <br />
            Ela <strong>não é vendida separadamente</strong>.
            <br />
            <br />
            O acesso ao DAQ Essencial é de <strong>1 ano</strong>.
          </>
        ),
      },
      {
        question: '9. Tem promoção, cupom ou desconto de Black Friday?',
        answer: (
          <>
            Não.
            <br />
            <br />
            O preço é <strong>estável</strong> — não aumentamos antes para “fingir desconto
            depois”.
            <br />
            <br />
            O único benefício é o <strong>cupom de 20% no TEC</strong>, exclusivo para alunos, para
            nova assinatura, renovação ou upgrade.
          </>
        ),
      },
      {
        question: '10. Tem garantia?',
        answer: (
          <>
            Sim! Você tem <strong>7 dias de garantia total</strong>.
            <br />
            <br />
            Você pode entrar no curso, assistir às aulas iniciais, montar seus cadernos no TEC e
            começar a aplicar o método. Se <strong>não fizer sentido</strong> para você, basta
            pedir reembolso dentro do prazo.
          </>
        ),
      },
      {
        question: '11. Posso renovar minha assinatura com desconto?',
        answer: (
          <>
            Não existe mais política de renovação com desconto.
            <br />
            <br />
            A diretriz atual é:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Quem quer continuar <strong>compra o DAQ Essencial novamente</strong> pelo valor
                vigente.
              </li>
              <li>
                A Mentoria continua aparecendo <strong>apenas como upgrade</strong> dentro do curso.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
];

export default function FaqSection() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setOpenKey((current) => (current === key ? null : key));
  };

  return (
    <section className="py-16 bg-slate-50" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            <FontAwesomeIcon icon={faQuestionCircle} className="text-amber-500 mr-2" />
            Perguntas frequentes
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Método SPQ, o DAQ Essencial, o uso do TEC Concursos e a
            Mentoria SPQ.
          </p>
        </div>

        {faqGroups.map((group, groupIndex) => (
          <div key={group.title} className="mb-10">
            <h3 className="text-xl font-semibold text-slate-900 mb-1">{group.title}</h3>
            {group.description && (
              <p className="text-sm text-slate-600 mb-4">{group.description}</p>
            )}

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
                      className="flex justify-between items-center w-full text-left p-6"
                    >
                      <h4 className="font-semibold text-base md:text-lg text-slate-800">
                        {faq.question}
                      </h4>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`text-amber-500 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[600px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="text-slate-600 text-sm md:text-base leading-relaxed">
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