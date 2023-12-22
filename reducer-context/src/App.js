import './App.css';
//import ThemeContext, { ThemeProvider } from './ThemeContext';
//import ChildComponent from './ChildComponent';
//import ChildTwoComponent from './ChildTwoComponent';
//import UserInfo from './UserInfo';
//import ThemeToggleButton from './ThemeToggleButton';
//import { ThemeProvider } from './ThemeContext';
//import YTBAPI from './YTBAPI';
//import Quiz from './Quiz';
import NumberGuessingGameLimit from './NumberGuessingGameLimit';
//import Counter from './ReducerCount';

//Provider : 해당 컴포넌트를 통해서 ThemeContext 안에 있는 컴포넌트들에게 객체값을 공유하고 읽을 수 있도록 해줌.
function App() {
  const theme = 'light';
  return (
    /*
    <ThemeProvider>
      <div>
        <h2>테마변경</h2>
        <YTBAPI />
      </div>
    </ThemeProvider>
    */
    <NumberGuessingGameLimit />
  );
}

export default App;
