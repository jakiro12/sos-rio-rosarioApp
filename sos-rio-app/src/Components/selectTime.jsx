import '../StylesComponents/selectTimeStyles.css'
import {useNavigate} from 'react-router-dom'
import { SelectStatusBanquito } from '../Provider/userProvider'
export default function TimeAndDayTakeIt(){
    const navigate=useNavigate()
    const {setDaySelectInBanquito,setHourSelectInBanquitoToGo,setHourSelectInBanquitoToBack} =SelectStatusBanquito()
    const getInputsToGo=document.getElementsByName('banquitogo')
    const getInputsToBack=document.getElementsByName('banquitoback')
    
    return(
        <article className='days-aviable-container'>
            <header className='title-days'>Seleccione un dia y hora disponibles
            <div className="select-container-time">           
            <select onChange={(e)=>setDaySelectInBanquito(e.target.value)}>
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
                    <div><label htmlFor="" name="banquitotimego">12:45</label>
                        <input type="checkbox" name="banquitogo"  />
                    </div>
                    <div><label htmlFor="" name="banquitotimego">13:45</label>
                        <input type="checkbox" name="banquitogo"  />
                    </div>
                    <div><label htmlFor="" name="banquitotimego">14:45</label>
                        <input type="checkbox" name="banquitogo"  />
                    </div>
                    <div><label htmlFor="" name="banquitotimego">15:45</label>
                        <input type="checkbox" name="banquitogo"  />
                    </div>
                </div>
                <div className="came-back">Horarios de regreso
                <div><label htmlFor="" name="banquitotimeback">17:45</label>
                        <input type="checkbox" name="banquitoback"  />
                    </div>
                    <div><label htmlFor="" name="banquitotimeback">18:45</label>
                        <input type="checkbox" name="banquitoback"  />
                    </div>
                    <div><label htmlFor="" name="banquitotimeback">19:45</label>
                        <input type="checkbox" name="banquitoback"  />
                    </div>
                    <div><label htmlFor="" name="banquitotimeback">20:45</label>
                        <input type="checkbox" name="banquitoback"  />
                    </div>
                </div>
            </main>
            <footer>
                <button className='time-check-btn' onClick={()=>navigate('/paradores')}>Confirmar</button>
            </footer>
        </article>
    )
}