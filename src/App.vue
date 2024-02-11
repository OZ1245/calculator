<template> 
  <input type="text" v-model="valOne">

  <select v-model="operator">
    <option v-for="(item, i) in operatorsList" :key="`operator-${i}`" value="item">
      {{ item }}
    </option>
  </select>

  <input type="text" v-model="valTwo">

  <button type="button" @click="handleGetResult()">Решить</button>
  <button type="button" @click="handleReset()">Сброс</button>

  <p v-show="showResult" class="result">Hello World!</p>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useAudio } from '@/composables/audio'
import { useFireworks } from '@/composables/fireworks'

const { playAudio } = useAudio()
const $fireworks = useFireworks()

const valOne = ref<number | null>(null)
const valTwo = ref<number | null>(null)
const operator = ref<string>('')
const showResult = ref<boolean>(false)

const operatorsList = ['+', '-', '*', '/']

const handleGetResult = () => {
  showResult.value = true
  playAudio()
  
  runFireworks()
}

const handleReset = () => {
  valOne.value = null
  valTwo.value = null
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