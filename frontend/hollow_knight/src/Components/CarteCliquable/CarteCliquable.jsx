import sanctuaireInterieur from '../../Assets/Images/sanctuaireInterieur.webp'
function CarteCliquable(props) {
    const MAP = {
        name: 'sci',
        areas: [
            { shape: 'poly', coords: [25, 33, 27, 300, 128, 240, 128, 94] },
            { shape: 'poly', coords: [219, 118, 220, 210, 283, 210, 284, 119] },
            { shape: 'poly', coords: [381, 241, 383, 94, 462, 53, 457, 282] },
            { shape: 'poly', coords: [245, 285, 290, 285, 274, 239, 249, 238] },
        ],
    }
    return (
        <>
            <img
                style={{ width: '70%' }}
                src={sanctuaireInterieur}
                alt="intérieur du sanctuaire"
                useMap="sci"
            />
        </>
    )
}

export default CarteCliquable
