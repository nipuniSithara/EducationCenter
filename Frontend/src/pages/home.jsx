import { NavBar } from "../components/navbar";
import banner from '../images/banner2.jpeg'

export const Home = () => {
    return(
        <div className="d-flex flex-column" >
            <div><NavBar /></div>
            <div ><img src={banner}/></div>
        </div>
    )
}