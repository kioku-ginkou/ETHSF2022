<template>
  <div>
    <model-viewer
      v-if="isMounted"
      :src="modelUrl"
      camera-controls
    ></model-viewer>
  </div>
</template>
<script>
export default {
  name: "sample-component",
  data() {
    return {
      isMounted: false,
      modelUrl: "models/poly.glb",
    };
  },
  mounted() {
    this.isMounted = true;
    this.loadComponent();
  },
  computed: {
    loadComponent() {
      return () => import("@google/model-viewer");
    },
  },
};
</script>
