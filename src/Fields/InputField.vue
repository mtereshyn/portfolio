<template>
  <div class="input-field">
    <label for="" class="input-field__label"></label>
    <div class="input-field__input-wrapper">
      <input
        :value="value"
        v-bind="$attrs"
        v-on="listeners"
        class="input-field__input"
      />
    </div>
  </div>
</template>

<script>
const EVENTS = {
  input: "input",
};

export default {
  name: "input-field",
  data() {
    return {
      EVENTS,
    };
  },
  computed: {
    listeners() {
      return {
        input: (event) => {
          this.$emit(EVENTS.input, event.target.value);
        },
      };
    },
  },
};
</script>
