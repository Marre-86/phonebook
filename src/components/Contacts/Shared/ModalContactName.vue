<template>
    <q-card-section class="q-pt-none">
        <q-input
            :rules="[val => !!val || 'Field is required']"
            :modelValue="name"
            @update:modelValue="event => $emit('update:name', event)"
            autofocus
            ref="nameInput"
            outlined label="Name *" />
    </q-card-section>
</template>
<script setup>
import { ref } from 'vue';

defineProps(['name']);
defineEmits(['update:name']);
const nameInput = ref(0);

defineExpose({
  nameInput,
});
</script>
