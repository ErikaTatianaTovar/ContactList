import { contacts, renderContactList, renderContact } from '../contactUtils';

const editModal = document.getElementById("editModal");
const editNameInput = document.getElementById("editName");
const editPhoneInput = document.getElementById("editPhone");
const saveEditedContactButton = document.getElementById("saveEditedContact");
const closeEditModalButton = document.getElementById("closeEditModal");

let selectedContactId;

function openEditModal(contactId) {
  try {
    const contact = contacts.find((contact) => contact.id === contactId);

    if (contact) {
      selectedContactId = contactId;
      editNameInput.value = contact.name;
      editPhoneInput.value = contact.phone;
      editModal.style.display = "flex";
    } else {
      alert("No se encontró el contacto");
    }
  } catch (error) {
    console.error("Error al abrir modal de edición: " + error.message);
  }
}

function closeEditModal() {
  editModal.style.display = "none";
}

function saveEditedContact() {
  const editedName = editNameInput.value;
  const editedPhone = editPhoneInput.value;

  try {
    if (
      typeof editedName === "string" &&
      editedName.trim() !== "" &&
      /^[a-zA-Z\s]+$/.test(editedName) &&
      !isNaN(editedPhone) &&
      editedPhone.trim() !== "" &&
      editedPhone.length === 10
    ) {
      const editedContactIndex = contacts.findIndex(
        (contact) => contact.id === selectedContactId
      );

      if (editedContactIndex !== -1) {
        contacts[editedContactIndex].name = editedName;
        contacts[editedContactIndex].phone = editedPhone;
        renderContactList();
        closeEditModal();
      }
    } else {
      alert("No se encontró el contacto");
    }
  } catch (error) {
    console.error("Error editing contact:", error.message);
  }
}

saveEditedContactButton.addEventListener("click", saveEditedContact);
closeEditModalButton.addEventListener("click", closeEditModal);

export { openEditModal, closeEditModal, saveEditedContact };