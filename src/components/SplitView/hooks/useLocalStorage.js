import { useState, useEffect } from 'react';

/**
 * 自定义Hook：localStorage持久化
 * @param {string} key - localStorage的键
 * @param {any} initialValue - 初始值
 * @returns {[any, Function]} - [存储的值, 设置值的函数]
 */
function useLocalStorage(key, initialValue) {
  // 初始化状态
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // 更新localStorage的函数
  const setValue = (value) => {
    try {
      // 支持函数式更新
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
