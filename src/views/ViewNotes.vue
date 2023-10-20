<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <Note v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
/*
imports
*/

import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";

/*
notes
*/

const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam libero reprehenderit tenetur sint consectetur quod dolorum. Eligendi sit dolore labore. Modi, vero iure! Sequi saepe nam voluptas minus beatae!",
  },
  {
    id: "id2",
    content: "Hahahahahahahahahahahahhahaha",
  },
]);

const addNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();

  let note = {
    id,
    content: newNote.value,
  };

  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};
</script>
