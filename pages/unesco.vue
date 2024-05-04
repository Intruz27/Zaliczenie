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
            <h1 class="mb-4 text-white">UNESCO</h1>
            <h2 class="mb-4 text-white">Kilka ważnych informacji: </h2>
            <button class="btn btn-primary mb-4" @click="showHideAll">{{ showAll ? 'Ukryj' : 'Pokaż' }}</button>
            <div v-show="showAll" class="list-group">
                <button type="button" class="list-group-item list-group-item-action active">Do obowiązków UNESCO należy:</button>
                <button type="button" class="list-group-item list-group-item-action">Ochrona dziedzictwa światowego: UNESCO działa na rzecz ochrony i zachowania dziedzictwa kulturowego i przyrodniczego o znaczeniu światowym, takiego jak zabytki historyczne, obszary przyrodnicze, czy też tradycje kulturowe.</button>
                <button type="button" class="list-group-item list-group-item-action">Promowanie edukacji dla wszystkich: UNESCO stawia sobie za cel zapewnienie powszechnej dostępności do edukacji wysokiej jakości na całym świecie. Działania te obejmują likwidację analfabetyzmu, promowanie równości w edukacji i rozwijanie nowoczesnych metod nauczania.</button>
                <button type="button" class="list-group-item list-group-item-action">Wspieranie nauki i innowacji: UNESCO angażuje się w promowanie nauki, badań naukowych i innowacji poprzez wspieranie międzynarodowej współpracy naukowej, rozwój kadr naukowych oraz transfer wiedzy i technologii.</button>
                <button type="button" class="list-group-item list-group-item-action">Ochrona wolności słowa i mediów: UNESCO stara się chronić wolność słowa, wolność prasy oraz swobodę dostępu do informacji, w tym poprzez walkę z cenzurą, propagandą i innymi formami ograniczania wolności mediów.</button>
                <button type="button" class="list-group-item list-group-item-action">Promowanie dialogu międzykulturowego: UNESCO działa na rzecz promowania zrozumienia i dialogu między różnymi kulturami, religiami i narodami, aby zapobiegać konfliktom i promować pokój oraz tolerancję.</button>
                <button class="btn btn-primary mt-4" @click="toggleVisibility">{{ isVisible ? 'Powodzenia przy poszerzaniu horyzontów!' : 'Nadal głodny wiedzy?' }}</button>
                <h2 v-if="isVisible" class="mt-4 text-white">Aby dowiedzieć się więcej odwiedź oficjalną stronę: <a href="https://www.unesco.org/en">UNESCO</a></h2>
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
