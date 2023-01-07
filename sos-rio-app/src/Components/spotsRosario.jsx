import '../StylesComponents/spotStyles.css'
import proof from '../svgLogos/boat1.svg'
import food from '../svgLogos/food.svg'
import price from '../svgLogos/price.svg'
export default function Paradores(){
    return(
        <div className='container-spots'>
            <h2>Paradores</h2>
            <div className='options-selected'>
            <select name="format" >
            <option value="value1" >Value 1</option> 
            <option value="value2" >Value 2</option>
            <option value="value3" >Value 3</option>
            </select>
            </div>
            <a href="#" className='cards'>
                <div className='title-spot'>
                <p className='name-spot'>Copa Cabana</p>
                </div>
                <div className='advantages'>
                    <span className='time-lapse'>
                <img className='boat-logo' src={proof} alt='bote'/>
                <p>15 min</p>
                </span>
                <span className='time-lapse'>
                <img className='boat-logo' src={food} alt='bote'/>
                <p>Si</p>
                </span>
                <span className='time-lapse'>
                <img className='boat-logo' src={price} alt='bote'/>
                <p>700$</p>
                </span>
                </div>
                
                
            </a>
        </div>
    )
}