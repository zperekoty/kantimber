import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Layout } from "../components";
import { Catalogue, Map, Contacts } from "../container";
import type { homeProps, navLinks } from "../types";

const Home: NextPage<homeProps> = ({ products }) => {
    const links: navLinks[] = [
        { text: "каталог товаров", path: "#catalogue" },
        { text: "где нас найти", path: "#map" },
        { text: "контакты", path: "#contacts" },
    ];
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
                title="KanTimber - Лесоматериалы в станице Каневская"
                desc="Лес Каневская. Здесь вы можете ознакомиться с каталогом лесоматериалов. Позвоните нам, чтобы заказать или уточнить наличие товара: +7 (995) 193-37-37, +7 (995) 194-37-37. Или напишите нам в WhatsApp: +7 (995) 194-37-37"
                kw="Лес, Лес Каневская, Каневская, купить лес каневская, лес каневская купить, лес купить каневская, купить лес, лес купить, kantimber"
                links={links}
                theme={theme}
                setTheme={setTheme}
            >
                <main className="flex justify-center items-center flex-col">
                    <Catalogue products={products} />
                    <Map />
                    <Contacts />
                </main>
            </Layout>
        </>
    );
};

export const getServerSideProps = async () => {
    const query = encodeURIComponent('*[_type == "products"]');

    const url = `${process.env.URL}query=${query}`;

    const data = await fetch(url).then((res) => res.json());
    const products = data.result;

    return { props: { products } };
};

export default Home;
