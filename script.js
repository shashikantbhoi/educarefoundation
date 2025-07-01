const form = document.getElementById("multiStepForm");

form.addEventListener("submit", function (e) {
  const fullName = form.elements["fullName"].value.trim();
  const fathersName = form.elements["fathersName"].value.trim();
  const mobile = form.elements["mobile"].value.trim();
  const altMobile = form.elements["altMobile"].value.trim();

  // Validate full name format: Last First [Middle]
  const fullNameParts = fullName.split(" ");
  if (fullNameParts.length < 2 || fullNameParts.length > 3) {
    alert("Full Name must include at least Last and First name (max 3 words).");
    e.preventDefault();
    return;
  }

  // Validate father's name: at least 2 words
  if (fathersName.split(" ").length < 2) {
    alert("Father's Name should include at least two words.");
    e.preventDefault();
    return;
  }

  // Validate mobile number
  if (!/^\d{10}$/.test(mobile)) {
    alert("Mobile Number must be exactly 10 digits.");
    e.preventDefault();
    return;
  }

  // Validate alternate number if entered
  if (altMobile && !/^\d{10}$/.test(altMobile)) {
    alert("Alternate Mobile Number must be exactly 10 digits.");
    e.preventDefault();
    return;
  }

  // If all validations pass, form will submit
});

//address details validation 

function validateStage2() {
  const address = form.elements["address"].value.trim();
  const city = form.elements["city"].value.trim();
  const district = form.elements["district"].value.trim();
  const state = form.elements["state"].value.trim();
  const pincode = form.elements["pincode"].value.trim();

  const nameRegex = /^[A-Za-z\s]{2,}$/;

  if (address === "") {
    alert("Full Address is required.");
    return false;
  }

  if (!nameRegex.test(city)) {
    alert("City must contain only letters and at least 2 characters.");
    return false;
  }

  if (!nameRegex.test(district)) {
    alert("District must contain only letters and at least 2 characters.");
    return false;
  }

  if (!nameRegex.test(state)) {
    alert("State must contain only letters and at least 2 characters.");
    return false;
  }

  if (!/^\d{6}$/.test(pincode)) {
    alert("Pin Code must be exactly 6 digits.");
    return false;
  }

  return true;
}
//academic details validation 
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("multiStepForm");

  const marksInput = document.getElementById("marksObtained");
  const totalInput = document.getElementById("totalMarks");
  const percentageInput = document.getElementById("percentage");

  // Auto-calculate percentage
  function calculatePercentage() {
    const marks = parseFloat(marksInput.value);
    const total = parseFloat(totalInput.value);

    if (!isNaN(marks) && !isNaN(total) && total > 0 && marks <= total) {
      const percentage = ((marks / total) * 100).toFixed(2);
      percentageInput.value = percentage + "%";
    } else {
      percentageInput.value = "";
    }
  }

  marksInput.addEventListener("input", calculatePercentage);
  totalInput.addEventListener("input", calculatePercentage);

  // Custom validation before final submission
  form.addEventListener("submit", (e) => {
    if (!validateStage3()) {
      e.preventDefault();
    }
  });

  function validateStage3() {
    const classValue = form.elements["class"].value.trim();
    const stream = form.elements["stream"].value;
    const board = form.elements["board"].value.trim();
    const marks = parseFloat(form.elements["marks"].value);
    const total = parseFloat(form.elements["totalMarks"].value);

    const marksheet = form.elements["marksheet"].files[0];
    const photo = form.elements["photo"].files[0];
    const aadhaar = form.elements["aadhaar"].files[0];
    const caste = form.elements["caste"].files[0];
    const income = form.elements["income"].files[0];

    const allowedDocs = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    const allowedPhotos = ['image/jpeg', 'image/jpg', 'image/png'];
    const alphaNumeric = /^[A-Za-z0-9\s]{2,}$/;

    if (!alphaNumeric.test(classValue)) {
      alert("Class must be at least 2 characters and use only letters/numbers.");
      return false;
    }

    if (!alphaNumeric.test(board)) {
      alert("Board/University must be at least 2 characters and use only letters/numbers.");
      return false;
    }

    if (stream === "") {
      alert("Please select your stream.");
      return false;
    }

    if (isNaN(marks) || isNaN(total) || marks < 0 || total <= 0 || marks > total) {
      alert("Please enter valid Marks and Total Marks (Total should be >= Marks).");
      return false;
    }

    if (!marksheet || !allowedDocs.includes(marksheet.type)) {
      alert("Upload a valid Marksheet (PDF, JPG, PNG).");
      return false;
    }

    if (!photo || !allowedPhotos.includes(photo.type)) {
      alert("Upload a valid Passport Photo (JPG, PNG).");
      return false;
    }

    if (!aadhaar || !allowedDocs.includes(aadhaar.type)) {
      alert("Upload a valid Aadhaar Card (PDF, JPG, PNG).");
      return false;
    }

    if (caste && !allowedDocs.includes(caste.type)) {
      alert("Caste Certificate must be PDF, JPG, or PNG.");
      return false;
    }

    if (income && !allowedDocs.includes(income.type)) {
      alert("Income Certificate must be PDF, JPG, or PNG.");
      return false;
    }

    return true;
  }
});


