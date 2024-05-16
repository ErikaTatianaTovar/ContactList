const searchContact = document.getElementById("searchContact");
const searchContactButton = document.getElementById("searchContactButton");


function searchOneContact() {
   try {
    const searchValue = searchContact.value;
    const filteredContacts = contacts.filter(contact => contact.name.includes(searchValue) || contact.phone.includes(searchValue));
    if(filteredContacts.length > 0){
        renderContactList(filteredContacts);
        console.log(filteredContacts);
        searchContact.value = "";
    } else {
        renderContactList(); 
        searchContact.value = "";
    }
   } catch (e) {
    console.error("Error searching contact: " + e.message);
   }

}
searchContactButton.addEventListener("click", searchOneContact);