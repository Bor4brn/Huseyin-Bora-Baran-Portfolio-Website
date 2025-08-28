"use client"
import { myShowCases } from '@/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { use } from 'react'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = use(params)
  const project = myShowCases.find(p => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-almost-black text-white">
      <div className="max-w-4xl mx-auto px-5 py-20">
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-light-gray-2 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-light-gray-2 mb-6">{project.description}</p>
            
            {/* Project Meta */}
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-dark-gray-3 px-3 py-1 rounded-full text-sm">{project.type}</span>
              <span className="bg-dark-gray-3 px-3 py-1 rounded-full text-sm">{project.theme} Theme</span>
              {project.link && (
                <Link 
                  href={`https://${project.link}`} 
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-very-dark-gray border border-dark-gray-3 px-4 py-2 rounded-lg hover:bg-dark-gray-4 transition-colors duration-300"
                >
                  <ExternalLink size={16} />
                  Visit Project
                </Link>
              )}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        {project.techStack && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-very-dark-gray border border-dark-gray-3 px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Highlights */}
        {project.highlights && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-very-dark-gray border border-dark-gray-3 p-4 rounded-lg"
                >
                  <p className="text-light-gray-2">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Detailed Description */}
        {project.detailedDescription && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Project Details</h2>
            <div className="bg-very-dark-gray border border-dark-gray-3 p-6 rounded-xl">
              <div className="prose prose-invert max-w-none">
                {project.detailedDescription.split('\n\n').map((paragraph, index) => (
                  <div key={index} className="mb-4">
                    {paragraph.startsWith('**') ? (
                      <div className="mb-4">
                        {paragraph.split('\n').map((line, lineIndex) => (
                          <div key={lineIndex} className="mb-2">
                            {line.startsWith('**') && line.endsWith('**') ? (
                              <h3 className="text-lg font-bold text-white mb-2">
                                {line.replace(/\*\*/g, '')}
                              </h3>
                            ) : line.startsWith('- ') ? (
                              <p className="text-light-gray-2 ml-4">• {line.substring(2)}</p>
                            ) : (
                              <p className="text-light-gray-2">{line}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-light-gray-2">{paragraph}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
