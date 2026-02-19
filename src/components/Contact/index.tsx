import { Mail, MapPin, Phone } from 'lucide-react'
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
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
         <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl mb-4">Contactez-moi</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                     Vous avez un projet en tête ou souhaitez simplement dire
                     bonjour ? N'hésitez pas à me contacter !
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-12">
                  <div>
                     <h3 className="text-2xl mb-6">Coordonnées</h3>
                     <div className="space-y-6">
                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-light-color rounded-lg">
                              <Mail className="text-base-color" size={24} />
                           </div>
                           <div>
                              <h4 className="mb-1">Email</h4>
                              <p className="text-gray-600">
                                 clementfournier.c@gmail.com
                              </p>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-light-color rounded-lg">
                              <Phone className="text-base-color" size={24} />
                           </div>
                           <div>
                              <h4 className="mb-1">Téléphone</h4>
                              <p className="text-gray-600">0 777 120 444</p>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-light-color rounded-lg">
                              <MapPin className="text-base-color" size={24} />
                           </div>
                           <div>
                              <h4 className="mb-1">Réside à</h4>
                              <p className="text-gray-600">Vienne, Isère</p>
                           </div>
                        </div>
                     </div>

                     <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                        <h3 className="mb-2">
                           Donnez une vie digitale à vos idées !
                        </h3>
                        <p className="text-gray-600">
                           Du commerce de proximité à des projets plus
                           ambitieux, quelque soit le domaine d'activité, je
                           suis toujours ouvert à de nouvelles opportunités et
                           collaborations!
                        </p>
                     </div>
                  </div>

                  <div>
                     <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                           <label
                              htmlFor="name"
                              className="block mb-2 text-gray-700"
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
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-base-color focus:border-transparent"
                              placeholder="Nom complet"
                           />
                        </div>

                        <div>
                           <label
                              htmlFor="email"
                              className="block mb-2 text-gray-700"
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
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-base-color focus:border-transparent"
                              placeholder="votre.email@example.com"
                           />
                        </div>

                        <div>
                           <label
                              htmlFor="message"
                              className="block mb-2 text-gray-700"
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
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-base-color focus:border-transparent resize-none"
                              placeholder="Votre message..."
                           />
                        </div>

                        <button
                           type="submit"
                           className="w-full px-8 py-3 bg-base-color text-white rounded-lg hover:bg-base-hover-color transition-colors"
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
