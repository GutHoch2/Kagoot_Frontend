<script>
import LayoutWrapper from "@/components/LayoutWrapper.vue";
import axios from "axios";
import QuestionCardComponent from "@/components/QuestionCardComponent.vue";
import draggable from "vuedraggable";

export default {
  name: "QuizEditorView",
  components: {QuestionCardComponent, LayoutWrapper, draggable},
  data(){
    return {
      quiz : {},
      quizId : '',
      disabled: true
    }
  },
  mounted() {
    const token = localStorage.getItem('token');
    this.quizId = this.$route.params.id;
    console.log(this.quizId);

    axios
    .post('api/quizmanager/quiz/get', this.quizId, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        this.quiz = response.data.OBJECT;
        console.log(response.data.OBJECT);
      })
  },
  methods: {
    addNewQuestion(){
      this.$router.push({path: `/${this.quizId}/add-question/`});
    },
    onDragEnd() {
      console.log("Neue Reihenfolge:", this.quiz.questions);
      this.disabled = false;
    },
    saveNewSorting() {
      //TODO: Sorting Request
    }
  }
}
</script>

<template>
  <layout-wrapper>
    <div
      class="container-fluid bg-dark text-light py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <header class="text-center mb-5">
        <h1 class="display-3 fw-bold text-glow">Quiz: {{quiz.title}}</h1>
        <p class="fs-4 text-secondary fst-italic">Gestalte dein ganz besonderes Quiz!</p>
        <div class="row">
          <div>
            <draggable
              v-model="quiz.questions"
              item-key="id"
              class="draggable-list w-100"
              @end="onDragEnd"
              ghost-class="drag-ghost"
              chosen-class="drag-chosen"
              drag-class="dragging"
            >
              <template #item="{ element, index }">
                <div class="draggable-item">
                  <question-card-component
                    :question-type="element['@type']"
                    :question="element.text"
                    :counter="index + 1"
                  />
                </div>
              </template>
            </draggable>
            <button @click="addNewQuestion" class="btn btn-primary w-30 me-3"><i class="fa-solid fa-square-plus me-3"></i>Neue Frage hinzufügen</button>
            <button @click="saveNewSorting" :disabled="disabled" class="btn btn-primary w-30 ms-3"><i class="fa-solid fa-sort me-3"></i>Reihenfolge speichern</button>
          </div>
        </div>
      </header>
    </div>
  </layout-wrapper>
</template>

<style scoped>
.draggable-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.draggable-item {
  cursor: grab;
  transition: transform 0.2s ease;
}

.draggable-item:hover {
  transform: scale(1.01);
}

.drag-ghost {
  opacity: 0.4;
}

.drag-chosen {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px dashed #aaa;
}

.dragging {
  cursor: grabbing;
}

</style>
