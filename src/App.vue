<template>
  <v-app>
    <!-- <v-navigation-drawer v-model="drawer" app> -->
    <BreadCrums :items="breadcrumbs" />
    <!-- </v-navigation-drawer> -->

    <!-- use my sidebar -->
    <SideBar />
    <v-main>
      <!-- Contenido principal de la página -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from './components/Sidebar.vue';
import BreadCrums from './components/Breadcrumbs.vue';

export default {
  components : {
    SideBar,
    BreadCrums,
  },
  data() {
    return {
      drawer: false, // Estado para controlar la visibilidad de la barra lateral
    };
  },
  computed: {
    breadcrumbs() {
      const routeName = this.$route.name; // Obtén el nombre de la ruta activa
      let items = [];

      // Determina los enlaces de breadcrumbs en función de la ruta activa
      if (routeName === 'dashboard') {
        items = [
          {
            text: 'Dashboard',
            disabled: false,
            href: '/dashboard',
          },
        ];
      } else if (routeName === 'employees') {
        items = [
          {
            text: 'Dashboard',
            disabled: false,
            href: '/dashboard',
          },
          {
            text: 'Empleados',
            disabled: false,
            href: '/employees',
          },
        ];
      } else if (routeName === 'reports') {
        items = [
          {
            text: 'Dashboard',
            disabled: false,
            href: '/dashboard',
          },
          {
            text: 'Reporte',
            disabled: false,
            href: '/reports',
          },
        ];
      }

      return items;
    },
  },
};
</script>

