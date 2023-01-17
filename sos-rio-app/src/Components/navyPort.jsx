import '../StylesComponents/navyStyles.css'
import boatMiss from '../svgLogos/missLito.jpg'
export default function AllBoats(){
    return(<div className='menu-boats'>
        <div className="navy-container">
            <h2>Embarcaciones</h2>
            <div className='float-aviable'>
                <article>
                    <img src={boatMiss} alt="foto barco" className='miss'/>
                    <main className='info-boat-island'>
                        <h3>Tracker Garden I</h3>
                        <p>Paseos</p>
                        <p>Paseo de 1 hora 15 minutos por el canal principal,
                             en tracker.
                              Se llega hasta Balneario La Florida.</p>
                            <button className='select-time'>Seleccionar horarios</button>
                    </main>
                </article>
                <article>
                <img src={boatMiss} alt="foto barco" className='miss'/>
                    <main className='info-boat-island'>
                        <h3>Banquito san Andres</h3>
                        <p>Viaja a las paradores</p>
                        <p>Precio: $ 1.600 por persona
                            $ 800 Menores de 3 a 10 años
                            (Menores de 3 sin cargo)</p>
                            <button className='select-time'>Seleccionar horarios</button>
                    </main>
                </article>
                <article>
                <img src={boatMiss} alt="foto barco" className='miss'/>
                    <main className='info-boat-island'>
                        <h3>Gomon Max II</h3>
                        <p>Paseos</p>
                        <p>Paseo de 1 hora 45 minutos por el canal principal, en gomón hasta 
                            islote después del Puente Rosario-Victoria.</p>
                            <button className='select-time'>Seleccionar horarios</button>
                    </main>
                </article>
            </div>
        </div>
        </div>
    )
}