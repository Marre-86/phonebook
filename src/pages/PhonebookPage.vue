<template>
  <q-page class="flex flex-top">
    <div class="q-pa-md">

    <div>Direct store</div>
    <!-- Read the state value directly -->
    <div>{{ store.counter }}</div>
    <!-- Use getter directly -->
    <div>{{ store.doubleCount }}</div>

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
  </q-page>
</template>

<script setup>
import { defineComponent } from 'vue';
import { useContactStore } from 'stores/store-contacts';
import { useQuasar } from 'quasar';

const store = useContactStore();

const $q = useQuasar();

function promptToDelete(id) {
  $q.dialog({
    title: 'Confirm',
    message: 'Would you like to turn on the wifi?',
    cancel: true,
    persistent: true,
  }).onOk(() => {
    store.deleteContact(id);
  });
}

</script>

<script>

export default defineComponent({
  name: 'PhonebookPage',
});
</script>
