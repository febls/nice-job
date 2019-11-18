<template>

<v-container class="top-base">
    <div>
        <a href="/"><p>voltar</p></a>
    </div>
    <div>
        <center>
            <h1 class="section-title-login">Entre, seja bem vindo!</h1><br />

            <form @submit="logar" class="formulario">
                <v-text-field class="label-form" v-model="email" label="E-mail"></v-text-field>
                <v-text-field type="password" class="label-form" v-model="senha" label="Senha"></v-text-field>
                <p class="esqueceu-senha">Esqueceu a senha?</p>
                <v-btn type="submit" id="btn-entrar" class="button">ENTRAR</v-btn>
            </form>
           
            <hr class="linha"><br>  

            <v-btn id="btn-cadastrar" class="button-cadastrar" @click="cadastrar">CADASTRE-SE</v-btn>
        </center>
    </div>
</v-container>

</template>

<script>
    const axios = require('axios');

    export default {
        name: 'login',
        data: function(){
            return{
                email: '',
                senha: ''     
            }
        },

        methods: {
           logar(e){
               e.preventDefault();

               const params = new URLSearchParams();
               params.append('email', this.email);
               params.append('senha', this.senha);

               axios.post('http://localhost:10001/authenticate', params)
               .then(response => {
                   if(response.status == 200){
                       console.log(response);
                       window.location.href = '/minha-area';
                   }else if(response.status == 201){
                       alert(response.data);
                   }
               })
               .catch(error =>{
                   console.log('Houve um erro: ', error);
               })
           },

           cadastrar(){
               window.location.href = '/cadastro';
           }
        }
    }
</script>

<style>
    .formulario{
        width: 50%;
    }

    .esqueceu-senha{
        align-items: left;
        margin-left: 442px;
        font-style: italic;
    }

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

    .button-cadastrar{
        border: 0; 
        color: #451F55;
        border-radius: 60px;
        background-color: #fff;
        width: 436px;
        height: 50px;
        font-size: 25px!important;
        text-transform: none;
    }

    .linha{
        width: 50%;
        margin-top: 17px;
    }

    #btn-entrar{
        background-color: #451F55;
        color: #FFF;
    }

    #btn-cadastrar{
        background-color: #451F55;
        color: #FFF;
    }
</style>