import img from '../assets/istanbul-cropped.png';
import img2 from '../assets/bio-photo.jpg';
import { IoLogoGithub, IoLogoLinkedin} from "react-icons/io";
import { TbFileCv } from "react-icons/tb";

import '../css/header.css';

function Header() {

    
  return (
    <div className='header'>
        <img src={img} alt='Istanbul' className='background-image'/>
        <div className='profile-card'>
            <img src={img2} alt='Profile Image' className='profile-image'/>
            <div className='profile-info'>
                <h1>Sertac Bahadir Afsari</h1>
                <p>CS Student @ University of Groningen</p>
                <p>sbafsari@gmail.com</p>
                <p>s.b.afsari@student.rug.nl</p>
                <div className='social'>
                    <a href="https://github.com/sertacafsari" target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/serta%C3%A7-bahad%C4%B1r-af%C5%9Fari-ba07b4197/" target="_blank" rel="noopener noreferrer">
                        <IoLogoLinkedin/>
                    </a>
                    <a href="" target='_blank' rel="noopener noreferrer">
                        <TbFileCv/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;