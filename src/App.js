import React,{useState} from "react";
import './App.css';
import Header from './components/Header';
import TipInputs from './components/TipInputs';
import Display from './components/Display';

function App() {
  const [bill, setBill] = useState('');
  const [percent, setPercent] = useState('');
  const [people, setPeople] = useState('')
const [amount, setAmount] = useState({})

  return (
    <div className="App">
      <Header />
      <TipInputs 
      bill = {bill}
      setBill = {setBill}
      percent = {percent}
      setPercent = {setPercent}
      people = {people}
      setPeople ={setPeople}
      setAmount = {setAmount}
      />
     
      <Display 
      bill={bill}
      percent={percent}
      people={people}
      amount = {amount}
      />
    </div>
  );
}

export default App;
