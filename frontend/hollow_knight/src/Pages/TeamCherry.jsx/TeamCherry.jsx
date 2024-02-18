import Equipe from '../../Components/Equipe/Equipe'
import {
    createurs,
    collaborateurs,
} from '../../Assets/data/createur-collaborateur'
import './teamCherry.scss'

function TeamCherry() {
    return (
        <main>
            <section className="presentation">
                <h1>Team Cherry</h1>
                <h2>
                    Team Cherry est une petite équipe de créateurs de jeux
                    indépendants basé à Adelaïde en Australie.
                </h2>
                <ul className="equipe">
                    {createurs.map((createur) => (
                        <li key={createur.id}>
                            <Equipe equipe={createur} />
                        </li>
                    ))}
                </ul>
                <h5>
                    Les personnes qui ne font pas partie de l'équipe mais qui
                    ont participé à la création du jeu
                </h5>
                <ul
                    style={
                        collaborateurs.length <= 2
                            ? { justifyContent: 'center' }
                            : { justifyContent: 'space-between' }
                    }
                    className="equipe"
                >
                    {collaborateurs.map((collaborateur) => (
                        <li key={collaborateur.id}>
                            <Equipe equipe={collaborateur} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default TeamCherry
