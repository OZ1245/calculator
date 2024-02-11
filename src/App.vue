<template>
  <c-number-input
    v-model="valOne"
    label="Величина 1"
  />

  <c-operator-selector v-model="operator" />

  <c-number-input
    v-model="valTwo"
    label="Величина 2"
  />

  <button
    type="button"
    :disabled="isDisabled"
    @click="handleGetResult()"
  >Решить</button>

  <button
    type="button"
    @click="handleReset()"
  >Сброс</button>

  <p
    v-show="showResult"
    class="result"
  >Hello World!</p>
</template>

<script lang="ts" setup>
import { Value } from './components/CNumberInput.vue'

import { computed, ref } from 'vue'
import { useAudio } from '@/composables/audio'
import { useFireworks } from '@/composables/fireworks.js'

import CNumberInput from './components/CNumberInput.vue'
import COperatorSelector from './components/COperotorSelector.vue'

const { playAudio } = useAudio()
const $fireworks = useFireworks()

const valOne = ref<Value>(0)
const valTwo = ref<Value>(0)
const operator = ref<string>('')
const showResult = ref<boolean>(false)

const isDisabled = computed((): boolean => (
  (valOne.value === 0 || valTwo.value === 0 || operator.value === '')
))

const handleGetResult = () => {
  showResult.value = true
  playAudio()

  runFireworks()
}

const handleReset = () => {
  valOne.value = 0
  valTwo.value = 0
  operator.value = ''
  showResult.value = false
}

const runFireworks = () => {
  $fireworks.init()

  $fireworks.explode()

  $fireworks.animate()

  setTimeout(() => {
    $fireworks.destroy()
  }, 2000)
}
</script>