<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">{{ registrationMode ? "Adicionar" : "Editar" }} Cadastro</h1>
        <hr />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-2">
        <div class="form-group">
          <label for="id">Código</label>
          <input id="id" v-model="dogs.id" type="text" disabled class="form-control" />
        </div>
      </div>

      <div class="col-sm-10">
        <div class="form-group">
          <label for="name">Nome</label>
          <input id="name" v-model="dogs.name" type="text" class="form-control" />
        </div>
      </div>
 
      <div class="col-sm-3">
        <div class="form-group">
          <label for="species">Especies</label>
          <input id="species" v-model="dogs.species" type="text" class="form-control" />
        </div>
      </div>
     <div class="col-sm-3">
        <div class="form-group">
          <label for="sex">Sexo</label>
          <input id="sex" v-model="dogs.sex" type="text" class="form-control" />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="age">Idade</label>
          <input id="age" v-model="dogs.age" type="text" class="form-control" />
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form-group">
          <label for="observacao">Tamanho</label>
            <input id="age" v-model="dogs.size" type="text" class="form-control" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <hr />
      </div>

      <div class="col-sm-12">
        <div v-show="registrationMode" class="form-check-inline">
          <label class="form-check-label">
            <input v-model="continueAdding"  type="checkbox" class="form-check-input"  />
            Continuar adicionando
          </label>
        </div>

        <button  @click="cancelAction" class="btn btn-default float-right" type="button">
          Cancelar
        </button>
        <button @click="saveRegister" class="btn btn-primary float-right mr-2" type="button">
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Dog from '../models/Dogs';
import managementService from '../services/register-service';
import conversorDeData from "../utils/conversor-data";
export default {
    name:"Dogs",
    data(){
        return {
            dogs: new Dog(),
            registrationMode: true,
            continueAdding: false,
        }
    },
    mounted(){
        let id = this.$route.params.id;
        if(!id) return;
        this.registrationMode = false;
        this.getAnimalsById(id);
    },
    methods:{
        getAnimalsById(id){
            managementService.gettId(id)
            .then(response => {
                this.dogs = new Dog(response.data);
            })
            .catch(error =>{
                console.log(error)
                this.$swal({
                  icon: 'error',
                  title: 'Não foi possível obter o Pet pelo id ' + id,
                  confirmButtonColor: '#FF3D00',
                  animate: true
                });
            })
        },
        cancelAction(){
            this.dogs = new Dog();
            this.$router.push({name: "ControllerDogs"})
        },
        registerAnimal(){
            if(!this.dogs.modelValidForRegistration()){
                this.$swal({
                  icon: 'warning',
                  title: 'O nome do Pet é obrigatório para o cadastro.',
                  confirmButtonColor: '#FF3D00',
                  animate: true
                });
                return;
            }
            this.dogs.dataCadastro = 
                conversorDeData.aplicarMascaraISOEmFormatoAmericano(this.dogs.dataCadastro);
        
            managementService.register(this.dogs)
            .then(() => {
                this.$swal({
                  icon: 'success',
                  title: 'Pet cadastrado com sucesso!',
                  confirmButtonColor: '#FF3D00',
                  animate: true
                });
                this.dogs = new Dog();
                if(!this.continueAdding){
                    this.$router.push({name: "ControllerDogs"})
                }
            })
            .catch(error =>{
                console.log(error);
                this.$swal({
                  icon: 'error',
                  title: 'Não foi possível cadastrar o Pet',
                  confirmButtonColor: '#FF3D00',
                  animate: true
                });
            });
        },
        updateRegistration(){
            if(!this.dogs.modeloValidoParaAtualizar()){
                this.$swal({
                  icon: 'warning',
                  title: 'O código e nome do Pet são obrigatórios para o cadastro.',
                  confirmButtonColor: '#FF3D00',
                  animate: true
                });
                return;
            }
            
            this.dogs.dataCadastro = 
                conversorDeData.aplicarMascaraISOEmFormatoAmericano(this.dogs.dataCadastro);
            managementService.update(this.dogs)
            .then(() =>{
                this.$swal({
                  icon: 'success',
                  title: 'Pet atualizado com sucesso!',
                  confirmButtonColor: '#FF3D00',
                  animate: true
                });
                this.$router.push({name: "ControllerDogs"});
            })
            .catch(error => {
                console.log(error);
                this.$swal({
                  icon: 'error',
                  title: 'Não foi possível atualizar o Pet',
                  confirmButtonColor: '#FF3D00',
                  animate: true
                });
            });
        },
        saveRegister(){
            (this.registrationMode) ? this.registerAnimal() : this.updateRegistration();
        }   
    }
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>