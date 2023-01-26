import '../StylesComponents/selectTimeStyles.css'
import {useNavigate} from 'react-router-dom'
export default function TimeAndDayTakeIt(){
    const navigate=useNavigate()
    return(
        <article className='days-aviable-container'>
            <header className='title-days'>Seleccione un dia y hora disponibles
            <div className="select-container-time">           
            <select >
                <option value="martes" >martes</option>
                <option value="miercoles">miercoles</option>
                <option value="jueves">jueves</option>
                <option value="viernes">viernes</option>
                <option value="sabado">sabado</option>
                <option value="domingo">domingo</option>
            </select>
            </div>
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
                <div className="came-back">Horarios de regreso
                <div><label htmlFor="">17:45</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div><label htmlFor="">18:45</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div><label htmlFor="">19:45</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div><label htmlFor="">20:45</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>
            </main>
            <footer>
                <button className='time-check-btn' onClick={()=>navigate('/paradores')}>Confirmar</button>
            </footer>
        </article>
    )
}