import { useNavigate } from "react-router-dom"
import '../StylesComponents/tourStyles.css'
import { SelectStatusTracker } from "../Provider/userProvider"
export default function DaysAndHoursTracker(){
    const navigate=useNavigate()
    const {setDaySelectInTracker,setHourSelectInTracker}=SelectStatusTracker()
    const getInputsTimeCheck=document.getElementsByName('hourtracker')
    const getCheckOfInputs=document.getElementsByName('checktracker')
    const today= new Date()//trae el dia actual
    const formatDay= new Intl.DateTimeFormat("es-ar",{
       weekday:'long'
    })
    const formatTimeNow=new Intl.DateTimeFormat("es-ar",{
        timeStyle:'short'
    })
    const actualDay=formatDay.format(today)
    const timeTodayinHours=formatTimeNow.format(today)
    const dispatchDayInTracker=(e)=>{
        let daySelectedByUser=e.target.value
        let arrDays=['martes','miércoles','jueves','viernes','sabado','domingo']
        let findPositonOfDaySelected =arrDays.findIndex((day)=> day  === e.target.value)
        let findPositionOfToday=arrDays.findIndex((day)=>day === actualDay)
        let hoursCheckedForThisDay=Array.from(getInputsTimeCheck)
        let finalPosition=hoursCheckedForThisDay.length - 1
        if(actualDay === 'lunes'){
            setDaySelectInTracker(daySelectedByUser)
            console.log(daySelectedByUser)
        }else if(findPositionOfToday > findPositonOfDaySelected || hoursCheckedForThisDay[finalPosition].textContent < timeTodayinHours ){
            setDaySelectInTracker(daySelectedByUser) // sumarle 7 dias asi seria la semana que viene
            console.log('elige pa la semana que viene')
        }else{
            setDaySelectInTracker(daySelectedByUser)
            console.log('elige hoy')
        }
    }
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
            <select onChange={dispatchDayInTracker}>
                <option value="martes">martes</option>
                <option value="miércoles">miercoles</option>
                <option value="jueves">jueves</option>
                <option value="viernes">viernes</option>
                <option value="sábado">sabado</option>
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