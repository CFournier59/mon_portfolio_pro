import kasaPicture from '../../assets/projects/kasa.webp'
import ninaCarducciPicture from '../../assets/projects/nina_carducci.webp'
import tmcPicture from '../../assets/projects/tmc.webp'
import emmaPicture from '../../assets/projects/emma_imberlin.webp'
import { ExternalLink, Github, Atom, CodeXml, TowerControl } from 'lucide-react'
import jsIcon from '../../assets/logos/jsicon.webp'
import tsIcon from '../../assets/logos/tsicon.webp'
import sassIcon from '../../assets/logos/sassicon.svg'
import tailwindIcon from '../../assets/logos/tailwindicon.svg'
import jqueryIcon from '../../assets/logos/jqueryicon.png'
import googleIcon from '../../assets/logos/googleicon.svg'
import type { Project } from './types'

const projects: Project[] = [
   {
      title: 'Emma Imberlin, psychologue clinicienne',
      description:
         'Le design et la charte graphique du site ont été pensés autour du logo fourni par Emma. Grâce à une interface intuitive et épurée sur tous les supports, les utilisateurs peuvent réserver une consultation directement via une API de google intégrée au site. ',
      image: { src: emmaPicture, alt: 'Aperçu du projet Emma Imberlin' },
      tags: [
         { text: 'React', icon: Atom, type: 'component' },
         { text: 'TypeScript', icon: tsIcon, type: 'image' },
         { text: 'Tailwind CSS', icon: tailwindIcon, type: 'image' },
      ],
      liveUrl: 'https://emma-psy.com',
      githubUrl: 'on demand',
   },
   {
      title: 'Site vitrine et stratégie SEO',
      description:
         "L'entrepise de maçonnerie et rénovation TMC Rénov'a fait appel à mes services pour la création de son site web avec un développement orienté SEO. Résultat: un référencement local boosté pour se démarquer des concurrents et une image professionnelle affirmée.",
      image: { src: tmcPicture, alt: "Aperçu du projet TMC Rénov'" },
      tags: [
         { text: 'JavaScript', icon: jsIcon, type: 'image' },
         { text: 'HTML', icon: CodeXml, type: 'component' },
         { text: 'Tailwind CSS', icon: tailwindIcon, type: 'image' },
      ],
      liveUrl: 'https://www.tmcrenov.com',
      githubUrl: 'on demand',
   },
   {
      title: "Création d'application web",
      description:
         "Kasa est une ébauche d'un site de location d'appartements entre particuliers, offrant une interface conviviale. Projet réalisé lors de ma formation chez OpenClassrooms.",
      image: { src: kasaPicture, alt: 'Aperçu du projet Kasa' },
      tags: [
         { text: 'React', icon: Atom, type: 'component' },
         { text: 'JavaScript', icon: jsIcon, type: 'image' },
         { text: 'Sass', icon: sassIcon, type: 'image' },
      ],
      liveUrl: 'https://cfournier59.github.io/Kasa/',
      githubUrl: 'https://github.com/CFournier59/Kasa.git',
   },
   {
      title: 'Debugging et Optimisation',
      description:
         "Les améliorations apportées au site de Nina Carducci ont permis d'augmenter la performance, l'accessibilité et le référencement, tout en corrigeant certains bugs. Projet réalisé lors de ma formation chez OpenClassrooms.",
      image: {
         src: ninaCarducciPicture,
         alt: 'Aperçu du projet Nina Carducci',
      },
      tags: [
         { text: 'JQuery', icon: jqueryIcon, type: 'image' },
         { text: 'Lighthouse/Wave', icon: TowerControl, type: 'component' },
         { text: 'Google Search Console', icon: googleIcon, type: 'image' },
      ],
      liveUrl: 'https://cfournier59.github.io/Nina-Carducci-Dev/',
      githubUrl: 'https://github.com/CFournier59/Nina-Carducci-Dev.git',
   },
]

export default function Projects() {
   const scrollToSection = (id: string) => {
      const element = document.getElementById(id)
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' })
      }
   }

   return (
      <section id="projects" className="gradient1 py-20 px-4 sm:px-6 lg:px-8">
         <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-ltblue text-3xl sm:text-4xl mb-4">
                     Projets récents
                  </h2>
                  <p className="text-white text-lg max-w-2xl mx-auto">
                     Voici quelques-uns de mes projets récents, mettant en avant
                     mes compétences en développement web et ma capacité à créer
                     des applications fonctionnelles et esthétiques.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                     <div
                        key={index}
                        className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-md h-full flex flex-col"
                     >
                        <div className="relative h-55 p-4">
                           <img
                              src={project.image.src}
                              alt={project.image.alt}
                              className="w-full h-full object-cover rounded-md"
                           />
                        </div>
                        <div className=" p-6 flex flex-col justify-between flex-1">
                           <div>
                              <h3 className="text-blue text-xl mb-2">
                                 {project.title}
                              </h3>
                              <p className=" mb-4">{project.description}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                 {project.tags.map((tag, tagIndex) => {
                                    return (
                                       <span
                                          key={tagIndex}
                                          className="border border-ltblue px-3 py-1 text-dkblue rounded-md text-sm flex items-center gap-1"
                                       >
                                          {tag.type === 'component' ? (
                                             <tag.icon size={16} />
                                          ) : (
                                             <img
                                                src={tag.icon}
                                                alt=""
                                                className="w-4 h-4"
                                             />
                                          )}
                                          {tag.text}
                                       </span>
                                    )
                                 })}
                              </div>
                           </div>

                           <div className="flex justify-center gap-2 md:gap-4">
                              <a
                                 href={project.liveUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex gap-1 px-5 py-3 bg-ltblue/60 text-dkblue  hover:text-white hover:bg-dkblue transition-colors rounded-full font-semibold shadow-lg"
                              >
                                 <ExternalLink size={18} />
                                 Lien direct
                              </a>
                              <a
                                 href={project.githubUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex gap-1 px-8 py-3 bg-ltblue/60 text-dkblue  hover:text-white hover:bg-dkblue transition-colors rounded-full font-semibold shadow-lg"
                                 onClick={
                                    project.githubUrl === 'on demand'
                                       ? (e) => {
                                            e.preventDefault()
                                            scrollToSection('contact')
                                         }
                                       : undefined
                                 }
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
