<template>
    <v-container>
        <h1>Dashboard</h1>
    </v-container>
  </template>
  
  <script>
  import { useDashboardStore } from '@/store/dashboard';
  
  const dashboardStore = useDashboardStore();
  
  dashboardStore.fetchEmployeesData(); // Llama a la acción fetchEmployeesData
  
  // Resto de la lógica de tu componente
  
  export default {
    setup() {
      // Resto de la lógica de tu componente
  
      return {
        dashboardStore,
      };
    },
  };
  </script>
  
  
  