import NavBarOptions from "../Components/navBar";
import '../StylesComponents/navBarComponentsStyles/whenArriveStyles.css'
import {useNavigate} from 'react-router-dom';
export default function WhenWeArrive(){
    const navigate=useNavigate()
    return(
        <div className="when-arrive-container">
            <NavBarOptions/>
            <div className="food-image-container">
                <img alt="foto del rio" src={require('../svgLogos/cuando.jpeg')}/>
            </div>
            <article className="days-open">
               <h2>Horarios de la semana</h2>
               <p>Martes: 10:00 hs - 20:00 hs</p>
               <p>Miércoles: 10:00 hs - 20:00 hs</p>
               <p>Jueves: 10:00 hs - 20:00 hs</p>
               <p>Viernes: 10:00 hs - 20:00 hs</p>
               <p>Sabado: 10:00 hs - 20:00 hs</p>
               <p>Domingo: 10:00 hs - 20:00 hs</p>
               <button onClick={()=>navigate('/')} className='get-in'>inicio</button>
            </article>
        </div>
    )
}