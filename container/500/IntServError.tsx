import { FunctionComponent } from "react";
import { variants } from "../../types";

import { AppWrap, MotionWrap } from "../../wrapper";

const IntServError: FunctionComponent = (): JSX.Element => {
    const variants: variants = { y: [200, 0], opacity: [0, 1] };

    return (
        <AppWrap idName="500">
            <MotionWrap variants={variants} duration={0.5} ease="easeInOut">
                <h1 className="text-lg lg:text-2xl xl:text-4xl text-[#02040F] dark:text-[#E5DADA] cursor-default capitalize text-center">
                    <span className="text-lg lg:text-2xl xl:text-4xl text-[#E59500] dark:text-[#E59500]">
                        500
                    </span>{" "}
                    | внутренняя серверная ошибка
                </h1>
            </MotionWrap>
        </AppWrap>
    );
};

export default IntServError;
