<template>
<div>
    <v-container class="page-header p-t-70 titulo">
    <h2 class="internal-title">Vamos lá, o que você prêcisa?</h2> 
    </v-container>

    <v-container >
        <v-layout align-center justify-center row fill-height>
    <div id="pedido">
        <form @submit="registerOrder" style="display: table-caption;">
        <v-select
        v-model="dadosServico"
        v-validate="'required'"
        :items="servico"
        label="Escolha o serviço"
        class="internal-form"
        data-vv-name="select"
        required
        ></v-select>
        
        <v-select
        v-model="dadosLocal"
        v-validate="'required'"
        :items="local"
        label="Local"
        class="internal-form"
        data-vv-name="select"
        required
        ></v-select>

        <v-subheader class="pl-0">Em quantas areas o serviço precisa ser feito?</v-subheader>
        <br>
            <v-slider
            v-model="quantidadeAreas"
            :thumb-size="24"
            thumb-label="always"
            class="internal-form"
            ></v-slider>
            
            <div class="internal-text-box">
            <v-textarea  
            outline
            v-model="descricao"
            name="input-7-4"
            class="internal-form"
            label="descreva o que precisa ser feito.."
            
            ></v-textarea></div>
            <h2 class="internal-title">Informe o endereço e agende o serviço!</h2> 
            <v-text-field 
                v-model="cep"
                class="internal-form"
                label="CEP"
                
            
            ></v-text-field>
            <v-text-field 
                v-model="endereco"
                class="internal-form"
                label="Endereço"
            ></v-text-field>
            <!--v-text-field v-model="nome" class="internal-form" label="Agende uma data"></v-text-field>-->

        <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="30px"
        >
            <template v-slot:activator="{ on }">
            <v-text-field
                v-model="date"
                label="Agende uma data"
                prepend-icon=""
                readonly
                v-on="on"
                class="internal-form"
            ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
        </v-menu>

        <v-btn type="submit" style="border: 0; color: #FFF;border-radius: 60px;background-color: #451F55;width: 436px;height: 50px;font-size: 25px!important; text-transform: none;">Finalizar</v-btn>

        </form>
</div>
</v-layout>
</v-container>


</div>
</template>
<script>
export default {
    data() {
        return {
            servico: ['Limpeza Residencial', 'Reparos', 'Eletricista'],
            local: ['Casa', 'Apartamento', 'Empresa'],
            quantidadeAreas: '',
            date: new Date().toISOString().substr(0, 10),
            endereco: '',
            descricao: '',
            cep: '',
            dadosLocal: '',
            dadosServico: '',
            menu: false,
            modal: false,
            menu2: false
        }
    },

    mounted(){
      console.log("mounted");
      if(!sessionStorage.getItem("nome")){
        window.location.href = "/";
      }
    },
    
    methods: {
        registerOrder(e){
            e.preventDefault();

            // Registrar o serviço a nossa base de dados
            const parametros = new URLSearchParams();
            parametros.append("servico", this.dadosServico);
            parametros.append("local", this.dadosLocal);
            parametros.append("quantidadeAreas", this.quantidadeAreas);
            parametros.append("descricao", this.descricao);
            parametros.append("cep", this.cep);
            parametros.append("endereco", this.endereco);
            parametros.append("data", this.date);
            parametros.append("idContractor", sessionStorage.getItem("id"));

            axios.post('http://api-nicejobs.herokuapp.com/registerOrder', parametros)
            .then(function (response) {
                if(response.status == 200){
                    window.location.href = '/minha-area';
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
    { path: '/localizar' }
];

</script>

<style scoped>
    .titulo{
        margin-top: 10%;
    }

</style>