import '../StylesComponents/menuOptionsStyles.css'
import { useNavigate } from 'react-router-dom'
export default function MenuOption(){
    const navigate=useNavigate()
    return(<article className='short-info'>
        <div className='container-menu'>
            <button className='tickets-m-btn' onClick={()=>navigate('/paradores')}>Viaje a paradores</button>
            <button className='food-m-btn'>Gastronomia del Puerto</button>
            <button className='tickets-m-btn'>Numeros de Emergencia y Auxilio</button>
            <button className='promos-m-btn'>Promociones de temporada</button>

            </div>
            </article>
    )
}