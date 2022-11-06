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
          <div>
            <h1 id="eventName" class="eventName">
              {{ markerOptions.name }}
            </h1>
            {{ markerOptions.description }}
            <div id="bodyContent">
              <model-viewer
                v-if="isMounted"
                :src="markerOptions.animation_url"
                :style="{ height: boxHeight }"
                auto-rotate
              >
                <router-link
                  :to="{
                    path: 'model',
                    query: { url: markerOptions.animation_url },
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
    const center = { lat: 37.802635, lng: -122.447928 };

    const jsondata = [
      {
        name: "1st event",
        description: "this is first event",
        image: "JPEG URL of Skale filestorage",
        animation_url:
          "https://d2wac7uuh3wste.cloudfront.net/fs/hackathon-complex-easy-naos/30692914dadaf3eb4ad22f905cafe941abfa8bcc/poly4.glb",
        Latitude: "38.802635",
        Longitude: "-121.447928",
      },
      {
        name: "2st event",
        description: "top event of animals",
        image: "JPEG URL of Skale filestorage",
        animation_url: "models/poly2.glb",
        Latitude: "39.202635",
        Longitude: "-123.447928",
      },
      {
        name: "3st event",
        description: "the biggest event about photo!",
        image: "JPEG URL of Skale filestorage",
        animation_url: "models/poly3.glb",
        Latitude: "41.202635",
        Longitude: "-120.447928",
      },
    ];

    const locations = [];
    for (let i = 0; i < jsondata.length; i++) {
      const location = {
        title: jsondata[i].name,
        description: jsondata[i].description,
        // icon: jsondata[i].image,
        icon: "/icon.png",
        animation_url: jsondata[i].animation_url,
        position: {
          lat: parseFloat(jsondata[i].Latitude),
          lng: parseFloat(jsondata[i].Longitude),
        },
      };
      locations.push(location);
    }

    console.log(locations);

    // const markerOptions1 = {
    //   position: { lat: -31.56391, lng: 147.154312 },
    //   title: "LED",
    //   icon: "/icon.png",
    //   eventName: "SuperEvent",
    //   modelUrl:
    //     "",
    // };

    // const markerOptions2 = {
    //   position: { lat: -31.718234, lng: 147.363181 },
    //   title: "ENERGY",
    //   icon: "/icon.png",
    //   eventName: "HyperEvent",
    //   modelUrl: "models/poly2.glb",
    // };

    // const markerOptions3 = {
    //   position: { lat: -32.727111, lng: 148.371124 },
    //   title: "DRIVE",
    //   icon: "/icon.png",
    //   eventName: "OmegaEvent",
    //   modelUrl: "models/poly3.glb",
    // };

    // const locations = [markerOptions1, markerOptions2, markerOptions3];

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
