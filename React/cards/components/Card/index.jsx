// import Botão from "../Botão";
// import Texto from "../Texto";
// import Titulo from "../Titulo";
import "./style.css"

export default function Card(props) {
  return (
    <div className="teste">
        <div>
            <img width={250} height={350} src={props.image}/>
        </div>
        <div className="texto">
            <h1>{props.title}</h1>
            <p1>{props.text}</p1>
            <button>{props.button}</button>
        </div>
    </div>
  );
}


