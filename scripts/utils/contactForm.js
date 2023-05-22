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
  // Remove Tab key when closed
  modal.removeEventListener("keydown", trapTabKey);
}

function trapTabKey(event) {
  const modal = document.getElementById("contact_modal");
  // Restrict to only the focusable elements within the modal
  const focusableElements = modal.querySelectorAll(
    'input[type="text"], input[type="email"], button, #closeContactForm'
  );
  // First element is index (0)
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  // If Tab key was pressed (9 represents the Tab key)
  if (event.key == "Tab") {
    if (event.shiftKey) {
      // If focus is on the first element, set it to the last
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // If focus is on the last element, set it to the first
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  } else if (event.key === "Enter") {
    const closeContactForm = document.getElementById("closeContactForm");
    // If focus is on X, the enter key closes the modal
    if (document.activeElement === closeContactForm) {
      event.preventDefault();
      closeModal();
    }
  }
}
