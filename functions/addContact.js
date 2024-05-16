const addModal = document.getElementById("addModal");
const addNameInput = document.getElementById("addName");
const addPhoneInput = document.getElementById("addPhone");
const saveNewContactButton = document.getElementById("saveNewContact");
const addContactButton = document.getElementById("addContact");

function openAddModal() {
  addNameInput.value = "";
  addPhoneInput.value = "";
  addModal.style.display = "flex";
}

function closeAddModal() {
  addModal.style.display = "none";
}

function saveNewContact() {
  const newName = addNameInput.value;
  const newPhone = addPhoneInput.value;
  try {
    if (
      typeof newName === "string" &&
      newName.trim() !== "" &&
      /^[a-zA-Z\s]+$/.test(newName) &&
      !isNaN(newPhone) &&
      newPhone.trim() !== "" &&
      newPhone.length === 10
    ) {
      const newContact = {
        id: generateUniqueId(),
        name: newName,
        phone: newPhone,
      };

      addContact(newContact);
      closeAddModal();
    } else {
      alert(
        "Por favor, complete todos los campos o verifique los datos ingresados."
      );
    }
  } catch (error) {
    console.error("Error adding contact:", error.message);
  }
}

saveNewContactButton.addEventListener("click", saveNewContact);
addContactButton.addEventListener("click", openAddModal);
