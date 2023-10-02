function Createurs(props) {
    const createur = props.createur
    return (
        <>
            <figure>
                <img
                    src={require('../../Assets/Images/' + createur.picture)}
                    alt={'portrait de ' + createur.name}
                />
                <figcaption>
                    <h3>{createur.name}</h3>
                    <h4>{createur.role}</h4>
                </figcaption>
            </figure>
        </>
    )
}

export default Createurs
