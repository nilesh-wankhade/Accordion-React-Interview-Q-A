import React, { useState } from 'react'

 const MyAccordian = ({question,answer}) => {
    const [show, setShow] = useState(false);
   
  return (
    <>
      <div className="main-heading">
       
        <h3>{question}</h3>
        <p onClick={()=>setShow(!show)}>{show? '–' : '+'}</p>
        </div>
       {show &&  <p className='answer'>{answer}</p>}
    
    </>
  )
}
export default MyAccordian;
