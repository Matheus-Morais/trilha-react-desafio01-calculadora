
import Input from './components/Input';
import Button from './components/Button';
import ButtonOperator from './components/ButtonOperator';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
      setFirstNumber('0')
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus))
      setOperation('')
      setFirstNumber('0')
    }
  }

  const handleMultiplyNumbers = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(multiply))
      setOperation('')
      setFirstNumber('0')
    }
  }

  const handleDivideNumbers = () => {
    if (firstNumber === "0"){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation("/")
    } else {
      if (currentNumber !== "0"){
        const divide = Number(firstNumber) / Number(currentNumber)
        setCurrentNumber(String(divide))
      } else {
        setCurrentNumber('Erro')
      }
      setOperation('')
      setFirstNumber('0')
    }
  }

  const handlePercentage = () => {
    setCurrentNumber(String(Number(currentNumber) / 100));
  };

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleMultiplyNumbers();
            break;
          case "/":
            handleDivideNumbers();
            break;
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <ButtonOperator label="c" onClick={handleOnClear}/>
          <ButtonOperator label="."/>
          <ButtonOperator label="%" onClick={handlePercentage} />
          <ButtonOperator label="/" onClick={handleDivideNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <ButtonOperator label="x" onClick={handleMultiplyNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <ButtonOperator label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <ButtonOperator label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <ButtonOperator label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
