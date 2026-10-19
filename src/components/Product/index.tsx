type ProductProps = {
   title: string
   description: string
   specs: string[]
   priceTag: number
   monthly?: boolean
}

export default function Product({
   title,
   description,
   specs,
   priceTag,
   monthly,
}: ProductProps) {
   return (
      <div className="flex flex-col md:flex-row flex-1 justify-between border border-ltblue shadow-lg rounded-md px-4">
         <div className="py-4 md:w-4/5">
            <h3 className="text-blue text-2xl mb-4">{title}</h3>
            <h4 className="font-semibold">{description}</h4>
            <ul className="list-disc m-4 md:grid grid-cols-2">
               {' '}
               {specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
               ))}
            </ul>
         </div>
         <div className="md:flex items-center justify-center border-t md:border-l md:border-t-0 border-ltblue py-4 md:w-1/5">
            <div className="flex md:flex-col lg:flex-row gap-1 mt-2 justify-end md:justify-center items-center">
               <p className="text-blue text-3xl lg:text-4xl">
                  {priceTag.toLocaleString('fr-FR', {
                     style: 'currency',
                     currency: 'EUR',
                  })}
               </p>
               <p className="text-xl text-black">{monthly ? '/ mois' : ''}</p>
            </div>
         </div>
      </div>
   )
}
