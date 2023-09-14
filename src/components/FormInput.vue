<script setup>
  defineProps({
    label: String,
    placeholder: String,
    type: String,
    isRequired: Boolean,
  })

  const classStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
</script>

<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      {{ label }} 
      <span v-if="isRequired || true" class="text-red-500">*</span>
    </label>

    <textarea v-if="type == 'textarea'" rows="5" :placeholder="placeholder || label" :class="classStyle"></textarea>
    <input v-else-if="type == 'file'" type="file">
    <input v-else :type="type || 'text'" :placeholder="placeholder || label" :class="classStyle">
  </div>
</template>

<style scoped>
</style>
