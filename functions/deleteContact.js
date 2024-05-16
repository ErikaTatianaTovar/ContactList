function openDeleteModal(contactId) {
  console.log("dentro de la funcion borrar modal");
  console.log(contacts);
  try {
    const contact = contacts.find((contact) => contact.id === contactId);

    if (contact) {
      selectedContactId = contactId;
      deleteModal.style.display = "flex";
    } else {
      console.log("No se encontró el contacto");
    }
    console.log("abierto modal borrar");
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
      console.log("No se encontró el contacto");
    }
  } catch {
    console.error("Error deleting contact:", error.message);
  }
}
