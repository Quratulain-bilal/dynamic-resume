// Function to generate the resume
var generateUserResume = function () {
    var getInputValue = function (id) {
        var element = document.getElementById(id);
        return element ? element.value : "";
    };
    // Gather input values
    var name = getInputValue("name");
    var email = getInputValue("email");
    var phone = getInputValue("phone");
    var address = getInputValue("address");
    var jobTitle = getInputValue("jobTitle");
    var company = getInputValue("company");
    var years = getInputValue("years");
    var school = getInputValue("school");
    var degree = getInputValue("degree");
    var gradYear = getInputValue("gradYear");
    var skills = getInputValue("skills");
    var languages = getInputValue("languages");
    // Function to set display values
    var setDisplayValue = function (id, value) {
        var displayElement = document.getElementById(id);
        if (displayElement) {
            displayElement.innerText = value;
        }
    };
    // Display values
    setDisplayValue("displayName", name);
    setDisplayValue("displayEmail", email);
    setDisplayValue("displayPhone", phone);
    setDisplayValue("displayAddress", address);
    setDisplayValue("displayJobTitle", jobTitle);
    setDisplayValue("displayCompany", company);
    setDisplayValue("displayYears", years);
    setDisplayValue("displaySchool", school);
    setDisplayValue("displayDegree", degree);
    setDisplayValue("displayGradYear", gradYear);
    setDisplayValue("displaySkills", skills);
    setDisplayValue("displayLanguages", languages);
    // Handle picture upload
    var fileInputElement = document.getElementById("resumePic");
    var displayPicElement = document.getElementById("displayPic");
    if ((fileInputElement === null || fileInputElement === void 0 ? void 0 : fileInputElement.files) && fileInputElement.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if (((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) && displayPicElement) {
                displayPicElement.src = e.target.result;
                displayPicElement.style.display = "block";
            }
        };
        reader.readAsDataURL(fileInputElement.files[0]);
    }
    // Show the generated resume
    var resumeDisplayElement = document.getElementById("resumeDisplay");
    if (resumeDisplayElement) {
        resumeDisplayElement.classList.remove("hidden");
    }
};
// Event listener setup function
var initializeUserResumeEventListeners = function () {
    var generateResumeButton = document.getElementById("generateResume");
    if (generateResumeButton) {
        generateResumeButton.addEventListener("click", generateUserResume);
    }
};
// Initialize event listeners when the document is ready
document.addEventListener("DOMContentLoaded", initializeUserResumeEventListeners);
