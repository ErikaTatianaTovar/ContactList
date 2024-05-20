import { contacts, renderContactList } from '../contactUtils';

const cancelDeleteModelButton = document.getElementById("cancelDeleteModal");
const acceptDeleteModalButton = document.getElementById("acceptDeleteModal");

let selectedContactId
function openDeleteModal(contactId) {
  try {
    const contact = contacts.find((contact) => contact.id === contactId);

    if (contact) {
      selectedContactId = contactId;
      deleteModal.style.display = "flex";
    } else {
      alert("No se encontró el contacto");
    }
  } catch (error) {
    console.error("Error al abrir modal de borrado: " + error.message);
  }
}

function closeDeleteModal() {
  deleteModal.style.display = "none";
}

function deleteContact() {
  try {
    const deletedContactIndex = contacts.findIndex(
      (contact) => contact.id === selectedContactId
    );
    if (deletedContactIndex !== -1) {
      contacts.splice(deletedContactIndex, 1);
      renderContactList();
      closeDeleteModal();
    } else {
      alert("No se encontró el contacto");
    }
  } catch {
    console.error("Error deleting contact:", error.message);
  }
}

cancelDeleteModelButton.addEventListener("click", closeDeleteModal);
acceptDeleteModalButton.addEventListener("click", deleteContact);

export { openDeleteModal, closeDeleteModal, deleteContact };