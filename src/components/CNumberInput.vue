<template>
    <div class="number-input">
        <label class="number-input__label">{{ props.label }}</label>

        <div class="number-input__wrap">
            <button type="button" @click="handleDecrement()">-</button>

            <input type="text" value="value" />

            <button type="button" @click="handleIncrement()"></button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

export type Value = number | null

const value = ref<Value>(null)

const props = defineProps<{
    modelValue: Value
    label: string
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: Value): void
}>()

const handleIncrement = () => {
    if (!value.value) {
        value.value = 0
        return
    }

    value.value++

    emits('update:modelValue', value.value)
}

const handleDecrement = () => {
    if (!value.value) return

    if (value.value === 0) {
        value.value = null
        return
    }

    value.value--

    emits('update:modelValue', value.value)
}
</script>