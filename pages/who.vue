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
            <h1 class="mb-4 text-white">WHO</h1>    
            <h2 class="mb-4 text-white">Kilka ważnych informacji:</h2>
            <button class="btn btn-primary mb-4" @click="showHideAll">{{ showAll ? 'Ukryj' : 'Pokaż' }}</button>
            <div v-show="showAll" class="list-group">
              <button type="button" class="list-group-item list-group-item-action active">
                Do obowiązków WHO należy:
              </button>
              <button type="button" class="list-group-item list-group-item-action">Monitorowanie zdrowia globalnego: WHO zbiera, analizuje i publikuje dane dotyczące zdrowia na całym świecie, monitorując sytuację epidemiologiczną, trendy zdrowotne i zagrożenia zdrowotne na poziomie globalnym.</button>
              <button type="button" class="list-group-item list-group-item-action">Zapobieganie chorobom zakaźnym i chorobom niezakaźnym: WHO zajmuje się zapobieganiem i kontrolą chorób zakaźnych, takich jak Ebola, COVID-19, malaria czy gruźlica, oraz promuje zdrowy styl życia w celu zapobiegania chorobom niezakaźnym, takim jak choroby sercowo-naczyniowe, cukrzyca czy nowotwory.</button>
              <button type="button" class="list-group-item list-group-item-action">Promowanie zdrowia publicznego: WHO opracowuje i promuje strategie zdrowia publicznego, mające na celu poprawę zdrowia populacji poprzez działania profilaktyczne, edukację zdrowotną i kampanie informacyjne.</button>
              <button class="btn btn-primary mt-4" @click="toggleVisibility">{{ isVisible ? 'Powodzenia przy poszerzaniu horyzontów!' : 'Nadal głodny wiedzy?' }}</button>
            <h2 v-if="isVisible" class="mt-4 text-white">Aby dowiedzieć się więcej odwiedź oficjalną stronę: <a href="https://www.who.int/">WHO</a></h2>
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
