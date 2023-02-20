import React,{useState} from "react";
  
  export default function TipInputs () {
    return (
        <section>
            <form>
                <label>
                    Bill Amount:
                    <input type="text" name="bill" />
                </label>
                <label>
                    Tip Percent:
                    <input type="text" name="percent" />
                </label>
                <label>
                    Number of people to split between:
                    <input type="text" name="percent" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </section>
    );
  }
