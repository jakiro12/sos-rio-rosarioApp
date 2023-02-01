import NavBarOptions from "../Components/navBar";
import '../StylesComponents/navBarComponentsStyles/infoSpotsStyles.css'
export default function InfoAboutSpots(){
    return(
        <div className="container-spots-info">
            <NavBarOptions/>
            <div className="image-content-spot">
                <img alt="foto de la playa" src={require('../svgLogos/playafondo.jpeg')} />
            </div>
            <article>
                informacion de los paradores
            </article>
        </div>
    )
}