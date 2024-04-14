<template>
  <div>
    <h4>Child Component A</h4>
    <button @click="sendToB">Message Send to B</button>
    {{message}}
  </div>
</template>

<script>

export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    sendToB() {
      this.$emit('sendMessageToB', 'Hello from A');
    }
  }
};
</script>
