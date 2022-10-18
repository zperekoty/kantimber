import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

import { images } from "../../assets";
import { footProps } from "../../types";

const Footer: FunctionComponent<footProps> = ({
    links,
    theme,
}): JSX.Element => (
    <footer className="flex justify-between items-center w-full bg-[#E5DADA] dark:bg-[#02040F] p-6 flex-col lg:flex-row">
        <div className="relative w-[200px] h-[40px] 2xl:w-[400px] 2xl:h-[80px] flex justify-center items-center mb-5 lg:m-0">
            {theme === "dark" ? (
                <Link href="/">
                    <a>
                        <Image
                            src={images.logoDark}
                            alt="logo"
                            layout="fill"
                            priority
                        />
                    </a>
                </Link>
            ) : (
                <Link href="/">
                    <a>
                        <Image
                            src={images.logo}
                            alt="logo"
                            layout="fill"
                            priority
                        />
                    </a>
                </Link>
            )}
        </div>

        <div className="flex justify-center items-center flex-col">
            <ul className="list-none flex justify-center items-center flex-col">
                <h2 className="text-sm lg:text-base 2xl:text-xl text-[#e59500] dark:text-[#e59500] capitalize mb-5 mr-0 lg:mr-auto">
                    навигация
                </h2>

                {links.map((link) => (
                    <li key={link.path} className="mb-3 mr-0 lg:mr-auto">
                        {link.path.startsWith("/") ? (
                            <Link href={link.path}>
                                <a className="no-underline uppercase relative flex-col font-medium text-[#02040F] dark:text-[#E5DADA] text-sm lg:text-base 2xl:text-xl transition-all  hover:text-[#e59500] dark:hover:text-[#e59500] ease-in-out duration-300">
                                    {link.text}
                                </a>
                            </Link>
                        ) : (
                            <a
                                href={link.path}
                                className="no-underline uppercase relative flex-col font-medium text-[#02040F] dark:text-[#E5DADA] text-sm lg:text-base 2xl:text-xl transition-all  hover:text-[#e59500] dark:hover:text-[#e59500] ease-in-out duration-300"
                            >
                                {link.text}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>

        <div className="flex justify-center items-center flex-col">
            <ul className="list-none flex justify-center items-center flex-col">
                <h2 className="text-sm lg:text-base 2xl:text-xl text-[#e59500] dark:text-[#e59500] capitalize mb-5 mr-0 lg:mr-auto">
                    контакты
                </h2>

                <li className="mb-3 flex justify-center items-center mr-0 lg:mr-auto">
                    <BsFillTelephoneInboundFill className="w-[25px] h-[25px] fill-[#02040F] dark:fill-[#E5DADA] mr-2 transition-all ease-in-out duration-300" />

                    <Link href="tel:79951933737">
                        <a className="no-underline uppercase relative flex-col font-medium text-[#02040F] dark:text-[#E5DADA] text-sm lg:text-base 2xl:text-xl transition-all  hover:text-[#e59500] dark:hover:text-[#e59500] ease-in-out duration-300">
                            +7 (995) 193-37-37
                        </a>
                    </Link>
                </li>

                <li className="mb-3 flex justify-center items-center mr-0 lg:mr-auto">
                    <BsFillTelephoneInboundFill className="w-[25px] h-[25px] fill-[#02040F] dark:fill-[#E5DADA] mr-2 transition-all ease-in-out duration-300" />

                    <Link href="tel:79951943737">
                        <a className="no-underline uppercase relative flex-col font-medium text-[#02040F] dark:text-[#E5DADA] text-sm lg:text-base 2xl:text-xl transition-all  hover:text-[#e59500] dark:hover:text-[#e59500] ease-in-out duration-300">
                            +7 (995) 194-37-37
                        </a>
                    </Link>
                </li>

                <li className="mb-3 flex justify-center items-center mr-0 lg:mr-auto">
                    <RiWhatsappFill className="w-[25px] h-[25px] fill-[#02040F] dark:fill-[#E5DADA] mr-2 transition-all ease-in-out duration-300" />

                    <Link href="https://wa.me/79951943737">
                        <a
                            target="_blank"
                            className="no-underline uppercase relative flex-col font-medium text-[#02040F] dark:text-[#E5DADA] text-sm lg:text-base 2xl:text-xl transition-all hover:text-[#e59500] dark:hover:text-[#e59500] ease-in-out duration-300"
                        >
                            +7 (995) 194-37-37
                        </a>
                    </Link>
                </li>
            </ul>
        </div>

        <div className="flex justify-center items-center flex-col">
            <span className="text-sm lg:text-base 2xl:text-xl text-[#02040F] dark:text-[#E5DADA] flex justify-center items-center mt-5 lg:m-0 transition-all ease-in-out duration-300">
                &copy; 2022 KanTimber
            </span>
        </div>
    </footer>
);

export default Footer;
