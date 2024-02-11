<template>
    <div class="number-input field">
        <label class="number-input__label field__label">{{ props.label }}</label>

        <div class="number-input__wrap">
            <button
                type="button"
                class="number-input__button"
                @click="handleDecrement()"
            >-</button>

            <input
                type="text"
                class="number-input__input"
                :value="props.modelValue"
            />

            <button
                type="button"
                class="number-input__button"
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

<style lang="scss">
.number-input {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.number-input__wrap {
    display: flex;
    flex-wrap: nowrap;

    width: 100%;
    max-width: 200px;
    height: 30px;

    border: 1px solid var(--color-dark-gray);
    border-radius: var(--border-radius);

    overflow: hidden;
}

.number-input__button {
    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;

    border: none;
    background-color: var(--color-green);
    color: white;
}

.number-input__input {
    flex-shrink: 1;

    width: 100%;
    padding-inline: 8px;

    border: none;

    text-align: center;
}
</style>