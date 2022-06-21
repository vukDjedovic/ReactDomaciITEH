import {Link} from 'react-router-dom';

function Meni(){
    return (
        <div>
            <ul>
                <Link to={"/"}><li>Početna</li></Link>
            </ul>
        </div>
    )
}
export default Meni;