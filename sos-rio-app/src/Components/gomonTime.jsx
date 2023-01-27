import { useNavigate } from "react-router-dom"
import '../StylesComponents/tourStyles.css'
import { SelectStatusGomon } from "../Provider/userProvider"
export default function DaysAndHoursGomon(){
    const navigate=useNavigate()
    const today= new Date()//trae el dia actual
    const formatDay= new Intl.DateTimeFormat("es-ar",{
       weekday:'long'
    })
    const {setDaySelectInGomon,setHourSelectInGomon} = SelectStatusGomon()
    const actualDay=formatDay.format(today)
    const hourElements=document.getElementsByName('hourgomon')
    const elementsCheck=document.getElementsByName('timegomon')
   
    const dispatchDayGomon=(e)=>{
        setDaySelectInGomon(e) // logica de los selects aqui :D
    }
    const  goTicket=()=>{
        let arrElementsVerify=Array.from(elementsCheck)
        let verifyBox= arrElementsVerify.filter((e)=> e.checked === true)        
        if(verifyBox.length === 0 || verifyBox.length > 1){
            let selectedAlert=document.querySelector('.start')
            selectedAlert.style.border='4px solid red'
            selectedAlert.setAttribute('msg','Seleccione solo un horario')
            console.log(verifyBox)
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
        <header className='title-days'>Seleccione un dia y hora disponibles
          <div className="select-container-time">           
            <select onChange={(e)=>dispatchDayGomon(e.target.value)} >
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