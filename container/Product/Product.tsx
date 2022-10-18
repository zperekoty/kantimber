import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { BsImage } from "react-icons/bs";

import { AppWrap, MotionWrap } from "../../wrapper";
import { priceConverter } from "../../utils";
import { urlFor } from "../../sanity";
import { productProps, variants } from "../../types";

const variants: variants = { x: [100, 0], opacity: [0, 1] };

const Product: FunctionComponent<productProps> = ({ product }): JSX.Element => (
    <AppWrap idName="product" classes="pt-[111px]">
        <MotionWrap variants={variants} duration={0.85} ease="easeInOut">
            <section className="flex justify-center items-center flex-col">
                <h1 className="text-4xl 2xl:text-6xl text-[#02040F] dark:text-[#E5DADA] capitalize transition-all ease-in-out duration-300 mb-8">
                    {product[0]?.name}
                </h1>

                <div className="flex justify-between items-center p-5 bg-[#02040F] dark:bg-[#E5DADA] rounded-3xl flex-col lg:flex-row max-w-[320px] lg:max-w-[900px] transition-all ease-in-out duration-300 border-4 border-[#02040F] dark:border-[#E5DADA] hover:border-[#E59500] dark:hover:border-[#E59500]">
                    <div className="relative flex justify-center items-center w-full h-[350px] lg:h-[500px] 2xl:h-[700px] rounded-3xl overflow-hidden m-0 lg:mr-7">
                        {product[0]?.imgUrl ? (
                            <Image
                                src={urlFor(product[0]?.imgUrl).url()}
                                alt={`Изображение: ${product[0]?.name}`}
                                layout="fill"
                                priority
                                objectFit="cover"
                                className="transition-all hover:scale-110 ease-in-out duration-300"
                            />
                        ) : (
                            <BsImage className="fill-[#E5DADA] dark:fill-[#02040F] w-full h-[350px] lg:h-[500px] 2xl:h-[700px] hover:scale-110 transition-all ease-in-out duration-300" />
                        )}
                    </div>

                    <div className="flex justify-between items-start flex-col">
                        <p className="text-lg lg:text-3xl text-[#E5DADA] dark:text-[#02040F] transition-all ease-in-out duration-300">
                            Название: {product[0]?.name}
                        </p>

                        <p className="text-lg lg:text-3xl text-[#E5DADA] dark:text-[#02040F] transition-all ease-in-out duration-300 mt-5">
                            Описание: {product[0]?.description}
                        </p>

                        <p className="text-lg lg:text-3xl text-[#E5DADA] dark:text-[#02040F] transition-all ease-in-out duration-300 mt-5">
                            Цена: {priceConverter(product[0]?.price)}
                        </p>

                        <p className="ml-auto mt-5 lg:mt-20 text-xs 2xl:text-base text-[#E5DADA]/40 dark:text-[#02040F]/40 transition-all ease-in-out duration-300">
                            *Для заказа {product[0]?.name} - позвоните нам:{" "}
                            <Link href="tel:79951933737">
                                <a className="text-[#E5DADA]/70 dark:text-[#02040F]/70 transition-all ease-in-out duration-300 hover:text-[#E59500]/70 dark:hover:text-[#E59500]/70">
                                    +7 (995) 193-37-37
                                </a>
                            </Link>
                            ,{" "}
                            <Link href="tel:79951943737">
                                <a className="text-[#E5DADA]/70 dark:text-[#02040F]/70 transition-all ease-in-out duration-300 hover:text-[#E59500]/70 dark:hover:text-[#E59500]/70">
                                    +7 (995) 194-37-37
                                </a>
                            </Link>
                            ; Или напишите нам в WhatsApp:{" "}
                            <Link href="https://wa.me/79951943737">
                                <a
                                    target="_blank"
                                    className="text-[#E5DADA]/70 dark:text-[#02040F]/70 transition-all ease-in-out duration-300 hover:text-[#E59500]/70 dark:hover:text-[#E59500]/70"
                                >
                                    +7 (995) 194-37-37
                                </a>
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </MotionWrap>
    </AppWrap>
);

export default Product;
