const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const ageInput = document.getElementById("age");
const bioInput = document.getElementById("bio");

const previewName = document.getElementById("preview-name");
const previewJob = document.getElementById("preview-job");
const previewAge = document.getElementById("preview-age");
const previewBio = document.getElementById("preview-bio");

function updateProfile() {
    previewName.innerText = nameInput.value || "Not provided";
    previewJob.innerText = jobInput.value || "Not provided";
    previewAge.innerText = ageInput.value || "Not provided";
    previewBio.innerText = bioInput.value || "Not provided";
}

nameInput.addEventListener("input", updateProfile);
jobInput.addEventListener("input", updateProfile);
ageInput.addEventListener("input", updateProfile);
bioInput.addEventListener("input", updateProfile);