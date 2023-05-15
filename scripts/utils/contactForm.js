function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  document.getElementById("prenom").focus();
  // Add Tab key
  modal.addEventListener("keydown", trapTabKey);

  const photographerName =
    document.getElementById("photographerName").textContent;
  const contactName = document.querySelector(".contactName");
  contactName.textContent = `${photographerName}`;
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  // document.getElementById("closeContactForm").focus();
  // Remove Tab key when closed
  modal.removeEventListener("keydown", trapTabKey);
}

function trapTabKey(e) {
  debugger;
  const modal = document.getElementById("contact_modal");
  // Restrict to only the focusable elements within the modal
  const focusableElements = modal.querySelectorAll(
    'input[type="text"], input[type="email"], button, #closeContactForm'
  );
  // First element is index (0)
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  // If Tab key was pressed (9 represents the Tab key)
  if (e.key == "Tab") {
    if (e.shiftKey) {
      // If focus is on the first element, set it to the last
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else {
        // If focus is on the last element, set it to the first
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  }
}
