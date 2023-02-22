import React from "react";
import '../styles/display.css'
  
  export default function Display ({bill, percent, people, amount}) {
    return (
        <section className="parent-container">
            <div className="child-container"> 
            <p>Bill total: ${bill}</p> 
            <p>Percent tipped: {percent}%</p> 
            <p>Split between {people} {people > 1? 'people': 'person'}</p> 
            {amount?  `Amount per person: $${amount}`: ''} 
            </div>
        </section>
    );
  }