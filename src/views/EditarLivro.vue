<template>
  <div>
    <Menu></Menu>
    <b-container>
      <b-row class="margem">
      </b-row>
      <b-card class="card" style="background-color: #0a275b">
        <b-form-group class="titulo-card" label="Nome do livro:">
          <b-form-input class="myplaceholder" type="text" size="lg" v-model="book.titulo" placeholder="Digite o nome"></b-form-input>
        </b-form-group>
        <b-form-group class="titulo-card"  label="Nome do autor:">
          <b-form-input class="myplaceholder" type="text" size="lg" v-model="book.autor" placeholder="Digite o autor"></b-form-input>
        </b-form-group>
        <b-form-group class="titulo-card"  label="Ano da pulicação:">
          <b-form-input class="myplaceholder" type="text" size="lg" v-model="book.ano_publicacao" placeholder="Digite o ano de publicação"></b-form-input>
        </b-form-group>
        <div class="container text-center">
        <b-button variant="primary" class="btn" to="/book" style="background-color: #dbbe19;border: none;">     
          <strong>Voltar</strong>
         </b-button>
        <b-button @click="editar()" variant="primary" class="btn ml-5" style="background-color: #dbbe19;border: none;">        
          <strong>Salvar</strong>
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
      book: {
        id:"",
        titulo: "",
        autor: "",
        ano_publicacao: 0
      },  
    };
  },
  methods: {
      getBook(){
        this.$axios.get("/books/"+this.id).then(resposta => {
            this.book = { ...resposta.data}
        })
      },
      editar(){
          this.$axios.put("/books/"+this.id, this.book).then( resposta => {
              this.$router.push("/book")
          })
      }
  },
  created(){
      this.id = this.$route.params.id
      this.idbook = this.$route.params.idbook;
      this.getBook()
  },
  components: {
    Menu
  }
};
</script>
<style scopped>
.btn{
  text-align: center;
}
</style>