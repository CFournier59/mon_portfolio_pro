import { Github, Linkedin, ArrowDown } from 'lucide-react'
// import clementLogo from '../../assets/clementdeveloppe.png'

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
         className="min-h-screen bg-cover bg-center bg-[url('/background.jpg')] flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 mt-8"
      >
         <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
               <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl mb-6">
                  Un projet, une idée ?<br />
                  On le{' '}
                  <span className="squarified text-6xl md:text-7xl lg:text-8xl">
                     D-vlop
                  </span>{' '}
                  ensemble
               </h1>

               <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
                  Je conçois des expériences numériques modernes, performantes
                  et accessibles. Avec une passion pour le code propre et les
                  interfaces intuitives, je transforme les idées en réalité
                  digitale.
               </p>

               <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                  <button
                     onClick={() => scrollToSection('projects')}
                     className="border border-blue px-8 py-3 bg-white/60 text-blue  hover:text-white hover:bg-blue transition-colors rounded-full font-semibold shadow-lg"
                  >
                     Voir mes projets
                  </button>
                  <button
                     onClick={() => scrollToSection('contact')}
                     className="border border-blue px-8 py-3 bg-white/60 text-blue  hover:text-white hover:bg-blue transition-colors rounded-full font-semibold shadow-lg"
                  >
                     Contactez-moi
                  </button>
               </div>

               <div className="flex items-center justify-center gap-6">
                  <a
                     href="https://github.com/CFournier59"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex flex-col items-center gap-2 text-pink hover:text-orange transition-colors"
                  >
                     <Github size={24} />
                     <p className="text-xs ">Github</p>
                  </a>
                  <a
                     href="https://www.linkedin.com/in/clément-fournier-38757b2bb/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex flex-col items-center gap-2 text-pink hover:text-orange transition-colors"
                  >
                     <Linkedin size={24} />
                     <p className="text-xs ">LinkedIn</p>
                  </a>
               </div>

               <button
                  onClick={() => scrollToSection('about')}
                  className="mt-16 animate-bounce text-pink hover:text-orange transition-colors"
                  aria-label="Scroll down to about section"
               >
                  <ArrowDown size={32} />
               </button>
            </div>
         </div>
      </section>
   )
}
