<template>
  <GoogleMap
    api-key="AIzaSyAsTVz02osfRoiPVKJaMUewenELTa6RPsM"
    class="map"
    :center="center"
    :zoom="3"
  >
    <MarkerCluster>
      <Marker
        v-for="(markerOptions, i) in locations"
        :options="markerOptions"
        :key="i"
      >
        <InfoWindow>
          <div id="contet">
            <h1 id="eventName" class="eventName">
              {{ markerOptions.eventName }}
            </h1>
            <div id="bodyContent">
              <model-viewer
                v-if="isMounted"
                :src="markerOptions.modelUrl"
                :style="{ height: boxHeight }"
                auto-rotate
              >
                <router-link
                  :to="{
                    path: 'model',
                    query: { url: markerOptions.modelUrl },
                  }"
                  class="link"
                ></router-link>
              </model-viewer>
            </div>
            <!-- <a :href="markerOptions.modelViewUrl">View 3D model</a> -->
          </div>
        </InfoWindow>
      </Marker>
    </MarkerCluster>
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker, MarkerCluster, InfoWindow } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker, MarkerCluster, InfoWindow },
  data() {
    return {
      isMounted: false,
      boxHeight: "128px",
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
  setup() {
    const center = { lat: -31.56391, lng: 147.154312 };

    const markerOptions1 = {
      position: { lat: -31.56391, lng: 147.154312 },
      title: "LED",
      icon: "/icon.png",
      eventName: "SuperEvent",
      modelUrl: "models/poly.glb",
    };

    const markerOptions2 = {
      position: { lat: -31.718234, lng: 147.363181 },
      title: "ENERGY",
      icon: "/icon.png",
      eventName: "HyperEvent",
      modelUrl: "models/poly2.glb",
    };

    const markerOptions3 = {
      position: { lat: -32.727111, lng: 148.371124 },
      title: "DRIVE",
      icon: "/icon.png",
      eventName: "OmegaEvent",
      modelUrl: "models/poly3.glb",
    };

    const locations = [markerOptions1, markerOptions2, markerOptions3];

    return { center, locations };
  },
});
</script>
<style>
.map {
  width: 100%;
  height: 540px;
}
.link {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
