"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StairAnimation = {
    initial: {
        top: "0",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculate the reverse index for the delay
const reverseIndex = (index) => {
    const totalSteps = 8;
    return totalSteps - index - 1;
};

const Stairs = () => {
    const pathname = usePathname();
    return (
        <>
            {/* render 6 motion divs, each for a stairs */}
            {[...Array(8)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={StairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-white relative"
                />
            ))}
        </>
    );
};

export default Stairs;
