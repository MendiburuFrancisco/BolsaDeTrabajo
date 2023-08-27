import logo from './logo.svg';
// import './App.css';
import Home from './pages/Home/index.js';
import JobCard from './components/ui/JobCard.js';
import Navbar from './components/ui/Navbar.js';
import JobDescription from './components/ui/JobDescription';
import 'tailwindcss/tailwind.css';


let trabajos = [
  {
      "id": "10234",
      "title": {
          "number": "44",
          "txt": "IMPLEMENTADOR/DESARROLLADOR"
      },
      "requirement": null,
      "speciality": [
          "ISI","IQ"
      ],
      "link": "\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t",
      "type": "Bolsa de Trabajo",
      "startDate": null,
      "endDate": null
  },
  {
      "id": "10235",
      "title": {
          "number": "45",
          "txt": "DBA - ADMINISTRADOR SR BASE DE DATOS"
      },
      "requirement": null,
      "speciality": [
          "ISI"
      ],
      "link": "\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t",
      "type": "Bolsa de Trabajo",
      "startDate": null,
      "endDate": null
  },
  {
      "id": "10236",
      "title": {
          "number": "46",
          "txt": "DESARROLLO BACKEND AREA INDUSTRIAL"
      },
      "requirement": null,
      "speciality": [
          "ISI"
      ],
      "link": "\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t",
      "type": "Bolsa de Trabajo",
      "startDate": null,
      "endDate": null
  }];
 
let lorem_30paragraphs = `Con la supervisión adecuada, tendrás que relevar equipos en campo, pasar la información 
relevada en campo a planillas Excel. También, deberás hacer lectura de planes de 
mantenimiento indicados por fabricantes en manuales para confeccionar planes de
mantenimiento.
Cual es tu responsabilidad
        *       Relevamiento en campo.
        *       Generar base de datos en forma segura, ordenada y clara.
        *       Redacción de procedimientos de mantenimiento.
        *       Carga de repuestos y planes de mantenimiento en software de
       mantenimiento.
Cuáles son los requisitos para el cargo
       *       Estudiante de ingeniería mecánica, eléctrica o electrónica.
       *       Que reste al menos 1 año y medio para finalizar la carrera.
       *       Inglés intermedio.
       *       Manejo de Paquete Office.
       *       Capacidad de trabajar en campo.
       *       Interpretación de P&ID
Acerca del equipo
  Somos un equipo que cuenta con un supervisor y 5 técnicos de campo.
  Beneficios:
        *       Cobertura médica
        *       Día de cumpleaños libre+
        *       Capacitación constante en nuestra Plataforma e-learning
        *       Programa con la Certificación Work & Life Balance
        *       Amplia gama de descuentos en restaurantes, gimnasios, productos de
       consumo, en formación y otros
        *       Días flex de estudio
        *       14 días de vacaciones (pasados los primeros 6 meses de contrato)`;
 
function App() {
  return (

    <div className="App bg-gray-800 h-100 ">
        <header className="App-header">
         <Navbar buttons={[   
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>,        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
      ]} />
       

        </header>

    <body className='grid grid-cols-12 gap-8 justify-items-center p-4'>
    <div className="col-span-4">
        { trabajos.map((trabajo, index) => ( <JobCard key={index} title={trabajo.title.txt} type={trabajo.type} specialitys={trabajo.speciality} />)) }
      </div>
      
      <div className="col-span-8">
        <JobDescription title="Desarrollador de Software" subtitle="Bolsa de Trabajo" subSubtitle="ISI,EC" text={lorem_30paragraphs}
          button1Label="Volver atras" button2Label="Postularme" />
      </div>  
      
    </body>   
   
    </div>
  );
}

export default App;
