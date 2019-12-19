<template>
  <div>
    <Menu></Menu>
    <b-container>
      <b-row style="margin-top:30px;">
        <b-col order-lg="12">
          <b-table striped hover :items="chapters" :fields="fields">
            
           <template v-slot:cell(editar)="data">
            <b-button :to="{name: 'editarcapitulo', params: {id:idbook , idc:data.value}}" class="mybtn" variant="primary" style="background-color: #dbbe19;border: none">
              Editar
            </b-button>
          </template> 
          <template v-slot:cell(excluir)="data">
            <b-button @click="apagar(data.value)" class="mybtn" variant="primary" style="background-color: #dbbe19;border: none">
              Deletar
            </b-button>
          </template>  
          <template v-slot:cell(viewchapter)="data">
            <b-button :to="{name: 'vercapitulo', params: {id: idbook, idc:data.value}}" class="mybtn" variant="primary" style="background-color: #dbbe19;border: none">
              Ver Capítulo
            </b-button>
          </template>    
          </b-table> 
        </b-col>
      </b-row>
    </b-container>
    <div class="container text-center">
        <b-button variant="primary" class="btn ml-5" to="/book" style="background-color: #0a275b;border: none;">     
          <strong>Voltar</strong>
         </b-button>
    </div>
  </div>
</template> 

<script>
import Menu from "@/components/Menu.vue";
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "app",
  data() {
    return {
      chapters: [],
      idbook:"",
      fields: [
          {
            key: 'nome',
            label: 'nome',
            sortable: true
          },
   {
            key: 'editar',
            label: '',
            sortable: false,
          },
          {
            key: 'excluir',
            label: '',
            sortable: false,
          },
          {
            key: 'viewchapter',
            label: '',
            sortable: false,
          },
          
        ],
        books: []
        
    };
  },
  methods: {
    listar(){
      this.$axios.get("books/"+this.idbook+"/chapters").then(resposta => {
        this.chapters = []
        for(let i in resposta.data){
          this.chapters.push({
            ...resposta.data[i],
            editar: resposta.data[i]._id,
            excluir: resposta.data[i]._id,
            viewchapter: resposta.data[i]._id,
          })
        }        
      })  
    },
    apagar(idchapter){
        this.$axios.delete("books/"+this.idbook+"/chapters/"+idchapter).then( resposta => {
            this.listar();
        })
    }
  },
  created(){
    this.idbook = this.$route.params.id;
    this.listar();
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