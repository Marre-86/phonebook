<template>
      <q-card style="width: 300px;">

        <Header>Edit Contact</Header>

        <form @submit="submitForm">

            <ContactName v-model:name="contactToSubmit.name"
                ref="modalContactName" />

            <ContactPhone v-model:phone="contactToSubmit.phone"
                ref="modalContactPhone" />

            <ContactRole v-model:role="contactToSubmit.role" />

            <SubmitButton></SubmitButton>

        </form>

      </q-card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useContactStore } from 'stores/store-contacts';
import Header from 'components/Contacts/Shared/ModalHeader.vue';
import ContactName from 'components/Contacts/Shared/ModalContactName.vue';
import ContactPhone from 'components/Contacts/Shared/ModalContactPhone.vue';
import ContactRole from 'components/Contacts/Shared/ModalContactRole.vue';
import SubmitButton from 'components/Contacts/Shared/ModalButton.vue';

const emit = defineEmits(['close']);
const contact = defineProps(['contact']);

const contactToSubmit = ref({
  name: '',
  phone: '',
  role: '',
});

onMounted(() => {
  contactToSubmit.value.name = contact.contact.name;
  contactToSubmit.value.phone = contact.contact.phone;
  contactToSubmit.value.role = contact.contact.role;
});

const modalContactName = ref(null);
const modalContactPhone = ref(null);

const store = useContactStore();

const submitContact = () => {
  store.updateContact(contactToSubmit, contact.contact.id);
  emit('close');
};

const submitForm = () => {
  modalContactName.value.nameInput.validate();
  modalContactPhone.value.phoneInput.validate();
  // eslint-disable-next-line max-len
  if ((!modalContactName.value.nameInput.hasError) && (!modalContactPhone.value.phoneInput.hasError)) {
    submitContact();
  }
};
</script>
