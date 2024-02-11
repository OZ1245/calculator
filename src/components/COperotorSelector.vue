<template>
  <div class="operator-selector">
    <label class="operator-selector">Оператор:</label>

    {{ props.modelValue }}

    <button
      type="button"
      @click="handleGetOperator()"
    >{{ buttonText }}</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue'

import { getRandom } from '@/utils/getRandom'

const props = defineProps<{
  modelValue: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const operatorsList = ['+', '-', '*', '/']

const buttonText = computed((): string => (
  (props.modelValue !== '')
    ? 'Другой'
    : 'Выбрать'
))

const handleGetOperator = () => {
  const index = getRandom(3)

  emits('update:modelValue', operatorsList[index])
}
</script>