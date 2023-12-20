import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";


const Skill = () => {
    return (
        <div className="py-10">
            <h1 className="text-3xl font-bold pb-3 text-center">Skills</h1>
            <ol className=" grid grid-cols-1 lg:grid-cols-2 gap-12">
                <li className="flex justify-center items-center border-b-4  border-[red] p-2 text-2xl font-bold">
                    <img className="h-12 w-12 mr-4" src="https://i.ibb.co/ctmHb1j/Java-Script-logo.png" alt="" />
                    javascript
                </li>
                <li className="flex justify-center items-center border-b-4  border-[red] p-2 text-2xl font-bold">
                    <IoLogoReact size={48} color="blue" className="mr-2 " />
                    React
                </li>
                <li className="flex justify-center items-center border-b-4  border-[red] p-2 text-2xl font-bold">
                    <SiTailwindcss size={48} color="blue" className="mr-2 " />
                    Tailwin css
                </li>
                <li className="flex justify-center items-center border-b-4  border-[red] p-2 text-2xl font-bold">
                    <img className="h-12 w-12 mr-4" src="https://i.ibb.co/2WNN1FS/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-1.png" alt="" />
                    Express.js
                </li>
                <li className="flex justify-center items-center border-b-4  border-[red] p-2 text-2xl font-bold">
                    <DiMongodb size={48} color="#00E661" className="mr-2 " />
                    MongoDB
                </li>
                <li className="flex justify-center items-center border-b-4  border-[red] p-2 text-2xl font-bold">
                    <img className="h-12 w-12 mr-4" src="https://i.ibb.co/TM2L6Rb/next-js-icon-2048x2048-5dqjgeku.png" alt="" />
                    Next JS
                </li>
            </ol>
        </div>
    );
};

export default Skill;