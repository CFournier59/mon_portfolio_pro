import Modal from 'react-modal'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function Mentions() {
   const [isOpen, setIsOpen] = useState<boolean>(false)
   return (
      <>
         <button
            onClick={() => setIsOpen(true)}
            className="hover:text-ltblue cursor-pointer"
         >
            - mentions légales -
         </button>
         <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            className="w-3/4 bg-white border overflow-scroll h-3/4"
            overlayClassName="fixed inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center"
         >
            <div className="flex justify-between fixed bg-white w-3/4 border-r">
               <h1 className="text-4xl text-center md:text-5xl w-full">
                  Mentions légales
               </h1>
               <button className="mr-4" onClick={() => setIsOpen(false)}>
                  <X size={40} />
               </button>
            </div>
            <div className="mx-4 pb-4 md:pb-6 md:mx-6">
               <section className="mt-4 md:mt-6 pt-15">
                  <h2 className="  text-3xl md:text-4xl">Éditeur du site</h2>
                  <p className="md:text-lg">
                     <strong>Nom / Raison sociale: </strong>Clément Fournier /
                     D-vlop
                  </p>
                  <p className="md:text-lg">
                     <strong>Statut juridique: </strong>Entrepreneur individuel
                  </p>
                  <p className="md:text-lg">
                     <strong>Activité (NAF / APE): </strong>6201Z -
                     Programmation informatique
                  </p>
                  <p className="md:text-lg">
                     <strong>SIREN / SIRET: </strong>104 630 793 00016
                  </p>
                  <p className="md:text-lg">
                     <strong>Adresse du siège social: </strong>240 impasse des
                     peupliers 38370 SAINT-ALBAN-DU-RHÔNE
                  </p>
                  <p className="md:text-lg">
                     <strong>Responsable de la publication: </strong>Clément
                     Fournier
                  </p>
                  <p className="md:text-lg">
                     <strong>Contact: </strong>07 77 12 04 44 -
                     contact@d-vlop.fr
                  </p>
               </section>
               <section className="mt-4 md:mt-6">
                  <h2 className="  text-3xl md:text-4xl">
                     Hébergement du site
                  </h2>
                  <p className="md:text-lg">
                     <strong>Hébergeur: </strong>OVH Cloud SAS
                  </p>
                  <p className="md:text-lg">
                     <strong>Adresse: </strong>2 rue Kellermann - 59100 ROUBAIX
                  </p>
               </section>
               <section className="mt-4 md:mt-6">
                  <h2 className="  text-3xl md:text-4xl">
                     Propriété intellectuelle
                  </h2>
                  <p className="md:text-lg">
                     L’ensemble des contenus présents sur ce site (textes,
                     images, graphismes, logo, vidéos, icônes, etc.) est protégé
                     par le droit d’auteur et la propriété intellectuelle. Toute
                     reproduction, représentation, modification ou adaptation,
                     totale ou partielle, est interdite sans autorisation écrite
                     préalable.
                  </p>
               </section>
               <section className="mt-4 md:mt-6">
                  <h2 className="  text-3xl md:text-4xl">
                     Données personnelles (RGPD)
                  </h2>
                  <p className="md:text-lg">
                     Le site peut collecter des données personnelles via le
                     formulaire de contact.
                  </p>
                  <p className="md:text-lg">
                     <strong>Responsable du traitement: </strong>M. Clément
                     Fournier
                  </p>
                  <p className="md:text-lg">
                     <strong>Finalités: </strong>Communication à titre
                     professionnelle (Rendez-vous, réponse à des questions,
                     etc...) entre l'éditeur et les utilisateurs du site.
                  </p>
                  <p className="md:text-lg">
                     <strong>Base légale: </strong>Consentement et intérêt
                     légitime
                  </p>
                  <p className="md:text-lg">
                     <strong>Durée de conservation: </strong>2 ans maximum
                  </p>
                  <p className="md:text-lg">
                     Conformément au RGPD, vous disposez d’un droit d’accès, de
                     rectification, d’opposition, d’effacement et de portabilité
                     de vos données. Pour exercer vos droits : contact@d-vlop.fr
                  </p>
               </section>
               <section className="mt-4 md:mt-6">
                  <h2 className="  text-3xl md:text-4xl">Cookies</h2>
                  <p className="md:text-lg">Le site n'utilise pas de cookies</p>
               </section>
               <section className="mt-4 md:mt-6">
                  <h2 className="  text-3xl md:text-4xl">
                     Limitation de responsabilité
                  </h2>
                  <p className="md:text-lg">
                     L'éditeur du site ne peut être tenu responsable:
                  </p>
                  <ul className="md:text-lg list-disc ml-4">
                     <li>des erreurs ou omissions dans les contenus</li>
                     <li>d'une indisponibilité temporaire du site</li>
                     <li>
                        des dommages résultant de l'utilisation du site ou de
                        sites tiers liés
                     </li>
                  </ul>
               </section>
               <section className="mt-4 md:mt-6">
                  <h2 className="  text-3xl md:text-4xl">Liens externes</h2>
                  <p className="md:text-lg">
                     Le site peut contenir des liens vers d’autres sites.
                     L’éditeur n’est pas responsable du contenu de ces sites
                     tiers.
                  </p>
               </section>
            </div>
         </Modal>{' '}
      </>
   )
}
