<!-- CTRL + k + c para comentar -->
<!-- CTRL + k + u para descomentar -->

<template>
  <!-- Para v-bind shortcut : se utiliza para bindear atributos -->
    <!-- v-if para que solo se muestre en caso de que no sea undefined -->
  <img v-if="img" :src="img" alt="bg">
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input v-model="question" type="text" placeholder="Hazme una pregunta">
    <p>Recuerda terminar con un signo de interrogacion (?)</p>
    <div v-if="isValidQuestion">
      <h2>{{ question }}</h2>
      <h1>{{ answer === "yes" ? "Sí"  : "No" }}</h1>
    </div>
  </div>
</template>

<script>
export default {

  // Objetos reactivos
  // Info del componente
  data() {
    return {
      question: null,
      answer: null,
      img: null,
      isValidQuestion: false
    }
  },

  methods: {
    async getAnswer() {
      this.answer = "Pensando..."

      const {answer, image} = await fetch("https://yesno.wtf/api").then(r => r.json())

      this.answer = answer
      this.img = image
    },
  },

  // Para observarbles en ciertos objetos se tiene que llamar igual que la propiedad
  watch: {
    question(value, oldValue) {
      
      this.isValidQuestion = false

      if (!value.includes('?')) return

      this.isValidQuestion = true

      this.getAnswer()

    }
  }
}
</script>

<!-- scoped para que sea estilo del propio componente y no de los estilos de App.vue -->
<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>