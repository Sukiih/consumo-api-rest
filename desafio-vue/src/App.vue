<template>
  <div id="App" >

      <div class="user-A">
        <UserComponent
          v-for="(usuario, i) in usuarios.slice(0, 1)"
          :key="i"
          :usuario="usuario"
          @enviar-mensaje="agregarChat(i, $event)"
          @color-change="cambiarColor(i, $event)"
        />
      </div>
      
    <div class="chat">
      <HelloWorld :messages="messages" :usuarios="usuarios" />
    </div>

    <div class="user-B">
        <UserComponent
          v-for="(usuario, i) in usuarios.slice(1)"
          :key="i + 1"
          :usuario="usuario"
          @enviar-mensaje="agregarChat(i + 1, $event)"
          @color-change="cambiarColor(i + 1, $event)"
        />
      </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import UserComponent from "./components/UserComponent.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld,
    UserComponent,
  },
  data() {
    return {
      usuarios: [],
      messages: [],
    };
  },
  async mounted() {
    const url = "https://randomuser.me/api?results=2";
    const { data } = await axios.get(url);
    this.usuarios = data.results.map((usuario) => ({
      ...usuario,
      chatInput: "",
      colorChat: "#000000", // Inicializamos el color por defecto
    }));
  },
  methods: {
    agregarChat(index, mensaje) {
      this.messages.push({
        user: index,
        text: mensaje,
        color: this.usuarios[index].colorChat,
      });
    },
    cambiarColor(index, color) {
      this.usuarios[index].colorChat = color;
    },
  },
};
</script>


<style>
#App {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-left: 50px;
}

.user-A, .user-B {
  flex: 1;
}

.chat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  width: 500px;
  margin-right: 100px;
  margin-top: 50px;
  background-color: #f9f9f9; 
  border-radius: 10px; 
  box-shadow: 0 8px 10px rgba(24, 21, 21, 0.459)
}

/* stilos  msjs */
.chat-message {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  max-width: 80%; 
}

</style>
