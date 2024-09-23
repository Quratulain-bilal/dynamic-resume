// Function to generate the resume
var generateUserResume = (): void => {
  const getInputValue = (id: string): string => {
    const element = document.getElementById(id) as HTMLInputElement | null;
    return element ? element.value : "";
  };

  // Gather input values
  const name = getInputValue("name");
  const email = getInputValue("email");
  const phone = getInputValue("phone");
  const address = getInputValue("address");
  const jobTitle = getInputValue("jobTitle");
  const company = getInputValue("company");
  const years = getInputValue("years");
  const school = getInputValue("school");
  const degree = getInputValue("degree");
  const gradYear = getInputValue("gradYear");
  const skills = getInputValue("skills");
  const languages = getInputValue("languages");

  // Function to set display values
  const setDisplayValue = (id: string, value: string): void => {
    const displayElement = document.getElementById(id);
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
  const fileInputElement = document.getElementById(
    "resumePic"
  ) as HTMLInputElement | null;
  const displayPicElement = document.getElementById(
    "displayPic"
  ) as HTMLImageElement | null;

  if (fileInputElement?.files && fileInputElement.files.length > 0) {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target?.result && displayPicElement) {
        displayPicElement.src = e.target.result as string;
        displayPicElement.style.display = "block";
      }
    };
    reader.readAsDataURL(fileInputElement.files[0]);
  }

  // Show the generated resume
  const resumeDisplayElement = document.getElementById("resumeDisplay");
  if (resumeDisplayElement) {
    resumeDisplayElement.classList.remove("hidden");
  }
};

// Event listener setup function
var initializeUserResumeEventListeners = (): void => {
  const generateResumeButton = document.getElementById("generateResume");
  if (generateResumeButton) {
    generateResumeButton.addEventListener("click", generateUserResume);
  }
};

// Initialize event listeners when the document is ready
document.addEventListener(
  "DOMContentLoaded",
  initializeUserResumeEventListeners
);
