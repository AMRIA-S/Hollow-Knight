import Age from '../../Components/Age/age'
import Cv from '../../Components/Cv/Cv'
import CvPdf from '../../Assets/Fichiers/cv_amria_sollene.pdf'

function Home() {
    return (
        <main>
            <section className="home">
                <h1>Parlons de moi</h1>
                <h2>Qui suis-je ?</h2>
                <p>
                    Bonjour je m'appelle Sollène Amria. J'ai <Age /> ans. Je
                    suis jeune diplômée d'un BAC+2 en développement web.
                </p>
                <h3>Quel est mon parcours ?</h3>
                <p>
                    J'ai effectué un Bac Professionnelle Accueil Relationd
                    Clients et Usagers (ARCU), puis j'ai poursuivie avec un BTS
                    Assistant de manager mais j'ai arrêté pour travailler dans
                    la restauration en tant que serveuse pendant 4 ans. J'ai
                    décidé de me former au métier du développement web sur
                    Openclassrooms.
                </p>
                <h4>Pourquoi le développement web ?</h4>
                <p>
                    J'ai appris le développement grâce à un livre que j'ai
                    découvert par curiosité. Depuis, j'ai été fasciné et plus
                    tard je me suis inscrite à la formation sur Openclassrooms.
                </p>
            </section>
            <section>
                <h5>Vous souhaitez voir plus sur moi ?</h5>
                <p>Vous consulter mon CV et mon GitHub ci-dessous.</p>
                <div className="information">
                    <Cv />
                    <a
                        href={CvPdf}
                        className="information__lien information__lien--display"
                    >
                        Mon CV
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Home
