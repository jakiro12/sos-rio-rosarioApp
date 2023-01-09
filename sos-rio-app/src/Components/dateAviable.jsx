import '../StylesComponents/ticketStyles.css'
export default function TicketDay(){
    let animationBtn= document.querySelector('.timebtn')
    function ticketTimeSelected(){
        animationBtn.classList.add('movebtn')
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
                    <p>Valido x 1 dia</p>
                   <div className='displaybtn'>
                    <button className='timebtn' onClick={ticketTimeSelected}></button>
                    </div>
                    <p>Valido x 15 dias</p>
                    </div>
                    </div>
                    <div className='port-info'>
                    <p>Belgrano 341, Rosario</p>
                    <p>martes a domingos (8hs - 18 hs)</p>
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