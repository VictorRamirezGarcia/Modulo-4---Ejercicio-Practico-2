
Proyecto-Base

Este es un proyecto web del Hospital Clinico Dr Victor Ramirez que utiliza ReactJS para crear un sitio con un sistema de navegaci�n. El proyecto incluye p�ginas como "Inicio", "Servicios" y "Contacto".

Tabla de Contenidos

Tecnolog�as Usadas
Estructura del Proyecto
Instalaci�n
Uso
Scripts
Contribuciones
Licencia

Tecnolog�as Usadas

ReactJS: Para la estructuraciond e la pagina y cada uno de los componentes de la misma. Ademas de la renderizacion de los datos, flujo de informacion y creacion de los formularios para el manejo de la interaccion del usuario.
CSS: Para la escritura de estilos en CSS con caracter�sticas adicionales como variables y anidamiento.


Estructura del Proyecto

index.html: Es el archivo HTML principal que funciona como punto de entrada de la aplicación.
index.css: Archvio con los estilos css de la pagina index
main.jsx: Es el segundo archivo que se llama desde el index.html definiendo la extructura mas general de la pagina en ReactJS.
App.jsx: Es el tercer archivo que se llamada desde el main.jsx y define lo que el avegador presenta en el DOM.
App.css: Archivo con los estilos css de la pagina App.

DoctorCard.jsx: Pagina con el Componente ReactJs, que muestra la información de un doctor (nombre, especialidad, años de experiencia).
ServiceList.jsx: Pagina con el Componente ReactJs, que lista los servicios médicos disponibles en el hospital.
AppointmentForm.jsx: Pagina con el Componente ReactJs, que muestra uUn formulario para que los usuarios agenden una cita con un doctor del hospital por la pagina.

Instalaci�n

Clona este repositorio:

git clone https://github.com/VictorRamirezGarcia/Modulo-4---Discusion-y-Analisis-de-Casos.git
cd tu-repo


Instruciones para visualizacion:

Primero debes tener instalado Node.js, para ello en tu consola debes ejecutar el siguiente comando

nvm install node

Luego en tu carpeta donde tengas tu proyecto debes ejecutar los siguientes comandos

cd tu-repo
npm run dev

Luego ingresar en el link indicado por la consola para ingresar a la pagina de inicio de tu aplicacion web con ReactJs.

Ejemplo de como se visualizaria en tu consola:

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help


Actualizaciones README especificar Modulo 4 - Ejercicio Practico 2

Ejercicio Práctico: Manejo Avanzado del DOM y Elementos ReactJS para el Proyecto del Hospital

Contexto:
En este ejercicio práctico, los estudiantes profundizarán en el manejo del DOM virtual, el uso
de referencias para manipular elementos del DOM, y la integración de componentes
avanzados en ReactJS. Implementarán funcionalidades avanzadas en el sistema del hospital,
como la gestión del DOM en el cliente y servidor, la optimización de rendimiento, y el uso de
fragmentos y componentes de orden superior para mejorar la modularidad y eficiencia del
sistema.


Requisitos:
1. Manejo del DOM Virtual en ReactJS (1 punto)
- Implementa una sección del sistema del hospital donde se gestione eficientemente la
renderización de datos utilizando el DOM Virtual.
- Explica cómo ReactJS utiliza el DOM virtual para mejorar el rendimiento de la
interfaz del hospital (secciones como listado de doctores o servicios).
- Implementa componentDidMount o el uso de useEffect para gestionar la
actualización del DOM al cargar los datos.

Respuesta: 
En la seccion del "Home" del sistema del hospital, cuando se cargan los servicios medicos por la pagina se renderizan los datos utilizando el DOM Virtual, solo cargando dicha informacion pero no requiriendo actualizar toda la pagina. Tambien en el caso de los detalles del detalle del servicios medico al precionar sobre el nombre del servicio, este abre un nuevo modal con la informacion del detalle del servicio.
Para el caso de la seccion del "Medical Team" de sistema del hospital, cuando se cargan los medicos por la pagina solo se renderizan los datos utilizando el DOM Virtual, solo cargando dicha informacion pero no requiriendo actualizar toda la pagina. Ademas para el caso de los doctores se puede precionar el boton llamado "Mostrar Detalles" para mostrar mas informacion respecto del medico, como es su especialidad y los años de experiencia.
En ambas secciones tanto de los servicios medicos como de los doctores se utilizaron useEffect y useState para cargar la informacion y definir sus estados.



