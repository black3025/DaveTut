import Input from "./Input";
import Square from "./Square";
import {useState} from 'react';
function App() {
  const[color, setColor] = useState('');
  const[hexValue, setHexValue] = useState('');
  const[isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
        <Square 
          color={color}
          hexValue={hexValue} 
          isDarkText = {isDarkText} 
        />
        <Input
          color={color}
          setColor = {setColor}
          setHexValue = {setHexValue}
          setIsDarkText = {setIsDarkText}
          isDarkText = {isDarkText}
        />
    </div>
  );
}

export default App;
