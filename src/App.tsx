import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Prices from './components/Prices'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
   return (
      <div className="min-h-screen">
         <Header />
         <main>
            <Intro />
            <About />
            <Projects />
            <Prices />
            <Contact />
         </main>
         <Footer />
      </div>
   )
}
