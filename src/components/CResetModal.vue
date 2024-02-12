<template>
  <c-modal
    :show="isShow"
    title="Test"
    show-close-button
    @close="handleClose()"
  >
    <template #body>
      Body
    </template>

    <template #footer>
      Footer
    </template>
  </c-modal>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const isShow = computed((): boolean => props.modelValue)

const handleClose = () => {
  emits('update:modelValue', false)
}
</script>