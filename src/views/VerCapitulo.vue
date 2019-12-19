<template>
  <div>
    <Menu></Menu>
    <b-container> 
         
      <b-card style="background-color: #0a275b">
        <b-form-group label="Nome do capitulo:" class="titulo-card">
          <b-form-input type="text" class="myplaceholder" size="lg" v-model="chapter.nome" placeholder="Digite o nome"></b-form-input>
        </b-form-group>
        <b-form-group class="titulo-card" label="Conteúdo:">
          <b-form-textarea  class="myplaceholder" label="Conteúdo" id="textarea" v-model="chapter.conteudo" placeholder="Dugite o conteúdo" rows="18" max-rows="6"></b-form-textarea>
          <div class="container text-center">
        <b-button variant="primary" class="btn mt-3" to="/listarcapitulo/5dc7fc996f9419001fdafe2d" style="background-color: #dbbe19;border: none;">     
          <strong>Voltar</strong>
         </b-button>
          </div>
        </b-form-group>
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
      id: "",
      idc: "",
      chapter: {
        nome: "",
        conteudo: ""
      }
    };
  },
  methods: {
    getChapter(){
        this.$axios.get("/books/"+this.id+"/chapters/"+this.idc).then(resposta => {
            this.chapter = { ...resposta.data}
        })
    },
  },

  created() {
    this.id = this.$route.params.id;
    this.idc = this.$route.params.idc;
    this.getChapter();
  },
  components: {
    Menu
  }
};
</script>

<style>

.margem{
margin-top:80px;
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

