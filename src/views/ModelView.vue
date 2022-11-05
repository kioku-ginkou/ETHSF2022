<template>
  <div>
    <model-viewer v-if="isMounted" :src="url" camera-controls></model-viewer>
  </div>
</template>
<script>
export default {
  name: "sample-component",
  data() {
    return {
      isMounted: false,
      url: "",
    };
  },
  mounted() {
    this.isMounted = true;
    this.url = this.$route.query.url;
    console.log(this.url);
    this.loadComponent();
  },
  computed: {
    loadComponent() {
      return () => import("@google/model-viewer");
    },
  },
};
</script>
