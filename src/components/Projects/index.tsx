import kasaPicture from '../../assets/projects/kasa.png'
import ninaCarducciPicture from '../../assets/projects/nina_carducci.png'
import calculusPicture from '../../assets/projects/calculus.png'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
   {
      title: 'Création de site web',
      description:
         "Kasa est une ébauche d'un site de location d'appartements entre particuliers, offrant une interface conviviale. Projet réalisé lors de ma formation chez OpenClassrooms.",
      image: kasaPicture,
      tags: ['React+Vite', 'JavaScript', 'Sass'],
      liveUrl: 'https://cfournier59.github.io/Kasa/',
      githubUrl: 'https://github.com/CFournier59/Kasa.git',
   },
   {
      title: 'Debugging et Optimisation',
      description:
         "Les améliorations apportées au site de Nina Carducci ont permis d'augmenter la performance, l'accessibilité et le référencement, tout en corrigeant certains bugs. Projet réalisé lors de ma formation chez OpenClassrooms.",
      image: ninaCarducciPicture,
      tags: ['Jquery', 'Lighthouse/Wave', 'Google search console'],
      liveUrl: 'https://cfournier59.github.io/Nina-Carducci-Dev/',
      githubUrl: 'https://github.com/CFournier59/Nina-Carducci-Dev.git',
   },
   {
      title: 'Application web ludique',
      description:
         "Calculus est une application web ludique où l'utilisateur doit résoudre un maximum de calculs en 30 secondes. Il peut partager son score pour challenger ses amis. Projet perso réalisé pour sur mon temps libre.",
      image: calculusPicture,
      tags: ['Javascript', 'HTML', 'CSS'],
      liveUrl: 'https://cfournier59.github.io/Calculus/',
      githubUrl: 'https://github.com/CFournier59/Calculus.git',
   },
]

export default function Projects() {
   return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
         <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl mb-4">Projets récents</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                     Here are some of my recent projects that showcase my skills
                     and experience
                  </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                     <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                     >
                        <div className="relative h-48 overflow-hidden">
                           <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                           />
                        </div>
                        <div className="p-6">
                           <h3 className="text-xl mb-2">{project.title}</h3>
                           <p className="text-gray-600 mb-4">
                              {project.description}
                           </p>
                           <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map((tag, tagIndex) => (
                                 <span
                                    key={tagIndex}
                                    className="px-3 py-1 bg-light-color text-base-color rounded-full text-sm"
                                 >
                                    {tag}
                                 </span>
                              ))}
                           </div>
                           <div className="flex gap-4">
                              <a
                                 href={project.liveUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-2 text-base-color hover:text-base-hover-color transition-colors"
                              >
                                 <ExternalLink size={18} />
                                 Lien direct
                              </a>
                              <a
                                 href={project.githubUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors"
                              >
                                 <Github size={18} />
                                 Code
                              </a>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}
