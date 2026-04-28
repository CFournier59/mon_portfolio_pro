import { Code, Palette, Rocket } from 'lucide-react'

export default function About() {
   return (
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
         <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-green text-3xl sm:text-4xl mb-4">
                     À propos de moi
                  </h2>
                  <p className="text-lg text-yellow max-w-2xl mx-auto">
                     Je suis un développeur web passionné avec de l'expérience
                     dans plusieurs métiers, allant de l'industrie du tourisme,
                     en passant par la vente et gestion de commerce, et le monde
                     du vélo.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div className="order-2 md:order-1">
                     <h3 className="text-2xl mb-4">Mon parcours</h3>
                     <p className="text-white mb-4">
                        J'ai commencé à m'intérresser au développement il y a
                        quelques années, alors que je cherchais à découvrir de
                        nouveaux horizons professionnels. Ce qui a commencé
                        comme une simple curiosité est devenu une carrière que
                        je suis vraiment passionné de faire.
                     </p>
                     <p className="text-white mb-4">
                        Au fil des années, j'ai pu acquérir une solide
                        expérience en travaillant avec des startups et des
                        entreprises établies. C'est cette pluralité que j'aime
                        insuffler dans mon travail, lorsque je transforme des
                        idées en réalité numérique.
                     </p>
                     <p className="text-white">
                        Quand je ne code pas, j'aime faire du vélo, explorer de
                        nouveaux endroits et passer du temps avec mes amis. Je
                        crois que l'équilibre entre vie professionnelle et
                        personnelle est essentiel pour être un développeur
                        heureux et productif.
                     </p>
                  </div>
                  <div className="order-1 md:order-2 border-1 border-turquoise rounded-lg">
                     <img
                        src="https://images.unsplash.com/photo-1763568258187-a0d90864ed66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MTEyNTEwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Developer workspace"
                        className="rounded-lg shadow-lg w-full"
                     />
                  </div>
               </div>

               <div className="grid sm:grid-cols-3 gap-8">
                  <div className="bg-black p-6 rounded-lg shadow-md text-center border-1 border-green">
                     <div className="inline-flex items-center justify-center w-16 h-16 bg-[#226700] rounded-full mb-4">
                        <Code className="text-green" size={32} />
                     </div>
                     <h3 className="text-green text-xl mb-2">Clean Code</h3>
                     <p className="text-white">
                        J'écris du code propre, maintenable et performant pour
                        des applications web de haute qualité
                     </p>
                  </div>

                  <div className="bg-black p-6 rounded-lg shadow-md text-center border-1 border-turquoise">
                     <div className="inline-flex items-center justify-center w-16 h-16 bg-[#006756] rounded-full mb-4">
                        <Palette className="text-turquoise" size={32} />
                     </div>
                     <h3 className="text-turquoise text-xl mb-2">
                        Design travaillé
                     </h3>
                     <p className="text-white">
                        Je crée des interfaces utilisateur attrayantes avec une
                        attention portée à chaque détail.
                     </p>
                  </div>

                  <div className="bg-black p-6 rounded-lg shadow-md text-center border-1 border-orange">
                     <div className="inline-flex items-center justify-center w-16 h-16 bg-[#682a00] rounded-full mb-4">
                        <Rocket className="text-orange" size={32} />
                     </div>
                     <h3 className="text-orange text-xl mb-2">
                        Rapidité et Performance
                     </h3>
                     <p className="text-white">
                        J'optimise les performances pour garantir des
                        expériences web rapides et fluides.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
