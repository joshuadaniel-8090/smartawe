import { motion } from 'framer-motion';

const projects = [
  { title: 'Inventory App for Retail', description: 'Automated stock tracking and alerts.' },
  { title: 'CRM for Local Businesses', description: 'Built-in analytics and client management.' },
  { title: 'Startup MVP Builder', description: 'From wireframes to launch in 2 months.' }
];

export default function PastServices() {
  return (
    <section className="py-20 px-6 md:px-20 max-w-6xl mx-auto" id="past">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-4xl font-semibold mb-10 text-green-400"
      >
        Past Services
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx} 
            className="bg-[#1b1b1b] p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition"
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.15 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
            <p className="text-gray-400">{proj.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}