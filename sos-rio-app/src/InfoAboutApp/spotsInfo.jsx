import NavBarOptions from "../Components/navBar";
import '../StylesComponents/navBarComponentsStyles/infoSpotsStyles.css'
export default function InfoAboutSpots(){
    return(
        <div className="container-spots-info">
            <NavBarOptions/>
            <div className="image-content-spot">
                <img alt="foto de la playa" src={require('../svgLogos/playafondo.jpeg')} />
            </div>
            <article className="spots-travel">
                <h2>Viaje a las Islas</h2>
                <p><b>Garden Island</b>:
                    Situado en la costa de la playa, con apertura de viernes a domingo.
                    Playa artifical sobre el río con comodidades para disfrutar al aire libre, diversos espacios comunes y amenities de primer nivel.
                </p>
                <p><b>El Pimpollal</b>:
                    El parador cuenta con balneario, salón para eventos, juegos recreativos y excursiones.
                    El valor de la estadia es de 600$ por persona
                </p>
                <p>Los Marinos</p>
            </article>
        </div>
    )
}