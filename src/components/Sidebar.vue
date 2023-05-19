<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="false"
        :clipped="clipped"
        permanent
      >
        <v-list dense nav>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase font-weight-bold">
                Opciones
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :prepend-icon="item.icon"
            :title="item.title"
            @click="navigate(item.route)"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      clipped: false,
      menuItems: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
        { title: 'Empleados', icon: 'mdi-account-group-outline', route: '/employees' },
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




