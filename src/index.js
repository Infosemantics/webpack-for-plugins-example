
const api = {
	speak: console.log
}

function getPlugin() {
	return import("./plugin").then(({ default: entry }) => {
		entry(api)
	}).catch(speak)
}

getPlugin();