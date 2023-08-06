<template>
      <q-card-section class="q-pt-none">
        <q-input outlined
            :rules="[
                val => !!val || 'Field is required',
                val => validatePhoneNumber(val) || 'Invalid phone number'
            ]"
            ref="phoneInput"
            :modelValue="phone"
            @update:modelValue="event => $emit('update:phone', event)"
            label="Phone number *" />
    </q-card-section>
</template>
<script setup>
import { ref } from 'vue';

defineProps(['phone']);
defineEmits(['update:phone']);
const phoneInput = ref(0);

defineExpose({
  phoneInput,
});

const validatePhoneNumber = (value) => {
  const phoneRegex = /^[\d()+\s-]+$/;
  return phoneRegex.test(value);
};
</script>
