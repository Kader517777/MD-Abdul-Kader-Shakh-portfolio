import { VscGithubInverted } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="bg-[#8e6262] h-[150px] ">
            <div className="flex justify-center p-6">
                <Link to={'https://github.com/Kader517777'} ><VscGithubInverted size={40} color="blue" /></Link>
                <Link to={'https://www.linkedin.com/in/md-abdul-4b138b1b1/'} className="mx-5"><CiLinkedin size={40} color="blue" /></Link>
            </div>
            <div>
                <h1 className="flex justify-center text-xl font-bold">© 2021 copyright all right reserved</h1>
            </div>
        </div>
    );
};

export default Footer;