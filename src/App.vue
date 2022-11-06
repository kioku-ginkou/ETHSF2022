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
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          icon: "fa fa-chart-area",
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
          icon: "fa fa-chart-area",
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
  background-image: url("@/assets/ourlogo.png");
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
