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
              <q-btn
                @click="promptToDelete(contact.id)"
                flat round dense color="red" icon="delete" />
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

  </q-page>
</template>

<script setup>
import { reactive } from 'vue';
import { useContactStore } from 'stores/store-contacts';
import { useQuasar } from 'quasar';
import AddContact from 'components/Contacts/AddContact.vue';

const store = useContactStore();

const $q = useQuasar();

const state = reactive({
  showAddContact: true,
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
