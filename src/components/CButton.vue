<template>
  <button
    class="button"
    :disabled="props.disabled"
    @click="handleClick()"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps<{
  disabled?: boolean
}>()

const emits = defineEmits<{
  (e: 'click'): void
}>()

const handleClick = () => {
  emits('click')
}
</script>

<style lang="scss">
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 8px 16px;

  border: none;
  border-radius: var(--border-radius);
  background-color: var(--color-green);
  color: white;

  cursor: pointer;

  &:disabled {
    background-color: var(--color-green-disabled);

    cursor: default;
  }
}
</style>

