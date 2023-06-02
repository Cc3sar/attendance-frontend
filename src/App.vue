<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" permanent>
      <!-- Contenido del SideBar -->
      <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-uppercase font-weight-bold">
              <!-- logo almacenado en public -->
              <v-img
                src="../public/logo_umg.png"
                max-height="100"
                contain
              ></v-img>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :prepend-icon="item.icon"
        :title="item.title"
        @click="navigate(item.route)"
      ></v-list-item>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- Contenido de la barra de navegación superior -->
      <v-toolbar-title class="text-right">
        <span class="font-weight-bold">
          Control de asistencia&nbsp;
        </span>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="auto">
            <!-- Espacio reservado para el SideBar -->
          </v-col>
          <v-col>
            <!-- Contenido de la página -->
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true, // Establece el valor inicial del drawer a true si deseas que esté abierto por defecto
      menuItems: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
        // { title: 'Empleados', icon: 'mdi-account-group-outline', route: '/employees' },
      ],
    };
  },
  methods: {
    navigate(route) {
      // Aquí puedes realizar la redirección utilizando la función window.location.href
      window.location.href = route;
    },
  },
};
</script>


