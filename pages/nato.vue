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
            <h1 class="mb-4 text-white">NATO</h1>
            <h2 class="mb-4 text-white">Kilka ważnych informacji: </h2>
            <button class="btn btn-primary mb-4" @click="showHideAll">{{ showAll ? 'Ukryj' : 'Pokaż' }}</button>
            <div v-show="showAll" class="list-group">
                <button type="button" class="list-group-item list-group-item-action active">Do obowiązków NATO należy:</button>
                <button type="button" class="list-group-item list-group-item-action">Zapewnienie zbiorowej obrony: Głównym celem NATO jest zapewnienie zbiorowej obrony wszystkich państw członkowskich w przypadku ataku zewnętrznego. Oznacza to, że atak na jedno państwo członkowskie jest traktowany jako atak na cały sojusz, co mobilizuje inne kraje do udzielenia pomocy obronnej.</button>
                <button type="button" class="list-group-item list-group-item-action">Promowanie bezpieczeństwa i stabilności: NATO angażuje się w promowanie bezpieczeństwa i stabilności na obszarze Euroatlantyckim poprzez współpracę polityczną, wojskową i cywilną. Sojusz prowadzi działania mające na celu zapobieganie konfliktom, budowanie zaufania oraz wspieranie demokratycznych reform.</button>
                <button type="button" class="list-group-item list-group-item-action">Działania w ramach obrony kolektywnej: NATO podejmuje różnorodne działania w ramach obrony kolektywnej, w tym prowadzenie regularnych ćwiczeń wojskowych, rozmieszczanie sił obronnych wzdłuż granic sojuszu oraz wspieranie modernizacji i rozbudowy infrastruktury obronnej.</button>
                <button class="btn btn-primary mt-4" @click="toggleVisibility">{{ isVisible ? 'Powodzenia przy poszerzaniu horyzontów!' : 'Nadal głodny wiedzy?' }}</button>
                <h2 v-if="isVisible" class="mt-4 text-white">Aby dowiedzieć się więcej odwiedź oficjalną stronę: <a href="https://www.nato.int/">NATO</a></h2>
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
