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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b-2 border-blue">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               <div
                  className=" cursor-pointer"
                  onClick={() => scrollToSection('home')}
               >
                  <p className="squarified text-5xl">
                     <span className="squarified text-blue">D</span>-vlop
                  </p>
               </div>

               {/* Desktop Navigation */}
               <nav className=" hidden md:flex items-center gap-8 ml-4">
                  <button
                     onClick={() => scrollToSection('home')}
                     className=" transition-colors cursor-pointer text-lg hover:text-blue"
                  >
                     Accueil
                  </button>
                  <button
                     onClick={() => scrollToSection('about')}
                     className=" transition-colors cursor-pointer text-lg hover:text-blue"
                  >
                     À propos
                  </button>
                  <button
                     onClick={() => scrollToSection('projects')}
                     className=" transition-colors cursor-pointer text-lg hover:text-blue"
                  >
                     Projets
                  </button>
                  <button
                     onClick={() => scrollToSection('skills')}
                     className=" transition-colors cursor-pointer text-lg hover:text-blue"
                  >
                     Compétences
                  </button>
                  <button
                     onClick={() => scrollToSection('contact')}
                     className=" transition-colors cursor-pointer text-lg hover:text-blue"
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
                     <X className="text-blue" size={30} />
                  ) : (
                     <Menu className="text-blue" size={30} />
                  )}
               </button>
            </div>
         </div>

         {/* Mobile Navigation */}
         {mobileMenuOpen && (
            <div className="md:hidden border-b border-yellow">
               <nav className="container border-t-2 border-blue mx-auto px-4 py-4 flex flex-col gap-4">
                  <button
                     onClick={() => scrollToSection('home')}
                     className="text-left  transition-colors"
                  >
                     Accueil
                  </button>
                  <button
                     onClick={() => scrollToSection('about')}
                     className="text-left  transition-colors"
                  >
                     À propos
                  </button>
                  <button
                     onClick={() => scrollToSection('projects')}
                     className="text-left  transition-colors"
                  >
                     Projets
                  </button>
                  <button
                     onClick={() => scrollToSection('skills')}
                     className="text-left  transition-colors"
                  >
                     Compétences
                  </button>
                  <button
                     onClick={() => scrollToSection('contact')}
                     className="text-left  transition-colors"
                  >
                     Contact
                  </button>
               </nav>
            </div>
         )}
      </header>
   )
}
