import { defineStore } from "pinia";
import axios from "@/api/axios";

export const useDashboardStore = defineStore("dashboard", {
    state: () => ({
      lateEmployeesData: [],
      earlyEmployeesData: [],
    }),
    actions: {
      fetchEmployeesData() {
        axios
          .get("users")
          .then((response) => {
            // Manipular la respuesta de la solicitud y actualizar las variables de estado correspondientes
  
            // this.lateEmployeesData = employeesData.filter(
            //   (employee) => employee.arrivalTime > "09:00"
            // );
            // this.earlyEmployeesData = employeesData.filter(
            //   (employee) => employee.arrivalTime < "09:00"
            // );
            console.log(response);
          })
          .catch((error) => {
            // Manejar errores de la solicitud
            console.error(error);
          });
      },
    },
  });