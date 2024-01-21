'use client'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Pill } from '@/components/pill'
import { ChangeEvent, useState } from 'react'

const skills = [
  'Redux',
  'SQL',
  'Typescript',
  'Javascript',
  'React',
  'React Native',
  'Expo',
  'Azure Data Studio',
  'Jetbrains Rider',
  'C#',
  'Dapper',
  'Entity Framework Core',
  'ASP.NET Core Web API',
  'SQL Server on Azure VM',
  'Babel',
  'JWT Authentication',
  'Atlassian',
  'Scrum',
  'Swagger UI',
  'Postman',
  'Swift',
  'MongoDB',
  'Supabase',
  'Firebase',
  'RelationalDB',
  'Jest',
  'Azure DevOps',
  'Git',
  'Mobile Development',
  'HTML',
  'SCSS',
  'SASS',
  'CSS',
  'NodeJs',
  'Webpack',
  'NX',
  'Docker',
  'RestAPI',
  'PostGres',
  'Docker',
  'Figma',
  'MVC',
  'Object-Oriented Programming',
  'Tailwind',
  'Vue',
]

const certifications = [
  'C# .NET Core 7 with MS SQL',
  'Ultimate ASP.NET Core Web API Development Guide',
  'Complete C# Programming Course',
  'DOTNET 7 Web API & Entity Framework Jumpstart',
  'iOS, Swift & SwiftUI - Complete iOS App Development',
  'JavaScript: The Advanced Concepts',
  'Understanding TypeScript',
  'React - The Complete Guide 2024 (incl. React Router & Redux)',
  'Next.js 14 & React - The Complete Guide',
]

export default function Uses() {
  const [query, setQuery] = useState<string>('')

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setQuery(e.target.value)
  }

  return (
    <SimpleLayout
      title="Techstack I currently use and recent certifications."
      intro="Here is a list of the most recent certifications that I've recieved and an ongrowing techstack and tools list. I'm always motivated to learn new things and play around with the latest tools in software development."
    >
      <div className="flex flex-col space-y-8">
        <header className="bg:text-gray-800 text-xl  font-semibold text-gray-500">
          Techstack and Tools
        </header>
        <div className="flex flex-col space-y-6">
          <input
            onChange={onChange}
            value={query}
            placeholder="Search..."
            type="text"
            className="min-h-14 rounded-2xl bg-gray-50 px-3 py-3 text-xs focus:outline-none dark:bg-zinc-800"
          />
          <div className="flex flex-wrap space-x-1.5">
            {skills.map((skill, i) => (
              <Pill skill={skill} key={i} query={query} />
            ))}
          </div>
        </div>
        <header className="bg:text-gray-800 text-xl  font-semibold text-gray-500">
          Certifications
        </header>
        <div className="flex flex-wrap space-x-1.5">
          {certifications.map((cert, i) => (
            <Pill.Cert cert={cert} key={i} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
