// components/FormModal.tsx (Refatorado com react-fontawesome)

'use client';

import { useState, FormEvent, MouseEvent } from 'react';
// MUDANÇA 1: Importamos o componente e os ícones necessários
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const formatarTelefone = (value: string) => {
    let v = value.replace(/\D/g, '').substring(0, 11);
    if (v.length > 10) v = v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    else if (v.length > 5) v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    else v = v.replace(/(\d*)/, '($1');
    setWhatsapp(v);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback({ message: '', type: '' });

    if (nome.length < 3 || !email.includes('@') || whatsapp.replace(/\D/g, '').length < 10) {
      setFeedback({ message: 'Por favor, preencha todos os campos corretamente.', type: 'erro' });
      setIsLoading(false);
      return;
    }
    
    // ATENÇÃO: Se você moveu esta URL para uma variável de ambiente, mantenha a versão com process.env
    const webhookUrl = 'https://n8n.srv928140.hstgr.cloud/webhook/13c8579f-e98e-463c-839e-0795865e6dfa';
    const checkoutUrl = `https://pay.hotmart.com/K70495535U?checkoutMode=1011&name=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}`;

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify({ nome, email, whatsapp }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        window.location.href = checkoutUrl;
      } else {
        throw new Error('Erro ao enviar os dados. Tente novamente.');
      }
    } catch (error) {
      console.error(error);
      setFeedback({ message: 'Erro de conexão. Por favor, tente novamente.', type: 'erro' });
      setIsLoading(false);
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity"
    >
      <div className="relative bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700">
          {/* MUDANÇA 2: A tag <i> foi substituída */}
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </button>
        <h3 className="text-2xl font-bold text-emerald-600 mb-2">Quero o DAQ Essencial</h3>
        <p className="text-slate-600 mb-6">Preencha para acessar o checkout</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {feedback.message && (
            <div className={`p-3 rounded-lg text-center ${feedback.type === 'erro' ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'}`}>
              {feedback.message}
            </div>
          )}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
            <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Seu nome completo" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="seu@email.com" />
          </div>
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
            <input type="tel" id="whatsapp" name="whatsapp" value={whatsapp} onChange={(e) => formatarTelefone(e.target.value)} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="(99) 99999-9999" />
          </div>
          <button type="submit" disabled={isLoading} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed">
            {isLoading ? 'Enviando...' : (
              <>
                {/* MUDANÇA 3: A tag <i> foi substituída */}
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Quero o DAQ Essencial
              </>
            )}
          </button>
          <p className="text-xs text-slate-500 text-center">Ao informar meus dados, concordo com a <a href="#" className="text-emerald-600 hover:underline">Política de Privacidade</a>.</p>
        </form>
      </div>
    </div>
  );
}