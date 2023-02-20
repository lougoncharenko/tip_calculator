import React,{useState} from "react";
import '../styles/TipInputs.css'
  
  export default function TipInputs () {
    return (
        <section className="form-input">
            <form>
                <label>
                    Bill Amount:
                    <input 
                    type="text" 
                    name="bill" 
                    placeholder="$0.00"/>
                </label>
                <label>
                    Tip Percent:
                    <input 
                    type="text"
                     name="percent" 
                     placeholder="%"/>
                </label>
                <label>
                    Split between:
                    <input type="text" 
                    name="percent"
                    placeholder="Number of people" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </section>
    );
  }
