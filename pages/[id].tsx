import { NextPage } from "next";
import { useState, useEffect } from "react";

import { Layout } from "../components";
import { Product } from "../container";
import { priceConverter } from "../utils";
import { navLinks, productPageProps } from "../types";

const ProductPage: NextPage<productPageProps> = ({ product }): JSX.Element => {
    const links: navLinks[] = [{ text: "главная", path: "/" }];
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");

            setTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");

            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <>
            <Layout
                title={product[0]?.name}
                desc={`KanTimber. ${product[0]?.name}: ${
                    product[0].description
                }, ${priceConverter(
                    product[0]?.price,
                )}. Позвоните нам, чтобы заказать или уточнить наличие товара: +7 (995) 193-37-37, +7 (995) 194-37-37. Или напишите нам в WhatsApp: +7 (995) 194-37-37`}
                kw={`Лес, Лес Каневская, Каневская, купить лес каневская, лес каневская купить, лес купить каневская, купить лес, лес купить, kantimber, купить ${product[0]?.name}, ${product[0]?.name} купить, ${product[0]?.name}`}
                links={links}
                theme={theme}
                setTheme={setTheme}
            >
                <Product product={product} />
            </Layout>
        </>
    );
};

export const getServerSideProps = async (context: any) => {
    const { id } = context.params;
    const query = encodeURIComponent('*[_type == "products" && _id == $id]');

    const url = `${process.env.URL}query=${query}&$id="${id}"`;

    const data = await fetch(url).then((res) => res.json());
    const product = data.result;

    return {
        props: { product },
    };
};

export default ProductPage;
