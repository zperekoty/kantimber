import { FunctionComponent } from "react";

import { Card } from "../../components";
import { catalogueProps, variants } from "../../types";
import { AppWrap, MotionWrap } from "../../wrapper";

const variants: variants = { opacity: [0, 1] };

const Catalogue: FunctionComponent<catalogueProps> = ({
    products,
}): JSX.Element => (
    <AppWrap idName="catalogue" classes="py-[111px]">
        <MotionWrap variants={variants} duration={1.5} ease="easeInOut">
            <section className="flex justify-center items-center flex-col">
                <h1 className="text-4xl 2xl:text-6xl text-[#02040F] dark:text-[#E5DADA] capitalize transition-all ease-in-out duration-300">
                    каталог товаров
                </h1>
                <div className="flex justify-center items-center flex-col lg:flex-row flex-wrap">
                    {products.map((product) => (
                        <Card key={product._id} product={product} />
                    ))}
                </div>
            </section>
        </MotionWrap>
    </AppWrap>
);

export default Catalogue;
