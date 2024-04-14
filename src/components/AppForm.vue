<template>
  <div>
    <DynamicForm
      v-for="(block, index) in formBlocks"
      :key="index"
      :fields="block.fields"
      :formData="formData"
      :errors="formErrors"
    /> <br>
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>
import DynamicForm from "./DynamicForm.vue";

export default {
  components: {
    DynamicForm
  },
  data() {
    return {
      formBlocks: [
        {
          fields: [
            {
              token: "PERSON_NAME",
              name: "Enter your name",
              label: "e.g.john doe",
              type: "text",
              required: true,
            },
            {
              token: "IS_PERSON_MINOR",
              name: "Is the current person minor ?",
              type: "checkbox",
              default: false
            },
            {
              token: "PERSON_DOB",
              name: "Enter your DOB",
              label: "e.g.01/01/2000",
              type: "date",
              required: "IS_PERSON_MINOR"
            }
          ]
        },
               
      ],
      formData: {},
      formErrors: {}
    };
  },
  methods: {
    submitForm() {
      let isValid = this.validateForm();
      if (isValid) {
        console.log("Formdata", this.formData);
        alert("Form submitted")
      } else {
        console.log("validation failed");
      }
    },
    validateForm() {
      let isValid = true;
      this.formErrors = {};

      this.formBlocks.forEach((block) => {
        block.fields.forEach((field) => {
          if (field.required && !this.formData[field.name]) {

            this.formErrors[field.name] = `field is required`;
            isValid = false;
          }
        });
      });
      return isValid;
    }
  }
};
</script>
