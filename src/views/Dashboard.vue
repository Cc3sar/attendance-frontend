<template>
  <div>
    <h3>Llegadas Tarde</h3>
    <Bar
      id="my-chart-id1"
      :options="chartOptions"
      :data="chartDataLate"
    />
  </div>
  <div>
    <h3>Llegadas Temprano</h3>
    <Bar
      id="my-chart-id2"
      :options="chartOptions"
      :data="chartDataEarly"
    />
  </div>
</template>

<script>
  import { useDashboardStore } from '@/store/dashboard';
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import { computed } from 'vue' // Importa la función computed desde Vue

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  export default {
    components: { Bar },
    setup() {
      const dashboardStore = useDashboardStore();
      
      // Llamar a la acción fetchEmployeesData para obtener los datos de los empleados
      dashboardStore.fetchEmployeesData();

      const chartDataEarly = computed(() => dashboardStore.earlyEmployeesData);
      const chartDataLate = computed(() => dashboardStore.lateEmployeesData);

      const chartOptions = {
        responsive: true
      };

      return {
        chartDataEarly,
        chartDataLate,
        chartOptions,
      };
    },
  };
</script>







