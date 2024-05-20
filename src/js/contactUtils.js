import { openEditModal } from './functions/editContact';
import { openDeleteModal } from './functions/deleteContact';

const contacts = [];

function generateUniqueId() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000);
  return timestamp + random;
}

function renderContactList(filterContacts = contacts) {
  const contactList = document.querySelector(".contact-list");
  contactList.innerHTML = "";

  if (filterContacts.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Aún no tienes contactos";
    emptyMessage.classList.add("empty-message-style");
    emptyMessage.id = "emptyMessage";

    const svgImage = document.createElement("img");
    svgImage.src = "./assets/icon-contacts.svg";
    svgImage.alt = "Contacts";
    svgImage.classList.add("empty-image-style");

    contactList.appendChild(emptyMessage);
    contactList.appendChild(svgImage);
  } else {
    filterContacts.forEach((contact) => {
      renderContact(contact);
    });
  }
}

function renderContact(contact) {
  const contactList = document.querySelector(".contact-list");

  const li = document.createElement("li");
  li.dataset.contactId = contact.id;
  li.innerHTML = `
        <div class="contact-info">
            <span class="contact-name">${contact.name}</span>
            <br/>
            <span class="contact-number">${contact.phone}</span>
        </div>
        <div class="contact-actions">
            <button class="button button-edit">
            <img src="./assets/icon-edit.svg" alt="Editar">
            </button>
            <button class="button button-delete">
            <img src="./assets/icon-delete.svg" alt="Eliminar">
            </button>
        </div>
    `;
  const editButton = li.querySelector(".button-edit");
  editButton.addEventListener("click", () => {
    openEditModal(contact.id);
  });

  const deleteButton = li.querySelector(".button-delete");
  deleteButton.addEventListener("click", () => {
    openDeleteModal(contact.id);
  });
  contactList.appendChild(li);
}

function addContact(newContact) {
  const existingContact = contacts.find(
    (contact) => contact.id === newContact.id
  );
  if (existingContact) {
    console.error("Error: El ID del nuevo contacto ya existe en la lista.");
    return;
  }
  contacts.push(newContact);

  renderContactList();
}


export { contacts, generateUniqueId, renderContactList, renderContact, addContact };