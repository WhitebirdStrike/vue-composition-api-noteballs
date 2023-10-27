<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <!-- 
      '' - String - Fast verdi - det du skriver er det som vises

      `` backticks - Dynamisk string - Kan bruke variable verdier. som farge du sender ned til komponenten

     -->
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";

const modelValue = inject("modelValue", ref(""));

/*
  props
  */

// const modelValue = ref("");

const props = defineProps({
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});

/*
  emit 
  */

// const emit = defineEmits(["update:modelValue"]);
// console.log("modelvalue", modelValue.value);
/*
  focus textarea
  */

const textareaRef = ref(null);

const focusTextarea = () => {
  textareaRef.value.focus();
};
defineExpose({
  focusTextarea,
});
</script>
