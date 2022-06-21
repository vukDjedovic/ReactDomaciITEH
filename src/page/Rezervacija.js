import Meni from "../komponente/Meni";
import {useLocation, useNavigate} from 'react-router-dom';
import RezervacijaKomp from "../komponente/RezervacijaKomp";

function Rezervacija(){

    const location = useLocation();
    const navigate = useNavigate();

    function potvrda(){
        navigate('/uspeh');
    }

    return (
        <div>
            <Meni />

            <RezervacijaKomp hotel={location.state} potvrda={potvrda} />
        </div>
    )
}

export default Rezervacija;