import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../Components/Sidebar/Sidebar";

const Root = () => {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 1800);

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div className="min-h-screen text-white flex">

            {/* <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            scale: 1.03,
                            transition: {
                                duration: 0.6,
                                ease: [0.76, 0, 0.24, 1],
                            },
                        }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
                    >
                        <div className="w-full max-w-md px-6">

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeOut",
                                }}
                                className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl"
                            >
                                <span className="text-2xl font-semibold tracking-tight">
                                    NH
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.6,
                                }}
                                className="text-center text-2xl font-semibold tracking-tight"
                            >
                                Nushrath Hussain
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.45,
                                    duration: 0.6,
                                }}
                                className="mt-2 text-center text-sm uppercase tracking-[0.3em] text-white/40"
                            >
                                Software Engineer
                            </motion.p>

                            <div className="mt-12">

                                <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-widest text-white/30">
                                    <span>Initializing</span>
                                    <span>100%</span>
                                </div>

                                <div className="h-[2px] w-full overflow-hidden bg-white/10">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{
                                            duration: 1.4,
                                            ease: "easeInOut",
                                        }}
                                        className="h-full bg-white"
                                    />
                                </div>

                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="mt-4 text-center font-mono text-[10px] tracking-widest text-white/20"
                            >
                                BUILDING • LEARNING • EVOLVING
                            </motion.p>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence> */}
            <Sidebar/>
            {/* Main Portfolio */}
            <main className="flex-1">
                <Outlet />
            </main>

        </div>
    );
};

export default Root;