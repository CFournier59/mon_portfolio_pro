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
                  className="text-xl font-semibold text-turquoise"
                  onClick={() => scrollToSection('home')}
               >
                  <span className="text-orange">Clément</span> Développe
               </div>

               {/* Desktop Navigation */}
               <nav className="hidden md:flex items-center gap-8">
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
