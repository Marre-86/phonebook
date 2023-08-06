import { defineStore } from 'pinia';
import { uid } from 'quasar';

export const useContactStore = defineStore('counter', {
  state: () => ({
    counter: 12,
    contacts: [
      {
        id: 1,
        name: 'Ivan Glotov',
        phone: '8 (800) 555 35 55',
        role: 'Janitor',
      },
      {
        id: 2,
        name: 'Maria Fadina',
        phone: '8 (800) 78 21',
        role: 'CEO',
      },
    ],
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    deleteContact(id) {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
    },
    addContact(contact) {
      const newContact = {
        id: uid(),
        name: contact.value.name,
        phone: contact.value.phone,
        role: contact.value.role,
      };
      this.contacts.push(newContact);
    },
    updateContact(contact, id) {
      const updatedContact = this.contacts.find((c) => c.id === id);
      Object.assign(updatedContact, contact.value);
    },
  },
});
