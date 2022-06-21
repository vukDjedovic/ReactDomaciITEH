import Meni from "../komponente/Meni";
import {useLocation, useNavigate} from 'react-router-dom';
import RezervacijaKomp from "../komponente/RezervacijaKomp";

function Rezervacija(){

    const location = useLocation();

    return (
        <div>
            <Meni />

            <RezervacijaKomp hotel={location.state} />
        </div>
    )
}

export default Rezervacija;