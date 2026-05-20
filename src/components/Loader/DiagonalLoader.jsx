import React from 'react';
import { motion } from 'framer-motion';
import './DiagonalLoader.css';

const DiagonalLoader = () => {
    return (
        <div className="fixed inset-0 z-[99999] pointer-events-none flex flex-col">
            {/* Container for the strips */}
            <div className="absolute inset-0 flex overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="relative h-full bg-slate-900"
                        style={{ width: '20%' }}
                        initial={{ y: 0 }}
                        exit={{
                            y: '-100%',
                            transition: {
                                duration: 0.8,
                                ease: [0.76, 0, 0.24, 1],
                                delay: i * 0.1
                            }
                        }}
                    />
                ))}
            </div>

            {/* Modern Loading Animation */}
            <motion.div
                className="fixed inset-0 flex items-center justify-center z-[10000]"
                initial={{ opacity: 1 }}
                exit={{
                    opacity: 0,
                    transition: { duration: 0.4 }
                }}
            >
                <div className="loader">
                    <div className="text"><span>Loading</span></div>
                    <div className="text"><span>Loading</span></div>
                    <div className="text"><span>Loading</span></div>
                    <div className="text"><span>Loading</span></div>
                    <div className="text"><span>Loading</span></div>
                    <div className="text"><span>Loading</span></div>
                    <div className="text"><span>Loading</span></div>
                    <div className="text"><span>Loading</span></div>
                    <div className="text"><span>Loading</span></div>
                    <div className="line"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default DiagonalLoader;
