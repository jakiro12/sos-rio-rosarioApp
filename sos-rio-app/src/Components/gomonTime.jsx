import { useNavigate } from "react-router-dom";
import '../StylesComponents/tourStyles.css'
import { SelectStatusGomon } from "../Provider/userProvider"
import { useEffect,useState } from "react"
export default function DaysAndHoursGomon(){
    const[daysToAdd,setDaysToAdd]=useState(0)
    const navigate=useNavigate()
    const today= new Date()
    const formatDay= new Intl.DateTimeFormat("es-ar",{
       weekday:'long'
    })
    const formatTimeNow=new Intl.DateTimeFormat("es-ar",{
        timeStyle:'short'
    })
    const actualDay=formatDay.format(today)
    const timeTodayinHours=formatTimeNow.format(today)
    const {setDaySelectInGomon,setHourSelectInGomon} = SelectStatusGomon()
    const hourElements=document.getElementsByName('hourgomon')
    const elementsCheck=document.getElementsByName('timegomon')
  
    useEffect(()=>{

    let date=new Date()
    const anotherDay=(date,period)=>{
        date.setDate(date.getDate() + period)
    }
    anotherDay(date, daysToAdd)
    console.log(date)
    },[daysToAdd])
    const dispatchDayGomon=(e)=>{
        let daySelectedByUser=e.target.value
        let arrDays=['martes','miércoles','jueves','viernes','sábado','domingo']
        let findPositonOfDaySelected =arrDays.findIndex((day)=> day  === daySelectedByUser)
        let findPositionOfToday=arrDays.findIndex((day)=>day === actualDay)
        let hoursCheckedForThisDay=Array.from(hourElements)
        let finalPosition=hoursCheckedForThisDay.length - 1
        const allDayOfWeekNow=['lunes','martes','miércoles','jueves','viernes','sábado','domingo']
        let positionForSelection=allDayOfWeekNow.findIndex((e)=> e === daySelectedByUser) + 1
        let findDayOfTheWeekNow=allDayOfWeekNow.findIndex((e)=> e === actualDay) + 1
        
        if(actualDay === 'lunes'){
            setDaySelectInGomon(daySelectedByUser)
            setDaysToAdd(positionForSelection - 1)
            console.log('estas seleccionando un dia lunes')
        }else if(findPositionOfToday === findPositonOfDaySelected && hoursCheckedForThisDay[finalPosition].textContent < timeTodayinHours ){
            setDaySelectInGomon(daySelectedByUser) // elije para la otra sema
            setDaysToAdd(7) // esta eligiendo mas tarde de la ultima hora
            console.log('elige hoy,pero pa la semana que viene')
        }else if(findPositionOfToday > findPositonOfDaySelected){
            setDaySelectInGomon(daySelectedByUser) 
            let newDays= allDayOfWeekNow.length - ( findDayOfTheWeekNow -positionForSelection  ) // dias que faltan para llegar
            setDaysToAdd(newDays)
            console.log('elige pa la semana con resta')           
        }else{
            setDaySelectInGomon(daySelectedByUser)
            setDaysToAdd(positionForSelection - findDayOfTheWeekNow)
            console.log('elige hoy u esta semana')
        }
    }
    const  goTicket=()=>{
        let arrElementsVerify=Array.from(elementsCheck)
        let verifyBox= arrElementsVerify.filter((e)=> e.checked === true)        
        if(verifyBox.length === 0 || verifyBox.length > 1){
            let selectedAlert=document.querySelector('.start')
            selectedAlert.style.border='4px solid red'
            selectedAlert.setAttribute('msg','Elija un horario')
        }else{
            let arrElements=Array.from(elementsCheck)
            let arrHourElements=Array.from(hourElements)
            let verifyBoxChecked= arrElementsVerify.filter((e)=> e.checked === true)        
            let position=arrElements.findIndex((e)=> e === verifyBoxChecked[0])
            setHourSelectInGomon(arrHourElements[position].textContent)
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
            <select onChange={dispatchDayGomon} >
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
                <div><label htmlFor="" name='hourgomon'>10:15</label>
                    <input type="checkbox" name="timegomon"  />
                </div>
                <div><label htmlFor="" name='hourgomon'>11:15</label>
                    <input type="checkbox" name="timegomon"  />
                </div>
                <div><label htmlFor="" name='hourgomon'>12:15</label>
                    <input type="checkbox" name="timegomon" />
                </div>
                <div><label htmlFor="" name='hourgomon'>13:15</label>
                    <input type="checkbox" name="timegomon" />
                </div>
            </div>
        </main>
        <footer>
            <button className='time-check-btn' onClick={goTicket}>Confirmar</button>
        </footer>
    </article>
    )
}