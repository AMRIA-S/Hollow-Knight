import acces from '../Assets/Images/acces.png'
import '../Assets/Styles/Sanctuaire/SanctuaireCroyants.scss'

function SanctuaireCroyants() {
    return (
        <main>
            <section className="acces">
                <h1 className="acces__title">Hollow Knight</h1>
                <h2>Comment y accéder ?</h2>
                <p>
                    Pour accéder au sanctuaire des croyants, vous devez vous
                    rendre au repos éternel puis entrez à l'intérieur de la
                    cascade. Vous verez cinq statuts en formes de papillon dont
                    trois sont les plus proches (il y a un objet devant la
                    statut du milieu).
                </p>
                <p>
                    Il y a un minuscule espace sur le mur proche du visage de la
                    statut de gauche.Vous pouvez l'atteindre à l'aide du double
                    saut et utilisez l'aiguillon des rêves pour entrer dans
                    l'esprit de cette statut.
                </p>
                <div className="acces__image">
                    <img src={acces} alt="accès au sanctuaire" />
                </div>
            </section>
        </main>
    )
}
export default SanctuaireCroyants
