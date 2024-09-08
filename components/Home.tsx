'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gradient-to-br from-green-400 to-blue-500 dark:from-green-900 dark:to-blue-900`}>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-0"></div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 z-20 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <main className="relative z-10 text-white p-8">
        <section className="h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-black bg-opacity-50 p-8 rounded-lg shadow-2xl"
          >
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-green-400"
            />
            <h1 className="text-5xl font-bold mb-4 text-green-400">
              <Typewriter
                words={['Hola, soy Jonathan', 'Desarrollador de Cuba', 'Apasionado por la tecnología']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="text-2xl text-blue-300">Desarrollador Full Stack</p>
          </motion.div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold mb-10 text-center text-green-400">Mis Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['JavaScript', 'Python', 'React', 'Node.js', 'TypeScript', 'Next.js', 'TailwindCSS', 'Git'].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-300">{skill}</h3>
                <motion.div
                  className="h-2 bg-green-200 rounded-full mt-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <div className="h-full bg-green-400 rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold mb-10 text-center text-green-400">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-300">TatianaBot</h3>
              <p className="text-gray-300 mb-4">Un bot de Discord con múltiples funcionalidades.</p>
              <a href="https://github.com/ItsJhonAlex/TatianaBot" className="text-green-400 hover:text-green-300 transition-colors">Ver proyecto →</a>
            </motion.div>
            {/* Agrega más proyectos aquí */}
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold mb-10 text-center text-green-400">Contacto</h2>
          <div className="flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://discord.gg/grjy37fnDB"
              className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition-colors"
            >
              Discord
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:rodrj0184@gmail.com"
              className="bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition-colors"
            >
              Email
            </motion.a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-black bg-opacity-50 py-8 mt-16 text-center">
        <p className="text-green-400">© 2024 Jonathan. Todos los derechos reservados.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://github.com/ItsJhonAlex" className="text-blue-300 hover:text-blue-200">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://wa.me/qr/45QRAPEZFSQBP1" className="text-green-300 hover:text-green-200">
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}