const handleShowFluany = (info, tab) => {
	console.log('info: ', info);
};

const contextShowFluany = () => {
	let id = chrome.contextMenus.create(
		{ "title": 'Abrir fluany',
		  "contexts": ["page"],
		  "onclick": handleShowFluany });
};


const handleContextsToGetText = (info, tab) => {
	console.log('info: ', info);
};

const contextsToGetText = () => {
	const contexts = ["selection", "link"];
	contexts.forEach(context => {
		let id = chrome.contextMenus.create(
			{ "title": 'Adicionar em um pacote',
				"contexts": [context],
			  "onclick": handleContextsToGetText });
	});
};

const handleClickPackEdit = (info, tab) => {
	console.log('info: ', info);
};

const contextEditPacks = () => {
	let parent = chrome.contextMenus.create({"title": "Editar pacote"});

	let pack1 = chrome.contextMenus.create(
		{ "title": "Pacote 1",
			"parentId": parent,
			"onclick": handleClickPackEdit });

	let pack2 = chrome.contextMenus.create(
		{ "title": "Pacote 2",
			"parentId": parent,
			"onclick": handleClickPackEdit });
};

contextShowFluany();
contextsToGetText();
contextEditPacks();

//Packs Edit
