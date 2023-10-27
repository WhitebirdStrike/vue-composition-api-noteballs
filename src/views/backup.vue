<div v-for="note in notes" :key="note.id" class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>

    const newNote = ref('')
const newNoteRef = ref(null)

},
actions: {
    addNote(newNoteContent) {
        console.log('addNote')
    }
}
})
const notes = ref([

//([
 // {
   // id: "id1",
    //content:
     // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam libero reprehenderit tenetur sint consectetur quod dolorum. Eligendi sit dolore labore. Modi, vero iure! Sequi saepe nam voluptas minus beatae!",
 // },
 // {
   // id: "id2",
   // content: "Hahahahahahahahahahahahhahaha",
 // },
//]);
}
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
deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => {
        return note.id !== idToDelete;
      });
      
      const deleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete;
  });
};

const handleDeleteClicked = () => {
emit('deleteClicked', props.note.id)

 }

 const emit = defineEmits(["deleteClicked"]);


 <template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }} </small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="handleDeleteClicked" href="#" class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>
<script setup>
/*
imports
*/

import { computed } from "vue";
import { useStoreNotes } from "@/store/storeNotes";
const storeNotes = useStoreNotes();
/*
props
*/

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/*
emits
*/

/*
character length
*/

const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}
    `;
});

/*
  handle delete clicked
  */
</script>

<!-- <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
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
  -->