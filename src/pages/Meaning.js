import { useEffect , useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from "react-router-dom";


export default function Meaning(){

    const [word,setWord] = useState([]);
    const [error,setError] = useState(false);
    const navigate = useNavigate();
    let { search } = useParams();

    useEffect(()=>{
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response) => {
              if(!response.ok){
                setError(true);

                throw new Error("That word doesn\'t have meaning");
              }
              return  response.json()
            })
            .then((data)=> {
                setWord(data[0].meanings);
            })
            .catch((e)=>{
                console.log(e.message);
            });

    },[]);
    return (
        <>
        <h3>Here is your definitions :</h3>
        {word ? word.map((meaning)=>{
            return <p key={uuidv4()}>
                {meaning.partOfSpeech + ' '} : 
                {meaning.definitions[0].definition}
                  </p>;
        }) : null}
        </>
    );
}