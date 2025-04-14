import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-6 md:px-20 max-w-5xl mx-auto" id="about">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold mb-6 text-green-400"
      >
        About Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg leading-8 text-gray-300"
      >
        At SmartAwe, we trust in digital technology as a platform for businesses
        to reach both the local and global markets. We provide software
        development and automation solutions for small businesses, innovative
        startups and big brands. With a smart strategy, design, development and
        beyond, we love to work together with our clients as a long-term digital
        partner. We love the growth of our clients as we love the web.
      </motion.p>
    </section>
  );
}
