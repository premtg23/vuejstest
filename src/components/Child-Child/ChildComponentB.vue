<template>
  <div>
    <h4>Child Component B</h4>
    <button @click="sendToA">Message Send to A</button>
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
    sendToA() {
      this.$emit('sendMessageToA', 'Hello from B');
    }
  }
};
</script>
