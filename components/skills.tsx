'use client'

import { motion } from 'framer-motion'

export function Skills() {
  const skills = [
    { name: "C/C++", icon: "🖥️" },
    { name: "Python", icon: "🐍" },
    { name: "HTML/CSS", icon: "🌐" },
    { name: "Flutter/Dart", icon: "📱" },
    { name: "App Development", icon: "📲" },
    { name: "Data Structures", icon: "🏗️" },
    { name: "Algorithms", icon: "🧮" },
    { name: "Firebase", icon: "🔥" },
    { name: "Jupyter Notebook", icon: "📓" },
    { name: "Matlab", icon: "📊" },
    { name: "PyTorch", icon: "🔥" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "OpenCV", icon: "👁️" },
    { name: "NumPy", icon: "🔢" },
    { name: "SQL", icon: "🗃️" },
    { name: "NLP", icon: "🗣️" }
  ]

  return (
    <section id="skills" className="container py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <span className="text-4xl mb-2">{skill.icon}</span>
            <span className="text-lg font-medium text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

