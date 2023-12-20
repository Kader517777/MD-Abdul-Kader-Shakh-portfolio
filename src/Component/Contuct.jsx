import { ImHome } from "react-icons/im";
import { MdOutlinePhoneForwarded } from "react-icons/md";
const Contuct = () => {
    return (
        <div className=" p-5 my-10">
            <h1 className="text-3xl text-center mb-10 font-bold">Contuct:</h1>
            <div className="flex flex-col justify-center w-full">
                <div className="flex items-center">
                    <ImHome size={40} color={`red`} />
                    <div className="ml-5">
                        <h1 className=" text-2xl font-bold">Address</h1>
                        <p className="text-xl">Rajbari, Bangladesh</p>
                    </div>
                </div>
                <div className="flex items-center my-5">
                    <MdOutlinePhoneForwarded size={40} color={`red`} />
                    <div className="ml-5">
                        <h1 className=" text-2xl font-bold">Number</h1>
                        <p className="text-xl">+88 01625 876074</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <ImHome size={40} color={`red`} />
                    <div className="ml-5">
                        <h1 className=" text-2xl font-bold">Email Address</h1>
                        <p className="text-xl">shakhabdulkader2020@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contuct;