<template>
    <div>
        <header class="header dark">
            <v-container class="py-5">
                <v-layout align-center row>
                    <router-link to="/" class="logo" style="cursor: pointer">
                        <img src="/images/nj-white.png" width="120" title="NJ" />
                    </router-link>
                    <div class="layout justify-end">
                        <nav>
                            <ul class="link-list">
                                <li>
                                    <nuxt-link :to="{ path: '/',hash:'#como-participar'}" v-scroll-to="'#como-participar'" >
                                        Como funciona   
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="{ path: '/', hash:'#premios'}" v-scroll-to="'#premios'" >
                                        Serviços
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="{ path: '/',hash:'#lojas'}" v-scroll-to="'#lojas'">
                                        Fale com a Job
                                    </nuxt-link>
                                </li>
                            
                            </ul>
                        </nav>
                    </div>
                </v-layout>
            </v-container>
            
        </header>
    </div>
</template>