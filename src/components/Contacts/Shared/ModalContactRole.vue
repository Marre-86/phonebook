<template>
  <q-card-section class="q-pt-none">
      <q-input
            :modelValue="role"
            @update:modelValue="event => $emit('update:role', event)"
          outlined label="Role" />
  </q-card-section>
</template>
<script setup>
defineProps(['role']);
defineEmits(['update:role']);
</script>
