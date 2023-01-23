import { useNavigate } from "react-router-dom"
import '../StylesComponents/tourStyles.css'
import { SelectStatusGomon } from "../Provider/userProvider"
export default function DaysAndHoursGomon(){
    const navigate=useNavigate()
    const today= new Date()
    const formatDay= new Intl.DateTimeFormat("es-ar",{
       weekday:'long'
    })
    const {setDaySelectInGomon} = SelectStatusGomon()
    const actualDay=formatDay.format(today)
    const dispatchDayGomon=(e)=>{
        setDaySelectInGomon(e)
    }
    return(
        <article className='days-aviable-container'>
        <header className='title-days'>Seleccione un dia y hora disponibles
          <div className="select-container-time">
           
            <select onChange={(e)=>dispatchDayGomon(e.target.value)} >
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
                <div><label htmlFor="">10:15</label>
                    <input type="checkbox" name="" id="" />
                </div>
                <div><label htmlFor="">11:15</label>
                    <input type="checkbox" name="" id="" />
                </div>
                <div><label htmlFor="">12:15</label>
                    <input type="checkbox" name="" id="" />
                </div>
                <div><label htmlFor="">13:15</label>
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