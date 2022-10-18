import Head from "next/head";
import { FunctionComponent, useState, useEffect } from "react";

import { Navbar, Footer } from "../";
import { layoutProps } from "../../types";

const Layout: FunctionComponent<layoutProps> = ({
    children,
    title,
    desc,
    kw,
    links,
    theme,
    setTheme,
}): JSX.Element => (
    <>
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=7" />

            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <meta name="description" content={desc} />
            <meta name="keywords" content={kw} />

            <link
                rel="icon"
                type="image/vnd.microsoft.icon"
                href="/favicon.ico"
            />

            <meta name="msapplication-tap-highlight" content="no" />

            <link rel="manifest" href="/manifest.json"></link>

            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="application-name" content={title} />
            <link
                rel="icon"
                sizes="192x192"
                href="/android-chrome-192x192.png"
            ></link>

            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black"
            />
            <meta name="apple-mobile-web-app-title" content={title} />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>

            <title>{title}</title>
        </Head>

        <Navbar links={links} theme={theme} setTheme={setTheme} />
        {children}
        <Footer links={links} theme={theme} />
    </>
);

export default Layout;
