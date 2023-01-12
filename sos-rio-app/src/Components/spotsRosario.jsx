import '../StylesComponents/spotStyles.css'
import proof from '../svgLogos/boat1.svg'
import food from '../svgLogos/food.svg'
import price from '../svgLogos/price.svg'
export default function Paradores(){
    const imageCard=document.querySelector('.cards')
    function changeColor(e){
        imageCard.style.backgroundImage = e
    }
    const myValues=['url("https://www.outsideonline.com/wp-content/uploads/2018/12/10/running-dog-breeds_s.jpg")']
    return(
        <div className='container-spots'>
            <h2>Paradores</h2>
            <div className='options-selected'>
            <select name="format"  onChange={(e)=>changeColor(e.target.value)}>
            <option value={myValues[0]} >Banquito San Andrés</option> 
            <option value="400px" >Garden Island</option>
            <option value="300px" >El Pimpollal</option>
            <option value="400px" >Los Marinos</option>
            <option value="300px" >La Florida</option>
            <option value="400px" >Costa Alta</option>
            </select>
            </div>
            <a href="https://www.google.com.ar" className='cards'>
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