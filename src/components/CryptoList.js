
import { useState, useEffect } from "react";
import axios from "axios";
import TimeChoice from "./TimeChoice";

const CryptoList = () => {
    const [liste, setListe] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showTimeChoice, setShowTimeChoice] = useState(false);
    const [selectedSymbol, setSelectedSymbol] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "https://api.coingecko.com/api/v3/coins/list"
            );
            const data = response.data.map(({ id, name, symbol }) => ({
                x: id,
                y: name,
                z: symbol,
            }));
            setListe(data);
            console.log("DATA");
        };
        fetchData();
    }, []);

    const handleChoice = (x) => {
        setSelectedSymbol(x);
        setShowTimeChoice(true);
    };

    const handleSearch = (e) => {
        console.log(e.target.value);
        let value = e.target.value;
        setSearchTerm(value);
    };

    console.log(showTimeChoice);
    console.log(showTimeChoice && <TimeChoice />);

    return (
        <div>
            {showTimeChoice ? (
                <TimeChoice symbol={selectedSymbol} />
            ) : (
                <>
                    <h1>Liste des Crypto</h1>
                    <input
                        type="text"
                        placeholder="Recherche du coin"
                        onChange={handleSearch}
                    />
                    <br />
                    <ul className="bouton">
                        {liste
                            .filter((val) => {
                                return val.y.includes(searchTerm);
                            })
                            .map((val) => (
                                <li key={val.x}>
                                    <button className="card" onClick={() => handleChoice(val.x)}>
                                        {val.y}
                                    </button>
                                </li>
                            ))}
                    </ul>
                </>
            )}
        </div>
    );
}
export default CryptoList;





// import { useState, useEffect } from "react";
// import axios from "axios";
// import TimeChoice from "./TimeChoice";



// const CryptoList = () => {
//     const [liste, setListe] = useState([]);
//     const [searchTerm, setSearchTerm] = useState([]);
//     const [selectedId, setSelectedId] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await axios.get(
//                 "https://api.coingecko.com/api/v3/coins/list"
//             );
//             const data = response.data.map(({ id, name, symbol }) => ({ x: id, y: name, z: symbol }));
//             setListe(data);
//             console.log("DATA")
//         };
//         fetchData();
//     }, []);


//     const handleChoice = (x) => {
//         alert(x);
//         //recupere le symbol et l'envoie au composant choix d'echelle de temps
//         setSelectedId(x);
//         console.log(selectedId);
//     }
//     const handleSearch = (e) => {
//         console.log(e.target.value);
//         let value = e.target.value;
//         setSearchTerm(value);
//     }

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Recherche du coin"
//                 onChange={handleSearch}
//             />
//             <br />
//             <ul >
//                 {liste.filter((val) => {
//                     return val.y.includes(searchTerm);
//                 })
//                     .map((val) => (
//                         <li key={val.x}>
//                             <button className="card" onClick={() => handleChoice(val.x)}>{val.y}</button>
//                         </li>
//                     ))}
//             </ul>
//             {selectedId && <TimeChoice id={selectedId} />}
//         </div>
//     );

// };

// export default CryptoList;