import Meni from "../komponente/Meni";
import {useState } from 'react';
import axios from 'axios';

function Pocetna(){

    const [grad, setGrad] = useState();
    const [hoteli, setHoteli] = useState([]);


    function vratiHoteleZaGrad(){
    
            const options = {
            method: 'GET',
            url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
            params: {query: grad, locale: 'en_US', currency: 'EUR'},
            headers: {
                'X-RapidAPI-Key': '4916172c11msh0beee19c8846ca4p127267jsn0bc7bcd7fc43',
                'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
            }
            };

            axios.request(options).then(function (response) {
                setHoteli(response.data.suggestions[1].entities);
            }).catch(function (error) {
                console.error(error);
            });
 }

 
    return (
        <div>
            <Meni />

            <div id="unos">
                <h3>Unesite grad</h3>
                <input type="text" className="form-control" id="inputgrad" value={grad} onChange={e => setGrad(e.target.value)}  />
                <button type="button" onClick={vratiHoteleZaGrad} className="btn btn-dark" id="dugmepretraga" >Pretraga</button>
            </div>

        </div>
    )
}

export default Pocetna;