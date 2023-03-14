import { NavBar } from "../components/navbar";
import banner from '../images/banner2.jpeg'

export const Home = () => {
    return(
        <div className="d-flex flex-column" >
            <div><NavBar /></div>
            <div ><img src={banner} width="100%" /></div>
            <div className="row tiles-container">
                <div className="col tile">A</div>
                <div className="col tile">B</div>
                <div className="col tile">C</div>
            </div>
        </div>
    )
}