<template>
  <div class="backdrop" @click.self="closeModal">
    <div
      class="modal"
      :class="{ success: theme === 'success', delete: theme === 'delete' }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "content", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background-color: #fff;
}
.success {
  background-color: lightgreen;
}
.delete {
  background-color: lightcoral;
}
</style>
