import '../StylesComponents/ticketStyles.css'
import { useState } from 'react'
export default function TicketDay(){
    let animationBtn= document.querySelector('.timebtn')
    const[oneDay,setOneDay]=useState(true)
    const[fifteenDays,setFifteenDays]=useState(false)
    const[amountTickets,setAmountTickets]=useState(1)
    const[priceOfTickets,setPriceOfTickets]=useState(300)
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
                    <p>Valido x 1 dia</p>
                   <div className='displaybtn'>
                    <button className='timebtn' onClick={ticketTimeSelected}></button>
                    </div>
                    <p>Valido x 15 dias</p>
                    </div>
                    </div>
                    <div className='port-info'>
                    <p>Belgrano 341, Rosario</p>
                    <p>Fecha de emision {timeTakeIt}</p>
                    </div>
                </div>
                <div className='price-station'>
                    <div>
                        <p className='open-time'>
                           Abierto Lun-Dom de 8 hrs a 18 hrs
                        </p>
                        <div className='quantity-tickets'>
                           cantidad de tickets : <div>
                            <button onClick={()=>setAmountTickets(amountTickets -1)}> - </button>
                            <p>{amountTickets}</p>
                            <button onClick={()=>setAmountTickets(amountTickets +1)}> + </button>

                           </div>
                        </div>
                       <div className='set-ticket'>
                       <p>Precio:{amountTickets * priceOfTickets}$</p>
                       <button>Metodos de pago</button>
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