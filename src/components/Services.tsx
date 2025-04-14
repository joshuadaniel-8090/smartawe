import { motion } from "framer-motion";

const services = [
  "Custom Web & Mobile App Development",
  "Business Automation Solutions",
  "E-commerce Platforms",
  "API Integrations",
  "UI/UX Design & Branding",
];

export default function Services() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#111]" id="services">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold mb-10 text-blue-400"
      >
        Our Services
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-700 hover:border-green-400 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-medium text-white">{service}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
