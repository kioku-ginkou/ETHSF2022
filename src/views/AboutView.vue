<template>
  <GoogleMap
    api-key="AIzaSyAsTVz02osfRoiPVKJaMUewenELTa6RPsM"
    class="map"
    :center="center"
    :zoom="12"
  >
    <MarkerCluster>
      <Marker
        v-for="(markerOptions, i) in locations"
        :options="markerOptions"
        :key="i"
      >
        <InfoWindow>
          <div>
            <h1 id="name" class="name">
              {{ markerOptions.title }}
            </h1>
            <p>{{ markerOptions.description }}</p>
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
    const center = { lat: 37.80286462301539, lng: -122.44942170459915 };

    const jsondata = [
      {
        name: "ETHGlobal2022 Area1",
        description: "hack area",
        image:
          "https://d2wac7uuh3wste.cloudfront.net/fs/hackathon-complex-easy-naos/30692914dadaf3eb4ad22f905cafe941abfa8bcc/poly2.jpg",
        animation_url:
          "https://d2wac7uuh3wste.cloudfront.net/fs/hackathon-complex-easy-naos/30692914dadaf3eb4ad22f905cafe941abfa8bcc/poly2.glb",
        Latitude: "37.80286462301539",
        Longitude: "-122.44942170459915",
      },
      {
        name: "ETHGlobal2022 Area2",
        description: "workshop room",
        image:
          "https://d2wac7uuh3wste.cloudfront.net/fs/hackathon-complex-easy-naos/30692914dadaf3eb4ad22f905cafe941abfa8bcc/poly3.glb",
        animation_url:
          "https://d2wac7uuh3wste.cloudfront.net/fs/hackathon-complex-easy-naos/30692914dadaf3eb4ad22f905cafe941abfa8bcc/poly3.glb",
        Latitude: "37.803583737286964",
        Longitude: "-122.44925404862734",
      },
      {
        name: "ETHGlobal2022 Area3",
        description: "main stage",
        image:
          "https://d2wac7uuh3wste.cloudfront.net/fs/hackathon-complex-easy-naos/30692914dadaf3eb4ad22f905cafe941abfa8bcc/poly4.glb",
        animation_url:
          "https://d2wac7uuh3wste.cloudfront.net/fs/hackathon-complex-easy-naos/30692914dadaf3eb4ad22f905cafe941abfa8bcc/poly4.glb",
        Latitude: "37.80269430545183",
        Longitude: "-122.4494169144285",
      },
      {
        name: "ETHGlobal2022 Area4",
        description: "chill area",
        image:
          "https://d2wac7uuh3wste.cloudfront.net/fs/hackathon-complex-easy-naos/30692914dadaf3eb4ad22f905cafe941abfa8bcc/poly5.glb",
        animation_url:
          "https://d2wac7uuh3wste.cloudfront.net/fs/hackathon-complex-easy-naos/30692914dadaf3eb4ad22f905cafe941abfa8bcc/poly5.glb",
        Latitude: "37.80294788923682",
        Longitude: "-122.44908160248494",
      },
      {
        name: "ETHGlobal2022 Area5",
        description: "another hack area",
        image:
          "https://d2wac7uuh3wste.cloudfront.net/fs/hackathon-complex-easy-naos/30692914dadaf3eb4ad22f905cafe941abfa8bcc/poly6.glb",
        animation_url:
          "https://d2wac7uuh3wste.cloudfront.net/fs/hackathon-complex-easy-naos/30692914dadaf3eb4ad22f905cafe941abfa8bcc/poly6.glb",
        Latitude: "37.80337557334946",
        Longitude: "-122.44900495975499",
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
.gm-style-iw {
  min-height: 360px !important;
  min-width: 540px !important;
}
</style>
