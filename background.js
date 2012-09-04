var local = "http://d/clients/";
var remote = "http://";
var dubs = "http://www."

function updateUrl(tab){
  if(tab.url.match(local))
  {
      var newurl = tab.url.replace(local, remote);
  } 
  else if(tab.url.match(dubs))
  {
      var newurl = tab.url.replace(dubs, local);
  } 
  else {
      var newurl = tab.url.replace(remote, local);
  }
  chrome.tabs.update(tab.id, {url: newurl});
}

chrome.browserAction.onClicked.addListener(function(tab) {updateUrl(tab);});
