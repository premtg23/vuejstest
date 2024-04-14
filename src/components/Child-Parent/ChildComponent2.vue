<template>
  <div>
    
    <button @click="sendEventToParent">Message Send to Parent</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendEventToParent() {      
      this.$emit('childEvent', 'Hello from Child');
    }
  }
};
</script>
