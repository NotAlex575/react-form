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
    //lista iniziale
    const [articoliLista, setArticoliLista] = useState(Lista_Articoli);
    //lista aggiornata con il form
    const [nuovoArticoloLista, setNuovoArticoloLista] = useState("");

    //EVENTO
    const handleArticoli = (event) => {

        event.preventDefault();
        const articoloLista = nuovoArticoloLista.trim();

        //crea il nuovo oggetto creato tramite la compilazione del form
        const nuovoArticoloForm = {
            id: articoliLista.length+1,
            articolo: articoloLista
        }

        //lista aggiornata
        setArticoliLista([...articoliLista, nuovoArticoloForm]);
        //reset imput dopo l'aggiunte dell'articolo
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