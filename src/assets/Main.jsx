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
    return(
        <main>
            <div className="container">
                <h2>Lista</h2>
                {Lista_Articoli.map((articolo) => {
                    return <Lista key={articolo.id} articolo = {articolo}></Lista>
                })}
            </div>
            <div className="container">
                <form>
                    <input type="text"value=""placeholder="Aggiungi articolo"/>
                    <button type="submit">Aggiungi</button>
                </form>
            </div>
        </main>
    )
}

export default Main;