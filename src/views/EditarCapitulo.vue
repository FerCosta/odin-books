<template>
  <div>
    <Menu></Menu>
    <b-container>
      <b-row class="margem">
      </b-row>
      <b-card class="card" style="background-color: #0a275b">
        <b-form-group class="titulo-card" label="Nome do capítulo:">
          <b-form-input type="text" class="myplaceholder" size="lg" v-model="chapter.nome" placeholder="Digite o nome"></b-form-input>
        </b-form-group>

        <b-form-group class="titulo-card" label="Conteúdo:">
          <b-form-textarea class="myplaceholder" label="Digite o conteúdo" id="textarea" v-model="chapter.conteudo" placeholder="Digite aqui o conteúdo" rows="6" max-rows="6"></b-form-textarea>
        </b-form-group>
        <b-button @click="edit()" variant="primary" class="btn" style="background-color: #dbbe19;border: none">
          <strong>Editar Capítulo</strong>
        </b-button>
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
      idbook: "",
      chapter: {
        nome: "",
        conteudo: ""
      }
    };
  },
  methods: {
    getC(){
      this.$axios.get("books/"+ this.idbook +"/chapters/"+this.id).then(resposta=>{
        this.chapter = { ...resposta.data}
      })
    },
    edit() {
      this.$axios
        .put("/books/" + this.idbook + "/chapters/" + this.id, this.chapter)
        .then(resposta => {
          this.$router.push("/book");
      });
    }
  },
  created() {
    this.id = this.$route.params.idc;
    this.idbook = this.$route.params.id;
    this.getC()
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