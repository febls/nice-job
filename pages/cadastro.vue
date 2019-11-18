<template>
<div>

<v-container id="app" class="top-base-register">
<div>
    <div>
     <a href="/"><p>voltar</p></a>
    </div>

    <center>
        <form @submit="register" class="formulario">
        <h1 class="section-title-login">Cadastre-se!</h1> 
        <br>
        <v-text-field class="label-form" v-model="nome" :error-messages="emailErrors" label="Nome"></v-text-field>
        <v-text-field class="label-form" v-model="email" :error-messages="emailErrors" label="E-mail"></v-text-field>
        <v-text-field class="label-form" v-model="telefone" :error-messages="emailErrors" label="Telefone"></v-text-field>
        <v-text-field class="label-form" v-model="endereco" :error-messages="emailErrors" label="Endereço"></v-text-field>
        
        <br>
        
        <v-row align="left" justify="space-around" style="margin-left: 286px; color: black !important;">
            <v-icon>fas fa-lock</v-icon></v-row>
        <v-text-field type="password" class="label-form" v-model="senha" :error-messages="emailErrors" label="Senha"></v-text-field>
    
        <v-btn class="button" type="submit">FINALIZAR</v-btn>
            
        </form>
    </center>
  </div>
  </v-container>
</div>
</template>

<script>
    const axios = require('axios');

    export default {
        name: 'cadastro',
        data: function(){
            return{
                nome: '',
                email: '',
                telefone: '',
                endereco: '',
                senha: ''     
            }
        },

        methods: {
            register(e){
                e.preventDefault();

                const parametros = new URLSearchParams();
                parametros.append("nome", this.nome);
                parametros.append("email", this.email);
                parametros.append("telefone", this.telefone);
                parametros.append("endereco", this.endereco);
                parametros.append("senha", this.senha);

                axios.post('http://localhost:10001/registration', parametros)
                .then(function (response) {
                    if(response.status == 200){
                        window.location.href = '/login';
                    }else if(response.status == 201){
                        alert("Email já cadastro ao nosso sistema!");
                        window.location.href = '/cadastro';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        }
    }
</script>

<style>
    .button{
        border: 0;
        color: #FFF;
        border-radius: 60px;
        background-color: #451F55;
        width: 436px;
        height: 50px;
        font-size: 25px!important;
        text-transform: none;
    }

    .formulario{
        width: 50%;
    }
</style>