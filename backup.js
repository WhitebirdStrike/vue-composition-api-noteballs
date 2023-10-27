<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef">
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/store/storeNotes";

/*
  notes
*/

/*
store
*/

const storeNotes = useStoreNotes();

const newNote = ref("");
const addEditNoteRef = null;

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea;
};

/*
  delete note
*/
</script>

<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          placeholder="Add a new note"
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
import { ref } from "vue";
/*
props
*/
const modelValue = ref("");

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

/*
emit 
*/

const emit = defineEmits(["update:modelValue"]);

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
