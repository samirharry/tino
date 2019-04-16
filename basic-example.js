var config = {
	container: "#basic-example",

	connesecurityrs: {
		type: 'step'
	},
	node: {
		HTMLclass: 'nodeExample1'
	}
},
	cap_system = {
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> Sistema de Capacitación</a> ",
	},

	security = {
		parent: cap_system,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='seguridad.html' class='btn btn-primary'  style=' width: 100%'> Seguridad</a> ",
	},
	online = {
		parent: cap_system,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> ONLINE </a> ",
	},
	gerencial = {
		parent: online,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> GERENCIAL </a> ",
	},
	mant_parametros = {
		parent: gerencial,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> MANTENIMIENTO DE PARAMETROS </a> ",
	},
	parametros_general = {
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoParametrosGenerales.html' class='btn btn-primary'  style=' width: 100%'> PARAMETROS GENERALES </a> ",
	},
	catalogo_aula={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoAula.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO AULA </a> ",
	},
	catalogo_capacitacion={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoCapacitacion.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO CAPACITACION </a> ",
	},
	catalogo_curso={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoCurso.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO CURSO </a> ",
	},
	catalogo_especialidad={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoEspecialidad.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO ESPECIALIDAD </a> ",
	},
	catalogo_gradoacadademico={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoGradoAcademico.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO GRADO ACADEMICO </a> ",
	},
	catalogo_horario={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoHorario.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO HORARIO </a> ",
	},
	catalogo_mallacurricular={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoMallaCurricular.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO MALLA CURRICULAR </a> ",
	},
	catalogo_periodo={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoMallaCurricular.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO PERIODO </a> ",
	},
	catalogo_prerequisitos={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoPreRequisitos.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO PRE REQUISITOS </a> ",
	},
	catalogo_seccion={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoSeccion.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO SECCION </a> ",
	},
	catalogo_sesion={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoSesion.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO SESION </a> ",
	},
	catalogo_silabo={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoSilabo.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO SILABO </a> ",
	},
	catalogo_sistemaevaluacion={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoSistemaDeEvaluacion.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO SISTEMA DE EVALUACION </a> ",
	},
	catalogo_sustitutorio={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoSustiturio.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO SUSTITUTORIO </a> ",
	},
	catalogo_temas={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='CatalogoTemas.html' class='btn btn-primary'  style=' width: 100%'> 	CATALOGO TEMAS </a> ",
	},
	tipo_alumno={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='TipoAlumno.html' class='btn btn-primary'  style=' width: 100%'> 	TIPO ALUMNO </a> ",
	},
	tipo_curso={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='TipoAlumno.html' class='btn btn-primary'  style=' width: 100%'> 	TIPO CURSO </a> ",
	},
	tipo_cursocategoria={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='TipoCursoCategoria.html' class='btn btn-primary'  style=' width: 100%'> 	TIPO CURSO CATEGORIA</a> ",
	},
	tipo_periodo={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='TipoPeriodo.html' class='btn btn-primary'  style=' width: 100%'> 	TIPO PERIODO</a> ",
	},
	tipo_prueba={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='TipoPrueba.html' class='btn btn-primary'  style=' width: 100%'> 	TIPO PRUEBA</a> ",
	},
	tipo_aula={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='TipoAula.html' class='btn btn-primary'  style=' width: 100%'> 	TIPO AULA</a> ",
	},
	tipo_seccion={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='TipoSeccion.html' class='btn btn-primary'  style=' width: 100%'> 	TIPO SECCION</a> ",
	},
	tipo_profesor={
		parent: mant_parametros,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='TipoProfesor.html' class='btn btn-primary'  style=' width: 100%'> 	TIPO PROFESOR</a> ",
	},
	consulta = {
		parent: gerencial,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> CONSULTA </a> ",
	},
	ranking_alumnos = {
		parent: consulta,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='consultaRankingAlumnosGerencial.html' class='btn btn-primary'  style=' width: 100%'> RANKING ALUMNOS </a> ",
	},
	consulta_asistencia_gerencial = {
		parent: consulta,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='consultaAsistenciaGerencial.html' class='btn btn-primary'  style=' width: 100%'> CONSULTA ASISTENCIA </a> ",
	},
	consulta_cursos_solicitados = {
		parent: consulta,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='consultaCursosMasSolicitados.html' class='btn btn-primary'  style=' width: 100%'> CONSULTA CURSOS MAS SOLICITADOS </a> ",
	},
	consulta_notas_gerencial = {
		parent: consulta,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='consultaNotasGerencial.html' class='btn btn-primary'  style=' width: 100%'> CONSULTA DE NOTAS </a> ",
	},
	consulta_avance = {
		parent: consulta,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='consultaAvance.html' class='btn btn-primary'  style=' width: 100%'> CONSULTA DE AVANCE </a> ",
	},
	operativo = {
		parent: online,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> OPERATIVO </a> ",
	},
	data_entry={
		parent: operativo,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> DATA-ENTRY </a> ",
	},
	matricula_entry={
		parent: data_entry,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='entradaMatricula.html' class='btn btn-primary'  style=' width: 100%'> MATRICULA DE ALUMNOS </a> ",
	},
	reclamos_entry={
		parent: data_entry,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='EntradaReclamo.html' class='btn btn-primary'  style=' width: 100%'> RECLAMO DE NOTAS </a> ",
	},
	registro_notas={
		parent: data_entry,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='entradaNotas.html' class='btn btn-primary'  style=' width: 100%'> REGISTRO DE LAS NOTAS </a> ",
	},
	registro_asistencia={
		parent: data_entry,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='entradaAsistencia.html' class='btn btn-primary'  style=' width: 100%'> REGISTRO DE LAS ASISTENCIAS </a> ",
	},
	reportes= {
		parent: operativo,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> REPORTES </a> ",
	},
	reporteAsistenciaProfesor= {
		parent: reportes,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='reporteAsitenciaProfesor.html' class='btn btn-primary'  style=' width: 100%'> REPORTES ASISTENCIA PROFESOR</a> ",
	},
	reporteMisCursos= {
		parent: reportes,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='reporteMisCursos.html' class='btn btn-primary'  style=' width: 100%'> REPORTE MIS CURSOS </a> ",
	},
	reporteMisNotas= {
		parent: reportes,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='reporteMisNotas.html' class='btn btn-primary'  style=' width: 100%'> REPORTE MIS NOTAS </a> ",
	},
	batch = {
		parent: cap_system,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> BATCH </a> ",
	},
	aplicativo = {
		parent: batch,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> APLICATIVO </a> ",
	},
	actualizacion_bd ={
		parent: aplicativo,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> ACTUALIZACION DE LA BASE DE DATOS </a> ",
	},
	registro_alumno ={
		parent: actualizacion_bd,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='registroAlumnos.html' class='btn btn-primary'  style=' width: 100%'> REGISTRO DE ALUMNOS </a> ",
	},
	registro_profesor ={
		parent: actualizacion_bd,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='registroProfesores.html' class='btn btn-primary'  style=' width: 100%'> REGISTRO DE PROFESORES </a> ",
	},
	estadisticas ={
		parent: aplicativo,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> ESTADISTICAS </a> ",
	},
	tecnico={
		parent: batch,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> TECNICO </a> ",
	},
	mant_bd={
		parent: tecnico,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary'  style=' width: 100%'> MANTENIMIENTO DE LA BASE DE DATOS </a> ",
	},
	backup={
		parent: mant_bd,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='backup.html' class='btn btn-primary' style=' width: 100%'> BACKUP </a> ",
	},
	contingencia={
		parent: tecnico,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='#' class='btn btn-primary' style=' width: 100%'> CONTINGENCIA </a> ",
	},
	restauracion_bd={
		parent: contingencia,
		stackChildren: true,
		innerHTML: " <a target='_blank' href='restauracionDeBaseDeDatos.html' class='btn btn-primary' style=' width: 100%'> RESTAURACION DE BASE DE DATOS </a> ",
	}
	
	

