<template>
<div>
    <v-container class="page-header p-t-70">
    <h2 class="internal-title">Olá, Felipe</h2> 
    </v-container>
<br>
<v-container class="c-minha-area">
  <v-layout row wrap>
    <v-flex md4 xs12>
      <div class="m-left">
        <div class="m-dados">
          <v-btn class="minha-area-btn">Meus Dados</v-btn>
        </div>
        <div class="m-sair">
          <v-btn class="minha-area-btn">Sair</v-btn>
        </div>
      </div>
    </v-flex>
                  
    <v-flex md1 xs12>
      <div class="vl"></div>
    </v-flex>

    <v-flex md7 xs12 class="r-area">                  
      <h2 class="m-h-area">Meus Pedidos</h2>
                     <v-tabs
                        left
                        color="cyan"
                        light
                        icons-and-text
                      >
                        <v-tabs-slider color="#451F55"></v-tabs-slider>
                        <v-tab >
                          Ativos
                        </v-tab>
                        <v-tab >
                          Finalizados
                        </v-tab>

                        <v-tab-item>
                          <v-card flat>
                            <v-card-text>Ativos</v-card-text>
                          </v-card>                           
                        </v-tab-item>

                        <v-tab-item>
                          <v-card flat>
                            <v-card-text>Finalizados</v-card-text>
                          </v-card>                           
                        </v-tab-item>
                        </v-tabs>
                      <br>        
    </v-flex>
  </v-layout>
</v-container>
</div>
</template>

<style>
.vl {
  border-left: 4px solid #451F55;
  height: 400px;
}
</style>


<script>
    /*const axios = require('axios')
    export default {
        data(){
            return{
                nome: '',
                email: '',
                telefone: '',
                endereco: '',
                senha: ''
            }    
        },
        
        methods: {
            register: function(e){
                const parametros = new URLSearchParams();
                parametros.append("nome", this.nome);
                parametros.append("email", this.email);
                parametros.append("telefone", this.telefone);
                parametros.append("endereco", this.endereco);
                parametros.append("senha", this.senha);

                axios.post('http://localhost:9000/registration', parametros);
            }
        }
    }*/
 
 export default {
    data: () => ({
      currentItem: 'tab-1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      
      currentItem: 'tab-2',
      text: 'Lorem ipsum dolor sit amet'
    })
  }
</script>