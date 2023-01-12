import '../StylesComponents/menuOptionsStyles.css'
import { useNavigate } from 'react-router-dom'
export default function MenuOption(){
    const navigate=useNavigate()
    return(<article className='short-info'>
        <div className='container-menu'>
            <button className='tickets-m-btn' onClick={()=>navigate('/paradores')}>Ticket para viajar al parador</button>
            <button className='tickets-m-btn'>Gastronomia del Puerto</button>
            <button className='tickets-m-btn'>Numeros de Emergencia y Auxilio</button>
            <button className='tickets-m-btn'>Promociones de temporada</button>

            </div>
            </article>
    )
}