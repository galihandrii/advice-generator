import "./Advicecard.css"
import dice from "../assets/icon-dice.svg"




const Advicecard = (props) =>{
    return (
        <div className="card">
            <div>
                <h3>Advice #{props.id}</h3>
                <h2>{props.advice}</h2>
            </div>
            <div>
                <img src={dice}/>
            </div>

        </div>
    )
}

export default Advicecard;