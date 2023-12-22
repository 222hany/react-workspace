//부모 컴포넌트에서 createContext 로 생성한 Context 객체를 자식 컴포넌트에서 쉽게 사용할 수 있도록 만들어진 hook.
//useContext 를 사용하면 데이터를 전달하기위해 props 를 사용하지 않아도 됨.
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  //light 와 dark 색상 지정해주는 함수 만들기
  const themeStyles = {
    light: {
      backgroundColor: '#fff',
      color: '#333',
    },
    dark: {
      backgroundColor: '#333',
      color: '#fff',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ ...themeStyles[theme], minHeight: '100vh' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

//현재 사용하는 테마 함수
export const useTheme = () => {
  return useContext(ThemeContext);
};
