import { Github, Linkedin, Heart } from 'lucide-react'

export default function Footer() {
   const currentYear = new Date().getFullYear()

   return (
      <footer className=" bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
         <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
               <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                     <p className="squarified text-5xl">D-vlop</p>
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
                              className=" hover:text-white text-white/80 transition-colors"
                           >
                              Accueil
                           </a>
                        </li>
                        <li>
                           <a
                              href="#about"
                              className=" hover:text-white text-white/80 transition-colors"
                           >
                              À propos
                           </a>
                        </li>

                        <li>
                           <a
                              href="#projects"
                              className=" hover:text-white text-white/80 transition-colors"
                           >
                              Projets
                           </a>
                        </li>
                        <li>
                           <a
                              href="#prices"
                              className=" hover:text-white text-white/80 transition-colors"
                           >
                              Tarifs
                           </a>
                        </li>
                        <li>
                           <a
                              href="#contact"
                              className=" hover:text-white text-white/80 transition-colors"
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
                           className="size-18 flex flex-col justify-center items-center gap-1 bg-white/60 text-dkblue hover:text-white hover:bg-dkblue rounded-full transition-colors shadow-lg"
                        >
                           <Github size={20} />
                           <p className="text-xs ">Github</p>
                        </a>
                        <a
                           href="https://www.linkedin.com/in/clément-fournier-38757b2bb/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="size-18 flex flex-col justify-center items-center gap-1 bg-white/60 text-dkblue hover:text-white hover:bg-dkblue rounded-full transition-colors shadow-lg"
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
