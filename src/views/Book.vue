<template>
  <div>
    <Menu></Menu>
    <b-container>
      <b-row class="margem">
      </b-row>
      <b-card class="card" style="background-color: #0a275b">
        <b-form-group label="Nome do livro:" class="titulo-card">
          <b-form-input type="text" class="myplaceholder" size="lg" v-model="book.titulo" placeholder="Digite o nome do livro" ></b-form-input>
        </b-form-group>
        <b-form-group label="Autor do livro:" class="titulo-card">
          <b-form-input class="myplaceholder" type="text" size="lg" v-model="book.autor" placeholder="Digite o nome do autor"></b-form-input>
        </b-form-group>
        <b-form-group label="Ano de lançamento:" class="titulo-card">
          <b-form-input type="text" size="lg" v-model="book.ano_publicacao" placeholder="Digite ano de publicação" class="myplaceholder"></b-form-input>
        </b-form-group>
        <b-button @click="create" variant="primary" style="background-color: #dbbe19;border: none" class="btn">
          <strong>Adicionar Livro</strong>
        </b-button>
      </b-card>
    
      <b-row class="margem">
        <b-col order-lg="12">
          <b-table striped hover :items="books" :fields="fields">
          <template v-slot:cell(editar)="data">
            <b-button :to="{name: 'editarlivro', params: {id: data.value}}" class="mybtn" variant="primary" style="background-color: #dbbe19;border: none">
                 Editar Livro
            </b-button>
          </template> 
          <template v-slot:cell(deletar)="data">
            <b-button @click="apagar(data.value)" class="mybtn" variant="primary" style="background-color: #dbbe19;border: none">
              Deletar Livro
            </b-button>
          </template>   
          <template v-slot:cell(addCapitulo)="data">
            <b-button :to="{name: 'addcapitulo', params: {id: data.value}}" class="mybtn" variant="primary" style="background-color: #dbbe19;border: none">
                Adicionar Capítulo
            </b-button>
          </template>
          <template v-slot:cell(listarCapitulo)="data">
            <b-button :to="{name: 'listarcapitulo', params: {id: data.value}}" class="mybtn" variant="primary" style="background-color: #dbbe19;border: none;">
                Listar Capítulo
            </b-button>
          </template>   
          </b-table> 
        </b-col>
      </b-row>
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
        titulo: "",
        autor: "",
        ano_publicacao: ""
      },
       books: [],
      fields: [

          {
            key: 'titulo',
            label: 'Título do livro',
            sortable: true
          },
          {
            key: 'autor',
            label: 'Autor',
            sortable: true,
          },
          {
            key: 'ano_publicacao',
            label: 'Ano',
            sortable: true
          },
          {
            key: 'editar',
            label: '',
            sortable: false
          },
          {
            key: 'deletar',
            label: '',
            sortable: false
          },
          {
            key: 'addCapitulo',
            label: '',
            sortable: false
          },
          {
            key: 'listarCapitulo',
            label: '',
            sortable: false
          },
        ],
       
        
    };
  },
  methods: {
    create() {
      this.$axios.post("/books", this.book).then (result => {
        this.listar();
        this.limpar();
      })
    },
    apagar(id){
      this.$axios.delete("/books/"+id).then( resposta => {
        this.listar();
      })
  },
    listar(){
      this.$axios.get("/books").then(resposta => {
        this.books = []
        for(let i in resposta.data){
          this.books.push({
            ...resposta.data[i],
            editar: resposta.data[i]._id,
            deletar: resposta.data[i]._id,
            addCapitulo: resposta.data[i]._id,
            listarCapitulo: resposta.data[i]._id
          })
        }        
      })  
      
    },
    limpar(){
      this.book.ano_publicacao = "";
      this.book.autor = "";
      this.book.titulo = "";
    }
  },
  
  created(){
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
