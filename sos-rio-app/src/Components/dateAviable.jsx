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
                    <p>Puerto Parador</p>
                </div>
                <div className='price-station'></div>
            </main>
            <footer className='bottom-decoration'>
                <div></div>
            </footer>
        </article>
    )
}