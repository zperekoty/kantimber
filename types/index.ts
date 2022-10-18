import React from "react";

export type navLinks = {
    text: string;
    path: string;
};

export type navProps = {
    links: navLinks[];
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export type footProps = { links: navLinks[]; theme: string };

export type appWrapProps = {
    children: React.ReactNode;
    idName: string;
    classes?: string;
};

export type variants = {
    y?: number[];
    x?: number[];
    opacity: number[];
};

export type motionWrapProps = {
    children: React.ReactNode;
    classes?: string;
    variants: variants;
    duration: number;
    ease: "easeIn" | "easeOut" | "easeInOut";
};

export type layoutProps = {
    children: React.ReactNode;
    title: string;
    desc: string;
    kw: string;
    links: navLinks[];
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export type productsType = {
    name: string;
    description: string;
    price: string;
    categories: Array<string>;
    imgUrl: string;
    _id: string;
};

export type homeProps = { products: productsType[] };

export type productProps = { product: productsType[] };

export type productPageProps = { product: productsType[] };

export type catalogueProps = { products: productsType[] };

export type cardProps = { product: productsType };

export type clientType = {
    projectId: string;
    dataset: string;
    apiVersion: string;
    useCdn: boolean;
};

export type categoriesType = { category: string };

export type queriesType = {
    query: string;
    to:
        | React.Dispatch<React.SetStateAction<productsType[]>>[]
        | React.Dispatch<React.SetStateAction<categoriesType[]>>[];
};
