import { NextPage } from "next";
import { useEffect, useState } from "react";

import { Layout } from "../components";
import { NotFound } from "../container";
import { navLinks } from "../types";

const NotFoundPage: NextPage = (): JSX.Element => {
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
                title="KanTimber - Страница не найдена"
                desc=""
                kw=""
                links={links}
                theme={theme}
                setTheme={setTheme}
            >
                <NotFound />
            </Layout>
        </>
    );
};

export default NotFoundPage;
