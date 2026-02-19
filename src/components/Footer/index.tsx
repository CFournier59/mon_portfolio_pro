import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
   const currentYear = new Date().getFullYear()

   return (
      <footer className="bg-dark-color text-white py-12 px-4 sm:px-6 lg:px-8">
         <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
               <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                     <h3 className="text-xl mb-4">Clément Fournier</h3>
                     <p className="text-gray-300">
                        Conçoit et développe des solutions numériques modernes,
                        performantes et accessibles.
                     </p>
                  </div>

                  <div>
                     <h3 className="text-lg mb-4">Navigation</h3>
                     <ul className="space-y-2">
                        <li>
                           <a
                              href="#home"
                              className="text-gray-300 hover:text-base-color transition-colors"
                           >
                              Accueil
                           </a>
                        </li>
                        <li>
                           <a
                              href="#about"
                              className="text-gray-300 hover:text-base-color transition-colors"
                           >
                              À propos
                           </a>
                        </li>
                        <li>
                           <a
                              href="#projects"
                              className="text-gray-300 hover:text-base-color transition-colors"
                           >
                              Projets
                           </a>
                        </li>
                        <li>
                           <a
                              href="#contact"
                              className="text-gray-300 hover:text-base-color transition-colors"
                           >
                              Contact
                           </a>
                        </li>
                     </ul>
                  </div>

                  <div>
                     <h3 className="text-lg mb-4">Réseaux</h3>
                     <div className="flex gap-4">
                        <a
                           href="https://github.com/CFournier59"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="p-2 bg-black rounded-lg hover:bg-base-color transition-colors"
                        >
                           <Github size={20} />
                        </a>
                        <a
                           href="https://www.linkedin.com/in/clément-fournier-38757b2bb/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="p-2 bg-black rounded-lg hover:bg-base-color transition-colors"
                        >
                           <Linkedin size={20} />
                        </a>
                        <a
                           href="mailto:clementfournier.c@gmail.com"
                           className="p-2 bg-black rounded-lg hover:bg-base-color transition-colors"
                        >
                           <Mail size={20} />
                        </a>
                     </div>
                  </div>
               </div>

               <div className="border-t border-black pt-8 text-center text-gray-300">
                  <p className="flex items-center justify-center gap-2">
                     © {currentYear} Clément Fournier. Tous droits réservés.
                  </p>
                  <p className="flex items-center justify-center gap-2">
                     Fait avec{' '}
                     <Heart
                        size={16}
                        className="text-red-500"
                        fill="currentColor"
                     />{' '}
                     et beaucoup de café.
                  </p>
               </div>
            </div>
         </div>
      </footer>
   )
}
