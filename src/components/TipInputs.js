import React from "react";
import '../styles/TipInputs.css'
  
  export default function TipInputs ({bill, setBill, percent, setPercent, people, setPeople, setAmount}) {
    const handleSubmit = (e) => {
        e.preventDefault()
        calculate(bill, percent, people)
    }

    const calculate = (bill, percent, people) => {
        const decimal = Number(percent)/100
        const billPlusTip = Number(bill) * (1+ decimal)
        const perPerson = billPlusTip/Number(people)
        setAmount(perPerson)
        console.log(perPerson)
    }

    return (
        <section className="form-input">
            <form>
                <label>
                    Bill Amount:
                    <input 
                    type="text" 
                    name="bill" 
                    placeholder="$0.00"
                    value = {bill}
                    onChange={e => setBill(e.target.value)}
                    />
                </label>
                <label>
                    Tip Percent:
                    <input 
                    type="text"
                    name="percent" 
                    placeholder="%"
                    value = {percent}
                    onChange={e => setPercent(e.target.value)}
                     />
                </label>
                <label>
                    Split between:
                    <input 
                    type="text" 
                    name="percent"
                    placeholder="Number of people" 
                    value = {people}
                    onChange={e => setPeople(e.target.value)}
                    />
                </label>
                <input 
                type="submit" 
                value="Submit" 
                onClick={handleSubmit}
                />
            </form>
        </section>
    );
  }
