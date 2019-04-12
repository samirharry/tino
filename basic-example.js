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
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> Sistema de Capacitación</a> ",
	},

	security = {
		parent: cap_system,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> Seguridad</a> ",
	},
	online = {
		parent: cap_system,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> ONLINE </a> ",
	},
	gerencial = {
		parent: online,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> GERENCIAL </a> ",
	},
	mant_parametros = {
		parent: gerencial,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> MANTENIMIENTO DE PARAMETROS </a> ",
	},
	consulta = {
		parent: gerencial,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> CONSULTA </a> ",
	},
	operativo = {
		parent: online,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> OPERATIVO </a> ",
	},
	data_entry={
		parent: operativo,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> DATA-ENTRY </a> ",
	},
	matricula_entry={
		parent: data_entry,
		stackChildren: true,
		innerHTML: " <a href='matricula.html' class='btn btn-primary'  style=' width: 100%'> MATRICULA DE ALUMNOS </a> ",
	},
	registro_notas={
		parent: data_entry,
		stackChildren: true,
		innerHTML: " <a href='entradaDeNotas.html' class='btn btn-primary'  style=' width: 100%'> REGISTRO DE LAS NOTAS </a> ",
	},
	registro_asistencia={
		parent: data_entry,
		stackChildren: true,
		innerHTML: " <a href='reporteDeAsistencia.html' class='btn btn-primary'  style=' width: 100%'> REGISTRO DE LAS ASISTENCIAS </a> ",
	},
	reportes= {
		parent: operativo,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> REPORTES </a> ",
	}
	batch = {
		parent: cap_system,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> BATCH </a> ",
	},
	aplicativo = {
		parent: batch,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> APLICATIVO </a> ",
	},
	actualizacion_bd ={
		parent: aplicativo,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> ACTUALIZACION DE LA BASE DE DATOS </a> ",
	},
	estadisticas ={
		parent: aplicativo,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> ESTADISTICAS </a> ",
	},
	tecnico={
		parent: batch,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> TECNICO </a> ",
	},
	mant_bd={
		parent: tecnico,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'  style=' width: 100%'> MANTENIMIENTO DE LA BASE DE DATOS </a> ",
	},
	contingencia={
		parent: tecnico,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary' style=' width: 100%'> CONTINGENCIA </a> ",
	}
	
	

chart_config = [
	config,
	cap_system,
	security,
	online,
	batch,
	gerencial,
	mant_parametros,
	consulta,
	operativo,
	data_entry,
	matricula_entry,
	registro_asistencia,
	registro_notas,
	reportes,
	aplicativo,
	actualizacion_bd,
	estadisticas,
	tecnico,
	mant_bd,
	contingencia
];