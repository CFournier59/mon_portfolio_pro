import { CheckLine } from 'lucide-react'

const skillCategories = [
   {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
   },
   {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
   },
   {
      category: 'Outils de développement',
      skills: ['Git', 'Lighthouse & Wave', 'Figma', 'Visual Studio Code'],
   },
   {
      category: 'Certifications et savoir-faire',
      skills: [
         'Titre professionnel Développeur Web',
         'Google IT Support Specialist',
         'Méthodologie Agile',
         'Pratiques SEO',
      ],
   },
]

export default function Skills() {
   return (
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 gradient2">
         <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-blue text-3xl sm:text-4xl mb-4">
                     Compétences & Expertise
                  </h2>
                  <p className="text-lg text-dkblue max-w-2xl mx-auto">
                     Technologies et outils que j'utilise, pour donner vie à mes
                     projets.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  {skillCategories.map((category, categoryIndex) => (
                     <div
                        key={categoryIndex}
                        className={` border-1 border-ltblue p-6 rounded-lg shadow-lg`}
                     >
                        <h3 className={`text-xl mb-6 text-blue`}>
                           {category.category}
                        </h3>
                        <div className="space-y-4">
                           {category.skills.map((skill, skillIndex) => (
                              <div key={skillIndex}>
                                 <div className="flex justify-between mb-2">
                                    <span className="">{skill}</span>
                                    <CheckLine
                                       size={18}
                                       className={`text-dkblue ml-2`}
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
