<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="titulo">Cards de produtos</h1>
        <hr />
      </div>
    </div>

    <div class="row mt-3">
      <div v-for="item in dogs" :key="item.id">
        <Card>
          <template v-slot:nome> {{ item.nome }} </template>

          <template v-slot:valor> {{ item.valor | real }} </template>

          <template v-slot:observacao> {{ item.observacao }} </template>

          <template v-slot:acoes>
            <i
              @click="editButton(produto)"
              class="fas fa-pencil-alt icones-tabela"
            ></i>
            <i
              @click="removeButton(produto)"
              class="fas fa-trash-alt icones-tabela"
            ></i>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/card/Card.vue";
import ControllerMixin from "../mixins/controller-mixin";

export default {
  name: "ListaProdutoCards",
  mixins: [ControllerMixin],
  components: {
    Card,
  },
  data() {
    return {};
  },
  methods: {
        trocarImagem(produto){
            console.log(produto)
        }
  },
};
</script>