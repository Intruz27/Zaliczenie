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
            <h1 class="mb-4 text-white">UNICEF</h1>
            <h2 class="mb-4 text-white">Kilka ważnych informacji: </h2>
            <button class="btn btn-primary mb-4" @click="showHideAll">{{ showAll ? 'Ukryj' : 'Pokaż' }}</button>
            <div v-show="showAll" class="list-group">
                <button type="button" class="list-group-item list-group-item-action active">Do obowiązków UNICEF należy:</button>
                <button type="button" class="list-group-item list-group-item-action">Ochrona praw dzieci: UNICEF działa na rzecz ochrony praw dziecka określonych w Konwencji o Prawach Dziecka, takich jak prawo do życia, edukacji, opieki zdrowotnej, równości, ochrony przed przemocą i wyzyskiem.</button>
                <button type="button" class="list-group-item list-group-item-action">Zapewnienie podstawowych potrzeb: UNICEF stara się zapewnić dzieciom na całym świecie dostęp do podstawowych potrzeb, takich jak żywność, woda pitna, opieka zdrowotna, edukacja i mieszkanie.</button>
                <button type="button" class="list-group-item list-group-item-action">Walka z ubóstwem i nierównościami: UNICEF angażuje się w walkę z ubóstwem i nierównościami społecznymi, dążąc do zapewnienia równych szans dla wszystkich dzieci, niezależnie od ich pochodzenia czy statusu społecznego.</button>
                <button class="btn btn-primary mt-4" @click="toggleVisibility">{{ isVisible ? 'Powodzenia przy poszerzaniu horyzontów!' : 'Nadal głodny wiedzy?' }}</button>
                <h2 v-if="isVisible" class="mt-4 text-white">Aby dowiedzieć się więcej odwiedź oficjalną stronę: <a href="https://www.unicef.org/">UNICEF</a></h2>
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
