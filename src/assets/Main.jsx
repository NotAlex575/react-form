import { useState } from "react";
import Lista from "./Lista";

let Lista_Articoli = [
    {
        id: 1,
        articolo: "gameboy",
    },
    {
        id: 2,
        articolo: "chitarra",
    },
    {
        id: 3,
        articolo: "spazzola",
    },
    {
        id: 4,
        articolo: "forno",
    }

]



const Main = () => {
    const [articoliLista, setArticoliLista] = useState(Lista_Articoli);
    const [nuovoArticoloLista, setNuovoArticoloLista] = useState("");

    //EVENTO
    const handleArticoli = (event) => {
        event.preventDefault();
        const articoloLista = nuovoArticoloLista.trim();

        const nuovoArticoloForm = {
            id: articoliLista.length+1,
            articolo: articoloLista
        }

        setArticoliLista([...articoliLista, nuovoArticoloForm]);
        setNuovoArticoloLista("");        
    }

    return(
        <main>
            <div className="container">
                <h2>Lista</h2>
                {articoliLista.map((articolo) => {
                    return <Lista key={articolo.id} articolo = {articolo}></Lista>
                })}
            </div>
            <div className="container">
                <form onSubmit={handleArticoli}>
                    <input 
                        type="text"
                        value={nuovoArticoloLista}
                        onChange={(event) => setNuovoArticoloLista(event.target.value)}
                        placeholder="Aggiungi articolo"/>
                    <button type="submit">Aggiungi articolo</button>
                </form>
            </div>
        </main>
    )
}

export default Main;