import { useNavigate } from "react-router-dom"
import '../StylesComponents/tourStyles.css'
export default function DaysAndHoursTracker(){
    const navigate=useNavigate()
    return(
        <article className='days-aviable-container'>
        <header className='title-days'>Seleccione un dia y hora disponibles
            <select className="select-container-time">
                <option value="">martes</option>
                <option value="">miercoles</option>
                <option value="">jueves</option>
                <option value="">viernes</option>
                <option value="">sabado</option>
                <option value="">domingo</option>
            </select>
        </header>
        <main className='time-options-container'>
            <div className="start">Horarios de partida
                <div><label htmlFor="">12:45</label>
                    <input type="checkbox" name="" id="" />
                </div>
                <div><label htmlFor="">13:45</label>
                    <input type="checkbox" name="" id="" />
                </div>
                <div><label htmlFor="">14:45</label>
                    <input type="checkbox" name="" id="" />
                </div>
                <div><label htmlFor="">15:45</label>
                    <input type="checkbox" name="" id="" />
                </div>
            </div>
        </main>
        <footer>
            <button className='time-check-btn' onClick={()=>navigate('/ticketoption')}>Confirmar</button>
        </footer>
    </article>
    )
}