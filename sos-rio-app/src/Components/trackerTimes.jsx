import { useNavigate } from "react-router-dom"
import '../StylesComponents/tourStyles.css'
import { useState,useEffect } from "react"
import { SelectStatusTracker } from "../Provider/userProvider"
export default function DaysAndHoursTracker(){
    const[daysToAdd,setDaysToAdd]=useState(0)
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
    useEffect(()=>{

        let date=new Date()
        const anotherDay=(date,period)=>{
            date.setDate(date.getDate() + period)
        }
        anotherDay(date, daysToAdd)
        console.log(date)
        },[daysToAdd])
    const dispatchDayInTracker=(e)=>{
        let daySelectedByUser=e.target.value
        let arrDays=['martes','miércoles','jueves','viernes','sábado','domingo']
        let findPositonOfDaySelected =arrDays.findIndex((day)=> day  === e.target.value)
        let findPositionOfToday=arrDays.findIndex((day)=>day === actualDay)
        let hoursCheckedForThisDay=Array.from(getInputsTimeCheck)
        let finalPosition=hoursCheckedForThisDay.length - 1
        const allDayOfWeekNow=['lunes','martes','miércoles','jueves','viernes','sábado','domingo']
        let positionForSelection=allDayOfWeekNow.findIndex((e)=> e === daySelectedByUser) + 1
        let findDayOfTheWeekNow=allDayOfWeekNow.findIndex((e)=> e === actualDay) + 1
        if(actualDay === 'lunes'){
            setDaySelectInTracker(daySelectedByUser)
            setDaysToAdd(positionForSelection - 1)
            console.log('eligiendo un lunes')
        }else if(findPositionOfToday === findPositonOfDaySelected && hoursCheckedForThisDay[finalPosition].textContent < timeTodayinHours ){
            setDaySelectInTracker(daySelectedByUser) // si elige el mismo dia pero mas tarde
            setDaysToAdd(7)
            console.log('elige para hoy u la semana que viene')
        }else if(findPositionOfToday > findPositonOfDaySelected){
            setDaySelectInTracker(daySelectedByUser) // sumar los dias que faltan 
            let newDays= allDayOfWeekNow.length - ( findDayOfTheWeekNow -positionForSelection  ) // dias que faltan para llegar
            setDaysToAdd(newDays)
            console.log('elige pa la semana que viene')
        }else{
            setDaySelectInTracker(daySelectedByUser)
            setDaysToAdd(positionForSelection - findDayOfTheWeekNow)
            console.log('elige hoy u esta misma semana')
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
        <header className='title-days'>Seleccione un dia y horario
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