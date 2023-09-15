<script setup>
  defineProps({
    label: String,
    placeholder: String,
    type: String,
    required: Boolean,
    options: Array
  })

  const classStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
</script>

<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      {{ label }} 
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <!-- selection -->
    <select v-if="type == 'select'" :class="classStyle" @change="$emit('update:modelValue', $event.target.value)" :required="required">
      <option value="" disabled selected>{{ placeholder || "-- Pilih --" }}</option>
      <option v-for="option in options" :value="option.value || option.id">{{ option.label || option.name }}</option>
    </select>

    <!-- textarea -->
    <textarea v-else-if="type == 'textarea'" rows="5" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder || label" :class="classStyle" :required="required"></textarea>

    <!-- input file -->
    <input v-else-if="type == 'file'" @input="$emit('update:modelValue', $event.target.files[0])" type="file" accept="image/png, image/jpg, image/jpeg, image/bmp" :required="required">

    <!-- input number -->
    <input v-else-if="type == 'number'" @input="$emit('update:modelValue', parseInt($event.target.value))" type="number" :placeholder="placeholder || label" :class="classStyle" :required="required" min="25">

    <!-- input text -->
    <input v-else @input="$emit('update:modelValue', $event.target.value)" type="text" :placeholder="placeholder || label" :class="classStyle" :required="required">
  </div>
</template>

<style scoped>
</style>
