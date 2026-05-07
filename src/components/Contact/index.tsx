import { MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
      time: '',
   })

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // Prepare data to send
      const dataToSend = { ...formData, time: new Date().toLocaleString() }
      // Send email using email.js
      emailjs
         .send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            dataToSend,
            import.meta.env.VITE_API_KEY,
         )
         .then(
            (response) => {
               console.log('SUCCESS!', response.status, response.text)
            },
            (error) => {
               console.log('FAILED...', error)
            },
         )
      // Alert user and reset form
      alert('Merci pour votre message, je vous répondrai dès que possible !')
      setFormData({ name: '', email: '', message: '', time: '' })
   }

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
   ) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      })
   }

   return (
      <section id="contact" className="gradient1 py-20 px-4 sm:px-6 lg:px-8">
         <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-ltblue text-3xl sm:text-4xl mb-4">
                     Contactez-moi
                  </h2>
                  <p className="text-lg text-white max-w-2xl mx-auto">
                     Vous avez un projet en tête ou souhaitez simplement dire
                     bonjour ? N'hésitez pas à me contacter !
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-12">
                  <div>
                     <h3 className="text-ltblue text-2xl mb-6">Coordonnées</h3>
                     <div className="space-y-6">
                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-white rounded-full">
                              <Phone className="text-dkblue" size={24} />
                           </div>
                           <div>
                              <h4 className="text-white mb-1">Téléphone</h4>
                              <p className="text-white">0 777 120 444</p>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-white rounded-full">
                              <MapPin className="text-dkblue" size={24} />
                           </div>
                           <div>
                              <h4 className="text-white mb-1">Réside à</h4>
                              <p className="text-white">Vienne, Isère</p>
                           </div>
                        </div>
                     </div>

                     <div className="mt-8 p-6 bg-white rounded-lg">
                        <h3 className="text-blue mb-2">
                           Donnez une vie digitale à vos idées !
                        </h3>
                        <p className="text-dkblue">
                           Du commerce de proximité à des projets plus
                           ambitieux, quelque soit le domaine d'activité, je
                           suis toujours ouvert à de nouvelles opportunités et
                           collaborations!
                        </p>
                     </div>
                  </div>

                  <div>
                     <form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-ltblue p-4 rounded-md"
                     >
                        <div>
                           <label
                              htmlFor="name"
                              className="block mb-2 text-dkblue"
                           >
                              Nom
                           </label>
                           <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className=" border w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-base-color focus:border-transparent"
                              placeholder="Nom complet..."
                           />
                        </div>

                        <div>
                           <label
                              htmlFor="email"
                              className="block mb-2 text-dkblue"
                           >
                              Email
                           </label>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className=" border w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-base-color focus:border-transparent"
                              placeholder="votre.email@example.com"
                           />
                        </div>

                        <div>
                           <label
                              htmlFor="message"
                              className="block mb-2 text-dkblue"
                           >
                              Message
                           </label>
                           <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={5}
                              className=" border w-full px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-base-color focus:border-transparent"
                              placeholder="Votre message..."
                           />
                        </div>

                        <button
                           type="submit"
                           className="block mx-auto px-8 py-3 bg-white/60 text-dkblue  hover:text-white hover:bg-dkblue transition-colors rounded-full font-semibold shadow-lg"
                        >
                           Envoyer
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
