<template>
  <h1 class="title">Калькулятор ver. 6.9.0</h1>

  <c-number-input
    v-model.number="valOne"
    label="Величина 1"
  />

  <c-operator-selector v-model="operator" />

  <c-number-input
    v-model.number="valTwo"
    label="Величина 2"
  />

  <div class="app__buttons">
    <c-button
      :disabled="isDisabled"
      @click="handleGetResult()"
    >Решить</c-button>

    <c-button @click="handleClickResetButton()">Сброс</c-button>
  </div>

  <p
    v-show="showResult"
    class="app__result"
  >Hello World!</p>

  <c-reset-modal
    v-model="showResetModal"
    @reset="handleReset()"
  />

  <!-- <c-modal /> -->
</template>

<script
  lang="ts"
  setup
>
import { Value } from './components/CNumberInput.vue'

import { computed, ref } from 'vue'
import { useAudio } from '@/composables/audio'
import { useFireworks } from '@/composables/fireworks.js'
import { useFrog } from '@/composables/frog'

import CNumberInput from './components/CNumberInput.vue'
import COperatorSelector from './components/COperotorSelector.vue'
import CButton from './components/CButton.vue'
import CResetModal from './components/CResetModal.vue'

const { playAudio } = useAudio()
const $fireworks = useFireworks()
const $frog = useFrog()

const valOne = ref<Value>(0)
const valTwo = ref<Value>(0)
const operator = ref<string>('')
const showResult = ref<boolean>(false)
const showResetModal = ref<boolean>(false)

const isDisabled = computed((): boolean => (
  (valOne.value === 0 || valTwo.value === 0 || operator.value === '')
))

const handleGetResult = () => {
  showResult.value = true

  const now = new Date()

  if (now.getDay() !== 3) {
    runFireworks()
  } else {
    runFrog()
  }
}

const handleClickResetButton = () => {
  showResetModal.value = true
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

  playAudio('tada')

  setTimeout(() => {
    $fireworks.destroy()
  }, 2000)
}

const runFrog = () => {
  $frog.init()

  playAudio('frog')

  setTimeout(() => {
    $frog.destroy()
  }, 3000)
}
</script>

<style lang="scss">
.app__buttons {
  display: inline-flex;
  gap: 16px;
}

.app__result {
  font-size: 48px;
  padding-block: 32px;
}
</style>