<template>
<div>
    <v-container class="page-header p-t-70">
    <h2 class="internal-title">Vamos lá, o que você prêcisa?</h2> 
    </v-container>

    <v-container >
        <v-layout align-center justify-center row fill-height>
    <div id="pedido">
        <form style="display: table-caption;">
        <v-select
        v-model="select"
        v-validate="'required'"
        :items="items"
        label="Escolha o serviço"
        class="internal-form"
        data-vv-name="select"
        required
        ></v-select>
        
        <v-select
        v-model="select"
        v-validate="'required'"
        :items="items_2"
        label="Local"
        class="internal-form"
        data-vv-name="select"
        required
        ></v-select>

        <v-subheader class="pl-0">Em quantas areas o serviço precisa ser feito?</v-subheader>
        <br>
            <v-slider
            v-model="slider"
            :thumb-size="24"
            thumb-label="always"
            class="internal-form"
            ></v-slider>
            
            <div class="internal-text-box">
            <v-textarea  
            outline
            name="input-7-4"
            class="internal-form"
            label="descreva o que precisa ser feito.."
            
            ></v-textarea></div>
            <h2 class="internal-title">Informe o endereço e agende o serviço!</h2> 
            <v-text-field 
                v-model="nome"
                class="internal-form"
                label="CEP"
                
            
            ></v-text-field>
            <v-text-field 
                v-model="nome"
                class="internal-form"
                label="Endereço"
            ></v-text-field>
            <v-text-field 
                v-model="nome"
                class="internal-form"
                label="Agende uma data"
            ></v-text-field>

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

      <a href="/localizar">  <v-btn @click="click" style="border: 0; color: #FFF;border-radius: 60px;background-color: #451F55;width: 436px;height: 50px;font-size: 25px!important; text-transform: none;">Finalizar</v-btn></a>
        </form>
</div>
</v-layout>
</v-container>


</div>
</template>
<script>
export default {
    data: () => ({
      items: ['Limpeza Residencial', 'Reparos', 'Eletricista'],
      items_2: ['Casa', 'Apartamento', 'Empresa'],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false
    })
  }



</script>