//form validation stage 4

function validateStage4() {
  const form = document.getElementById("multiStepForm");

  const school = form.elements["school"].value.trim();
  const course = form.elements["course"].value.trim();
  const year = form.elements["year"].value;
  const futurePlans = form.elements["futurePlans"].value.trim();
  const incomeRange = form.elements["incomeRange"].value;
  const occupation = form.elements["occupation"].value.trim();
  const siblings = form.elements["siblings"].value;
  const disabled = form.elements["disabled"].value;

  // Pattern for names, institutions, and occupations: at least 2 alphabetic characters
  const namePattern = /^[A-Za-z0-9\s\-.,()]{2,}$/;

  if (!namePattern.test(school)) {
    alert("Please enter a valid School/College Name (at least 2 characters).");
    return false;
  }

  if (!namePattern.test(course)) {
    alert("Please enter a valid Course/Program (at least 2 characters).");
    return false;
  }

  const validYears = ["1st Year", "2nd Year", "Final Year"];
  if (!validYears.includes(year)) {
    alert("Please select a valid Year of Study.");
    return false;
  }

  if (futurePlans.length > 100) {
    alert("Future Study Plans should not exceed 100 characters.");
    return false;
  }

  if (!incomeRange) {
    alert("Please select your Family Income Range.");
    return false;
  }

  if (!namePattern.test(occupation) || occupation.length < 3) {
    alert("Please enter a valid Parent Occupation (at least 3 characters).");
    return false;
  }

  if (siblings !== "") {
    const siblingsNum = parseInt(siblings);
    if (isNaN(siblingsNum) || siblingsNum < 0) {
      alert("Number of siblings must be a non-negative number.");
      return false;
    }
  }

  if (disabled !== "Yes" && disabled !== "No") {
    alert("Please select whether a disabled member is in your family.");
    return false;
  }

  return true;
}

//form validation stage 5
if (currentSection === 4) {
  const form = document.getElementById("multiStepForm");

  const laptop = form.elements["laptop"].value;
  const internet = form.elements["internet"].value;
  const currentDevice = form.elements["currentDevice"].value.trim();
  const dataConsent = form.querySelector('input[name="data_consent"]:checked');
  const altEmail = form.elements["altEmail"].value.trim();
  const whatsapp = form.elements["whatsapp"].value;
  const declaration = form.querySelector('input[name="declaration"]:checked');
  const userCaptcha = document.getElementById("user-captcha").value.trim();
  const generatedCaptcha = document.getElementById("generated-captcha").value.trim();

  // Validation rules
  const alphaNumPattern = /^[A-Za-z0-9\s\-.,()]{2,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!laptop || !internet || !whatsapp) {
    alert("Please answer all required questions.");
    return false;
  }

  if (!alphaNumPattern.test(currentDevice)) {
    alert("Enter a valid device name (min 2 characters).");
    return false;
  }

  if (!dataConsent || dataConsent.value !== "Yes") {
    alert("You must consent to data usage by selecting 'Yes'.");
    return false;
  }

  if (altEmail && !emailPattern.test(altEmail)) {
    alert("Please enter a valid alternate email.");
    return false;
  }

  if (!declaration) {
    alert("Please confirm the declaration checkbox.");
    return false;
  }

  if (!userCaptcha || userCaptcha !== generatedCaptcha) {
    alert("CAPTCHA does not match. Please try again.");
    return false;
  }
}