chart_config = [
	config,
	cap_system,
	security,
	online,
	batch,
	gerencial,
	mant_parametros,
	parametros_general,
	catalogo_aula,
	catalogo_capacitacion,
	catalogo_curso,
	catalogo_especialidad,
	catalogo_gradoacadademico,
	catalogo_horario,
	catalogo_mallacurricular,
	catalogo_periodo,
	catalogo_prerequisitos,
	catalogo_seccion,
	catalogo_sesion,
	catalogo_silabo,
	catalogo_sistemaevaluacion,
	catalogo_sustitutorio,
	catalogo_temas,
	tipo_alumno,
	tipo_curso,
	tipo_cursocategoria,
	tipo_periodo,
	tipo_profesor,
	tipo_prueba,
	tipo_aula,
	tipo_seccion,
	consulta,
	ranking_alumnos,
	consulta_asistencia_gerencial,
	consulta_avance,
	consulta_cursos_solicitados,
	consulta_notas_gerencial,
	operativo,
	data_entry,
	matricula_entry,
	reclamos_entry,
	registro_asistencia,
	registro_notas,
	reportes,
	reporteAsistenciaProfesor,
	reporteMisCursos,
	reporteMisNotas,
	aplicativo,
	actualizacion_bd,
	registro_alumno,
	registro_profesor,
	estadisticas,
	tecnico,
	mant_bd,
	backup,
	contingencia,
	restauracion_bd
];