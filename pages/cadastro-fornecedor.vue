<template>
<div>

    <v-container>
       <center><h1 class="section-title-login">Trabalhe com a Nice Job!</h1></center>
    <br>
    <div class="cadastro-fornecedor">
       

        <div class="fornedor-form">
            <form action="" class="f-cadastro">
             
                <v-text-field class="label-form" v-model="nome"  label="Nome"></v-text-field>
                <v-text-field class="label-form" v-model="cpf"  label="CPF"></v-text-field>
                <v-text-field class="label-form" v-model="email"  label="Email"></v-text-field>
                <v-text-field class="label-form" v-model="telefone"  label="Telefone"></v-text-field>
                <p style="font-weight: 500">Localização:</p>
                <v-text-field class="label-form" v-model="endereco" label="Endereço "></v-text-field>
                <v-text-field class="label-form" v-model="cidade" label="Cidade"></v-text-field>
                <v-text-field class="label-form" v-model="cep" label="CEP "></v-text-field>
                <br>
                <p style="font-weight: 500">Especialidades:</p>
                 <v-select v-model="areas" :items="items" attach chips label="Informe quais áreas você trabalha" multiple>   
                </v-select>
                
                
                <v-btn to="/minha-area" type="submit" style="border: 0; color: #FFF;border-radius: 60px;background-color: #451F55;width: 436px;height: 50px;font-size: 25px!important; text-transform: none;">FINALIZAR</v-btn>
            </form>
        </div>
    </div>
    </v-container>
</div>
</template>
<script>
  export default {
    data: () => ({
      items: ['Limpeza', 'Pintura', 'Encanamento', 'Eletricista', 'Jardinagem','Reparos']
     
    })
  }

  const routes = [
  { path: '/minha-area' }
];
</script>
