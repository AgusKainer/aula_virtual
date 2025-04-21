const Administrador = require("./entitys/Administrador");
const Alumnos = require("./entitys/Alumnos");
const Calificaciones = require("./entitys/Calificaciones");
const Clases = require("./entitys/Clases");
const Cursos = require("./entitys/Cursos");
const Evaluaciones = require("./entitys/Evaluaciones");
const Grabaciones = require("./entitys/Grabaciones");
const Inscripciones = require("./entitys/Inscripciones");
const MaterialesEstudio = require("./entitys/MaterialEstudio");
const Mensajes = require("./entitys/Mensajes");
const Pagos = require("./entitys/Pagos");
const Profesor = require("./entitys/Profesor");

Alumnos.belongsToMany(Cursos, {
  through: Inscripciones,
  foreignKey: "alumno_id",
  otherKey: "curso_id",
});
Cursos.belongsToMany(Alumnos, {
  through: Inscripciones,
  foreignKey: "curso_id",
  otherKey: "alumno_id",
});
////////////
Cursos.belongsTo(Profesor, { foreignKey: "profesor_id" });
Profesor.hasMany(Cursos, { foreignKey: "profesor_id" });
////////////
Cursos.hasMany(Clases, {
  foreignKey: "curso_id",
});
Clases.belongsTo(Cursos);
///////////////
Clases.hasMany(Grabaciones, {
  foreignKey: "clase_id",
});
Grabaciones.belongsTo(Clases);
////////////
Cursos.hasMany(MaterialesEstudio, {
  foreignKey: "curso_id",
});
MaterialesEstudio.belongsTo(Cursos);
/////////////
Cursos.hasMany(Evaluaciones, {
  foreignKey: "curso_id",
});
Evaluaciones.belongsTo(Cursos);
////////////
Evaluaciones.hasMany(Calificaciones, {
  foreignKey: "evaluacion_id",
});
Calificaciones.belongsTo(Evaluaciones);
////////////
Alumnos.hasMany(Calificaciones, {
  foreignKey: "alumno_id",
});
Calificaciones.belongsTo(Alumnos);
////////////
Profesor.hasMany(Mensajes, {
  foreignKey: "remitente_id",
});

Alumnos.hasMany(Mensajes, {
  foreignKey: "destinatario_id",
});

Mensajes.belongsTo(Alumnos, {
  foreignKey: "remitente_id",
});

Mensajes.belongsTo(Profesor, {
  foreignKey: "destinatario_id",
});
////////

Alumnos.hasMany(Pagos, {
  foreignKey: "alumno_id",
});
Pagos.belongsTo(Alumnos);

module.exports = {
  Administrador,
  Alumnos,
  Cursos,
  Clases,
  Grabaciones,
  Evaluaciones,
  Calificaciones,
  Inscripciones,
  MaterialesEstudio,
  Mensajes,
  Pagos,
  Profesor,
};

/*
users ⇄ courses (N:M) → Tabla enrollments. 👍

users (profesores) ⇄ courses (1:N).

courses ⇄ classes (1:N).👍

classes ⇄ recordings (1:N).👍

courses ⇄ study_materials (1:N).👍

courses ⇄ evaluations (1:N).👍

evaluations ⇄ grades (1:N).👍

users (alumnos) ⇄ grades (1:N).👍

users ⇄ messages (1:N para remitente y destinatario).👍

users ⇄ payments (1:N).👍
*/
