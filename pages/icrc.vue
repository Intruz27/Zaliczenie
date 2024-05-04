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
            <h1 class="mb-4 text-white">ICRC</h1>    
            <h2 class="mb-4 text-white">Kilka ważnych informacji: </h2>
            <button class="btn btn-primary mb-4" @click="showHideAll">{{ showAll ? 'Ukryj' : 'Pokaż' }}</button>
            <div v-show="showAll"class="list-group">
                <button type="button" class="list-group-item list-group-item-action active">Do obowiązków ICRC należy:</button>
                <button type="button" class="list-group-item list-group-item-action">Ochrona ofiar konfliktów zbrojnych: ICRC działa na rzecz ochrony ludności cywilnej, więźniów wojennych oraz innych osób dotkniętych konfliktem zbrojnym, zapewniając im pomoc humanitarną, opiekę medyczną i wsparcie psychologiczne.</button>
                <button type="button" class="list-group-item list-group-item-action">Dostarczanie pomocy humanitarnej: ICRC dostarcza pomoc humanitarną, w tym żywność, wodę, leki i inne podstawowe potrzeby, ofiarom konfliktów zbrojnych i katastrof naturalnych na całym świecie, niezależnie od przynależności politycznej czy religijnej.</button>
                <button type="button" class="list-group-item list-group-item-action">Monitorowanie przestrzegania prawa międzynarodowego: ICRC monitoruje sytuację wojenną i przestrzeganie prawa międzynarodowego humanitarnego, w tym Konwencji Genewskich, w celu zapewnienia ochrony prawnej i humanitarnej dla osób dotkniętych konfliktem zbrojnym.</button>
                <button type="button" class="list-group-item list-group-item-action">Promowanie zasad humanitarnych: ICRC działa na rzecz promowania zasad humanitarnych, takich jak poszanowanie godności ludzkiej, ochrona cywilów, zakaz stosowania tortur i zakaz stosowania broni chemicznej oraz biologicznej.</button>
                <button class="btn btn-primary mt-4" @click="toggleVisibility">{{ isVisible ? 'Powodzenia przy poszerzaniu horyzontów!' : 'Nadal głodny wiedzy?' }}</button>
                <h2 v-if="isVisible" class="mt-4 text-white">Aby dowiedzieć się więcej odwiedź oficjalną stronę: <a href="https://www.icrc.org/en">ICRC</a></h2>
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
