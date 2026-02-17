import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'

export default function App() {
   return (
      <div className="min-h-screen">
         <Header />
         <main>
            <Intro />
            <About />
         </main>
      </div>
   )
}
