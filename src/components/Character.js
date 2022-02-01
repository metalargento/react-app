export default ({character}) => {
    return(
        <div>
            <h3>{character.name}</h3>
            <ul>
                <li>Height: {character.height}</li>
                <li>Mass: {character.mass}</li>
                <li>Hair Color: {character.hair_color}</li>
                <li>Birth Year: {character.birth_year}</li>
                <li>Gender: {character.gender}</li>
            </ul>
        </div>
    )
}