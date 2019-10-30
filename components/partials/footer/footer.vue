<template>
<div>
    <footer class="footer-effects">
        <v-container>
            <v-layout row align-start wrap>
                <v-flex md3 xs12 style="align-self: center;">
                    <nuxt-link to="/"><img src="/images/nice-logo.png" width="200px" alt=""></nuxt-link>
                </v-flex>
                
                <v-flex md3 xs12>
                    <div class="footer-services">
                        <ul>
                            <li>Podemos Ajudar</li>
                            <li>Sobre a Nice Job</li>
                        </ul>
                    </div>
                </v-flex>

                <v-flex md3 xs12>
                    <div class="footer-services">
                        <ul>
                            <li>Politica de Privacidade</li>
                            <li>Trabalhe Conosco</li>
                        </ul>
                    </div>
                </v-flex>

                <v-flex md3 xs12>
                    <div class="block-social-links">
                         <ul>
                            <li><b> Siga-nos nas Redes Sociais</b></li>
                        </ul>
                    </div>
                </v-flex>
            </v-layout>
                <hr class="footer-end">
                <center><p>Desenvolvido por Nice Job © 2019 Todos os Direitos Reservados</p></center>
        </v-container>
    </footer>
</div>
</template>
<script>
export default {
    data: () => ({
        icons: [
            'fab fa-facebook',
            'fab fa-twitter',
            'fab fa-youtube',
            'fab fa-linkedin',
            'fab fa-instagram'
        ]
    }),
    methods: {
        goTo(link){
            const vm = this
            if(link.indexOf('http') > -1){
                 window.open(link, '_blank');
            } else {
                vm.$router.push(link)
            }
        }
    }
}
</script>

