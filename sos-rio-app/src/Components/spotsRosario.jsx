import '../StylesComponents/spotStyles.css'
import proof from '../svgLogos/boat1.svg'
import food from '../svgLogos/food.svg'
import price from '../svgLogos/price.svg'
export default function Paradores(){
    const imageCard=document.querySelector('.cards')
    function changeColor(e){
        console.log(imageCard.classList)
        imageCard.classList.toggle('cards-garden')
        
    }
    return(
        <div className='container-spots'>
            <h2>Paradores</h2>
            <div className='options-selected'>
            <select name="format"  onChange={(e)=>changeColor(e.target.value)}>
            <option value="fasdf" >Banquito San Andrés</option> 
            <option value='cards-garden' >Garden Island</option>
            <option value='../spotsImages/islandGarden.jpeg' >El Pimpollal</option>
            <option value='../spotsImages/islandGarden.jpeg' >Los Marinos</option>
            <option value='../spotsImages/islandGarden.jpeg' >La Florida</option>
            <option value='../spotsImages/islandGarden.jpeg' >Costa Alta</option>
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