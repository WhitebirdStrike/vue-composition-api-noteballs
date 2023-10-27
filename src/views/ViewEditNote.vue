<template>
  <div class="edit-note">
    <AddEditNote
      :modelValue="modelValue"
      bgColor="link"
      placeholder="Edit note"
      label="Edit Note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <Button @click="$router.back()" class="button is-link is-light"
          >Cancel</Button
        >
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
imports
*/

import { ref, provide } from "vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/store/storeNotes";

/*
store
*/

const storeNotes = useStoreNotes();

/*
note
*/

const modelValue = ref(storeNotes.notes[0].content);
provide("modelValue", modelValue);

const noteContent = ref("");

noteContent.value = storeNotes.getNoteContent;
</script>
