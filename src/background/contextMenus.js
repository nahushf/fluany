import { getInLocal } from '../popup/store/LocalStore';
import 'babel-polyfill';

const handleShowFluany = (info, tab) => {
	console.log('info: ', info);
	let props = {
    url: chrome.extension.getURL('popup/index.html'),
    height: 450,
    width: 715,
    type: "popup",
		focused: true
	};

	chrome.windows.create(props);
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

const contextEditPacks = async () => {
	const parent = chrome.contextMenus.create({"title": "Editar pacote"});
	const packs = await getInLocal('packState');
	packs.forEach((pack) => {
		chrome.contextMenus.create(
			{ "title": pack.title,
				"id": pack.id.toString(),
				"parentId": parent,
				"onclick": handleClickPackEdit });
	});
};

contextShowFluany();
contextsToGetText();
contextEditPacks();


