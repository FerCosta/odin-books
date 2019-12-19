<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="light" variant="dark">
        <b-navbar-brand href="#"><router-link to="/" class="odin">Sistema ODIN </router-link></b-navbar-brand> 
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#"><router-link to="/book" class="livros">Iniciar</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div id="img-home">
       <h5 id="h5">Clique em iniciar para começar a cadastrar novos livros.</h5> 
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  text-decoration-line: none;
  color:whitesmoke;
}

#nav a.router-link-exact-active {
  
  color: #dbbe19;
}
.odin{
  padding-left: 400px;
  font-size: 35px;
}
.livros{
  padding-left:280px;
  font-size: 25px;
}
#img-home{
  background: #f1e07e;
  width: 0 auto;
  height: 80px;
}
#h5{
  padding-top:20px;
}
</style>