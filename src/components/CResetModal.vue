<template>
  <c-modal
    :show="isShow"
    @close="handleClose()"
  >
    <template #body>
      Сбросить форму?
    </template>

    <template #footer>
      <c-button @click="handleClose()">Отменить</c-button>
      <c-button @click="handleReset()">Отмена</c-button>
    </template>
  </c-modal>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue'

import CButton from './CButton.vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'reset'): void
}>()

const isShow = computed((): boolean => props.modelValue)

const handleClose = () => {
  emits('update:modelValue', false)
}

const handleReset = () => {
  emits('reset')
  emits('update:modelValue', false)
}
</script>