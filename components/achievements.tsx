'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Achievements() {
  const achievements = [
    {
      title: "IndiaAI Fellowship",
      description: "Received fellowship of Rupees 1 lakh for AI Project."
    },
    {
      title: "Provisional Patent Application",
      description: "Filed a PPA in India and in the US for Dust Collecting Chalkboard Eraser."
    },
    {
      title: "Google Cloud Skill Badge",
      description: "Developed GenAI Apps with Gemini and Streamlit"
    }
  ]

  return (
    <section id="achievements" className="container py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{achievement.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

