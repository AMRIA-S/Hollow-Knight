import Equipe from '../../Components/Equipe/Equipe'
import { createurs, collaborateurs } from '../../Assets/data/createurs'

function TeamCherry() {
    return (
        <main>
            <h2>Team Cherry</h2>
            <p>
                Team Cherry est un équipe de jeux indépendant basé à Adelaïde en
                Australie.
            </p>
            <ul className="equipe">
                {createurs.map((createur) => (
                    <li key={createur.id}>
                        <Equipe equipe={createur} />
                    </li>
                ))}
            </ul>
            <h3>
                Les personnes qui ont collaboré mais ne font pas partie de
                l'équipe
            </h3>
            <ul className="equipe">
                {collaborateurs.map((collaborateur) => (
                    <li key={collaborateur.id}>
                        <Equipe equipe={collaborateur} />
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default TeamCherry
