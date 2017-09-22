import { getInLocal, saveInLocal } from '../popup/store/LocalStore';
import 'babel-polyfill';

const PARENT_CONTEXT_ADD_PACKAGES = chrome.contextMenus.create({"title": 'Adicionar em um pacote', "contexts": ['selection']});
const PARENT_CONTEXT_EDIT_PACKAGES = chrome.contextMenus.create({"title": "Editar pacote"});

const handleShowFluany = (info, tab) => {
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

	chrome.windows.onRemoved.addListener(() => {
		saveInLocal('openInPackage', null);
	});
};


const handleContextsToGetText = (info, tab) => {
  const idPack = info.menuItemId.trim();
  saveInLocal('openNewCard', info.selectionText);
	saveInLocal('openInPackage', info.menuItemId.trim());
  handleClickPackEdit(info, tab);
};

const contextsToGetText = async () => {
	const packs = await getInLocal('packState');
	packs.forEach((pack) => {
		chrome.contextMenus.create(
			{ "title": pack.title,
				"id": pack.id+' ',
				"parentId": PARENT_CONTEXT_ADD_PACKAGES,
        "contexts": ['selection'],
				"onclick": handleContextsToGetText });
	});
};

export const updateContextToPacks = (pack) => {
  chrome.contextMenus.create(
    { "title": pack.title,
      "id": pack.id+' ',
      "parentId": PARENT_CONTEXT_ADD_PACKAGES,
      "contexts": ['selection'],
      "onclick": handleContextsToGetText });

  chrome.contextMenus.create(
    { "title": pack.title,
      "id": pack.id,
      "parentId": PARENT_CONTEXT_EDIT_PACKAGES,
      "onclick": handleClickPackEdit });
};

const handleClickPackEdit = (info, tab) => {
	let props = {
    url: chrome.extension.getURL('popup/index.html'),
    height: 450,
    width: 715,
    type: "popup",
		focused: true
	};

	chrome.windows.create(props);
};

const contextEditPacks = async () => {
  try{
    const packs = await getInLocal('packState');
    packs.forEach((pack) => {
      chrome.contextMenus.create(
        { "title": pack.title,
          "id": pack.id,
          "parentId": PARENT_CONTEXT_EDIT_PACKAGES,
          "onclick": handleClickPackEdit });
    });
  }catch(e){
  }
};

contextShowFluany();
contextsToGetText();
contextEditPacks();
