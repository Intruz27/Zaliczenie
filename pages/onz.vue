<script setup>
import { ref } from 'vue';  
const isVisible = ref(false);
const showAll = ref(true);
const showHideAll = () => showAll.value = !showAll.value
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>
<template>
    <div class="main books-page-background text-center h-100">
        <div class="container pt-5 pb-4">
            <h1 class="mb-4 text-white">ONZ</h1>
            <h2 class="mb-4 text-white">Kilka ważnych informacji: </h2>
            <button class="btn btn-primary mb-4" @click="showHideAll">{{ showAll ? 'Ukryj' : 'Pokaż' }}</button>
            <div v-show="showAll" class="list-group">
                <button type="button" class="list-group-item list-group-item-action active">Do obowiązków ONZ należy:
                </button>
                <button type="button" class="list-group-item list-group-item-action">Zapewnienie pokoju i bezpieczeństwa: ONZ działa na rzecz zapobiegania konfliktom zbrojnym i utrzymania pokoju na świecie poprzez mediację, pokojowe rozstrzyganie sporów oraz utrzymywanie sił pokojowych.</button>
                <button type="button" class="list-group-item list-group-item-action">Ochrona praw człowieka: ONZ stawia sobie za cel promowanie i ochronę praw człowieka na całym świecie poprzez działania dyplomatyczne, nadzór i monitorowanie sytuacji praw człowieka oraz wspieranie programów edukacyjnych i społecznych.</button>
                <button type="button" class="list-group-item list-group-item-action">Rozwój gospodarczy i społeczny: ONZ angażuje się w promowanie zrównoważonego rozwoju gospodarczego i społecznego na świecie poprzez programy pomocowe, wsparcie dla krajów rozwijających się oraz promowanie równości i sprawiedliwości społecznej.</button>
                <button type="button" class="list-group-item list-group-item-action">Pomoc humanitarna: ONZ zapewnia pomoc humanitarną ofiarom konfliktów zbrojnych, katastrof naturalnych i innych kryzysów poprzez koordynację działań ratunkowych, dostarczanie pomocy żywnościowej, medycznej i schronienia oraz rehabilitację po kryzysie.</button>
                <button class="btn btn-primary mt-4" @click="toggleVisibility">{{ isVisible ? 'Powodzenia przy poszerzaniu horyzontów!' : 'Nadal głodny wiedzy?' }}</button>
                <h2 v-if="isVisible" class="mt-4 text-white">Aby dowiedzieć się więcej odwiedź oficjalną stronę: <a href="https://www.un.org/en/">ONZ</a></h2> 
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.main {
    background-color: #1e1e1e;
    background-image: url("public/media/mainBackground.jpg");
    background-size: cover;     
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
.h-100 {
    min-height: 100vh;
    height: 100%;
}
</style>
