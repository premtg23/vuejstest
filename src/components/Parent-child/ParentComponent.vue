<template>
  <div>
    <h3>Parent - Child Communication</h3>    
    <ChildComponent :message="parentMessage" @childEvent="handleChildEvent" />
    <p>Message from Child: {{ receivedMessage }}</p>    
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  
  data() {
    return {
      parentMessage: 'Hello from Parent',
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