import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ChildTwoComponent = () => {
  const theme = useContext(ThemeContext);
  return <h1>현재 테마는 {theme} 입니다.</h1>;
};

export default ChildTwoComponent;
