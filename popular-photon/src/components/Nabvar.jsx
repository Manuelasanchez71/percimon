import React, { useState, useEffect } from 'react';

const Navbar = () => {
  // Estado para controlar si el menú está abierto
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // Ocultar la barra si el usuario desplaza hacia abajo y si ha pasado 100px
      setShowNav(false);
    } else {
      // Mostrar la barra si el usuario desplaza hacia arriba
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 section p-0 bg-gradient-to-t from-[#f1ede8] to-[#fbfbf9] shadow-md z-50 transition-transform duration-300 ${showNav ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Botón de menú para pantallas pequeñas */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden px-4 py-2"
        >
          <img src="/src/images/icons8-menú-50.png" alt="Menu" className="w-8 h-8" />
        </button>

        {/* Logo */}
        <a href="https://www.percimon.com">
          <img
            src="https://www.percimon.com/wp-content/themes/percimon/images/logo-percimon.svg"
            alt="Pércimon"
            className="h-12"
          />
        </a>

        {/* Enlaces principales visibles solo en pantallas grandes */}
        <nav className={`hidden md:flex space-x-8`}>
          <a href="https://www.percimon.com/cultura/" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Cultura</a>
          <a href="https://www.percimon.com/productos/" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Productos</a>
          <a href="https://domicilios.percimon.com/" target="_blank" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Haz tu pedido</a>
          <a href="https://www.percimon.com/trabaja-con-nosotros/" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Trabaja aquí</a>
          <a href="https://origenpercimon.com/" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Origen</a>
          <a href="https://www.percimon.com/encuentranos/" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Encuéntranos</a>
          <a href="https://www.percimon.com/contacto/" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Contacto</a>
          <a href="https://www.percimon.net/unipercimon/login/index.php" target="_blank" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Campus</a>
        </nav>

        {/* Menú desplegable para pantallas pequeñas */}
        <div className={`md:hidden ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center space-y-4 mt-4`}>
          <a href="https://www.percimon.com/cultura/" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Cultura</a>
          <a href="https://www.percimon.com/productos/" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Productos</a>
          <a href="https://domicilios.percimon.com/" target="_blank" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Haz tu pedido</a>
          <a href="https://www.percimon.com/trabaja-con-nosotros/" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Trabaja aquí</a>
          <a href="https://origenpercimon.com/" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Origen</a>
          <a href="https://www.percimon.com/encuentranos/" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Encuéntranos</a>
          <a href="https://www.percimon.com/contacto/" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Contacto</a>
          <a href="https://www.percimon.net/unipercimon/login/index.php" target="_blank" className="text-lg font-semibold text-[#00C08B] hover:text-[#00785c]">Campus</a>
        </div>

        {/* Redes sociales */}
        <div className='hidden md:flex space-x-4 w-[122px] h-[46px]'>
          <a href="https://www.facebook.com/percimonhelados"><img src="/src/images/f.png" alt="Facebook" className="h-10 w-10" /></a>
          <a href="https://www.instagram.com/percimon/"><img src="/src/images/i.png" alt="Instagram" className="h-10 w-10" /></a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

