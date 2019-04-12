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
		innerHTML: " <a href='#' class='btn btn-primary'> Sistema de Capacitación</a> ",
	},

	security = {
		parent: cap_system,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'> Seguridad</a> ",
	},
	online = {
		parent: cap_system,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'> ONLINE </a> ",
	},
	batch = {
		parent: cap_system,
		stackChildren: true,
		innerHTML: " <a href='#' class='btn btn-primary'> BATCH </a> ",
	}
	

chart_config = [
	config,
	cap_system,
	security,
	online,
	batch
];