import { useNavigate } from "react-router-dom"
import '../StylesComponents/tourStyles.css'
import { SelectStatusTracker } from "../Provider/userProvider"
export default function DaysAndHoursTracker(){
    const navigate=useNavigate()
    const {setDaySelectInTracker}=SelectStatusTracker()
    const getInputsCheck=document.getElementsByName()
    return(
        <article className='days-aviable-container'>
        <header className='title-days'>Seleccione un dia y hora disponibles
          <div className="select-container-time">
            <select onChange={(e)=>setDaySelectInTracker(e.target.value)}>
                <option value="martes">martes</option>
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
                    <input type="checkbox" name="hourtracker"  />
                </div>
                <div><label htmlFor="">13:45</label>
                    <input type="checkbox" name="hourtracker" />
                </div>
                <div><label htmlFor="">14:45</label>
                    <input type="checkbox" name="hourtracker"/>
                </div>
                <div><label htmlFor="">15:45</label>
                    <input type="checkbox" name="hourtracker"/>
                </div>
            </div>
        </main>
        <footer>
            <button className='time-check-btn' onClick={()=>navigate('/ticketoption')}>Confirmar</button>
        </footer>
    </article>
    )
}