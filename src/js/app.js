import '../css/styles.css';
import { renderContactList } from './contactUtils';
import './functions/addContact';
import './functions/editContact';
import './functions/deleteContact';
import './functions/searchContact';

document.addEventListener("DOMContentLoaded", () => {
  renderContactList();
});