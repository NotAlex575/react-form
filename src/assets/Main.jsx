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
                <Lista></Lista>
            </div>
        </main>
    )
}

export default Main;