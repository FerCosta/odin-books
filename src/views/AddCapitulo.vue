<template>
  <div>
    <Menu></Menu>
    <b-container>
      <b-row class="margem">
      </b-row>
      <b-card class="card" style="background-color: #0a275b">
        <b-form-group label="Nome do capitulo:" class="titulo-card">
          <b-form-input type="text" class="myplaceholder" size="lg" v-model="chapter.nome" placeholder="Digite o nome"></b-form-input>
        </b-form-group>
        <b-form-group label="Conteúdo do Capítulo:" class="titulo-card">
         <b-form-textarea label="Conteudo a ser inserido" id="textarea" class="myplaceholder" v-model="chapter.conteudo" placeholder="Digite aqyu o conteúdo" rows="6" max-rows="6"></b-form-textarea>
        </b-form-group>
        <div class="container text-center">
        <b-button variant="primary" class="btn" to="/book" style="background-color: #dbbe19;border: none;">     
          <strong>Voltar</strong>
         </b-button>
        <b-button @click="salvar()" variant="primary" class="btn ml-5" style="background-color: #dbbe19;border: none">
          <strong>Adicionar Capítulo</strong>
        </b-button>
        </div>
      </b-card>
    </b-container>
  </div>
</template> 

<script>
import Menu from "@/components/Menu.vue";
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "app",
  data() {
    return {
      id:"",
      chapter: {
        nome: "",
        conteudo: "",
      }
    };
  },
  methods: {
    salvar() {
      console.log("/books/" + this.id+ "/chapters")
      this.$axios.post("/books/" +this.id+ "/chapters", this.chapter).then(resposta => {
        this.$router.push("/book");
      });
    }
  },
  created() {
    this.id = this.$route.params.id;
  },
  components: {
    Menu
  }
};
</script>

<style>

.margem{
margin-top:20px;
}
.card{
  text-align: center;
}
.titulo-card{
  color:white;
  font-weight: bold;
  font-size: 21px;
}
.myplaceholder{
  text-align: center;
  font-size: 16px;
  background-color:#f3f3ef;
}
.mybtn{
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bold;
}
</style>
