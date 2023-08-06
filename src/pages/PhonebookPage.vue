<template>
  <q-page class="q-pa-md">

    <div class="q-mb-md flex justify-center">
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-right">Phone number</th>
            <th class="text-right">Role</th>
            <th class="text-right"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in store.contacts" :key="contact.id">
            <td class="text-left">{{ contact.name }}</td>
            <td class="text-right">{{ contact.phone }}</td>
            <td class="text-right">{{ contact.role }}</td>
            <td class="text-right">
              <div class="row">
                <q-btn
                @click="state.showEditContact = true; state.contact = contact"
                flat round dense color="primary" icon="edit" />
                <q-btn
                @click="promptToDelete(contact.id)"
                flat round dense color="red" icon="delete" />
              </div>
            </td>
          </tr>
        </tbody>
      </q-markup-table>

    </div>

    <div class="flex justify-center">
        <q-btn
          @click="state.showAddContact = true"
          class="glossy" rounded color="primary" label="Add Contact" />
    </div>

    <q-dialog v-model="state.showAddContact">
      <add-contact @close="state.showAddContact = false" />
    </q-dialog>

    <q-dialog v-model="state.showEditContact">
      <edit-contact @close="state.showEditContact = false"
        :contact="state.contact" />
    </q-dialog>

  </q-page>
</template>

<script setup>
import { reactive } from 'vue';
import { useContactStore } from 'stores/store-contacts';
import { useQuasar } from 'quasar';
import AddContact from 'components/Contacts/AddContact.vue';
import EditContact from 'components/Contacts/EditContact.vue';

const store = useContactStore();

const $q = useQuasar();

const state = reactive({
  showAddContact: false,
  showEditContact: false,
  contact: null,
});

function promptToDelete(id) {
  $q.dialog({
    title: 'Confirm',
    message: 'Are you sure?',
    cancel: true,
    persistent: true,
  }).onOk(() => {
    store.deleteContact(id);
  });
}

</script>
