// const updateButton = document.getElementById("update-profile-button");
// updateButton.style.display = "none";


const form = document.querySelector(".edit-form");
const detailTitle = document.querySelector(".edit-form .detail-title");
const inputInfo = document.querySelector(".edit-form .input-info");
const input = document.querySelector(".edit-form input");
const formError = document.querySelector(".edit-form .form-error");
const submitBtn = document.querySelector(".edit-form .update-detail");
const cancelBtn = document.querySelector(".edit-form .cancel-detail");
const editObj = {
	form,
	title: detailTitle,
	inputInfo,
	input,
	error: formError,
	submitBtn,
	cancelBtn,
};
cancelBtn.addEventListener("click", () => {
	form.style.display = "none";
});

console.dir(editObj);
function updateProfile(detail) {
	editObj.form.style.display = "flex";
	editObj.title.innerHTML = "Update your " + detail;
	editObj.input.type =
		detail == "Picture" ? "file" : detail == "Number" ? "number" : "text";
	editObj.error.innerHTML = "";
   const inputUpdate = document.getElementById("inputUpdate")
   console.log(detail);
   inputUpdate.setAttribute('name', detail);
	////////////////////////////////////////////////
	////Write Code here to update database
	///////////////////////////////////////////////
}
