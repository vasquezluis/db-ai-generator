export const data = [
	{
		id: 1,
		title: 'Lenguaje natural',
		description:
			'Structura permite el ingreso de lenguaje natural para la generación de contenido.',
	},
	{
		id: 2,
		title: 'Inteligencia Artificial',
		description:
			'Structura utiliza modelos de OpenAI para generar el contenido SQL relacionado a la descripción del proyecto.',
	},
	{
		id: 3,
		title: 'Código',
		description:
			'Structura genera código SQL listo para copiar y pegar. Este código se crea en base a la descripción del proyecto',
	},
	{
		id: 4,
		title: 'Descripción',
		description:
			'Structura genera la descripción del código SQL generado, detallando cada tabla, consideraciones de seguridad y despliegue.',
	},
	{
		id: 5,
		title: 'Mapa mental',
		description:
			'Structura genera un mapa mental con la descripción generada, para visualizar de mejor manera el contenido.',
	},
]

export const script = `-- Crear la base de datos para la biblioteca
CREATE DATABASE Biblioteca;
USE Biblioteca;

-- Crear la tabla de estudiantes
CREATE TABLE Estudiantes (
    id_estudiante INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    fecha_registro DATE DEFAULT CURRENT_DATE,
    puntos INT DEFAULT 0
);

-- Crear la tabla de libros
CREATE TABLE Libros (
    id_libro INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    genero VARCHAR(50),
    anio_publicacion YEAR,
    puntos INT DEFAULT 10 -- puntos que otorga leer este libro
);`
