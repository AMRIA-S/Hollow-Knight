import ImageCv from '../../Assets/Fichiers/cv.jpg'
import './cv.scss'
import { useState } from 'react'

function Cv() {
    const [image, setImage] = useState(false)

    return (
        <>
            <div
                className={
                    image
                        ? 'information__cv information__cv--grand'
                        : 'information__cv information__cv--petit'
                }
            >
                <img src={ImageCv} alt="dsds" />
            </div>
            <button
                className={
                    image
                        ? 'information__button information__button--cvGrand'
                        : 'information__button information__button--cvPetit'
                }
                onClick={image ? () => setImage(false) : () => setImage(true)}
            >
                {image
                    ? "Cliquer pour retrécir l'image"
                    : "Cliquer pour agrandir l'image"}
            </button>
            <a
                className="information__lien"
                style={image ? { display: 'none' } : { display: 'block' }}
                href="https://github.com/AMRIA-S"
            >
                Mon GitHub
            </a>
        </>
    )
}

export default Cv
