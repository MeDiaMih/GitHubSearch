export const saveToLocalStorage = <T>(key: string, value: T): void => {
  try {
    const savedValue = JSON.stringify(value);
    localStorage.setItem(key, savedValue);
  } catch (error) {
    console.error('Ошибка при сохранении в localStorage:', error);
  }
};

export const loadFromLocalStorage = <T>(key: string): T | null => {
  try {
    const savedValue = localStorage.getItem(key);
    if (savedValue === null) {
      return null;
    }
    return JSON.parse(savedValue) as T;
  } catch (error) {
    console.error('Ошибка при загрузке из localStorage:', error);
    return null;
  }
};
