<template>
  <div>
    <h3>Child - Child Communication</h3>
    
    <ChildComponentA :message="messageFromA" @sendMessageToB="receiveMessageFromA" />
     <ChildComponentB :message="messageFromB" @sendMessageToA="receiveMessageFromB" />
  </div>
</template>

<script>

export default {
  
  data() {
    return {

      messageFromA: '',
      messageFromB: '',
    };
  },
  methods: {

    receiveMessageFromA(message) {
       this.messageFromB = message;
    },
    receiveMessageFromB(message) {
      this.messageFromA = message;
    }
  }
};
</script>
