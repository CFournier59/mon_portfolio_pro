import { Github, Linkedin, ArrowDown } from 'lucide-react'
// import profilePic from '../../assets/moi.jpg'
import clementLogo from '../../assets/clementdeveloppe.png'

export default function Intro() {
   const scrollToSection = (id: string) => {
      const element = document.getElementById(id)
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' })
      }
   }

   return (
      <section
         id="home"
         className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 mt-8"
      >
         <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
               <div className="mb-6">
                  <img
                     src={clementLogo}
                     alt="Clément Fournier"
                     className="w-48 h-48 md:w-64 md:h-64 mx-auto"
                  />
               </div>

               <h1 className="text-4xl sm:text-5xl text-gray-600 lg:text-6xl mb-6">
                  Un projet, une idée ?<br></br>
                  <span className="text-base-color">Clément </span>
                  <span className="text-black">Développe</span>
               </h1>

               <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 mb-8">
                  Développeur Web
               </h2>

               <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                  Je conçois des expériences numériques modernes, performantes
                  et accessibles. Avec une passion pour le code propre et les
                  interfaces intuitives, je transforme les idées en réalité
                  digitale.
               </p>

               <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                  <button
                     onClick={() => scrollToSection('projects')}
                     className="px-8 py-3 bg-base-color text-white rounded-lg hover:bg-base-hover-color transition-colors"
                  >
                     Voir mes projets
                  </button>
                  <button
                     onClick={() => scrollToSection('contact')}
                     className="px-8 py-3 border-2 border-base-color text-base-color rounded-lg hover:bg-light-color transition-colors"
                  >
                     Contactez-moi
                  </button>
               </div>

               <div className="flex items-center justify-center gap-6">
                  <a
                     href="https://github.com/CFournier59"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex flex-col items-center gap-2 text-gray-600 hover:text-base-color transition-colors"
                  >
                     <Github size={24} />
                     <p className="text-xs ">Github</p>
                  </a>
                  <a
                     href="https://www.linkedin.com/in/clément-fournier-38757b2bb/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex flex-col items-center gap-2 text-gray-600 hover:text-base-color transition-colors"
                  >
                     <Linkedin size={24} />
                     <p className="text-xs ">LinkedIn</p>
                  </a>
               </div>

               <button
                  onClick={() => scrollToSection('about')}
                  className="mt-16 animate-bounce text-gray-400 hover:text-base-color transition-colors"
                  aria-label="Scroll down to about section"
               >
                  <ArrowDown size={32} />
               </button>
            </div>
         </div>
      </section>
   )
}
