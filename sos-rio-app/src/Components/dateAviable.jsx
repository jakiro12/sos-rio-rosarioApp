import '../StylesComponents/ticketStyles.css';
import { useState } from 'react';
import { SelectPriceTicket } from '../Provider/userProvider';
import { SelectStatusGomon,SelectStatusTracker,SelectStatusBanquito } from "../Provider/userProvider"


export default function TicketDay(){
    const{hourSelectInGomon}=SelectStatusGomon()
    const{hourSelectInTracker}=SelectStatusTracker()
    const {hourSelectInBanquitoToGo,hourSelectInBanquitoToBack}=SelectStatusBanquito()
    let animationBtn= document.querySelector('.timebtn')
    const[oneDay,setOneDay]=useState(true)
    const[fifteenDays,setFifteenDays]=useState(false)
    const[amountTickets,setAmountTickets]=useState(1)
    const {ticketValue}=SelectPriceTicket()
 
    function ticketTimeSelected(){
        if(fifteenDays === false && oneDay === true){
        setOneDay(false)
        setFifteenDays(true)
        animationBtn.classList.toggle('movebtn')
    }else{
        setOneDay(true)
        setFifteenDays(false)
        animationBtn.classList.toggle('movebtn')
    }
    }
    const today = new Date();
    const timeTakeIt=today.toLocaleDateString()
    function findSelectHour(){
       let valuesInHours=[hourSelectInBanquitoToGo,hourSelectInGomon,hourSelectInTracker]
       let findIt=valuesInHours.filter((e)=>e.length >1)
       return findIt[0]
    }
    return(
        <article className='ticket-cotainer'>
            <header className='top-decoration'>
                <div></div>
            </header>
            <main className='ticket-info'>
                <h3 className='terminal'>NTF</h3>
                <div className='info-display'>
                    <div className='head-info'>
                    <h2>Puerto <p>Parador</p></h2>
                    <p>Pase unico</p>
                    <p>nombre y apellido</p>
                    </div>
                    <div className='day-info'>
                    <div>
                    <p>Sin reserva</p>
                   <div className='displaybtn'>
                    <button className='timebtn' onClick={ticketTimeSelected}></button>
                    </div>
                    <p>Reservar embarcacion</p>
                    </div>
                    </div>
                    <div className='port-info'>
                    <p>Vigencia del ticket</p>
                    <p> {timeTakeIt} hasta las 16 horas</p>
                    </div>
                </div>
                <div className='price-station'>
                    <div>
                        <p className='open-time'>
                           Su embarcacion zarpa a las: {findSelectHour()}
                        </p>
                        <div className='quantity-tickets'>
                           cantidad de tickets : <div>
                            <button onClick={()=>setAmountTickets(amountTickets -1)}> - </button>
                            <p>{amountTickets}</p>
                            <button onClick={()=>setAmountTickets(amountTickets +1)}> + </button>

                           </div>
                        </div>
                       <div className='set-ticket'>
                       <p>Precio:{amountTickets * ticketValue}$</p>
                       <button>Solicitar</button>
                        </div> 
                    </div>
                
                </div>
            </main>
            <footer className='bottom-decoration'>
                <div></div>
            </footer>
        </article>
    )
}