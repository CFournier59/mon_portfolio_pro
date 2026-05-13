import {
   Code,
   Palette,
   Rocket,
   PiggyBank,
   Handshake,
   ShieldCheck,
} from 'lucide-react'

const attributes = [
   {
      logo: Rocket,
      title: 'Rapidité et Performance',
      description:
         "J'optimise les performances pour garantir des expériences web rapides et fluides.",
   },
   {
      logo: Palette,
      title: 'Desing travaillé',
      description:
         'Je crée des interfaces utilisateur attrayantes avec une attention portée à chaque détail',
   },

   {
      logo: ShieldCheck,
      title: 'Protection des données',
      description:
         'Je reste informé des bonnes pratiques et mises à jour afin de garantir des applications sécurisées',
   },
   {
      logo: PiggyBank,
      title: 'Tarifs Attractifs',
      description:
         'En passant directement par un développeur pour monter votre projet, vous en maîtrisez les coûts',
   },

   {
      logo: Handshake,
      title: 'Proximité et Écoute',
      description:
         'Je travaille en collaboration directe afin de mieux cerner vos besoins tout en maintenant une communication humaine',
   },
   {
      logo: Code,
      title: 'Clean code',
      description:
         "J'écris du code propre, maintenable et performant pour des applications web de haute qualité",
   },
]

export default function About() {
   return (
      <section
         id="about"
         className="about-gradient py-20 px-4 sm:px-6 lg:px-8 "
      >
         <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-blue text-3xl sm:text-4xl mb-4">
                     <p className="squarified text-5xl text-black">
                        <span className="squarified text-blue">D</span>-vlop
                     </p>{' '}
                     C'est quoi ?
                  </h2>
                  <p className="text-lg text-dkblue max-w-2xl mx-auto">
                     Ce sont les services d'un développeur indépendant. Que ça
                     soit pour développer un outil numérique encore améliorer
                     votre visiblité sur le net via un site web professionnel,
                     je mets mes compétences à l'œuvre pour votre projet.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div className="order-2 md:order-1">
                     <h3 className="text-blue text-2xl mb-4">Mon parcours</h3>
                     <p className=" mb-4">
                        J'ai commencé à m'intérresser au développement il y a
                        quelques années, alors que je cherchais à découvrir de
                        nouveaux horizons professionnels. Ce qui a commencé
                        comme une simple curiosité est devenu une carrière que
                        je suis vraiment passionné de faire.
                     </p>
                     <p className=" mb-4">
                        Au fil des années, j'ai pu acquérir une solide
                        expérience en travaillant avec des startups et des
                        entreprises établies. C'est cette pluralité que j'aime
                        insuffler dans mon travail, lorsque je transforme des
                        idées en réalité numérique.
                     </p>
                     <p className="">
                        Quand je ne code pas, j'aime faire du vélo, explorer de
                        nouveaux endroits et passer du temps avec mes amis. Je
                        crois que l'équilibre entre vie professionnelle et
                        personnelle est essentiel pour être un développeur
                        heureux et productif.
                     </p>
                  </div>
                  <div className="order-1 md:order-2 rounded-lg">
                     <img
                        src="https://images.unsplash.com/photo-1763568258187-a0d90864ed66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MTEyNTEwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Developer workspace"
                        className="rounded-lg shadow-lg w-full"
                     />
                  </div>
               </div>
               <h3 className="text-blue text-2xl mb-4">
                  Les avantages avec{' '}
                  <span className="squarified text-4xl text-black">
                     <span className="squarified text-blue">D</span>-vlop
                  </span>{' '}
                  :
               </h3>
               <div className="grid sm:grid-cols-3 gap-8">
                  {attributes.map((attribute, index) => {
                     const Icon = attribute.logo
                     return (
                        <div
                           key={index}
                           className=" p-6 rounded-lg shadow-md text-center border-1 border-ltblue"
                        >
                           <div className="inline-flex items-center justify-center w-16 h-16 bg-ltblue rounded-full mb-4">
                              <Icon className="text-dkblue" size={32} />
                           </div>
                           <h3 className="text-blue text-xl mb-2">
                              {attribute.title}
                           </h3>
                           <p className="text-dkblue">
                              {attribute.description}
                           </p>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      </section>
   )
}
