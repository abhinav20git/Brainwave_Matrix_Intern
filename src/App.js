
import './App.css';
import {useState} from "react"

function App() {
  const arr=["itrms1","itrms2","itrms3","itrms4"]
  const arr1=[1,2,3,4,5,6,7,8,9,10]
  const arr2=[2,3,4,5,20,10]
  const [inputValue,setInputValue]=useState([])

  function evenodd(num){
    if(num%2===0){
      return num;
    }
  }
  return (
    <div className="App">
      <p>{inputValue}</p> 
      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />

      {arr.map((item,i)=>{
        
         return( 
          <ol>
         <li >{i}{item}</li>
         </ol>
        )
})}
<li>{
  arr1.filter((num)=>evenodd(num))

}</li>

<p>
  {
    arr2.reduce((acc,item)=>{
      console.log(acc)
      console.log(item)
    return acc=acc+item;
  })
  }
</p>



    </div>
  );
}

export default App;
