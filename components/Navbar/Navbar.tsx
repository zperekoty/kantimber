import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

import { navProps } from "../../types";
import { images } from "../../assets";

const Navbar: FunctionComponent<navProps> = ({
    links,
    theme,
    setTheme,
}): JSX.Element => {
    const [menu, setMenu] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const closeMenu = (): void => {
        if (!isClosing) {
            setIsClosing(true);

            setTimeout(() => {
                setIsClosing(false);
                setMenu(false);
            }, 460);
        }
    };

    const themeHandler = (): void => {
        setTheme(theme === "dark" ? "light" : "dark");

        localStorage.theme = theme === "dark" ? "light" : "dark";
    };

    return (
        <nav className="flex fixed top-0 justify-between items-center w-full bg-[#b8aeae]/30 dark:bg-[#242424]/30 p-6 backdrop-blur-sm z-10">
            <div className="relative w-[200px] h-[40px] 2xl:w-[400px] 2xl:h-[80px] flex justify-center items-center">
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

            <div className="flex justify-center items-center w-[35px] h-[35px] relative rounded-full ml-auto bg-[#E59500] lg:hidden">
                <HiMenu
                    onClick={() => setMenu(true)}
                    className="w-[70%] h-[70%] cursor-pointer fill-[#002642] dark:fill-[#e5dada]"
                />

                {menu && (
                    <motion.div
                        whileInView={
                            !isClosing
                                ? { x: [250, 0], opacity: [0, 1] }
                                : { x: [0, 250], opacity: [1, 0] }
                        }
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className="fixed top-0 w-[80%] opacity-0 bottom-0 right-0 z-50 p-4 flex justify-end items-end flex-col bg-[#E59500]"
                    >
                        <div className="flex justify-center items-center">
                            {theme === "dark" ? (
                                <BsSunFill
                                    onClick={themeHandler}
                                    className="w-[25px] h-[25px] fill-[#02040F] dark:fill-[#E5DADA] my-[0.5rem] mx-4 cursor-pointer"
                                />
                            ) : (
                                <BsMoonStarsFill
                                    onClick={themeHandler}
                                    className="w-[25px] h-[25px] fill-[#02040F] dark:fill-[#E5DADA] my-[0.5rem] mx-4 cursor-pointer"
                                />
                            )}

                            <HiX
                                onClick={closeMenu}
                                className="w-[35px] h-[35px] fill-[#02040F] dark:fill-[#E5DADA] my-[0.5rem] mx-4 cursor-pointer"
                            />
                        </div>

                        <ul className="list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col">
                            {links.map((link) => (
                                <li key={link.path} className="m-4">
                                    {link.path.startsWith("/") ? (
                                        <Link href={link.path}>
                                            <a
                                                className="text-[#02040F] dark:text-[#E5DADA] no-underline uppercase text-base font-medium"
                                                onClick={() => setMenu(false)}
                                            >
                                                {link.text}
                                            </a>
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.path}
                                            className="text-[#02040F] dark:text-[#E5DADA] no-underline uppercase text-base font-medium"
                                            onClick={() => setMenu(false)}
                                        >
                                            {link.text}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>

            <ul className="lg:flex justify-center items-center ml-auto list-none hidden">
                {links.map((link) => (
                    <li key={link.path} className="mx-4 flex-col">
                        {link.path.startsWith("/") ? (
                            <Link href={link.path}>
                                <a className="no-underline uppercase relative flex-col font-medium text-[#02040F] dark:text-[#E5DADA] transition-all after:absolute after:w-full after:h-[3px] after:left-0 after:bottom-[-7px] after:rounded-t-[20px] after:opacity-0 after:scale-0 after:bg-[#02040F] dark:after:bg-[#E5DADA] after:transition-all hover:text-[#e59500] dark:hover:text-[#e59500] hover:after:opacity-100 hover:after:scale-100 ease-in-out duration-300">
                                    {link.text}
                                </a>
                            </Link>
                        ) : (
                            <a
                                href={link.path}
                                className="no-underline uppercase relative flex-col font-medium text-[#02040F] dark:text-[#E5DADA] transition-all after:absolute after:w-full after:h-[3px] after:left-0 after:bottom-[-7px] after:rounded-t-[20px] after:opacity-0 after:scale-0 after:bg-[#02040F] dark:after:bg-[#E5DADA] after:transition-all hover:text-[#e59500] dark:hover:text-[#e59500] hover:after:opacity-100 hover:after:scale-100 ease-in-out duration-300"
                            >
                                {link.text}
                            </a>
                        )}
                    </li>
                ))}
            </ul>

            <div className="hidden lg:flex justify-center items-center">
                {theme === "dark" ? (
                    <BsSunFill
                        onClick={themeHandler}
                        className="w-[25px] h-[25px] fill-[#02040F] dark:fill-[#E5DADA] my-[0.5rem] mx-4 cursor-pointer transition-all hover:fill-[#e59500] dark:hover:fill-[#e59500] ease-in-out duration-300"
                    />
                ) : (
                    <BsMoonStarsFill
                        onClick={themeHandler}
                        className="w-[25px] h-[25px] fill-[#02040F] dark:fill-[#E5DADA] my-[0.5rem] mx-4 cursor-pointer transition-all hover:fill-[#e59500] dark:hover:fill-[#e59500] ease-in-out duration-300"
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
