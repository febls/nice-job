<template>
<div>

  <v-container class="page-header p-t-70">
<a href="/"><p>voltar</p></a>
  </v-container>
  <v-container class="page-header p-t-70">
    <h1 class="section-title-login">Olá, {name}</h1> 
  </v-container>

   <v-container>
                <v-layout row wrap>
                    <v-flex md4 xs12>
                        <img src="/images/perfil.png" width="120px" alt="logo nice job">
                        <p>{name}, {age}</p>
                        <v-btn small>Meus Dados</v-btn><v-btn small>Segurança</v-btn>
                    </v-flex>
                
                    <v-flex md1 xs12>
                       <div class="vl"></div>
                     </v-flex>

                    <v-flex md7 xs12>

                          <v-btn @click="click" style="border: 0; color: #FFF;border-radius: 60px;background-color: #451F55;width: 436px;height: 50px;font-size: 25px!important; text-transform: none;">Publicar um job!</v-btn>
                  <br><br>
                  <spam>Últimos Serviços</spam><br>
                    <br>
                    <v-layout row wrap>
                     <v-flex md6 xs12>
                      <v-card  class="mx-auto"  max-width="300" outlined>
                        <v-list-item three-line>
                          <v-list-item-content>
                            <div class="overline mb-4"> @category_service</div>
                            <v-list-item-title class="headline mb-1"> @titulo_job</v-list-item-title><br>  
                            <v-list-item-subtitle> @resume_service</v-list-item-subtitle>
                          </v-list-item-content>
                            <v-list-item-avatar tile size="80" color="grey">    
                            </v-list-item-avatar>
                          </v-list-item>
                            <v-card-actions>
                              <v-btn text>Ver</v-btn>
                              
                            </v-card-actions>
                        </v-card>
                        </v-flex>
                      <v-flex md6 xs12>
                      <v-card  class="mx-auto"  max-width="300" outlined>
                        <v-list-item three-line>
                          <v-list-item-content>
                            <div class="overline mb-4"> @category_service</div>
                            <v-list-item-title class="headline mb-1"> @titulo_job</v-list-item-title><br>  
                            <v-list-item-subtitle> @resume_service</v-list-item-subtitle>
                          </v-list-item-content>
                            <v-list-item-avatar tile size="80" color="grey">    
                            </v-list-item-avatar>
                          </v-list-item>
                            <v-card-actions>
                              <v-btn text>Ver</v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-flex>
                      </v-layout>
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