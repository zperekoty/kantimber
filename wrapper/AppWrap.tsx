import { FunctionComponent } from "react";

import { appWrapProps } from "../types";

const AppWrap: FunctionComponent<appWrapProps> = ({
    children,
    idName,
    classes,
}): JSX.Element => (
    <div
        id={idName}
        className={`w-full flex flex-row ${classes ? classes : ""}`}
        style={{ minHeight: "100vh" }}
    >
        <div className="flex-1 flex-col w-full pt-16 px-4 pb-8 md:py-16 md:px-8 flex justify-center items-center">
            {children}
        </div>
    </div>
);

export default AppWrap;
