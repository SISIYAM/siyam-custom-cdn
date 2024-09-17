// Function to open modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("show-modal");
  }
}

// Function to close modal
function closeModal() {
  const openModal = document.querySelector(".modal-md-ui.show-modal");
  if (openModal) {
    openModal.classList.remove("show-modal");
  }
}

// Attach click event listeners to all buttons with data-target attribute
document.querySelectorAll(".open-modal-md-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const modalId = button.getAttribute("data-target");
    openModal(modalId);
  });
});

// Attach click event to all close buttons
document.querySelectorAll(".modal-md-close-btn").forEach((button) => {
  button.addEventListener("click", closeModal);
});

const dropdownTrigger = document.querySelector(".dropdown-trigger");
const dropdownMenu = document.querySelector(".dropdown-menu-ui");

dropdownTrigger.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (!e.target.matches(".dropdown-trigger")) {
    dropdownMenu.classList.remove("show");
  }
});

// Render switches
function renderToggleSwitches() {
  const toggleSwitchElements = document.querySelectorAll(".toggleSwitch-ui");

  toggleSwitchElements.forEach((toggleSwitchElement) => {
    const label = toggleSwitchElement.getAttribute("data-label");
    const customClass = toggleSwitchElement.getAttribute("data-class") || "";
    const labelClass = toggleSwitchElement.getAttribute("label-class") || "";
    const isChecked =
      toggleSwitchElement.getAttribute("data-checked") === "true";
    const isDisabled =
      toggleSwitchElement.getAttribute("data-disabled") === "true";
    const inputName = toggleSwitchElement.getAttribute("data-name") || "";
    const inputValue = toggleSwitchElement.getAttribute("data-value") || "";
    const inputId = toggleSwitchElement.getAttribute("data-id") || "";
    const className = toggleSwitchElement.getAttribute("data-class") || "";
    const isRequired =
      toggleSwitchElement.getAttribute("data-required") === "true";
    const hasAutofocus =
      toggleSwitchElement.getAttribute("data-autofocus") === "true";
    const inputTitle = toggleSwitchElement.getAttribute("data-title") || "";
    const ariaLabel = toggleSwitchElement.getAttribute("aria-label") || "";
    const tabIndex = toggleSwitchElement.getAttribute("data-tabindex") || "";
    const toggleSwitchHTML = `
      <div class="container-switch ${customClass}">
        <label class="switch-label">
      <input 
      type="checkbox" 
      class="switch-input"
      name="${inputName}" 
      value="${inputValue}" 
      id="${inputId}" 
      ${isChecked ? "checked" : ""}
      ${isDisabled ? "disabled" : ""}
      ${isRequired ? "required" : ""}
      ${hasAutofocus ? "autofocus" : ""}
      title="${inputTitle}"
      aria-label="${ariaLabel}"
      tabindex="${tabIndex}"
    />
          <span class="switch-slider ${className}"></span>
        </label>
        ${label ? `<span class="${labelClass}">${label}</span>` : ""}
      </div>
    `;

    toggleSwitchElement.innerHTML = toggleSwitchHTML;
  });

  // Select all line switch elements
  const lineSwitchToggle = document.querySelectorAll(".switch-line");

  lineSwitchToggle.forEach((switchElement) => {
    const isChecked = switchElement.getAttribute("data-checked") === "true";
    const isDisabled = switchElement.getAttribute("data-disabled") === "true";
    const inputName = switchElement.getAttribute("data-name") || "";
    const inputValue = switchElement.getAttribute("data-value") || "";
    const inputId = switchElement.getAttribute("data-id") || "";
    const className = switchElement.getAttribute("data-class") || "";
    const isRequired = switchElement.getAttribute("data-required") === "true";
    const hasAutofocus =
      switchElement.getAttribute("data-autofocus") === "true";
    const inputTitle = switchElement.getAttribute("data-title") || "";
    const ariaLabel = switchElement.getAttribute("aria-label") || "";
    const tabIndex = switchElement.getAttribute("data-tabindex") || "";

    const checkBoxHTML = `
    <input 
      type="checkbox" 
      class="${className}"
      name="${inputName}" 
      value="${inputValue}" 
      id="${inputId}" 
      ${isChecked ? "checked" : ""}
      ${isDisabled ? "disabled" : ""}
      ${isRequired ? "required" : ""}
      ${hasAutofocus ? "autofocus" : ""}
      title="${inputTitle}"
      aria-label="${ariaLabel}"
      tabindex="${tabIndex}"
    />
  `;

    switchElement.innerHTML = checkBoxHTML;
  });

  // Function to toggle the active state and checkbox state
  function toggleSwitch() {
    // Toggle the 'active' class on the switch
    this.classList.toggle("active");

    // Find the checkbox within the switch
    const checkbox = this.querySelector("input[type='checkbox']");

    if (checkbox) {
      // Trigger the checkbox's click event to toggle its checked state
      checkbox.click();

      // Toggle the 'active' class on the switch
      this.classList.toggle("active", checkbox.checked);

      // Update the data-checked attribute to reflect the checkbox state
      this.setAttribute("data-checked", checkbox.checked ? "true" : "false");
    }
  }

  // Add click event listener to each switch
  lineSwitchToggle.forEach((btn) => {
    btn.addEventListener("click", toggleSwitch);
  });

  // Ensure initial synchronization on page load
  lineSwitchToggle.forEach((switchElement) => {
    const checkbox = switchElement.querySelector("input[type='checkbox']");

    if (checkbox) {
      // Sync the switch state with the checkbox state
      if (checkbox.checked) {
        switchElement.classList.add("active");
      } else {
        switchElement.classList.remove("active");
      }
    }
  });
}

