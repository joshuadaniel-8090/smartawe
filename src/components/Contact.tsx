import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-20" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold mb-6 text-blue-400"
      >
        Contact Us
      </motion.h2>
      <form className="max-w-3xl mx-auto grid gap-6">
        <input
          type="text"
          placeholder="Name"
          className="bg-[#1e1e1e] p-4 rounded text-white border border-gray-600 focus:border-green-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-[#1e1e1e] p-4 rounded text-white border border-gray-600 focus:border-green-500"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="bg-[#1e1e1e] p-4 rounded text-white border border-gray-600 focus:border-green-500"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
