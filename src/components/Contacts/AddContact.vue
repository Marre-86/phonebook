<template>
      <q-card>
        <q-card-section class="row">
          <div class="text-h6">Add Contact</div>
          <q-space />
          <q-btn v-close-popup flat round dense icon="close" />
        </q-card-section>

        <form @submit="submitForm">
            <q-card-section class="q-pt-none">
            <q-input
                :rules="[val => !!val || 'Field is required']"
                ref="nameInput"
                outlined v-model="contactToSubmit.name" label="Name *" />
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input outlined
                    :rules="[
                        val => !!val || 'Field is required',
                        val => validatePhoneNumber(val) || 'Invalid phone number'
                    ]"
                    ref="phoneInput"
                    v-model="contactToSubmit.phone" label="Phone number *" />
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input
                    outlined v-model="contactToSubmit.role" label="Role" />
            </q-card-section>

            <q-card-actions align="center">
            <q-btn label="SAVE" color="primary" type="Submit" />
            </q-card-actions>
        </form>

      </q-card>
  </template>

<script setup>
import { ref } from 'vue';
import { useContactStore } from 'stores/store-contacts';

const emit = defineEmits(['close']);

const validatePhoneNumber = (value) => {
  const phoneRegex = /^[\d()+\s-]+$/;
  return phoneRegex.test(value);
};

const contactToSubmit = ref({
  name: '',
  phone: '',
  role: '',
});

const nameInput = ref(null);
const phoneInput = ref(null);

const store = useContactStore();

const submitContact = () => {
  store.addContact(contactToSubmit);
  emit('close');
};

const submitForm = () => {
  nameInput.value.validate();
  phoneInput.value.validate();
  if ((!nameInput.value.hasError) && (!phoneInput.value.hasError)) {
    submitContact();
  }
};
</script>