// Reder checkboxes
function renderCheckbox() {
  const checkBoxes = document.querySelectorAll(".checkBox-ui");

  checkBoxes.forEach((checkBoxElement) => {
    const isChecked = checkBoxElement.getAttribute("data-checked") === "true";
    const isDisabled = checkBoxElement.getAttribute("data-disabled") === "true";
    const inputName = checkBoxElement.getAttribute("data-name") || "";
    const inputValue = checkBoxElement.getAttribute("data-value") || "";
    const inputId = checkBoxElement.getAttribute("data-id") || "";
    const customClass = checkBoxElement.getAttribute("data-class") || "";
    const labelText = checkBoxElement.getAttribute("data-label") || "";
    const labelClass = checkBoxElement.getAttribute("label-class") || "";
    const isRequired = checkBoxElement.getAttribute("data-required") === "true";
    const hasAutofocus =
      checkBoxElement.getAttribute("data-autofocus") === "true";
    const inputTitle = checkBoxElement.getAttribute("data-title") || "";
    const ariaLabel = checkBoxElement.getAttribute("aria-label") || "";
    const tabIndex = checkBoxElement.getAttribute("data-tabindex") || "";

    const checkBoxHTML = `
      <label class="checkbox ${customClass}">
          <input 
            type="checkbox" 
            name="${inputName || ""}" 
            value="${inputValue}" 
            id="${inputId}" 
            ${isChecked ? "checked" : ""}
            ${isDisabled ? "disabled" : ""}
            ${isRequired ? "required" : ""}
            ${hasAutofocus ? "autofocus" : ""}
            title="${inputTitle}"
            aria-label="${ariaLabel}"
            tabindex="${tabIndex}"
          />
          <span class="checkmark"></span>
          ${labelText ? `<span class="${labelClass}">${labelText}</span>` : ""}
        </label>
    `;

    checkBoxElement.innerHTML = checkBoxHTML;
  });
}

// Render loader
function renderLoader() {
  const loaders = document.querySelectorAll(".loader-circle");

  loaders.forEach((loaderElement) => {
    const customClass = loaderElement.getAttribute("data-class") || "";
    const ariaLabel = loaderElement.getAttribute("aria-label") || "";

    const loaderHTML = ` <div class="progress-circle ${customClass}" aria-label="${ariaLabel}"></div>`;
    loaderElement.innerHTML = loaderHTML;
  });
}

// Function for render
// Call the function to render all switches
renderToggleSwitches();
// Call the function to render all checkboxes
renderCheckbox();
// Call the function to render all progress loader
renderLoader();

// document.querySelectorAll(".switch-line").forEach((btn) => {
//   btn.addEventListener("click", function () {
//     // `this` refers to the clicked `.switch-line` element
//     const checkbox = this.querySelector("input[type='checkbox']");

//     if (checkbox && checkbox.checked) {
//       alert(checkbox.value);
//     }
//   });
// });

const loveSwitch = document.querySelector("#loveSwitch");

loveSwitch.addEventListener("click", function () {
  if (loveSwitch.checked) {
    console.log(loveSwitch.value);
  } else {
    console.log("Check kora hoy nai");
  }
});

const AssignSwitch = document.querySelector("#AssignSwitch");

AssignSwitch.addEventListener("click", function () {
  if (AssignSwitch.checked) {
    console.log(AssignSwitch.value);
  } else {
    console.log("Check kora hoy nai");
  }
});
