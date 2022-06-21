
function IzborHotela(props){

    return (
        <div>

            <div id="izborhoteladiv">
                <h3 id="naslovhotel">Izaberite hotel</h3>

                <select className="form-select" id="izborselect">
                {props.hoteli.map(h => {
                    return (
                        <option key={h.destinationId} value={h.name}>{h.name}</option>
                    );
                })}
                </select>

            <button type="button" className="btn btn-dark" id="dugmerezervacija">Rezerviši</button>

            </div>


        </div>
    )
}

export default IzborHotela;