2. Creación y Uso de Referencias en React (1.5 puntos)
- Utiliza referencias en uno de los componentes para manipular elementos del DOM
directamente. Por ejemplo:
- Crea una referencia para controlar un campo de formulario en el que los
usuarios agendan citas o consultas médicas.
- Usa referencias mediante callback para interactuar con elementos del DOM
cuando se realiza alguna acción del usuario (como enfocar un campo en el
formulario de contacto del hospital).

Respuesta:
En la pagina de "Contact" cuando se llama al componente del formulario llamado "AppointmentForm.jsx" este crea una constante para hacer referencia al campo del nombre del paciente (const patientNameInputRef = useRef(null);) y luego con esa referencia se utiliza para hacer focus en dicho campo al cargar la pagina
 useEffect(() => {
    if (patientNameInputRef.current) {
      patientNameInputRef.current.focus();
    }
  }, []);



3. Uso de Fragmentos y Contexto en ReactJS (1.5 puntos)
- Usa Fragmentos (<React.Fragment>) para evitar elementos innecesarios en el DOM
y mejorar la estructura del código en el sistema del hospital.
- Utiliza Context para gestionar el estado global de la aplicación, como el acceso
a los datos de un usuario o doctor a lo largo de la aplicación sin necesidad de
pasar props entre múltiples componentes.

Respuesta:
En el componente llamado "ServiceList" se utilizo un Fragmento (<React.Fragment>) para evitar elemento innecesariosen el DOM y mejorar la estructura del codigo.



4. Verificación de Tipos con PropTypes (1 punto)
- Implementa PropTypes para verificar el tipo de datos que se pasan a los componentes
DoctorCard, ServiceList, y AppointmentForm.
- Asegúrate de que los tipos de datos como strings, arrays y objetos se validen
correctamente y muestra un mensaje de error en caso de que el tipo de dato no
sea el correcto.

Respuesta:
En el componente llamado "AppointmentForm" se implemento PropTypes para validar que el Array que recibbe llamado "doctors" venga con la cantidad y tipos de datos correctos, por medio de las lineas siguientes:

AppointmentForm.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, 
      specialty: PropTypes.string,        
      yearsOfExperience: PropTypes.number
    })
  ).isRequired,
};



5. Uso de Componentes de Orden Superior y Portales (1.5 puntos)
- Implementa un Componente de Orden Superior (HOC) para reutilizar la lógica de un
componente en otras secciones del sistema.
- Crea un portal para renderizar un modal que muestre información detallada de
un doctor o servicio en una capa superior sin interferir con la estructura del DOM
principal.

Respuesta:
Se ha implementado un Componente de Orden Superior (HOC) llamado "withDoctorDetails" el cual toma los datos de la especialidad y años de experiencia del doctor para mostrarlos en un portal.



6. Optimización de Rendimiento y Profiler en ReactJS (0.5 puntos)
- Usa herramientas de optimización de ReactJS como Profiler para identificar cuellos de
botella en la renderización y mejorar el rendimiento del sistema del hospital,
especialmente en secciones que cargan muchos datos, como el listado de doctores o
citas.

Respuesta:
Se ha utilizado "Profiler" dentro de la pagina "App.jsx" para poder mostrar por consola los tiempos de carga de los distintos componentes de la pagina del hospital. Como se muestra a continuacion:

  const handleRender = (id, phase, actualDuration) => {
    console.log(`${id} render phase: ${phase}, duration: ${actualDuration}`);
  };

Creditos:
Imagenes sacada de buscador Google.