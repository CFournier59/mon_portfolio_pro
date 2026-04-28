import { Github, Linkedin, Heart } from 'lucide-react'

export default function Footer() {
   const currentYear = new Date().getFullYear()

   return (
      <footer className="border-t border-yellow bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
         <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
               <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                     <h3 className="text-turquoise text-xl mb-4">
                        <span className="text-orange">Clément</span> Développe
                     </h3>
                     <p className="">
                        Conçoit et développe des solutions numériques modernes,
                        performantes et accessibles.
                     </p>
                  </div>

                  <div>
                     <h3 className="text-lg mb-4">Navigation</h3>
                     <ul className="space-y-2 text-pink">
                        <li>
                           <a
                              href="#home"
                              className=" hover:text-orange transition-colors"
                           >
                              Accueil
                           </a>
                        </li>
                        <li>
                           <a
                              href="#about"
                              className=" hover:text-orange transition-colors"
                           >
                              À propos
                           </a>
                        </li>
                        <li>
                           <a
                              href="#projects"
                              className=" hover:text-orange transition-colors"
                           >
                              Projets
                           </a>
                        </li>
                        <li>
                           <a
                              href="#contact"
                              className=" hover:text-orange transition-colors"
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
                           className=" w-15 flex flex-col items-center gap-2 p-2 text-pink hover:text-orange transition-colors"
                        >
                           <Github size={20} />
                           <p className="text-xs ">Github</p>
                        </a>
                        <a
                           href="https://www.linkedin.com/in/clément-fournier-38757b2bb/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className=" w-15 flex flex-col items-center gap-2 p-2 text-pink hover:text-orange transition-colors"
                        >
                           <Linkedin size={20} />
                           <p className="text-xs ">LinkedIn</p>
                        </a>
                     </div>
                  </div>
               </div>

               <div className="border-t border-black pt-8 text-center ">
                  <p className="flex items-center justify-center gap-2">
                     © {currentYear} Clément Développe. Tous droits réservés.
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
