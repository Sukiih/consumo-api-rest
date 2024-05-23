<template>
    <div class="user-container">
      <div class="user-content">
        <img :src="usuario.picture.large" />
        <h3>{{ usuario.name.first }} {{ usuario.name.last }}</h3>
        <input type="color" v-model="colorChat" @input="emitColorChange" />
        <input type="text" v-model="chatInput" />
        <button @click="enviarMensaje">Enviar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "UserComponent",
    props: {
      usuario: {
        type: Object,
      },
    },
    data() {
      return {
        colorChat: "#000000",
        chatInput: "",
      };
    },
    methods: {
      emitColorChange() {
        this.$emit("color-change", this.colorChat);
      },
      enviarMensaje() {
        const mensaje = this.chatInput.trim();
        if (mensaje !== "") {
          this.$emit("enviar-mensaje", mensaje);
          this.chatInput = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .user-container {
    margin-bottom: 20px;
  }
  
  .user-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .user-content img {
    width: 100px;
    height: 100px;
    border-radius: 5%;
    border: 1px solid rgba(102, 101, 95, 0.247);
    margin-bottom: 5px;
    margin-top: 30px;
  }
  
  .user-content h3 {
    font-size: 25px;
    margin-bottom: 10px;
  }
  
  .user-content input[type="color"] {
    margin-bottom: 10px;
  }
  
  .user-content input[type="text"] {
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .user-content button {
    padding: 8px 20px;
    background-color: #3b3a7e;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .user-content button:hover {
    background-color: #605ed1;
  }
  </style>
  