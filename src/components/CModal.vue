<template>
  <transition name="modal">
    <div
      v-show="props.show"
      class="modal"
    >
      <div
        class="modal__backdrop"
        @click="handleClickBackdrop()"
      ></div>
      <div class="modal__wrapper">
        <div class="modal__header">
          <slot name="header">
            <p
              v-if="title"
              class="modal__title"
            >{{ props.title }}</p>
            <button
              v-if="props.showCloseButton"
              type="button"
              class="modal__close-button"
              @click="handleCloseWindow()"
            >X</button>
          </slot>
        </div>

        <div class="modal__body">
          <slot name="body"></slot>
        </div>

        <div class="modal__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  show?: boolean
  closableBackdrop?: false
  showCloseButton?: true
  title?: string
}>()

const emits = defineEmits<{
  (e: 'close'): void
}>()

const handleCloseWindow = () => {
  emits('close')
}

const handleClickBackdrop = () => {
  if (!props.closableBackdrop) return

  emits('close')
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__backdrop {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, .3);
  backdrop-filter: blur(3px);
}

.modal__wrapper {
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  max-width: 600px;

  background-color: white;
  border: 1px solid var(--color-green);
  border-radius: var(--border-radius);
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-green);
  color: white;

  font-size: 18px;
  font-weight: 700;

  padding: 16px;

  position: relative;
}

.modal__header:empty {
  display: none;
}

.modal__title {
  width: 100%;
  text-align: center;
}

.modal__close-button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  background-color: white;
  border: none;
  border-radius: var(--border-radius);

  cursor: pointer;

  position: absolute;
  right: 16px;
}

.modal__body {
  padding: 16px;
}

.modal__footer {
  padding: 16px;
}

.modal__footer {
  display: flex;
  justify-content: space-between;
}

.modal__footer:empty {
  display: none;
}
</style>