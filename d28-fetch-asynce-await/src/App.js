import{useEffect,useState} from "react";
import './App.css';

function App() {

let [productsArr,setProductArr]=useState([])

useEffect(()=>{
  getproduct();
})

let getproduct=async()=>{

let reqobject={
  method:"GET",
};
let JSONData=await fetch("https://fakestoreapi.com/products",reqobject);


let JSOData=await JSONData.json();
setProductArr(JSOData);
console.log(JSOData);
}
  
  return (
  <div className="App">

  <button onClick={()=>{
  getproduct();
  }}>Get Products</button> 

  <div className="collections">
  {productsArr.map((ele,i)=>{
  return(
  <div className="collectiondiv">
  <img title={ele.description}  className="products" src={ele.image}></img>
  <p>{ele.title}</p>
  <p>${ele.price}/-only</p>
  </div>
  );
  })}
  </div>
    </div>
  );
}

export default App;
