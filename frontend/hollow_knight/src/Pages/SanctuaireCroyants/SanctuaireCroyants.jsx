import acces from '../../Assets/Images/acces.png'
import './SanctuaireCroyants.scss'
// import sanctuaireInterieur from '../../Assets/Images/sanctuaireInterieur.webp'
import CarteCliquable from '../../Components/CarteCliquable/CarteCliquable'

function SanctuaireCroyants() {
    return (
        <main>
            <section className="acces">
                <h1>Le sanctuaire des croyants</h1>
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
                <div>
                    <h3>À l'extérieur du sanctuaire</h3>
                    <h4>Avant de cassez les stèles</h4>
                    <p>
                        Vous verrez l'esprit d'un papillon de nuit, si vous
                        l'écoutez une première fois, il vous dira ceci : « Vous
                        qui osez vous insinuer même dans les rêves les mieux
                        dissimulés ... Prenez garde ! Inscrites, dans ce
                        sanctuaire, sont les paroles d'un autre temps. Bien que
                        les mots puissent sembler étranges, n'oubliez pas qu'ils
                        viennent d'esprits différents des nôtres ; l'esprit d'un
                        groupe uni dans une cause mystérieuse. Croire ou ne pas
                        croire le choix voux appartient. » Après ça, il vous
                        répètera : « Croire ou ne pas croire le choix voux
                        appartient. »
                    </p>
                    <h4>Après avoir cassé toutes les stèles</h4>
                    <p>
                        Une fois toutes les stèles présentent dans le sanctuaire
                        détruites, l'esprit vous dira : « Une telle
                        destruction... Est-ce votre façon d'honorer les croyants
                        ? Leurs egnimes et leurs divagations peuvent vous
                        sembler absurdes ou grotesques. Mais s'ils n'avaient pas
                        la foi ... Qu'adviendrai-t'il de vous et de moi ? » Si
                        vous utilisez l'aiguillon des rêves sur lui : « Quand de
                        nombreuses voix se rassemblent, de grandes ou terriblent
                        choses ne manqueront pas de survenir ... »
                    </p>
                    <h4>Dans le sanctuaire</h4>
                    <p>
                        Ce sanctuaire est un hommage à tous les contributeurs
                        qui ont participé au financement du jeu. Voici le plan
                        du sanctuaire, vous pouvez survolez et cliquez sur ces
                        stèles pour en savoir plus sur ce qu'il y a écrit dessus
                        : Vous trouverez ci-dessous le portrait et ce que dit
                        les guerriers dans l'ordre du plan ci-dessus :
                    </p>
                    {/* <img
                        style={{ width: '70%' }}
                        src={sanctuaireInterieur}
                        alt="intérieur du sanctuaire"
                        useMap="#sci"
                    /> */}
                    <CarteCliquable />
                </div>
            </section>
        </main>
    )
}
export default SanctuaireCroyants
