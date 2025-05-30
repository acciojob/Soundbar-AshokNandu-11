//your JS code here. If required.
const sounds = [applause, boo, gasp, tada, victory, wrong, stop];
const container = document.getElementById("container-buttons");
sounds.forEach(sound ()=>{
	const btn = document.createElement("button");
	btn.innerText = sound;

	btn.addEventListener('click',()=>{
		const audio = new Audio(`sounds/${sound}`.mp3);
		audio.play();
	});
	container.appendChild(btn);
});