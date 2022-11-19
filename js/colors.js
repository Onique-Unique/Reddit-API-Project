const shareButton = document.getElementById("share-button");
const sidebarTitleBG = document.querySelector(".sidebar-top span");
const bg=["#ff3381","#93f","#f56","#003cff", "#0000ff", "#8a2be2", "#d2691e", "#ed143d", "#00008b","#b8860b", "#006400", "#8b008b",]
const fg=["#111","#fff",]

function color(){
	let limit=bg.length;
	let index=Math.floor(Math.random()*limit);
	shareButton.style.background=bg[index];
	shareButton.style.color=fg[index];
	sidebarTitleBG.style.background=bg[index];
	sidebarTitleBG.style.color=fg[index];
}