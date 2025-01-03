'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Intern",
      company: "Centre of Excellence in Artificial Intelligence, NIT Calicut",
      duration: "May 2024 - Sept 2024",
      description: [
        "Developed a mobile application for finding free parking spots as part of the Smart Parking Project",
        "Designed the UI with figma, implemented the frontend using Flutter and backend with Firebase",
        "Managed the data using NoSQL Cloud Firestore and Realtime Database in Firebase"
      ]
    },
    {
      title: "Inventor",
      company: "Maker Bhavan - Invention Factory Summer Programme, IIT Gandhinagar",
      duration: "June 2023 - July 2023",
      description: [
        "Invented, designed, and filed a provisional patent for a mechanical dust collecting chalkboard eraser",
        "Gained hands-on experience with 3D printers, CNC laser cutting machine, and Laser CAD",
        "Learned to identify real-world problems and develop solutions",
        "Learned about patent laws and how to draft a provisional patent application"
      ]
    }
  ]

  return (
    <section id="experience" className="container py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{exp.title} at {exp.company}</CardTitle>
                <CardDescription>{exp.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

