import React, { useRef } from 'react'

function TenthMarkSheet() {

    let FirstNameInputRef =useRef();
    let LastNameInputRef =useRef();
    let engInputRef =useRef();
    let telInputRef =useRef();
    let hinInputRef =useRef();
    let sciInputRef =useRef();
    let matInputRef =useRef();
    let socInputRef =useRef();
    let resultparaRef =useRef();
  return (
    <div>


        <h1>TenthMarkSheet</h1>
       <form>
        <div>
        <label>Firstname</label>
        <input ref={FirstNameInputRef}></input>
       </div>


       <div>
        <label>Lastname</label>
        <input ref={LastNameInputRef}></input>
       </div>


       <div>
        <label>English</label>
        <input type='number' ref={engInputRef}></input>
       </div>



       <div>
        <label>Telugu</label>
        <input type='number' ref={telInputRef}></input>
       </div>



       <div>
        <label>hindi</label>
        <input type='number' ref={ hinInputRef}></input>
       </div>



       <div>
        <label>Scince</label>
        <input type='number' ref={sciInputRef}></input>
       </div>



      <div>
        <label>Maths</label>
        <input type='number' ref={matInputRef}></input>
        </div>
  



       <div>
        <label>social</label>
        <input type='number' ref={socInputRef}></input>
       </div>
       <div>
        <button type='button' onClick={()=>{
          let firstName = FirstNameInputRef.current.value;
          let lastName = LastNameInputRef.current.value;

         
            
           
       let engmarks =Number(engInputRef.current.value);
       let telmarks =Number(telInputRef.current.value);
       let hinmarks =Number(hinInputRef.current.value);
     
       let scimarks =Number(sciInputRef.current.value);
       let matmarks =Number(matInputRef.current.value);
       let socmarks =Number(socInputRef.current.value);
       let totalmarks=engmarks+telmarks+hinmarks+scimarks+matmarks+socmarks;






       alert(`${firstName} ${lastName} got Total Marks are ${totalmarks}`);
       resultparaRef.current.innerHTML = `${firstName} ${lastName} got total marks are ${totalmarks}`
     




        }}>calculate the result</button>
       </div>

       <p ref={resultparaRef}>please enter your marks and click it</p>










       </form>
      
    </div>
  )
}

export default TenthMarkSheet
