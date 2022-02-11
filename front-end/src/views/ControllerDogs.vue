<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Gerenciamento</h2>
        <hr />
      </div>
    </div>

    <div class="row sub-cointainer">
      <div class="col-sm-2">
        <Button :callback="addDogs" value="Adicionar"></Button>
      </div>
      <div class="col-sm-10">
        <a @click="seeCards" class="float-right ver-em-cards"> Ver em cards</a>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Espécie</th>
              <th>Sexo</th>
              <th>Idade</th>
              <th>Tamanho</th>
              <th>Ações</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dogs" :key="item.id">
              <td>{{item.id}}</td>
              <td>{{item.name}}</td>
              <td>{{item.species}}</td>
              <td>{{item.sex }}</td>
              <td>{{item.age}}</td>
               <td>{{item.size}}</td>
              <td>
                <i
                  @click="editButton(item)"
                  class="fas fa-pencil-alt icones-tabela"
                ></i>
                <i
                  @click="removeButton(item)"
                  class="fas fa-trash-alt icones-tabela"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>
</template>
<script>
import Button from "../components/button/Button.vue";
import ControllerMixin from '../mixins/controller-mixin';

export default {
  name: "ControllerDogs",
  mixins:[ControllerMixin],
  components: {
    Button,
  },

  data() {
    return {
    };
  },

  methods: {
    seeCards(){
      this.$router.push({ name: "ListaProdutoCards" });
    },

    addDogs() {
      this.$router.push({ name: "Novo" });
    }
  },
};
</script>
<style scoped>

.icones-tabela,
.ver-em-cards {
  margin: 5px;
  cursor: pointer;
  color: var(--cor-primaria);
}

.ver-em-cards {
  margin-top: 25px;
}
</style>
