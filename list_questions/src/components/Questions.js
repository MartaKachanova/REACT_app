import "./Questions.css";
import { useState } from "react";

function Questions({ items, buttons }) {

let [colorBg, setColor] = useState({buttons});

const buttonColor = (e) => {
if(e.target.id === "btn_1"){
  setColor({buttons: "FFE4B5#"});
}
if(e.target.id === "btn_2"){
  setColor({buttons: "#00FA9A"});
}
if(e.target.id === "btn_3"){
  setColor({buttons: "#FFA07A"});
}
return colorBg;
}
const style = { backgroundColor: colorBg.buttons};


return (
<ol className="listQues">
      {items.map((item) => (
        <li className="questions">
        <span >
      {item.question}
    

    
    <div className="status" >
      {buttons.map((item) => (
          <button className="dropbtn" onClick={buttonColor} style={style}>
            <a href="#">{item.value} </a>
          </button>
        ))} 
    </div>
      </span>
      </li>
      ))}
</ol>
  );
}


export default Questions;
