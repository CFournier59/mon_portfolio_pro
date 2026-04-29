import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

   const scrollToSection = (id: string) => {
      const element = document.getElementById(id)
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' })
         setMobileMenuOpen(false)
      }
   }

   return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-yellow">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               <div
                  className="flex justify between items-center cursor-pointer"
                  onClick={() => scrollToSection('home')}
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="size-11"
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
                  <p className="text-xl font-semibold text-turquoise w-full text-center">
                     <span className="text-orange">Clément</span> Développe
                  </p>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="size-11"
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

               {/* Desktop Navigation */}
               <nav className="hidden md:flex items-center gap-8 ml-4">
                  <button
                     onClick={() => scrollToSection('home')}
                     className="text-pink hover:text-orange transition-colors cursor-pointer"
                  >
                     Accueil
                  </button>
                  <button
                     onClick={() => scrollToSection('about')}
                     className="text-pink hover:text-orange transition-colors cursor-pointer"
                  >
                     À propos
                  </button>
                  <button
                     onClick={() => scrollToSection('projects')}
                     className="text-pink hover:text-orange transition-colors cursor-pointer"
                  >
                     Projets
                  </button>
                  <button
                     onClick={() => scrollToSection('skills')}
                     className="text-pink hover:text-orange transition-colors cursor-pointer"
                  >
                     Compétences
                  </button>
                  <button
                     onClick={() => scrollToSection('contact')}
                     className="px-4 py-2  text-pink rounded-lg hover:text-orange transition-colors cursor-pointer"
                  >
                     Contact
                  </button>
               </nav>

               {/* Mobile Menu Button */}
               <button
                  className="md:hidden p-2"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle mobile menu"
               >
                  {mobileMenuOpen ? (
                     <X className="text-pink" size={24} />
                  ) : (
                     <Menu className="text-pink" size={24} />
                  )}
               </button>
            </div>
         </div>

         {/* Mobile Navigation */}
         {mobileMenuOpen && (
            <div className="md:hidden bg-black border-b border-yellow">
               <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                  <button
                     onClick={() => scrollToSection('home')}
                     className="text-left text-pink hover:text-orange transition-colors"
                  >
                     Accueil
                  </button>
                  <button
                     onClick={() => scrollToSection('about')}
                     className="text-left text-pink hover:text-orange transition-colors"
                  >
                     À propos
                  </button>
                  <button
                     onClick={() => scrollToSection('projects')}
                     className="text-left text-pink hover:text-orange transition-colors"
                  >
                     Projets
                  </button>
                  <button
                     onClick={() => scrollToSection('skills')}
                     className="text-left text-pink hover:text-orange transition-colors"
                  >
                     Compétences
                  </button>
                  <button
                     onClick={() => scrollToSection('contact')}
                     className="text-left text-pink hover:text-orange transition-colors"
                  >
                     Contact
                  </button>
               </nav>
            </div>
         )}
      </header>
   )
}
