document.addEventListener("DOMContentLoaded", () => {
	document
		.querySelector("header .hamburger")
		.addEventListener("click", () => {
			document.querySelector(".ham-background").style.display = "block";
		});
	document
		.querySelector(".ham-background .cross")
		.addEventListener("click", () => {
			document.querySelector(".ham-background").style.display = "none";
		});
	let currentActiveTabSuccess = 1;
	let successTabs = [...document.querySelectorAll(".success .tab")];
	let successButtons = [...document.querySelectorAll(".success button")];
	successButtons.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			successTabs[currentActiveTabSuccess - 1].id = "";
			successTabs[index].id = "tab-active";
			successButtons[currentActiveTabSuccess - 1]
				.querySelector("path")
				.classList.remove("active-svg");
			successButtons[index]
				.querySelector("path")
				.classList.add("active-svg");
			currentActiveTabSuccess = index + 1;
		});
	});
	let currentActiveTabProgram = 1;
	let programTabs = [...document.querySelectorAll(".program-2 .tab")];
	let programButtons = [...document.querySelectorAll(".program-2 button")];
	programButtons.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			programTabs[currentActiveTabProgram - 1].id = "";
			programTabs[index].id = "tab-active";
			programButtons[currentActiveTabProgram - 1]
				.querySelector("path")
				.classList.remove("active-svg");
			programButtons[index]
				.querySelector("path")
				.classList.add("active-svg");
			currentActiveTabProgram = index + 1;
		});
	});
});
