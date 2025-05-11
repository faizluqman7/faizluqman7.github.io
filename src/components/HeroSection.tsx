import { useState } from 'react';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
    const [typingDone, setTypingDone] = useState(false);

    return (
        <motion.section
            className="section d-flex flex-column justify-content-center align-items-center text-center"
            style={{ height: "100vh" }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <motion.h2 className="mb-3" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                👋 Hi, I am
            </motion.h2>

            <motion.h1 className="display-4 fw-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                <Typewriter
                    words={['Faiz Luqman']}
                    cursor
                    cursorStyle="|"
                    typeSpeed={150}          // slower typing
                    deleteSpeed={50}
                    delaySpeed={2000}
                    onType={() => setTypingDone(true)}
                />
            </motion.h1>

            {typingDone && (
                <motion.p
                    className="lead"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.25 }}
                >
                    Computer Science Student | Aspiring Software Engineer
                </motion.p>
            )}

            {typingDone && (<motion.p
                className="scroll-down-arrow position-absolute bottom-0 mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
            >
                ⬇️ scroll down :D ⬇️
            </motion.p>
            )}


        </motion.section>
    );
};

export default HeroSection;