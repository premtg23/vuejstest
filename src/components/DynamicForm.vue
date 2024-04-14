<template>
  <div>
    <div v-for="(field, index) in fields" :key="index" >
      <label :for="field.name" class="label">{{ field.name }}</label><br>
      <input
        :type="field.type"
        :id="field.token"
        :name="field.name"
        v-model="formData[field.name]"
        :required="field.required"
        :placeholder="field.label"
        class="input"
      />
      <span v-if="errors[field.name]" class="error">{{ errors[field.name] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fields: {
      type: Array,
      required: true
    },
    formData: {
      type: Object,
      required: true
    },
    errors: {
      type: Object,
      required: true
    }
  }
};
</script>


<style>
.error {
  color: red;
}
.label {
text-align: left;
padding: 5px;
}
.input {
text-align: left;
padding: 5px;
}
</style>