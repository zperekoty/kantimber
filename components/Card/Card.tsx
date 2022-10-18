import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";
import { BsImage } from "react-icons/bs";

import { urlFor } from "../../sanity";
import { priceConverter } from "../../utils";
import { cardProps } from "../../types";

const Card: FunctionComponent<cardProps> = ({ product }): JSX.Element => (
    <Link href={`/${product._id}`}>
        <a className="flex justify-center items-center p-3 bg-[#02040F] dark:bg-[#E5DADA] m-8 flex-wrap rounded-3xl w-[250px] min-h-[363px] border-4 border-[#02040F] dark:border-[#E5DADA] transition-all hover:border-[#E59500] dark:hover:border-[#E59500] ease-in-out duration-300">
            <div className="relative w-full h-[230px] rounded-3xl overflow-hidden">
                {product.imgUrl ? (
                    <Image
                        src={urlFor(product.imgUrl).url()}
                        alt={`Изображение: ${product.name}`}
                        layout="fill"
                        priority
                        objectFit="cover"
                        className="transition-all hover:scale-110 ease-in-out duration-300"
                    />
                ) : (
                    <BsImage className="fill-[#E5DADA] dark:fill-[#02040F] w-full h-[230px] transition-all ease-in-out duration-300" />
                )}
            </div>

            <div className="flex justify-center items-center flex-col w-full">
                <h2 className="mr-auto text-base 2xl:text-2xl text-[#E5DADA] dark:text-[#02040F] transition-all ease-in-out duration-300">
                    {priceConverter(product.price)}
                </h2>

                <h3 className="mr-auto text-base 2xl:text-2xl text-[#E5DADA]/60 dark:text-[#02040F]/60 transition-all ease-in-out duration-300">
                    {product.name}
                </h3>
            </div>
        </a>
    </Link>
);

export default Card;
