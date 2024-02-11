<template>
    <div class="number-input">
        <label class="number-input__label">{{ props.label }}</label>

        <div class="number-input__wrap">
            <button
                type="button"
                @click="handleDecrement()"
            >-</button>

            <input
                type="text"
                :value="props.modelValue"
            />

            <button
                type="button"
                @click="handleIncrement()"
            >+</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue"

export type Value = number

const props = defineProps<{
    modelValue: Value
    label: string
}>()

const emits = defineEmits<{
    (e: 'update:modelValue', value: Value): void
}>()

const handleIncrement = () => {
    emits('update:modelValue', props.modelValue + 1)
}

const handleDecrement = () => {
    if (props.modelValue === 0) return

    emits('update:modelValue', props.modelValue - 1)
}
</script>