import managementService from "@/services/register-service";
import Dogs from "../models/Dogs";
import conversorMonetario from "../utils/conversor-monetario";
import conversorDeData from "../utils/conversor-data";

let ControllerMixin = {
    filters: {
        data(data) {
          return conversorDeData.aplicarMascaraEmDataIso(data);
        },
        real(valor) {
          return conversorMonetario.aplicarMascaraParaRealComPrefixo(valor);
        },
    },
    data(){
        return {
            dogs: [],
        }
    },

    mounted() {
        this.gettallRecords();
    },

    methods: {    
      editButton(dog) {
          this.$router.push({ name: "EditarCadastro", params: { id: dog.id } });
        },
    
        removeButton(dog) {
          this.$swal({
            icon: "question",
            title: "Deseja excluir o dog?",
            text: `Código: ${dog.id} - Name: ${dog.name}`,
            showCancelButton: true,
            confirmButtonColor: "#FF3D00",
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
            animate: true,
          }).then((result) => {
            if (result.isConfirmed) {
              managementService
                .remove(dog.id)
                .then(() => {
                  let indice = this.dogs.findIndex((p) => p.id == dog.id);
                  this.dogs.splice(indice, 1);
    
                    this.$swal({
                      icon: 'success',
                      title: 'Animal deletado com sucesso!',
                      confirmButtonColor: '#FF3D00',
                      animate: true
                    });
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          });
        },
    
        ordernarProdutos(a, b) {
          // A < B = -1
          // A > B = 1
          // A == B = 0
          return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
        },
    
        gettallRecords() {
          managementService
            .getAll()
            .then((response) => {
              let dogs = response.data.map((p) => new Dogs(p));
              this.dogs = dogs.reverse();
            })
            .catch((error) => {
              console.log(error);
            });
        },
    },
}

export default ControllerMixin;