import React, { useState } from 'react';
import {question} from './api';
import './accordian.css';
import MyAccordian from './MyAccordian';


 const Accordian = () => {
    const [data, setData] = useState(question)
  return (
    <>
  <section className="main-div">
  <h1>React interview question</h1>
      {
        data.map((curElm)=>{
            const{id} = curElm;
           return <MyAccordian key={id} {...curElm}/>
        })
      }
      </section>
    </>
  )
}
export default Accordian;
