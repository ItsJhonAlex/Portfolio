'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaPython, FaReact, FaNodeJs, FaDatabase, FaAngular } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import frases from '../data/fases.json';
import Image from 'next/image';
import { IconType } from 'react-icons';

const codeSnippets = [
  { lang: 'Python', code: 'def fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(10))' },
  { lang: 'JavaScript', code: 'function quickSort(arr) {\n  if (arr.length <= 1) return arr;\n  const pivot = arr[0];\n  const left = arr.filter((x, i) => i > 0 && x < pivot);\n  const right = arr.filter(x => x >= pivot);\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}\n\nconsole.log(quickSort([3,1,4,1,5,9,2,6,5,3]));' },
  { lang: 'React', code: 'const Counter = () => {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n};' },
  { lang: 'SQL', code: 'CREATE TABLE employees (\n  id INT PRIMARY KEY,\n  name VARCHAR(50),\n  department VARCHAR(50),\n  salary DECIMAL(10, 2)\n);\n\nINSERT INTO employees (id, name, department, salary)\nVALUES (1, "John Doe", "IT", 75000.00);' },
  { lang: 'Java', code: 'public class BinarySearch {\n  public static int binarySearch(int[] arr, int target) {\n    int left = 0, right = arr.length - 1;\n    while (left <= right) {\n      int mid = left + (right - left) / 2;\n      if (arr[mid] == target) return mid;\n      if (arr[mid] < target) left = mid + 1;\n      else right = mid - 1;\n    }\n    return -1;\n  }\n}' },
  { lang: 'HTML', code: '<form id="contact-form">\n  <label for="name">Nombre:</label>\n  <input type="text" id="name" name="name" required>\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" required>\n  <button type="submit">Enviar</button>\n</form>' },
  { lang: 'CSS', code: '@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.animated-element {\n  animation: fadeIn 1s ease-in-out;\n  background-color: #f0f0f0;\n  padding: 20px;\n  border-radius: 8px;\n}' },
  { lang: 'TypeScript', code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nfunction getUserInfo(user: User): string {\n  return `${user.name} (${user.email})`;\n}\n\nconst user: User = { id: 1, name: "Alice", email: "alice@example.com" };\nconsole.log(getUserInfo(user));' }
];

const proyectos = [
  {
    titulo: "Aplicación de Gestión de Tareas",
    descripcion: "Una aplicación web para organizar y gestionar tareas diarias con características de colaboración en tiempo real.",
    tecnologias: ["React", "Node.js", "MongoDB", "Socket.io"],
    imagen: "/proyecto-tareas.jpg"
  },
  {
    titulo: "E-commerce de Productos Ecológicos",
    descripcion: "Plataforma de comercio electrónico especializada en productos sostenibles y ecológicos.",
    tecnologias: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    imagen: "/proyecto-ecommerce.jpg"
  },
  {
    titulo: "API de Análisis de Sentimientos",
    descripcion: "API que utiliza procesamiento de lenguaje natural para analizar el sentimiento de textos en redes sociales.",
    tecnologias: ["Python", "Flask", "TensorFlow", "Docker"],
    imagen: "/proyecto-api.jpg"
  }
];

const habilidades = [
  { nombre: 'Python', icono: FaPython, progreso: 63 },
  { nombre: 'React', icono: FaReact, progreso: 54 },
  { nombre: 'Node.js', icono: FaNodeJs, progreso: 65 },
  { nombre: 'MariaDB', icono: FaDatabase, progreso: 70 },
  { nombre: 'Angular', icono: FaAngular, progreso: 56 },
  { nombre: 'TypeScript', icono: SiTypescript, progreso: 69 },
];

interface SkillCircleProps {
  skill: string;
  icono: IconType;
  progreso: number;
}

function SkillCircle({ skill, icono: Icon, progreso }: SkillCircleProps) {
  const circunferencia = 2 * Math.PI * 40; // radio 40
  const progresoOffset = circunferencia - (progreso / 100) * circunferencia;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24" viewBox="0 0 100 100">
          <circle
            className="text-gray-300 stroke-current"
            strokeWidth="8"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          />
          <circle
            className="text-pink-500 progress-ring__circle stroke-current"
            strokeWidth="8"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray={circunferencia}
            strokeDashoffset={progresoOffset}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-12 h-12 text-cyan-400" />
        </div>
      </div>
      <p className="mt-2 text-sm font-semibold">{skill}</p>
      <p className="text-xs text-gray-300">{progreso}%</p>
    </div>
  );
}

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'proyectos', 'habilidades', 'about'];

  const CodeSnippets = () => {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={snippet.lang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="absolute font-mono text-xs text-cyan-300 bg-indigo-900 bg-opacity-50 p-2 rounded shadow-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%) rotate(${Math.random() * 20 - 10}deg)`,
              maxWidth: '200px',
              zIndex: 0,
            }}
          >
            <div className="font-bold mb-1">{snippet.lang}</div>
            <pre className="whitespace-pre-wrap">{snippet.code}</pre>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-800 min-h-screen text-white relative overflow-hidden">
      <CodeSnippets />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 bg-indigo-900 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold">JHON ALEX</span>
            </motion.div>
            <ul className="flex space-x-8">
              {sections.map((section) => (
                <motion.li key={section}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => setActiveSection(section)}
                    className={`uppercase ${activeSection === section ? 'text-pink-500' : 'text-gray-300'} hover:text-cyan-400`}
                  >
                    {section}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-24 relative">
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl font-bold mb-4">JHON ALEX</h1>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-pink-500">DESARROLLADOR</span>{' '}
              <span className="text-cyan-400">FULLSTACK</span>
            </h2>
            <p className="text-xl mb-8">
              <Typewriter
                words={frases.frases}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={40}
                deleteSpeed={20}
                delaySpeed={2000}
              />
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors"
            >
              Contacto
            </motion.button>
          </motion.div>
        </section>

        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
          <SocialButton href="https://github.com/tuusuario" icon={<FaGithub />} />
          <SocialButton href="https://linkedin.com/in/tuusuario" icon={<FaLinkedin />} />
          <SocialButton href="mailto:tu@email.com" icon={<FaEnvelope />} />
          <SocialButton href="/path-to-your-cv.pdf" icon={<FaFileDownload />} />
        </div>

        <section id="proyectos" className="py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-10 text-center"
          >
            Proyectos Realizados
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-indigo-800 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{proyecto.titulo}</h3>
                  <p className="text-gray-300 mb-4">{proyecto.descripcion}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyecto.tecnologias.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-pink-500 text-white text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="habilidades" className="py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-10 text-center"
          >
            Mis Habilidades
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {habilidades.map((habilidad, index) => (
              <motion.div
                key={habilidad.nombre}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCircle
                  skill={habilidad.nombre}
                  icono={habilidad.icono}
                  progreso={habilidad.progreso}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="bg-indigo-900 py-6 mt-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">© 2024 Jhon Alex. Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

interface SocialButtonProps {
    href: string;
    icon: React.ReactNode;
  }

function SocialButton({ href, icon }: SocialButtonProps) {
    return (
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-colors"
      >
        {icon}
      </motion.a>
    );
  }