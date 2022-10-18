import { NextPage } from "next";
import { useEffect, useState } from "react";

import { Layout } from "../components";
import { IntServError } from "../container";
import { navLinks } from "../types";

const IntServErrorPage: NextPage = (): JSX.Element => {
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
                title="KanTimber - Внутренняя серверная ошибка"
                desc=""
                kw=""
                links={links}
                theme={theme}
                setTheme={setTheme}
            >
                <IntServError />
            </Layout>
        </>
    );
};

export default IntServErrorPage;
