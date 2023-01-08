import '../StylesComponents/ticketStyles.css'
export default function TicketDay(){
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
                    <p>diaria</p>
                    <button>cambiar</button>
                    <p>quinquenal</p>
                    </div>
                    </div>
                    <div className='port-info'>
                    <p>Belgrano 341, Rosario</p>
                    <p>lunes a domingos (8hs - 18 hs)</p>
                    </div>
                </div>
                <div className='price-station'>
                    <div>hola</div>
                </div>
            </main>
            <footer className='bottom-decoration'>
                <div></div>
            </footer>
        </article>
    )
}