<template>
  <div>    
    <p>{{ message }}</p>
    <button @click="sendEventToParent">Message Send to Parent</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
       type: String,
      required: true
    },
  },
  methods: {
    sendEventToParent() {     
      this.$emit('childEvent', 'Hello from Child');
    }
  }
};
</script>
