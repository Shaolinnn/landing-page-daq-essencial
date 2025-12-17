// app/loading.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <div className="text-emerald-500 text-5xl animate-spin mb-4">
        <FontAwesomeIcon icon={faCircleNotch} />
      </div>
      <p className="text-slate-500 font-semibold text-sm tracking-widest uppercase animate-pulse">
        Carregando Método SPQ...
      </p>
    </div>
  );
}