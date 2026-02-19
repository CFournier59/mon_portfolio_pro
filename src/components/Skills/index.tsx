import { CheckLine } from 'lucide-react'

const skillCategories = [
   {
      category: 'Frontend',
      skills: [
         { name: 'React' },
         { name: 'TypeScript' },
         { name: 'JavaScript' },
         { name: 'HTML/CSS' },
         { name: 'Tailwind CSS' },
      ],
   },
   {
      category: 'Backend',
      skills: [
         { name: 'Node.js' },
         { name: 'Express' },
         { name: 'MongoDB' },
         { name: 'REST APIs' },
      ],
   },
   {
      category: 'Outils de développement',
      skills: [
         { name: 'Git' },
         { name: 'Lighthouse & Wave' },
         { name: 'Figma' },
         { name: 'Visual Studio Code' },
      ],
   },
   {
      category: 'Certifications et savoir-faire',
      skills: [
         { name: 'Titre professionnel Développeur Web' },
         { name: 'Google IT Support Specialist' },
         { name: 'Méthodologie Agile' },
         { name: 'Pratiques SEO' },
      ],
   },
]

export default function Skills() {
   return (
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
         <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl mb-4">
                     Compétences & Expertise
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                     Technologies et outils que j'utilise, pour donner vie à mes
                     projets.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  {skillCategories.map((category, categoryIndex) => (
                     <div
                        key={categoryIndex}
                        className="bg-white p-6 rounded-lg shadow-md"
                     >
                        <h3 className="text-xl mb-6 text-base-color">
                           {category.category}
                        </h3>
                        <div className="space-y-4">
                           {category.skills.map((skill, skillIndex) => (
                              <div key={skillIndex}>
                                 <div className="flex justify-between mb-2">
                                    <span className="text-gray-700">
                                       {skill.name}
                                    </span>
                                    <CheckLine
                                       size={18}
                                       className="text-base-color ml-2"
                                    />
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}
