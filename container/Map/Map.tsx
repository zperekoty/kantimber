import { FunctionComponent, useEffect, useState } from "react";
import MapBox, { NavigationControl, Marker } from "react-map-gl";
import { ImOffice } from "react-icons/im";
import { MdProductionQuantityLimits } from "react-icons/md";
import "mapbox-gl/dist/mapbox-gl.css";

import { AppWrap, MotionWrap } from "../../wrapper";
import { variants } from "../../types";

const variants: variants = { x: [-150, 0], opacity: [0, 1] };

const Map: FunctionComponent = (): JSX.Element => (
    <AppWrap idName="map" classes="pt-0 lg:pt-[111px]">
        <MotionWrap variants={variants} duration={0.5} ease="easeInOut">
            <section className="flex justify-center items-center flex-col">
                <h1 className="text-4xl 2xl:text-6xl text-[#02040F] dark:text-[#E5DADA] capitalize transition-all ease-in-out duration-300 mb-8">
                    где нас найти
                </h1>

                <div className="flex justify-center items-center rounded-3xl p-2 bg-[#02040F] dark:bg-[#E5DADA] w-[350px] h-[550px] lg:w-[1000px] lg:h-[600px] 2xl:w-[1200px] 2xl:h-[1500px] border-4 border-[#02040F] dark:border-[#E5DADA] hover:border-[#E59500] dark:hover:border-[#E59500] transition-all ease-in-out duration-300">
                    <MapBox
                        initialViewState={{
                            latitude: 46.06547095880542,
                            longitude: 38.98408346705794,
                            zoom: 12.5,
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "1.5rem",
                        }}
                        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_TOKEN}
                        mapStyle="mapbox://styles/mapbox/streets-v11"
                    >
                        <Marker
                            latitude={46.073408}
                            longitude={38.995768}
                            color="#E59500"
                        >
                            <div className="flex justify-center items-center flex-col">
                                <ImOffice className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] fill-[#E59500] dark:fill-[#E59500] mb-3" />

                                <p className="text-sm lg:text-base 2xl:text-2xl text-[#02040F] uppercase font-bold">
                                    офис
                                </p>

                                <p className="text-sm lg:text-base 2xl:text-2xl text-[#02040F] font-medium">
                                    ул. Садовая 12
                                </p>
                            </div>
                        </Marker>

                        <Marker
                            latitude={46.058426}
                            longitude={38.984413}
                            color="#E59500"
                        >
                            <div className="flex justify-center items-center flex-col">
                                <MdProductionQuantityLimits className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] fill-[#E59500] dark:fill-[#E59500] mb-3" />

                                <p className="text-sm lg:text-base 2xl:text-2xl text-[#02040F] uppercase font-bold">
                                    склад
                                </p>

                                <p className="text-sm lg:text-base 2xl:text-2xl text-[#02040F] font-medium">
                                    ул. Длинная 240/1
                                </p>
                            </div>
                        </Marker>
                        <NavigationControl />
                    </MapBox>
                </div>
            </section>
        </MotionWrap>
    </AppWrap>
);

export default Map;
