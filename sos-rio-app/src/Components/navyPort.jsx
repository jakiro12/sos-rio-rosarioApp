import '../StylesComponents/navyStyles.css'
import boatMiss from '../svgLogos/missLito.jpg'
import {  useNavigate } from 'react-router-dom'
import { SelectPriceTicket } from '../Provider/userProvider'
export default function AllBoats(){
    const {setTicketValue}=SelectPriceTicket()
    const navigate=useNavigate()
    const navigateWithSanAndres =()=>{
        setTicketValue(1600)
        navigate('/checkturnspot')
    }
    const navigateWithGarden=()=>{
        setTicketValue(1200)
        navigate('/checkturntracker')
    }
    const navigateWithGomon=()=>{
        setTicketValue(1000)
        navigate('/checkturngomon')
    }
    return(<div className='menu-boats'>
        <div className="navy-container">
            <h2>Embarcaciones</h2>
            <div className='float-aviable'>
                <article>
                    <img src={boatMiss} alt="foto barco" className='miss'/>
                    <main className='info-boat-island'>
                        <h3>Banquito san Andres </h3>
                        <p>Viaja a las paradores</p>
                        <p>Precio: $ 1.600 por persona
                            $ 800 Menores de 3 a 10 años
                            (Menores de 3 sin cargo)</p>
                            <button className='select-time' onClick={navigateWithSanAndres}>Horarios</button>
                    </main>
                </article>
                <article>
                <img src={boatMiss} alt="foto barco" className='miss'/>
                    <main className='info-boat-island'>
                        <h3>Tracker Garden I</h3>
                        <p>Excursion</p>
                        <p>Paseo de 1 hora 15 minutos por el canal principal,
                             en tracker.
                              Se llega hasta Balneario La Florida.</p>
                            <button className='select-time' onClick={navigateWithGarden}>Horarios</button>
                    </main>
                </article>
                <article>
                <img src={boatMiss} alt="foto barco" className='miss'/>
                    <main className='info-boat-island'>
                        <h3>Gomon Max II</h3>
                        <p>Excursion</p>
                        <p>Paseo de 1 hora 45 minutos por el canal principal, en gomón hasta 
                            islote después del Puente Rosario-Victoria.</p>
                            <button className='select-time' onClick={navigateWithGomon}>Horarios</button>
                    </main>
                </article>
            </div>
        </div>
        </div>
    )
}