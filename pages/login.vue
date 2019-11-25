<template>

<v-container class="top-base">
    <div>
        <a href="/"><p>voltar</p></a>
    </div>
    <div>
        <center>
            <form style="width: 50%;">
            <h1 class="section-title-login">Entre, seja bem vindo!</h1> 
            <br />
            <v-text-field class="label-form"
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
            
            ></v-text-field>
            <v-text-field class="label-form"
                v-model="senha"
                :error-messages="emailErrors"
                label="Senha"
            
            ></v-text-field>
            <p style=" align-items: left; margin-left: 442px;font-style: italic;">Esqueceu a senha?</p>
            
            <v-btn  to="/minha-area" style="border: 0; color: #FFF;border-radius: 60px;background-color: #451F55;width: 436px;height: 50px;font-size: 25px!important; text-transform: none;">ENTRAR</v-btn>
            </form>
            <hr style=" width: 50%; margin-top: 17px;">
            <br>   
            <v-btn to="/cadastro" style="border: 0; color: #451F55;border-radius: 60px;background-color: #fff;width: 436px;height: 50px;font-size: 25px!important; text-transform: none;">CADASTRE-SE</v-btn>
        </center>
    </div>
</v-container>

</template>
<script>
  const routes = [
  { path: '/minha-area' }
];
</script>
