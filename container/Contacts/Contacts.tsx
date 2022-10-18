import { FunctionComponent } from "react";
import Link from "next/link";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

import { AppWrap, MotionWrap } from "../../wrapper";
import { variants } from "../../types";

const variants: variants = { x: [150, 0], opacity: [0, 1] };

const Contacts: FunctionComponent = (): JSX.Element => (
    <AppWrap idName="contacts">
        <MotionWrap variants={variants} duration={0.8} ease="easeInOut">
            <section className="flex justify-center items-center flex-col">
                <h1 className="text-4xl 2xl:text-6xl text-[#02040F] dark:text-[#E5DADA] capitalize transition-all ease-in-out duration-300 mb-8">
                    контакты
                </h1>

                <div className="flex justify-center items-center flex-col lg:flex-row">
                    <div className="flex justify-center items-center p-4 bg-[#02040F] dark:bg-[#E5DADA] border-4 border-[#02040F] dark:border-[#02040F] transition-all hover:border-[#E59500] dark:hover:border-[#E59500] ease-in-out duration-300 rounded-3xl my-3 lg:mx-3">
                        <BsFillTelephoneInboundFill className="w-[45px] h-[45px] fill-[#E5DADA] dark:fill-[#02040F] mr-3 transition-all ease-in-out duration-300" />

                        <Link href="tel:79951933737">
                            <a className="text-[#E5DADA] dark:text-[#02040F] text-base 2xl:text-2xl hover:text-[#E59500] dark:hover:text-[#E59500] transition-all ease-in-out duration-300">
                                +7 (995) 193-37-37
                            </a>
                        </Link>
                    </div>

                    <div className="flex justify-center items-center p-4 bg-[#02040F] dark:bg-[#E5DADA] border-4 border-[#02040F] dark:border-[#02040F] transition-all hover:border-[#E59500] dark:hover:border-[#E59500] ease-in-out duration-300 rounded-3xl my-3 lg:mx-3">
                        <BsFillTelephoneInboundFill className="w-[45px] h-[45px] fill-[#E5DADA] dark:fill-[#02040F] mr-3 transition-all ease-in-out duration-300" />

                        <Link href="tel:79951943737">
                            <a className="text-[#E5DADA] dark:text-[#02040F] text-base 2xl:text-2xl hover:text-[#E59500] dark:hover:text-[#E59500] transition-all ease-in-out duration-300">
                                +7 (995) 194-37-37
                            </a>
                        </Link>
                    </div>

                    <div className="flex justify-center items-center p-4 bg-[#02040F] dark:bg-[#E5DADA] border-4 border-[#02040F] dark:border-[#02040F] transition-all hover:border-[#E59500] dark:hover:border-[#E59500] ease-in-out duration-300 rounded-3xl my-3 lg:mx-3">
                        <RiWhatsappFill className="w-[45px] h-[45px] fill-[#E5DADA] dark:fill-[#02040F] mr-3 transition-all ease-in-out duration-300" />

                        <Link href="https://wa.me/79951943737">
                            <a
                                target="_blank"
                                className="text-[#E5DADA] dark:text-[#02040F] text-base 2xl:text-2xl hover:text-[#E59500] dark:hover:text-[#E59500] transition-all ease-in-out duration-300"
                            >
                                +7 (995) 194-37-37
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </MotionWrap>
    </AppWrap>
);

export default Contacts;
