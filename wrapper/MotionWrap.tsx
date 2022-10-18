import { FunctionComponent } from "react";
import { motion } from "framer-motion";

import { motionWrapProps } from "../types";

const MotionWrap: FunctionComponent<motionWrapProps> = ({
    children,
    classes,
    variants,
    duration,
    ease,
}): JSX.Element => (
    <motion.div
        whileInView={variants}
        transition={{ duration, ease }}
        className={`flex justify-center items-center opacity-0 ${
            classes ? classes : ""
        }`}
    >
        {children}
    </motion.div>
);

export default MotionWrap;
