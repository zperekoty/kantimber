import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

import { clientType, queriesType } from "../../types";

export const client = sanityClient(<clientType>{
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: "production",
    apiVersion: "2022-10-18",
    useCdn: false,
});

export const urlFor: any = (source: string): ImageUrlBuilder =>
    imageUrlBuilder(client).image(source);

export const clientFetch = (queries: queriesType[]): void => {
    for (let query of queries) {
        client.fetch(query.query).then((data) => {
            for (let _to of query.to) {
                _to(data);
            }
        });
    }
};
