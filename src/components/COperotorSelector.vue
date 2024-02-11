<template>
  <div class="operator-selector field">
    <label class="operator-selector__label field__label">
      Оператор: &nbsp; <span>{{ props.modelValue }}</span>
    </label>

    <br>

    <c-button @click="handleGetOperator()">{{ buttonText }}</c-button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue'

import { getRandom } from '@/utils/getRandom'

import CButton from './CButton.vue'

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
  const index = getRandom(4)

  emits('update:modelValue', operatorsList[index])
}
</script>

<style lang="scss">
.operator-selector__label span {
  font-weight: 700;
  color: var(--color-green);

  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  border: 1px solid var(--color-dark-gray);
  border-radius: var(--border-radius);
}
</style>