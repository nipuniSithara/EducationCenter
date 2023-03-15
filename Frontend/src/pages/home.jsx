import banner from '../images/banner2.jpeg';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    return(
        <div className="d-flex flex-column" >
            
            <div ><img src={banner} width="100%" /></div>
            <div className="row tiles-container">
                <div className="col tile all-course d-flex flex-column justify-content-center" onClick={()=>{navigate("/all-courses")}}>
                    <div className="tab-icon d-flex flex-row justify-content-center">
                        <Icon icon="ph:stack-thin" />
                    </div>
                    <div className="d-flex flex-row justify-content-center">All Courses</div>
                </div>
                <div className="col tile your-course d-flex flex-column justify-content-center" onClick={()=>{navigate("/your-courses")}}>
                    <div className="tab-icon d-flex flex-row justify-content-center">
                        <Icon icon="ph:stack-simple-thin" />
                    </div>
                    <div className="d-flex flex-row justify-content-center">Your Courses</div>
                </div>
                <div className="col tile profile-tab d-flex flex-column justify-content-center" onClick={()=>{navigate("/profile")}}>
                    <div className="tab-icon d-flex flex-row justify-content-center">
                        <Icon icon="ph:identification-badge-thin" />
                    </div>
                    <div className="d-flex flex-row justify-content-center">Profile</div>
                </div>
            </div>
        </div>
    )
}