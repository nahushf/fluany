(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); 

if (process.env.NODE_ENV === 'production') {
  ga('create', 'UA-75932201-4', 'auto');
} else {
  ga('create', 'UA-75932201-3', 'auto');
}
//// Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
ga('set', 'checkProtocolTask', function(){});

ga('require', 'displayfeatures');

export function sendEventButton(eventCategory, eventLabel){
  ga('send', 'event', eventCategory, 'click', eventLabel);
}
