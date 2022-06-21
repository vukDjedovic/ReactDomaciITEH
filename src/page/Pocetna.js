import Meni from "../komponente/Meni";

function Pocetna(){
    return (
        <div>
            <Meni />

            <div id="unos">
                <h3>Unesite grad</h3>
                <input type="text" className="form-control" id="inputgrad" />
                <button type="button" className="btn btn-dark" id="dugmepretraga">Pretraga</button>
            </div>

        </div>
    )
}

export default Pocetna;