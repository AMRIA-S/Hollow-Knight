import './equipe.scss'

function Equipe(props) {
    const equipe = props.equipe

    return (
        <>
            <figure>
                <img
                    src={require('../../Assets/Images/' + equipe.picture)}
                    alt={'portrait de ' + equipe.name}
                />
                <figcaption>
                    <h3>{equipe.name}</h3>
                    <p>{equipe.role}</p>
                </figcaption>
            </figure>
        </>
    )
}

export default Equipe
