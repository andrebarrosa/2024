import Botão from "../Botão";
import Texto from "../Texto";
import Titulo from "../Titulo";
import "./style.css"

export default function Card() {
  return (
    <div className="teste">
        <div>
            <img width={250} height={350} src="/starwars.jpg"/>
        </div>
        <div className="texto">
            <Titulo/>
            <Texto/>
            <Botão/>
        </div>
    </div>
  );
}


