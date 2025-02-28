import { useState } from 'react';
import copy from 'clipboard-copy';

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    copy(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 300); // Сброс состояния через 2 секунды
      })
      .catch((error) => {
        console.error('Ошибка при копировании:', error);
      });
  };

  return { isCopied, copyToClipboard };
};
