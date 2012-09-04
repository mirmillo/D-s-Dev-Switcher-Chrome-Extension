var local = "http://d/clients/";
var remote = "http://";
var dubs = "http://www."

function updateUrl(tab){
  if(tab.url.match(local))
  {
      var newurl = tab.url.replace(local, remote);
      chrome.tabs.update(tab.id, {url: newurl});
  } 
  else if(tab.url.match(dubs))
  {
      var newurl = tab.url.replace(dubs, local);
      chrome.tabs.update(tab.id, {url: newurl});
  } 
  else {
      //var newurl = tab.url.replace(remote, local);
	  //var taburl = encodeURIComponent(tab.url);
	  //var newurl =  local + tab.url; 
      var newurl = tab.url.replace(remote, local);
	  //console.log( newurl );
      chrome.tabs.update(tab.id, {url: newurl});
  }
}

chrome.browserAction.onClicked.addListener(function(tab) {updateUrl(tab);});
