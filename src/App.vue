<template>
  <sidebar-menu :menu="menu" />
  <div class="rightside">
    <nav>
      <input class="searchbar" type="text" placeholder=" Search for Event..." />
      <div class="metaset">
        <img class="metaicon" src="@/assets/metamask.png" />
        <input class="metaAdd" type="text" placeholder="      .........39c81" />
      </div>
    </nav>
    <h3>so far, please please use private mode on your browser XD</h3>
    <router-view v-if="isMounted" />
  </div>
</template>

<script>
// import web3 from "web3";
import abis from "@/abis.json";

var Web3 = require("web3");
var web3 = new Web3(
  Web3.givenProvider ||
    "https://eth-sf.skalenodes.com/v1/hackathon-complex-easy-naos"
);

export default {
  data() {
    return {
      isMounted: false,
      tokenlist: [],
      nftAddress: "0xd4C4C6cFC75caae476212a9956A00837a02CBFd4",
      menu: [
        {
          header: "KIOKU GINKOU",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Home",
          icon: "ourlogoclass",
        },
        {
          title: "Events",
          icon: "eicon",
          child: [
            {
              href: "/charts/sublink",
              title: "Upcoming Events",
            },
            {
              href: "/about",

              title: "Events Reviews",
            },
            {
              href: "/charts/sublink",
              title: "LeaderBoard",
            },
          ],
        },
        {
          title: "Profile",
          icon: "picon",
          child: [
            {
              href: "/charts/sublink",
              title: "Portfolio",
            },
            {
              href: "/charts/sublink",

              title: "Settings",
            },
          ],
        },
      ],
    };
  },
  async mounted() {
    const contract = new web3.eth.Contract(abis, this.nftAddress);
    const num_tokens = await contract.methods.totalSupply().call();
    // const rangeArray = [...Array(num_tokens)].map((_, i) => i);
    const proxySearver = "https://d2wac7uuh3wste.cloudfront.net/";
    // const tokenlist = [];
    for (let i = 0; i < num_tokens; i++) {
      try {
        const tokenUri = await contract.methods.tokenURI(i).call();
        const tokenUriArr = tokenUri.split("/").slice(3);
        const proxyUrl = proxySearver + tokenUriArr.join("/");
        console.log(proxyUrl);

        const response = await fetch(proxyUrl, { mode: "cors" });
        console.log(response);
        const token_metadata = await response.json();
        console.log("token meta", token_metadata);
        this.$listtest.push(token_metadata);
      } catch {
        console.log("error");
      }
    }
    // this.$listtest = tokenlist;
    console.log("global", this.$listtest);
    this.isMounted = true;
  },
};
</script>

<style>
.searchbar {
  width: 600px;
  height: 24px;
  margin-bottom: 12px;
}
.metaset {
  display: flex;
  height: 24px;
}
.rightside {
  margin-left: 290px;
  position: absolute;
}
.metaicon {
  margin: 0 0 0 auto;
  width: 36px;
  height: 36px;
}
.metaAdd {
  margin: 0 0 0 auto;
  height: 24px;
  width: 120px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input {
  border-radius: 4px;
}
input::placeholder {
  font-weight: bold;
  opacity: 0.6;
  color: #03593a;
}

nav {
  width: 1024px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  background-image: url("@/assets/darkcloud.png");
}

.ourlogoclass {
  background-size: contain;
  background-image: url("@/assets/logo.png");
}

.picon {
  background-size: contain;
  background-image: url("@/assets/picon.png");
}

.eicon {
  background-size: contain;
  background-image: url("@/assets/eicon.png");
}

.v-sidebar-menu {
  background-color: #024029 !important;
}

.v-sidebar-menu.vsm_expanded .vsm--link_level-1.vsm--link_open {
  background-color: #5dbf4e !important;
}

.v-sidebar-menu.vsm_expanded .vsm--link_level-1.vsm--link_open .vsm--icon {
  background-color: #03593a !important;
}
</style>
