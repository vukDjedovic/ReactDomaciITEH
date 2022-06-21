import {Link} from 'react-router-dom';
import {useState} from 'react'

function IzborHotela(props){

    const [izbor, setIzbor] = useState();

    return (
        <div>

            <div id="izborhoteladiv">
                <h3 id="naslovhotel">Izaberite hotel</h3>

                <select className="form-select" id="izborselect" onChange={e => setIzbor(e.target.value)}>
                {props.hoteli.map(h => {
                    return (
                        <option key={h.destinationId} value={h.name}>{h.name}</option>
                    );
                })}
                </select>

            <Link to={"/rezervacija"} state={izbor}><button type="button" className="btn btn-dark" id="dugmerezervacija">Rezerviši</button></Link>

            </div>


        </div>
    )
}

export default IzborHotela;