<template>
  <v-breadcrumbs :items="items" divider=">" class="breadcrumbs-right"></v-breadcrumbs>
</template>

<style>
.breadcrumbs-right {
  justify-content: flex-end;
}
</style>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
