/* eslint-disable react-hooks/rules-of-hooks */
import type { AppProps } from "next/app";
import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Loader } from "../components";
import "../styles/main.scss";

const appWrapper: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const handleStart = (url: string) =>
            url !== router.asPath && setLoading(true);
        const handleStop = (url: string) =>
            url === router.asPath && setLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [router]);

    return (
        <>
            {loading && <Loader />}

            <Component {...pageProps} />
        </>
    );
};

export default appWrapper;
