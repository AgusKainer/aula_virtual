const Calificaciones = require("./entitys/Calificaciones");
const Clases = require("./entitys/Clases");
const Cursos = require("./entitys/Cursos");
const Evaluaciones = require("./entitys/Evaluaciones");
const Grabaciones = require("./entitys/Grabaciones");
const Inscripciones = require("./entitys/Inscripciones");
const MaterialesEstudio = require("./entitys/MaterialEstudio");
const Mensajes = require("./entitys/Mensajes");
const Pagos = require("./entitys/Pagos");
const Usuarios = require("./entitys/Usuarios");

Usuarios.belongsToMany(Cursos, {
  through: Inscripciones,
  foreignKey: "alumno_id",
  otherKey: "curso_id",
});
Cursos.belongsToMany(Usuarios, {
  through: Inscripciones,
  foreignKey: "curso_id",
  otherKey: "alumno_id",
});
////////////
Usuarios.hasMany(Cursos);
Cursos.belongsToMany(Usuarios);
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
Usuarios.hasMany(Calificaciones, {
  foreignKey: "alumno_id",
});
Calificaciones.belongsTo(Usuarios);
////////////
models.Usuario.hasMany(models.Mensaje, {
  foreignKey: "remitente_id",
});

models.Usuario.hasMany(models.Mensaje, {
  foreignKey: "destinatario_id",
});

models.Mensaje.belongsTo(models.Usuario, {
  foreignKey: "remitente_id",
});

models.Mensaje.belongsTo(models.Usuario, {
  foreignKey: "destinatario_id",
});
////////

Usuarios.hasMany(Pagos, {
  foreignKey: "alumno_id",
});
Pagos.belongsTo(Usuarios);

module.exports = {
  Usuarios,
  Cursos,
  Clases,
  Grabaciones,
  Evaluaciones,
  Calificaciones,
  Inscripciones,
  MaterialesEstudio,
  Mensajes,
  Pagos,
};

/*
users ⇄ courses (N:M) → Tabla enrollments. 👍

users (profesores) ⇄ courses (1:N).👍

courses ⇄ classes (1:N).👍

classes ⇄ recordings (1:N).👍

courses ⇄ study_materials (1:N).👍

courses ⇄ evaluations (1:N).👍

evaluations ⇄ grades (1:N).👍

users (alumnos) ⇄ grades (1:N).👍

users ⇄ messages (1:N para remitente y destinatario).👍

users ⇄ payments (1:N).👍
*/
