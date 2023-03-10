import '../StylesComponents/selectTimeStyles.css'
import {useNavigate} from 'react-router-dom'
import { SelectStatusBanquito, SelectDayOfToWeek } from '../Provider/userProvider'
import { useState,useEffect } from 'react'
export default function TimeAndDayTakeIt(){
    const[daysToAdd,setDaysToAdd]=useState(0)
    const {setDayOfTheWeek}=SelectDayOfToWeek()  

    const navigate=useNavigate()
    const {setHourSelectInBanquitoToGo,setHourSelectInBanquitoToBack} =SelectStatusBanquito()
    const today= new Date()//trae el dia actual
    const formatDay= new Intl.DateTimeFormat("es-ar",{
       weekday:'long'
    })
    const formatTimeNow=new Intl.DateTimeFormat("es-ar",{
        timeStyle:'short'
    })
    const actualDay=formatDay.format(today)
    const timeTodayinHours=formatTimeNow.format(today)
    const getInputsToGo=document.getElementsByName('banquitogo')
    const getInputsToBack=document.getElementsByName('banquitoback')
    const getTimeTogoArrive=document.getElementsByName('banquitotimego')
    useEffect(()=>{
        const formatDateInNumbers=new Intl.DateTimeFormat("es-ar",{
            dateStyle:'short'
         })
        let dateToArrive=new Date()
        const anotherDay=(date,period)=>{
            date.setDate(date.getDate() + period)
        }
        anotherDay(dateToArrive, daysToAdd)
        let nameOfTheDayChoosen=formatDateInNumbers.format(dateToArrive)
        setDayOfTheWeek(nameOfTheDayChoosen)
        },[daysToAdd])
        
    const dispatchDayBanquito=(e)=>{
        let daySelectedByUser=e.target.value
        let arrDays=['martes','miércoles','jueves','viernes','sábado','domingo']
        let findPositonOfDaySelected =arrDays.findIndex((day)=> day  === daySelectedByUser)
        let findPositionOfToday=arrDays.findIndex((day)=>day === actualDay)
        let hoursCheckedForThisDay=Array.from(getTimeTogoArrive)
        let finalPosition=hoursCheckedForThisDay.length - 1
        const allDayOfWeekNow=['lunes','martes','miércoles','jueves','viernes','sábado','domingo']
        let positionForSelection=allDayOfWeekNow.findIndex((e)=> e === daySelectedByUser) + 1
        let findDayOfTheWeekNow=allDayOfWeekNow.findIndex((e)=> e === actualDay) + 1
        if(actualDay === 'lunes'){
            setDaysToAdd(positionForSelection - 1)
            console.log('Estas seleccionando un dia lunes')
        }else if(findPositionOfToday === findPositonOfDaySelected && hoursCheckedForThisDay[finalPosition].textContent < timeTodayinHours ){
            setDaysToAdd(7)
            console.log('elige para hoy u la semana que viene')
        }else if(findPositionOfToday > findPositonOfDaySelected){
            let newDays= allDayOfWeekNow.length - ( findDayOfTheWeekNow -positionForSelection  ) // dias que faltan para llegar
            setDaysToAdd(newDays)
            console.log('elige pa la semana que viene')
        }else{
            setDaysToAdd(positionForSelection - findDayOfTheWeekNow)
            console.log('elige hoy u esta semana')
        }
    }
    const goToTakeTheTicket=()=>{
        let checkedInputsToGo=Array.from(getInputsToGo)
        let verifyBooleanValues=checkedInputsToGo.filter((e)=>e.checked === true)
        let checkedInputsToBack=Array.from(getInputsToBack)
        let verifyBooleanValuesToBack=checkedInputsToBack.filter((e)=>e.checked === true)
        if(verifyBooleanValues.length === 0 || verifyBooleanValues.length > 1 || verifyBooleanValuesToBack.length === 0 || verifyBooleanValuesToBack.length > 1){
            let selectedAlert=document.querySelector('.start')
            selectedAlert.style.border='4px solid red'
            selectedAlert.setAttribute('msg','Elegir un horario')
            let alertNoSelectBack=document.querySelector('.came-back')
            alertNoSelectBack.style.border='4px solid red'
            alertNoSelectBack.setAttribute('msg','Elegir un horario')
            console.log(verifyBooleanValues)
        }else{
            let hoursOfArrive=Array.from(getTimeTogoArrive)
            let position = checkedInputsToGo.findIndex((e)=>e ===verifyBooleanValues[0])
            setHourSelectInBanquitoToGo(hoursOfArrive[position].textContent)
            let selectedAlert=document.querySelector('.start')
            let alertNoSelectBack=document.querySelector('.came-back')
            selectedAlert.style.border=''
            selectedAlert.removeAttribute('msg')
            alertNoSelectBack.style.border=''
            alertNoSelectBack.removeAttribute('msg')
            navigate('/paradores')
        }
    }
    return(
        <article className='days-aviable-container'>
            <header className='title-days'>Seleccione un dia y horario
            <div className="select-container-time">           
            <select onChange={dispatchDayBanquito}>
                <option value="martes" >martes</option>
                <option value="miércoles">míercoles</option>
                <option value="jueves">jueves</option>
                <option value="viernes">viernes</option>
                <option value="sábado">sabado</option>
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
                <button className='time-check-btn' onClick={goToTakeTheTicket}>Confirmar</button>
            </footer>
        </article>
    )
}