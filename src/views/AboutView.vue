<template>
  <GoogleMap
    api-key="AIzaSyAsTVz02osfRoiPVKJaMUewenELTa6RPsM"
    style="width: 100%; height: 500px"
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
              {{ i }}
              <br />
              {{ markerOptions.modelUrl }}
            </div>
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
  setup() {
    const center = { lat: -31.56391, lng: 147.154312 };

    const markerOptions1 = {
      position: { lat: -31.56391, lng: 147.154312 },
      title: "LED",
      icon: "/icon.png",
      eventName: "SuperEvent",
      modelUrl: "https://google.com",
    };

    const markerOptions2 = {
      position: { lat: -31.718234, lng: 147.363181 },
      title: "ENERGY",
      icon: "/icon.png",
      eventName: "HyperEvent",
      modelUrl: "https://google.com",
    };

    const markerOptions3 = {
      position: { lat: -32.727111, lng: 148.371124 },
      title: "DRIVE",
      icon: "/icon.png",
      eventName: "OmegaEvent",
      modelUrl: "https://google.com",
    };

    const locations = [markerOptions1, markerOptions2, markerOptions3];

    return { center, locations };
  },
});
</script>
