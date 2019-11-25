<template>
<div>

<v-container class="top-base-register">
<div>
    <div>
     <a href="/"><p>voltar</p></a>
    </div>

    <center>
        <form action ="/minha-area" style="width: 50%;">
        <h1 class="section-title-login">Cadastre-se!</h1> 
        <br>
        <v-text-field class="label-form" v-model="nome" :error-messages="emailErrors" label="Nome"></v-text-field>
        <v-text-field class="label-form" v-model="email" :error-messages="emailErrors" label="E-mail"></v-text-field>
        <v-text-field class="label-form" v-model="telefone" :error-messages="emailErrors" label="Telefone"></v-text-field>
        <v-text-field class="label-form" v-model="endereco" :error-messages="emailErrors" label="Endereço"></v-text-field>
        <br>
        
        <v-row align="left" justify="space-around" style="margin-left: 286px; color: black !important;">
            <v-icon>fas fa-lock</v-icon>
        </v-row>

        <v-text-field type="password" class="label-form" v-model="senha" :error-messages="emailErrors" label="Senha"></v-text-field>
        <v-btn to="/minha-area"  style="border: 0; color: #FFF;border-radius: 60px;background-color: #451F55;width: 436px;height: 50px;font-size: 25px!important; text-transform: none;">FINALIZAR</v-btn>
        
        </form>
    </center>
  </div>
  </v-container>
</div>
</template>

<script>
     const axios = require('axios')
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
    }

    const routes = [
  { path: '/minha-area' }
];
</script>