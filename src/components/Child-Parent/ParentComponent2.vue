<template>
  <div>
    <h3>Child to Parent Communication</h3>    
    <ChildComponent2 @childEvent="handleChildEvent" />
    <p>Message from Child: {{ receivedMessage }}</p>
  </div>
</template>

<script>

export default {  
  
  data() {
    return {
      receivedMessage: ''
    };
  },
  methods: {
    handleChildEvent(messageFromChild) {      
      this.receivedMessage = messageFromChild;
    }
  }
};
</script>
