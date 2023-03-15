import { NavBar } from "../components/navbar";
import banner from '../images/banner2.jpeg';
import { Icon } from '@iconify/react';

export const Home = () => {
    return(
        <div className="d-flex flex-column" >
            <div><NavBar /></div>
            <div ><img src={banner} width="100%" /></div>
            <div className="row tiles-container">
                <div className="col tile all-course d-flex flex-column justify-content-center">
                    <div className="tab-icon d-flex flex-row justify-content-center">
                        <Icon icon="ph:stack-thin" />
                    </div>
                    <div className="d-flex flex-row justify-content-center">All Courses</div>
                </div>
                <div className="col tile your-course d-flex flex-column justify-content-center">
                    <div className="tab-icon d-flex flex-row justify-content-center">
                        <Icon icon="ph:stack-simple-thin" />
                    </div>
                    <div className="d-flex flex-row justify-content-center">Your Courses</div>
                </div>
                <div className="col tile profile-tab d-flex flex-column justify-content-center">
                    <div className="tab-icon d-flex flex-row justify-content-center">
                        <Icon icon="ph:identification-badge-thin" />
                    </div>
                    <div className="d-flex flex-row justify-content-center">Profile</div>
                </div>
            </div>
        </div>
    )
}