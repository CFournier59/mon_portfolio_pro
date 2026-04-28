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
         className="min-h-screen bg-black flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 mt-8"
      >
         <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
               <div className="mb-6 flex gap-5 md:gap-8 mx-auto w-fit">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="size-25 md:size-40"
                  >
                     <defs>
                        <radialGradient
                           id="myGradient"
                           cx="50%"
                           cy="50%"
                           r="70%"
                        >
                           <stop offset="30%" stopColor="rgba(253,101,0,1)" />
                           <stop offset="30%" stopColor="rgba(0,254,212,1)" />
                        </radialGradient>
                     </defs>

                     <path
                        fill="url(#myGradient)"
                        d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"
                     />
                  </svg>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="size-25 md:size-40"
                  >
                     <defs>
                        <radialGradient
                           id="myGradient"
                           cx="50%"
                           cy="50%"
                           r="70%"
                        >
                           <stop offset="30%" stopColor="rgba(253,101,0,1)" />
                           <stop offset="30%" stopColor="rgba(0,254,212,1)" />
                        </radialGradient>
                     </defs>

                     <path
                        fill="url(#myGradient)"
                        d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"
                     />
                  </svg>
               </div>

               <h1 className="text-yellow text-4xl sm:text-5xl lg:text-6xl mb-6">
                  Un projet, une idée ?<br />
                  <span className="text-orange">Clément </span>
                  <span className="text-turquoise">Développe</span>
               </h1>

               <h2 className="text-green text-2xl sm:text-3xl lg:text-4xl text-text1 mb-8">
                  Développeur Web
               </h2>

               <p className="text-lg text-yellow mb-10 max-w-2xl mx-auto">
                  Je conçois des expériences numériques modernes, performantes
                  et accessibles. Avec une passion pour le code propre et les
                  interfaces intuitives, je transforme les idées en réalité
                  digitale.
               </p>

               <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                  <button
                     onClick={() => scrollToSection('projects')}
                     className="border-1 border-pink px-8 py-3 bg-primary text-pink  hover:text-orange hover:border-orange transition-colors"
                  >
                     Voir mes projets
                  </button>
                  <button
                     onClick={() => scrollToSection('contact')}
                     className="px-8 py-3 border-1 border-pink bg-secondary text-pink  hover:text-orange hover:border-orange transition-colors"
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
