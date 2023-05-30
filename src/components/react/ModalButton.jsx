import { useStore } from '@nanostores/react';
import { isModalOpen } from './modalStore';
import { t } from 'i18next';

export default function ModalButton({data}) {
  const $isModalOpen = useStore(isModalOpen);
  return (
    <button
      className="btn btn-primary w-full"
      onClick={() => isModalOpen.set(!$isModalOpen)}
    >
      {data.text}
    </button>
  );
}
