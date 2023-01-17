import { useStore } from '@nanostores/react';
import { isModalOpen } from './modalStore';

export default function ModalButton() {
  const $isModalOpen = useStore(isModalOpen);
  return (
    <button
      className="btn btn-primary w-full"
      onClick={() => isModalOpen.set(!$isModalOpen)}
    >
      Recorrido
    </button>
  );
}
