"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DATA } from "@/data/resume"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Linkedin, Mail, Phone, Printer } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"

export default function ResumeComponent() {
  const componentRef = useRef(null)

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <Card className="w-full max-w-4xl mx-auto p-8 bg-white relative" ref={componentRef}>
      <Button 
        onClick={handlePrint} 
        variant="outline" 
        size="sm" 
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 print:hidden"
      >
        <Printer className="w-4 h-4 mr-2" />
        Print / Download PDF
      </Button>

      <CardContent className="p-0">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold mb-1 text-gray-900">{DATA.name}</h1>
          <Link href={DATA.url} className="text-lg text-blue-700 hover:text-blue-900 hover:underline">
            {DATA.url.replace('https://', '')}
          </Link>
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <div className="text-left">
            <Link href={`mailto:${DATA.contact.email}`} className="flex items-center text-sm text-black hover:text-blue-900 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              {DATA.contact.email}
            </Link>
            <p className="flex items-center text-sm mt-1 text-gray-800">
              <Phone className="w-4 h-4 mr-2" />
              {DATA.contact.tel}
            </p>
          </div>
          <div className="text-right">
            <Link href={DATA.contact.social.GitHub.url} className="flex items-center justify-end text-sm text-black hover:text-blue-900 transition-colors">
              <GitHubLogoIcon className="w-4 h-4 mr-2" />
              {DATA.contact.social.GitHub.name}
            </Link>
            <Link href={DATA.contact.social.LinkedIn.url} className="flex items-center justify-end text-sm mt-1 text-black hover:text-blue-900 transition-colors">
              <Linkedin className="w-4 h-4 mr-2" />
              {DATA.contact.social.LinkedIn.name}
            </Link>
          </div>
        </div>

        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b-2 border-gray-400 pb-1 mb-2 text-gray-900">Education</h2>
          {DATA.education.map((edu) => (
            <div key={edu.school} className="mb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-sm text-gray-800">{edu.school}</h3>
                  <p className="text-sm text-gray-700">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-700">{edu.start} – {edu.end}</p>
                  <p className="text-sm text-gray-600">Limassol, Cyprus</p>
                </div>
              </div>
              {/* <p className="text-sm text-gray-700 mt-4">
                {edu.description}
              </p> */}
            </div>
          ))}
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b-2 border-gray-400 pb-1 mb-2 text-gray-900">Technical Skills</h2>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Languages: JavaScript, TypeScript, Python, HTML, CSS, SQL</li>
            <li>Frameworks and Libraries: React.js, Next.js, Node.js, Express.js, TailwindCSS</li>
            <li>Tools: Git, GitHub, AWS (S3)</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b-2 border-gray-400 pb-1 mb-3 text-gray-900">Projects</h2>
          {DATA.projects.map((project) => (
            <div key={project.title} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-semibold text-gray-800">{project.title}</h3>
                <span className="text-sm text-gray-600">{project.dates}</span>
              </div>
              <div className="flex gap-2 text-sm mb-1">
                {!project.isPrivate && project.href && (
                  <Link 
                    href={project.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-700 hover:underline"
                  >
                    View Project
                  </Link>
                )}
                {!project.isPrivate && project.github && (
                  <Link 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-700 hover:underline"
                  >
                    GitHub Repo
                  </Link>
                )}
                {/* {project.isPrivate && (
                  <span className="text-gray-600">(Private Project)</span>
                )} */}
              </div>
              <p className="text-sm text-gray-700 mb-2">{project.description}</p>
              <div className="text-sm">
                <span className="font-semibold text-gray-700">Technologies: </span>
                <span className="text-gray-700">{project.technologies.join(', ')}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-400 pb-1 mb-3 text-gray-900">Employment</h2>
          {DATA.work.map((job) => (
            <div key={job.company} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-800">{job.title}</h3>
                <p className="text-sm text-gray-700">{job.start} – {job.end || "Present"}</p>
              </div>
              <p className="text-sm font-medium text-gray-800 mb-1">{job.company} - {job.location}</p>
              <ul className="list-disc pl-3 text-sm text-gray-700">
                {job.description.split('. ').map((item, index) => (
                  <li key={index} className="mb-1">{item.trim()}.</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* New Activities section */}
        <section>
          <h2 className="text-xl font-semibold border-b-2 border-gray-400 pb-1 mb-2 text-gray-900">Activities & Interests</h2>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Currently learning Three.js to enhance my 3D graphics skills in web development.</li>
          </ul>
        </section>

      </CardContent>
    </Card>
  )
}