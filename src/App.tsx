import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
   return (
      <div className="min-h-screen">
         <Header />
         <main>
            <Intro />
            <About />
            <Projects />
            <Skills />
            <Contact />
         </main>
      </div>
   )
}
