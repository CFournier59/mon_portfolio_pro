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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               <div className="text-xl font-semibold">
                  <span className="text-base-color">Clément</span> Fournier
               </div>

               {/* Desktop Navigation */}
               <nav className="hidden md:flex items-center gap-8">
                  <button
                     onClick={() => scrollToSection('home')}
                     className="text-gray-700 hover:text-base-color transition-colors"
                  >
                     Accueil
                  </button>
                  <button
                     onClick={() => scrollToSection('about')}
                     className="text-gray-700 hover:text-base-color transition-colors"
                  >
                     À propos
                  </button>
                  <button
                     onClick={() => scrollToSection('projects')}
                     className="text-gray-700 hover:text-base-color transition-colors"
                  >
                     Projets
                  </button>
                  <button
                     onClick={() => scrollToSection('skills')}
                     className="text-gray-700 hover:text-base-color transition-colors"
                  >
                     Compétences
                  </button>
                  <button
                     onClick={() => scrollToSection('contact')}
                     className="px-4 py-2 bg-base-color text-white rounded-lg hover:bg-base-hover-color transition-colors"
                  >
                     Contact
                  </button>
               </nav>

               {/* Mobile Menu Button */}
               <button
                  className="md:hidden p-2"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
            </div>
         </div>

         {/* Mobile Navigation */}
         {mobileMenuOpen && (
            <div className="md:hidden bg-white border-b border-gray-200">
               <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                  <button
                     onClick={() => scrollToSection('home')}
                     className="text-left text-gray-700 hover:text-base-color transition-colors"
                  >
                     Home
                  </button>
                  <button
                     onClick={() => scrollToSection('about')}
                     className="text-left text-gray-700 hover:text-base-color transition-colors"
                  >
                     About
                  </button>
                  <button
                     onClick={() => scrollToSection('projects')}
                     className="text-left text-gray-700 hover:text-base-color transition-colors"
                  >
                     Projects
                  </button>
                  <button
                     onClick={() => scrollToSection('skills')}
                     className="text-left text-gray-700 hover:text-base-color transition-colors"
                  >
                     Skills
                  </button>
                  <button
                     onClick={() => scrollToSection('contact')}
                     className="px-4 py-2 bg-base-color text-white rounded-lg hover:bg-blue-700 transition-colors text-left"
                  >
                     Contact
                  </button>
               </nav>
            </div>
         )}
      </header>
   )
}
