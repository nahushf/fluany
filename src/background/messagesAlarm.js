import Alarm from 'shared/Alarms';

chrome.alarms.onAlarm.addListener(function( alarm ) {
  chrome.tabs.query({active: true, highlighted: true}, function(tabs) {
    const objMessages = { name: alarm.name,
                          trigger: "LOAD_PACK",
                          periodInMinutes: alarm.periodInMinutes };
    chrome.tabs.sendMessage(tabs[0].id, objMessages, function(response){
    });
  });
});

//run only when called the questions
chrome.runtime.onMessage.addListener(function( msg, sender, sendResponse){
	let alarm = new Alarm(msg.name, msg.periodInMinutes); //default
  if(typeof(msg.name) !== 'undefined' && msg.trigger === 'createAlarm'){
		alarm.create(); //returning after answer
		alarm.check(); //returning after answer
  }else if (typeof(msg.name) !== 'undefined' && msg.trigger === 'killAlarm'){
    alarm.cancel(); //waiting for response
  }
});
