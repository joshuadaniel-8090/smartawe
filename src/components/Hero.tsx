import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4" id="home">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
      >
        Welcome to SmartAwe
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }} 
        className="mt-6 text-lg md:text-xl max-w-xl"
      >
        Your digital partner for software development and business automation.
      </motion.p>
    </section>
  );
}
