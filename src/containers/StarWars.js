import {useState, useEffect} from 'react';
import axios from 'axios';
import Character from '../components/Character';

export default () => {
    const [list, setList] = useState([]);

    console.log(list)
    useEffect(async ()=>{
        try{
            const charactertListResponse = await axios({
                url: 'https://swapi.dev/api/people'}
            )
            setList(charactertListResponse.data.results)
        }catch(error){
            console.log(error)
        }
    },[])

    return (
        <section>
            <h1>Star Wars Wiki</h1>
            {list.map((character)=>{
                return (
                        <Character character={character}/>
                )
            })}
        </section>
    )
}