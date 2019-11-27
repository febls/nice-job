<template>
<div>
    <v-container class="page-header p-t-70 titulo">
    <h2 class="internal-title">Escolha o profissional ideal!</h2> 
    </v-container>

    <v-container >
        <div class="p-first">
            <div class="one-p">
                <div class="one-left">
                    <img src="/images/charles.png" width="130px" alt="">
                </div>
                <div class="one-right">
                    <p>{{ nomeUm }}</p>
                    <p>{{ emailUm }}</p>
                    <v-btn class="p-perfil">Ver Perfil</v-btn>
                    <v-btn class="p-escolher">Escolher</v-btn>
                </div>
            </div>

            <div class="two-p">
                 <div class="two-left">
                    <img src="/images/felipe.jpeg" width="130px" alt="">
                </div>
                <div class="two-right">
                    <p>{{ nomeDois }}</p>
                    <p>{{ emailDois }}</p>
                    <v-btn class="p-perfil">Ver Perfil</v-btn>
                    <v-btn class="p-escolher">Escolher</v-btn>
                </div>
            </div>
        </div>
    </v-container>
</div>
</template>

<script>
    export default {
        data(){
            return{
                nomeUm: '',
                emailUm: '',
                nomeDois: '',
                emailDois: ''
            }
        },

        mounted(){
            axios.get('http://api-nicejobs.herokuapp.com/getHired')
            .then(dados => {
                for(let i = 0; i < dados.data.length; i++){
                    if(i == 0){
                        this.nomeUm = dados.data[i].nome;
                        this.emailUm = dados.data[i].email;
                    }else{
                        this.nomeDois = dados.data[i].nome;
                        this.emailDois = dados.data[i].email;
                    }
                }
            })
            .catch(error =>{
                console.log("Houve um erro: ", error);
            })
        }
    }
</script>

<style scoped>
    .titulo{
        margin-top: 10%;
    }
</style>