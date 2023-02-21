import '../StylesComponents/ticketStyles.css';
import { useState } from 'react';
import { SelectStatusGomon,SelectStatusTracker,SelectStatusBanquito, SelectPriceTicket,SelectDayOfToWeek } from "../Provider/userProvider"


export default function TicketDay(){
    const{hourSelectInGomon}=SelectStatusGomon()
    const{hourSelectInTracker}=SelectStatusTracker()
    const{hourSelectInBanquitoToGo}=SelectStatusBanquito()
    const {dateOfTheWeek}=SelectDayOfToWeek()
    const[booking,setBooking]=useState('Viaje sin reserva')
    const[extrapay,setExtrapay]=useState(false)
    const[plusBooking,setPlusBooking]=useState(0)
    const[amountTickets,setAmountTickets]=useState(1)
    const {ticketValue}=SelectPriceTicket()
   
    function ticketTimeSelected(){
            let animationBtn= document.querySelector('.timebtn')
            if(extrapay === false){
            setBooking('Adicional de 800$')
            setExtrapay(true)
            setPlusBooking(800)
            animationBtn.classList.toggle('movebtn')
        }else{
            setBooking('Sin recargo')
            setExtrapay(false)
            animationBtn.classList.toggle('movebtn')
            setPlusBooking(0)
        }
        }
     
    function findSelectHour(){
       let valuesInHours=[hourSelectInBanquitoToGo,hourSelectInGomon,hourSelectInTracker]
       let findIt=valuesInHours.filter((e)=>e.length >1)
       return findIt[0]
    }

    return(
        <div className='content-form'>
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
                    <p>{booking}</p>
                    <p>  Reserva para el dia: {dateOfTheWeek}</p>
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
                       <p>Precio:{amountTickets * ticketValue + plusBooking}$</p>
                       <button>Solicitar</button>
                        </div> 
                    </div>
                
                </div>
            </main>
            <footer className='bottom-decoration'>
                <div></div>
            </footer>
        </article>
        </div>
    )
}