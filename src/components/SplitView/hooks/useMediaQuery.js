import { useState, useEffect } from 'react';

/**
 * 自定义Hook：媒体查询监听
 * @param {string} query - CSS媒体查询字符串
 * @returns {boolean} - 是否匹配媒体查询
 */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);

    // 现代浏览器使用addListener
    mediaQuery.addListener(handler);

    // 清理函数
    return () => {
      mediaQuery.removeListener(handler);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
