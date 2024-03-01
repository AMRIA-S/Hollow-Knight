import sanctuaireInterieur from "../../Assets/Images/sanctuaireInterieur.webp"
import "./carteCliquable.scss"
import { sanctuaireMap } from "../../Assets/data/sanctuaireMap"
import useImg from "react-img-map-area"

function CarteCliquable() {
    useImg()
    return (
        <div className="sectionDansLeSanctuaire">
            <img
                src={sanctuaireInterieur}
                alt="intérieur du sanctuaire"
                useMap="#map"
                id="id"
            />

            <map name="map">
                {sanctuaireMap.map((map) => (
                    <div key={map.id} className="exemple">
                        <area
                            className="css-content exemple"
                            shape={map.shape}
                            coords={map.coords}
                        />
                        <div className="messageSurLaTombe">
                            <h5>{map.ame}</h5>
                            <p>{map.text}</p>
                        </div>
                    </div>
                ))}
            </map>
        </div>
    )
}

export default CarteCliquable
