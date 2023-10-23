// stores/counter.js
import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
       notes: [
            {
                id: "id1",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquam libero reprehenderit tenetur sint consectetur quod dolorum. Eligendi sit dolore labore. Modi, vero iure! Sequi saepe nam voluptas minus beatae!",
              },
              {
                id: "id2",
                content: "Hahah",
              },
       ]
  }
},
actions: {
    addNote() {
        console.log('addNote')
    }
}
})