// src/components/ProductsGrid.jsx
import React, { useEffect } from 'react';  // Asegúrate de importar useEffect
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProductsGrid = () => {
const products = [
  {
    id: 'product-127',
    title: 'Helado de Yogurt',
    description: 'Suave helado de yogurt. 80% menos grasa y 50% menos azúcar.',
    imageUrl: 'https://www.percimon.com/wp-content/uploads/2021/02/y-helado.png',
    link: 'https://www.percimon.com/productos/yogurt-helado/'
  },
  {
    id: 'product-130',
    title: 'Helado de Almendras',
    description: 'Suave helado de leche de almendras. Libre de lácteos, sin gluten y 0% azúcar refinada.',
    imageUrl: 'https://www.percimon.com/wp-content/uploads/2021/02/helado-almendras-1.png',
    link: 'https://www.percimon.com/productos/helado-de-almendras/'
  },
  {
    id: 'product-128',
    title: 'Mixo',
    description: 'Una base de tu helado o yogurt favorito + 4 adiciones normales incluidas.',
    imageUrl: 'https://www.percimon.com/wp-content/uploads/2021/02/mixo-y-helado.png',
    link: 'https://www.percimon.com/productos/mixo/'
  },
  {
    id: 'product-129',
    title: 'Poket',
    description: 'Una base de torta artesanal acompañada de tu helado o yogurt favorito.',
    imageUrl: 'https://www.percimon.com/wp-content/uploads/2021/02/poket-y-helado.png',
    link: 'https://www.percimon.com/productos/poket/'
  },
  {
    id: 'product-187',
    title: 'Yogurt Griego',
    description: 'Yogurt cuchareable y cremoso, con más contenido de proteína y menos contenido de grasa.',
    imageUrl: 'https://www.percimon.com/wp-content/uploads/2021/02/yogur-griego.png',
    link: 'https://www.percimon.com/productos/yogur-griego/'
  },
  {
    id: 'product-131',
    title: 'Cucuruchos',
    description: 'Helado de Yogurt o Helado de Almendras en Cucurucho.',
    imageUrl: 'https://www.percimon.com/wp-content/uploads/2021/02/cucurucho-1.png',
    link: 'https://www.percimon.com/productos/cucuruchos/'
  },
  {
    id: 'product-132',
    title: 'Paletas',
    description: 'Paletas artesanales. Más de 20 sabores deliciosos para disfrutar.',
    imageUrl: 'https://www.percimon.com/wp-content/uploads/2021/02/paletas-frutales.png',
    link: 'https://www.percimon.com/productos/paletas/'
  },
  {
    id: 'product-25',
    title: 'Adiciones',
    description: 'Perfecta combinación de helado y frutas',
    imageUrl: 'https://www.percimon.com/wp-content/uploads/2021/02/adiciones-para-llevar.png',
    link: 'https://www.percimon.com/productos/adiciones/'
  },
  {
    id: 'product-190',
    title: 'Productos para llevar',
    description: 'Para disfrutar y compartir en casa.',
    imageUrl: 'https://www.percimon.com/wp-content/uploads/2021/03/prodctos-circulosy-helado-litro-1.png',
    link: 'https://www.percimon.com/productos/productos-para-llevar/'
  },
  {
    id: 'product-189',
    title: 'Tarjeta Regalo',
    description: 'Ideal para regalar y disfrutar juntos.',
    imageUrl: 'https://www.percimon.com/wp-content/uploads/2021/02/bonos.png',
    link: 'https://www.percimon.com/productos/tarjeta-de-regalo/'
  }
];


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <main id="main" role="main" className="overflow-hidden">
      <article id="page-products" className="space-y-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="section p-0 bg-gradient-to-t from-[#f1ede8] to-[#fbfbf9] pb-12 relative"
          >
            <div className="container-fluid mx-auto p-0 lg:max-w-[1400px] relative z-10">
              <div className="flex flex-col lg:flex-row items-center">
                {/* Columna de Texto */}
                <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center text-center lg:text-left">
                  <div className="space-y-4 animate-fadeInUp">
                    <h1 className="text-5xl lg:mb-12 uppercase font-semibold text-[#00C08B]">
                      {product.title}
                    </h1>
                    <p className="text-lg mb-0 text-gray-500">
                      {product.description}
                    </p>
                    <p className="mt-5">
                      <a
                        className="btn btn-custom-outline text-[#00C08B] border border-[#009677] py-3 px-6 rounded hover:bg-[#00785c] hover:text-white"
                        href={product.link}
                      >
                        VER MÁS
                      </a>
                    </p>
                  </div>
                </div>

                {/* Columna de Imagen */}
                <div className="w-full lg:w-1/2 p-4 flex justify-center relative">
                  <img
                    className="relative z-2 max-w-md lg:max-w-lg object-cover"
                    src={product.imageUrl}
                    alt={product.title}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </main>
  );
};

export default ProductsGrid;
