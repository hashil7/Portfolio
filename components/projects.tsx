'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageGalleryModal } from './image-gallery-modal'

export function Projects() {
  const projects = [
    {
      title: "Pregnancy Wellness Companion",
      description: "A comprehensive nutritional guidance app for pregnant women, featuring personalized guidelines, exercise timers, food scanner, medical report analysis, digital diary with sentiment analysis, and an AI-powered chatbot.",
      technologies: ["Flutter", "Firebase", "Gemini AI", "Machine Learning"],
      link: "https://github.com/hashil7/Gestacare",
      image: "/images/gestacare/gestacare_logo.png",
      screenshots: [
        "/images/gestacare/login.jpg",
        "/images/gestacare/onboarding1.jpg",
        "/images/gestacare/onboarding2.jpg",
        "/images/gestacare/onboarding3.jpg",
        "/images/gestacare/signup.jpg"
      ],
      showScreenshots: false
    },
    {
      title: "Smart Parking App",
      description: "Developed a mobile application for finding free parking spots as part of the Smart Parking Project",
      technologies: ["Flutter", "Dart", "Firebase", "Figma"],
      link: "https://github.com/hashil7/Parking-App",
      image: "/images/park_app.jpg",
      screenshots: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800"
      ],
      showScreenshots: false
    },
    {
      title: "Human Activity Recognition (HAR) using Wifi signals",
      description: "Developed CNN models for HAR using CSI samples from Wimans Dataset",
      technologies: ["CNN", "Optuna", "Captum"],
      link: "#",
      image: "/images/har.png",
      screenshots: [
        "/placeholder.svg?height=600&width=800"
      ],
      showScreenshots: false
    },
    {
      title: "Image Caption Generator using LSTM and CNN",
      description: "Developed a model to generate captions for images and developed an endpint for the model using FastAPI",
      technologies: ["LSTM", "CNN", "VGG16", "FastAPI"],
      link: "https://github.com/hashil7/-Image-Caption-Generation",
      image: "/images/capgen.png",
      screenshots: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800"
      ],
      showScreenshots: false
    },
    {
      title: "Facial Emotion Detection Using CNN",
      description: "Developed a CNN model to detect facial emotions using the FER 2013 dataset",
      technologies: ["CNN", "TensorFlow", "Keras", "OpenCV"],
      link: "https://github.com/hashil7/Facial-Emotion-Detection",
      image: "/images/fer.png",
      screenshots: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800"
      ],
      showScreenshots: false
    },
    {
      title: "Photo-to-Painting Style Transfer using CycleGAN",
      description: "Implemented CycleGAN architecture to transform photographs into paintings and vice versa, focusing on Monet's art style for the training dataset.",
      technologies: ["Tensorflow", "Cycle GAN","Deep Learning","Computer Vision"],
      link: "https://github.com/hashil7/Painting-to-Photo-Generation",
      image: "/images/cyclegan.png",
      screenshots: [
        "/placeholder.svg?height=600&width=800"
      ],
      showScreenshots: false
    }
  ]

  return (
    <section id="projects" className="container py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="flex justify-center items-center h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.image.includes('har.png')||project.image.includes('capgen.png')
                    ||project.image.includes('fer.png')||project.image.includes('cyclegan.png')?300:100}
                  height={project.image.includes('har.png')?300:50}
                  objectFit="contain"
                  className="mx-auto block max-w-full max-h-full transition-transform duration-300 ease-in-out transform hover:scale-105 object-center"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                {project.showScreenshots && project.screenshots.length > 0 && (
                  <ImageGalleryModal images={project.screenshots} alt={project.title} />
                )}
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

