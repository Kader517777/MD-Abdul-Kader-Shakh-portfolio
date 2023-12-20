import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <div className="hero min-h-[400px] max-h-[600px] bg-base-200">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <img src="https://i.ibb.co/Q9VXpd5/pp1-removebg-preview-removebg-preview.png" className="max-w-[300px] rounded-lg " />
                <div>
                    <p className="py-6 text-xl max-w-[400px]">
                        Hi I am Abdul Quader Sheikh. MERN Stack Web Developer. I love to solve problems.</p>
                    <button className="btn btn-primary"><Link to={'https://drive.google.com/file/d/1UI7ycS7EYrSB3nbPe26uwMf8xrshf2-k/view?usp=sharing'}>Download Resume</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;