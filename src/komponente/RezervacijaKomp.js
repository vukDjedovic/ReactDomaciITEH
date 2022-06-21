import { useState } from "react";

function RezervacijaKomp(props){

    const [hotel, setHotel] = useState(props.hotel);
    const [gost, setGost] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [brOsoba, setBrOsoba] = useState('');


    return (
        <div>

<div id="rezfrm">

    <div>
    <label>Hotel</label>
    <input type="text" className="form-control mb-3" onChange={e => setHotel(e.target.value)} value={hotel}/>
    </div>

    <div>
    <label>Gost</label>
    <input type="text" className="form-control mb-3" onChange={e => setGost(e.target.value)} value={gost}/>
    </div>

    <div>
    <label>Check In</label>
    <input type="text" className="form-control mb-3" onChange={e => setCheckIn(e.target.value)} value={checkIn}/>
    </div>

    <div>
    <label>Check Out</label>
    <input type="number" className="form-control mb-3" onChange={e => setCheckOut(e.target.value)} value={checkOut}/>
    </div>

    <label>Broj osoba</label>
    <input type="text" className="form-control mb-3" onChange={e => setBrOsoba(e.target.value)} value={brOsoba}/>


    <button type="button" className="btn btn-dark" id="potvrda">Potvrdi rezervaciju</button>


</div>






        </div>
    )
}

export default RezervacijaKomp;