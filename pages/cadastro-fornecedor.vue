<template>
<div>
    <v-container class="titulo">
       <center><h1 class="section-title-login">Trabalhe com a Nice Job!</h1></center>
    </v-container>

    <div class="cadastro-fornecedor">
        <div class="fornedor-form">
            <form @submit="registerContractor" class="f-cadastro">
                <v-text-field class="label-form" v-model="nome" label="Nome" required></v-text-field>
                <v-text-field class="label-form" v-model="email" label="Email" required></v-text-field>
                <v-text-field type="password" class="label-form" v-model="senha" label="Senha" required></v-text-field>
                <v-text-field class="label-form" v-model="cpf" label="CPF" required></v-text-field>
                <v-text-field class="label-form" v-model="telefone" label="Telefone" required></v-text-field>
                <p style="font-weight: 500">Localização:</p>
                <v-text-field class="label-form" v-model="endereco" label="Endereço" required></v-text-field>
                <v-text-field class="label-form" v-model="cidade" label="Cidade" required></v-text-field>
                <v-text-field class="label-form" v-model="cep" label="CEP " required></v-text-field>
                <br>
                <p style="font-weight: 500">Especialidades:</p>
                 <v-select v-model="especialidades" :items="items" attach chips label="Informe quais áreas você trabalha" multiple>   
                </v-select>
           
                <v-btn type="submit" style="border: 0; color: #FFF;border-radius: 60px;background-color: #451F55;width: 436px;height: 50px;font-size: 25px!important; text-transform: none;">FINALIZAR</v-btn>
            </form>
        </div>
    </div>
</div>
</template>
<script>
  export default {
    data(){
      return {
        items: ['Limpeza', 'Pintura', 'Encanamento', 'Eletricista', 'Jardinagem','Reparos'],
        especialidades: [],
        nome: '',
        email: '',
        senha: '',
        cpf: '',
        telefone: '',
        endereco: '',
        cidade: '',
        cep: ''
      }
    },

    methods: {
      registerContractor(e){
        console.log(this.especialidades);

        e.preventDefault();

        //Cadastrar contratante ao nosso database
         const parametros = new URLSearchParams();
          parametros.append("nome", this.nome);
          parametros.append("email", this.email);
          parametros.append("senha", this.senha);
          parametros.append("cpf", this.cpf);
          parametros.append("telefone", this.telefone);
          parametros.append("endereco", this.endereco);
          parametros.append("cidade", this.cidade);
          parametros.append("cep", this.cep);
          parametros.append("especialidades", this.especialidades);

          axios.post('http://api-nicejobs.herokuapp.com/registerContractor', parametros)
          .then(function (response) {
              if(response.status == 200){
                  window.location.href = '/login';
              }else if(response.status == 201){
                  alert("Email já cadastro ao nosso sistema!");
                  window.location.href = '/login';
              }
          })
          .catch(function (error) {
              console.log(error);
          })
      }
    }
  }

  const routes = [
  { path: '/minha-area' }
  ];
</script>

<style scoped>
  .titulo{
    margin-top: 10%;
  }

  .cadastro-fornecedor{
    margin-top: 0%; 
  }
</style>
