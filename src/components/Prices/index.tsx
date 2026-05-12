import { ArrowDown, ArrowRight } from 'lucide-react'

export default function Skills() {
   return (
      <section id="prices" className="py-20 px-4 sm:px-6 lg:px-8 gradient2">
         <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-6">
                  <h2 className="text-blue text-3xl sm:text-4xl mb-4">
                     Tarifs
                  </h2>
                  <p className="text-lg text-dkblue max-w-2xl mx-auto">
                     Pas de frais cachés, pas de sur-facturation. Juste les
                     prix...
                  </p>
               </div>
               <div className="flex flex-col gap-4 lg:flex-row h-full items-stretch">
                  <div className="flex flex-col flex-1 justify-between border border-ltblue shadow-lg rounded-md px-4">
                     <div className="py-4">
                        <h3 className="text-blue text-2xl mb-4">
                           Taux journalier
                        </h3>
                        <h4 className="font-semibold">
                           Prix correspondant à une journée d'honoraires pouvant
                           inclure un ou plusieurs des services ci-dessous :
                        </h4>
                        <ul className="list-disc m-4 lg:grid grid-cols-2">
                           <li>design</li>
                           <li>développement</li>
                           <li>maintenance</li>
                           <li>optimisation</li>
                           <li>déploiement</li>
                           <li>conseil marketing</li>
                        </ul>
                     </div>
                     <div className="border-t border-ltblue py-4">
                        <p className="text-blue font-semibold">
                           Promotion spéciale pour le lancement de{' '}
                           <span className="squarified text-xl">D-vlop</span>{' '}
                           valable jusqu'au 30/09/2026 !
                        </p>
                        <div className="flex gap-4 mt-2">
                           <p className="text-blue text-5xl">159 €</p>
                           <p className="text-xl line-through text-black">
                              199€
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col flex-1 justify-between border border-ltblue shadow-lg rounded-md px-4">
                     <div className="py-4">
                        <h3 className="text-blue text-2xl mb-4">
                           Hébergement web
                        </h3>
                        <h4 className="font-semibold">
                           Prix correspondant à un hébergement de projets web
                           statiques (html, css, javascript) + les services
                           suivants :
                        </h4>
                        <ul className="list-disc m-4 lg:grid grid-cols-2">
                           <li>mise en ligne continue</li>
                           <li>location du nom de domaine</li>
                           <li>connexion HTTPS et certificat SSL</li>
                           <li>protection contre les attaques DDos</li>
                           <li>Assistance technique</li>
                        </ul>
                     </div>
                     <div className="border-t border-ltblue py-4">
                        <p className="text-blue font-semibold">
                           Pour le lancement de{' '}
                           <span className="squarified text-xl">D-vlop</span>,
                           le premier mois est offert jusqu'au 30/09/2026 !
                        </p>
                        <div className="flex gap-4 mt-2">
                           <p className="text-blue text-5xl">7 €</p>
                           <p className="text-xl text-black">/ mois</p>
                        </div>
                     </div>
                  </div>
               </div>

               <h3 className="text-blue text-center text-2xl mt-6 mb-4">
                  Comment ça se passe ?
               </h3>
               <ol className=" flex flex-col lg:flex-row justify-between gap-4 ">
                  <li className="border-4 border-dashed border-ltblue text-center lg:w-1/4 p-2">
                     <h4 className="font-semibold text-dkblue">
                        1. Estimation de vos besoins
                     </h4>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="text-ltblue size-15 mx-auto"
                     >
                        <path
                           fill="currentColor"
                           d="M10 3.002c4.411 0 8 2.849 8 6.35 0 3.035-3.029 6.311-7.925 6.311-1.58 0-2.718-.317-3.718-.561-.966.593-1.256.813-3.006 1.373.415-1.518.362-2.182.331-3.184-.837-1.001-1.682-2.069-1.682-3.939 0-3.501 3.589-6.35 8-6.35zm0-2.002c-5.281 0-10 3.526-10 8.352 0 1.711.615 3.391 1.705 4.695.047 1.527-.851 3.718-1.661 5.312 2.168-.391 5.252-1.258 6.649-2.115 1.181.289 2.312.421 3.382.421 5.903 0 9.925-4.038 9.925-8.313 0-4.852-4.751-8.352-10-8.352zm11.535 11.174c-.161.488-.361.961-.601 1.416 1.677 1.262 2.257 3.226.464 5.365-.021.745-.049 1.049.138 1.865-.892-.307-.979-.392-1.665-.813-2.127.519-4.265.696-6.089-.855-.562.159-1.145.278-1.74.364 1.513 1.877 4.298 2.897 7.577 2.1.914.561 2.933 1.127 4.352 1.385-.53-1.045-1.117-2.479-1.088-3.479 1.755-2.098 1.543-5.436-1.348-7.348zm-15.035-3.763c-.591 0-1.071.479-1.071 1.071s.48 1.071 1.071 1.071 1.071-.479 1.071-1.071-.48-1.071-1.071-1.071zm3.5 0c-.591 0-1.071.479-1.071 1.071s.48 1.071 1.071 1.071 1.071-.479 1.071-1.071-.48-1.071-1.071-1.071zm3.5 0c-.591 0-1.071.479-1.071 1.071s.48 1.071 1.071 1.071 1.071-.479 1.071-1.071-.48-1.071-1.071-1.071z"
                        />
                     </svg>
                     <p className="">
                        Lors d'un premier RDV, nous passons en revue les
                        caractéristiques essentielles à la réalisation de votre
                        site ou application.{' '}
                     </p>
                  </li>
                  <ArrowDown className="mx-auto lg:hidden text-ltblue size-10" />
                  <ArrowRight className="my-auto hidden lg:block text-ltblue size-10" />
                  <li className="border-4 border-dashed border-ltblue text-center lg:w-1/4 p-2">
                     <h4 className="font-semibold text-dkblue">
                        2. Établissement du devis
                     </h4>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="text-ltblue size-15 mx-auto"
                     >
                        <path
                           fill="currentColor"
                           d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z"
                        />
                     </svg>
                     <p className="">
                        Vous recevez le devis chiffré avec l'ensemble des
                        prestations, le coût global, et les conditions générales
                        des services associés.
                     </p>
                  </li>
                  <ArrowDown className="mx-auto lg:hidden text-ltblue size-10" />
                  <ArrowRight className="my-auto hidden lg:block text-ltblue size-10" />

                  <li className="border-4 border-dashed border-ltblue text-center lg:w-1/4 p-2">
                     <h4 className="font-semibold text-dkblue">
                        3. Réalisation du projet
                     </h4>
                     <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        viewBox="0 0 24 24"
                        className="text-ltblue size-15 mx-auto"
                     >
                        <path
                           fill="currentColor"
                           d="M24 19h-1v-2.2c-1.853 4.237-6.083 7.2-11 7.2-6.623 0-12-5.377-12-12h1c0 6.071 4.929 11 11 11 4.66 0 8.647-2.904 10.249-7h-2.249v-1h4v4zm-10.772 0h-2.457c-.448-1.286-.489-1.599-.931-1.781-.468-.193-.77.044-1.922.598l-1.736-1.735c.587-1.217.786-1.473.6-1.922-.188-.451-.528-.495-1.782-.932v-2.457c1.285-.448 1.598-.488 1.782-.932.192-.465-.04-.758-.6-1.921l1.736-1.736c1.163.561 1.467.792 1.921.6.46-.191.505-.556.932-1.782h2.457c.449 1.287.49 1.599.932 1.781.466.194.776-.045 1.922-.599l1.735 1.736c-.581 1.208-.784 1.473-.599 1.921.191.46.556.505 1.782.932v2.457c-1.27.442-1.597.487-1.782.933-.187.452.022.722.599 1.921l-1.735 1.735c-1.096-.526-1.452-.798-1.916-.601-.465.193-.508.553-.938 1.784zm-.71-13h-1.036c-.243.722-.462 1.375-1.26 1.705-.744.31-1.383.032-2.098-.314l-.733.733c.363.74.644 1.303.315 2.098-.343.827-.969.991-1.706 1.259v1.046c.723.244 1.375.453 1.706 1.25.332.802.033 1.378-.315 2.1l.733.731c.711-.348 1.355-.622 2.098-.314.757.314 1.011.909 1.259 1.706h1.029c.244-.723.471-1.375 1.272-1.708.773-.32 1.4-.01 2.094.316l.731-.732c-.336-.724-.656-1.268-.313-2.098.344-.828.963-.985 1.706-1.26v-1.036c-.724-.243-1.375-.463-1.706-1.26-.33-.798-.044-1.367.315-2.098l-.732-.733c-.715.344-1.345.627-2.099.315-.789-.327-.994-.922-1.26-1.706zm-.539 8.5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-7.979-1.5h-4v-4h1v2.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12h-1c0-6.071-4.929-11-11-11-4.66 0-8.647 2.904-10.249 7h2.249v1z"
                        />
                     </svg>
                     <p className="">
                        Après validation, le travail peut commencer. À chaque
                        étape de l'avancement du projet, on fait le point.
                     </p>
                  </li>
               </ol>
               <p className="mt-6 text-lg text-dkblue font-semibold">
                  Vous connaissez ainsi le coût réel de votre projet AVANT de le
                  concrétiser. Et si vous hésitez encore, le devis est gratuit
                  et sans engagements !
               </p>
            </div>
         </div>
      </section>
   )
}
