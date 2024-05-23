<template>
  <div class="chat-container">
          <div v-for="(message, index) in messages" :key="index" class="chat-message" :style="{ backgroundColor: usuarios[message.user].colorChat }">
            <strong>{{ usuarios[message.user].name.first }} {{ usuarios[message.user].name.last }}:</strong>
            {{ message.text }}
         </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    messages: {
      type: Array,
      required: true,
    },
    usuarios: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.chat-container {
  border: 1px solid #650dd838;
  border-radius: 5PX;
  padding: 20px;
  width: 400px;
  height: auto;
  margin: 0 auto; 
}

.chat-message {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  }
</style>