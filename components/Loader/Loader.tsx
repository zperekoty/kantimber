import { FunctionComponent } from "react";
import { BiLoaderAlt } from "react-icons/bi";

const Loader: FunctionComponent = (): JSX.Element => (
    <div className="w-screen h-screen bg-[#E5DADA] dark:bg-[#02040F] flex justify-center items-center flex-col">
        <BiLoaderAlt className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] fill-[#02040F] dark:fill-[#E5DADA] animate-spin" />

        <h1 className="text-sm md:text-xl lg:text-2xl text-[#02040F] dark:text-[#E5DADA]">
            Загрузка...
        </h1>
    </div>
);

export default Loader;
