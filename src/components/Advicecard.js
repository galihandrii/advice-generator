import "./Advicecard.css"
import dice from "../assets/icon-dice.svg"
import divider from "../assets/pattern-divider-desktop.svg"



const Advicecard = (props) =>{
    return (
        <div className="card">
            <div className="card-top">
                <h3>Advice #{props.id}</h3>
                <h2>"{props.advice}"</h2>
            </div>
            <div className="card-mid"><img src={divider}/></div>
            <div className="card-bottom">
               <button onClick={props.onClick}><img src={dice}/></button> 
            </div>

        </div>
    )
}

export default Advicecard;