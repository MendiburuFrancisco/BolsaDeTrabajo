import JobCard from "./../components/ui/JobCard.js";
import JobCard2 from "./../components/ui/MyCard.js";
import JobDescription from "./../components/ui/JobDescription";
import StudentLayout from "./../layouts/Student.js";
let trabajos = [
  {
    id: "10234",
    title: {
      number: "44",
      txt: "IMPLEMENTADOR/DESARROLLADOR",
    },
    requirement: null,
    speciality: ["ISI", "IQ"],
    link: "\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t",
    type: "Bolsa de Trabajo",
    startDate: null,
    endDate: null,
  },
  {
    id: "10235",
    title: {
      number: "45",
      txt: "DBA - ADMINISTRADOR SR BASE DE DATOS",
    },
    requirement: null,
    speciality: ["ISI"],
    link: "\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t",
    type: "Bolsa de Trabajo",
    startDate: null,
    endDate: null,
  },
  {
    id: "10236",
    title: {
      number: "46",
      txt: "DESARROLLO BACKEND AREA INDUSTRIAL",
    },
    requirement: null,
    speciality: ["ISI"],
    link: "\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t",
    type: "Bolsa de Trabajo",
    startDate: null,
    endDate: null,
  },
];

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

const mostrarTrabajosDisponibles = (jobs) => {
  return jobs.map((job) => {
    return (
      <JobCard2
        titulo={job.title.txt}
        especialidad={job.speciality[0]}
        // descripcion = {job.descripcion}
        tipo={job.type}
      />
    );
  });
};



function Home() {
  return (

    <StudentLayout className> 
    <body className="grid grid-cols-12 gap-12 justify-items-center p-4">
        <div className="lg:col-span-4 md:col-span-12 ">
        
          {trabajos.map((trabajo, index) => (
            <JobCard
            key={index}
            title={trabajo.title.txt}
            type={trabajo.type}
            specialitys={trabajo.speciality}
            />
            ))}
        </div>
        <div className="lg:col-span-8 md:col-span-12 ">
          <JobDescription
            title="Desarrollador de Software"
            subtitle="Bolsa de Trabajo"
            subSubtitle="ISI,EC"
            text={lorem_30paragraphs}
            button1Label="Volver atras"
            button2Label="Postularme"
            />
        </div>

      </body>
    </StudentLayout>
 
  );
}

export default Home;
