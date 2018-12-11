console.log("background running")

chrome.runtime.onMessage.addListener(reciever)

window.word ="welcome to word lookup";
function reciever(request,sender,sendResponse){
	console.log(request)
	word=request.text;
}