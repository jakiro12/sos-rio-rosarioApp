import { useNavigate } from "react-router-dom"
import '../StylesComponents/tourStyles.css'
import { SelectStatusTracker } from "../Provider/userProvider"
export default function DaysAndHoursTracker(){
    const navigate=useNavigate()
    const {setDaySelectInTracker,setHourSelectInTracker}=SelectStatusTracker()
    const getInputsTimeCheck=document.getElementsByName('hourtracker')
    const getCheckOfInputs=document.getElementsByName('checktracker')

    const  goToSelectTicket=()=>{
        let arrElementsVerify=Array.from(getCheckOfInputs)
        let verifyBox= arrElementsVerify.filter((e)=> e.checked === true)        
        if(verifyBox.length === 0 || verifyBox.length > 1){
            let selectedAlert=document.querySelector('.start')
            selectedAlert.style.border='4px solid red'
            selectedAlert.setAttribute('msg','Seleccione solo un horario')
        }else{
            let arrElements=Array.from(getCheckOfInputs)
            let arrHourElements=Array.from(getInputsTimeCheck)
            let verifyBoxChecked= arrElementsVerify.filter((e)=> e.checked === true)        
            let position=arrElements.findIndex((e)=> e === verifyBoxChecked[0])
            setHourSelectInTracker(arrHourElements[position].textContent)
            let selectedAlert=document.querySelector('.start')
            selectedAlert.style.border=''
            selectedAlert.removeAttribute('msg')
            navigate('/ticketoption')
        }
    }
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
                <div><label htmlFor="" name="hourtracker">12:45</label>
                    <input type="checkbox" name="checktracker"  />
                </div>
                <div><label htmlFor="" name="hourtracker">13:45</label>
                    <input type="checkbox" name="checktracker" />
                </div>
                <div><label htmlFor="" name="hourtracker">14:45</label>
                    <input type="checkbox" name="checktracker"/>
                </div>
                <div><label htmlFor="" name="hourtracker">15:45</label>
                    <input type="checkbox" name="checktracker"/>
                </div>
            </div>
        </main>
        <footer>
            <button className='time-check-btn' onClick={goToSelectTicket}>Confirmar</button>
        </footer>
    </article>
    )
}