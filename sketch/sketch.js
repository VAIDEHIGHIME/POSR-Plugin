function setup() {
  noCanvas();

  let bgpage = chrome.extension.getBackgroundPage();
  let word = bgpage.word.trim();  
 
  
  let url='https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20181211T192813Z.145179bba6f4b153.f59afc6349a72382d0c64a47c61552cc1b8feaf8&lang=en-en&text='+word;
    
  url = url.replace(/\s+/g, '');
  loadJSON(url, gotData);

  function gotData(data) {
    createP(data.def[0].pos).style('font-size','48pt');
  }


  
}