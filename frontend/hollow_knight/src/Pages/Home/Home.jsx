import Equipe from '../../Components/Equipe/Equipe'
import { createurs, collaborateurs } from '../../Assets/data/createurs'
import Age from '../../Components/Age/age'

function Home() {
    return (
        <main>
            <h1>Qui suis-je ?</h1>
            <p>
                Bonjour je m'appelle Sollène Amria. J'ai <Age /> ans. Je suis
                jeune diplômée d'un BAC+2 en développement web.
            </p>
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

export default Home
