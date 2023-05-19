import { defineStore } from "pinia";
import axios from "@/api/axios";

export const useDashboardStore = defineStore("dashboard", {
    state: () => ({
      lateEmployeesData: {
        labels: [],
        datasets: [ { data: [] } ],
      },
      earlyEmployeesData: {
        labels: [],
        datasets: [ { data: [] } ],
      },
    }),
    actions: {
      fetchEmployeesData() {
        axios
          .get("schedule/get_report")
          .then((response) => {
            const data = response.data;
            console.log(data.late);
            console.log(data.early);
            this.lateEmployeesData = data.late;
            this.earlyEmployeesData = data.early;
          })
          .catch((error) => {
            // Manejar errores de la solicitud
            console.error(error);
          });
      },
    },
  });