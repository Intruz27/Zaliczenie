<script setup>
</script>
<template>
<div class="main text-center h-100">
  <div class="container pt-5 pb-4">
    <h1 class="mb-4 text-white">Międzynarodowe Organizacje Kulturowe i Edukacyjne</h1>
    <div class="row"> 
     <div class="col-12 col-md-4">
       <div class="card mb-3">
        <img class="card-img-top card-image-top" src="public/media/unesco.png" alt="UnescoImage">
        <div class="card-body">
          <h5 class="card-title">UNESCO</h5>
          <p class="card-text">UNESCO promuje współpracę międzynarodową w dziedzinie edukacji, nauki i kultury. Jej działania obejmują ochronę dziedzictwa kulturowego, promowanie edukacji dla wszystkich, wsparcie dla naukowego postępu oraz walkę z analfabetyzmem.</p>
          <a href="/unesco" class="btn btn-link card-text"><small class="text-muted">Czytaj więcej...</small></a>
        </div>
       </div>
     </div>
     <div class="col-12 col-md-4">
       <div class="card mb-3">
        <img class="card-img-top card-image-top" src="public/media/onz.gif" alt="OnzImage">
        <div class="card-body">
          <h5 class="card-title">ONZ</h5>
          <p class="card-text">Jest to największa międzynarodowa organizacja, skupiająca większość państw świata, które współpracują w celu rozwiązywania problemów globalnych, takich jak pokój i bezpieczeństwo, rozwój, prawa człowieka i inne.</p>
          <a href="/onz" class="btn btn-link card-text"><small class="text-muted">Czytaj więcej...</small></a>
        </div>
       </div>
     </div>
     <div class="col-12 col-md-4">
       <div class="card mb-3">
        <img class="card-img-top card-image-top" src="public/media/who.png" alt="WhoImage">
        <div class="card-body">
          <h5 class="card-title">WHO</h5>
          <p class="card-text">WHO jest agendą ONZ odpowiedzialną za zapewnienie wysokiego poziomu zdrowia publicznego na całym świecie. WHO zajmuje się monitorowaniem zdrowia globalnego, zapobieganiem chorobom zakaźnym, promowaniem zdrowego stylu życia i udzielaniem pomocy w sytuacjach kryzysowych, takich jak epidemie czy pandemie.</p>
          <a href="/who" class="btn btn-link card-text"><small class="text-muted">Czytaj więcej...</small></a>
        </div>
       </div>
     </div> 
     <div class="col-12 col-md-4">
       <div class="card mb-3 p-3  ">
        <img class="card-img-top card-image-top" src="public/media/unicef.png" alt="UnicefImage">
        <div class="card-body">
          <h5 class="card-title">UNICEF</h5>
          <p class="card-text">Jest to organizacja działająca na rzecz ochrony praw dzieci i poprawy ich warunków życia na całym świecie. UNICEF zajmuje się zapewnianiem edukacji, opieki zdrowotnej, żywności i wody pitnej dla dzieci w krajach rozwijających się oraz w sytuacjach kryzysowych.</p>
          <a href="/unicef" class="btn btn-link card-text"><small class="text-muted">Czytaj więcej...</small></a>
        </div>
       </div>
     </div>
     <div class="col-12 col-md-4">
       <div class="card mb-3">
        <img class="card-img-top card-image-top" src="public/media/icrc.png" alt="IcrcImage">
        <div class="card-body">
          <h5 class="card-title">Czerwony Krzyż</h5>
          <p class="card-text">Jest to organizacja humanitarna, która działa na rzecz ochrony ofiar konfliktów zbrojnych i przemocy, zapewniając pomoc medyczną, wsparcie dla więźniów wojennych i inne formy pomocy.</p>
         <a href="/icrc" class="btn btn-link card-text"><small class="text-muted">Czytaj więcej...</small></a>
        </div>
       </div>
     </div>
     <div class="col-12 col-md-4">
       <div class="card mb-3">
        <img class="card-img-top card-image-top" src="public/media/nato.png" alt="NatoImage">
        <div class="card-body">
          <h5 class="card-title">NATO</h5>
          <p class="card-text">NATO jest sojuszem obronnym, który skupia państwa członkowskie w celu zapewnienia wspólnej obrony i bezpieczeństwa na obszarze Euroatlantyckim. Ten międzynarodowy sojusz obronny składający się z państw członkowskich z Ameryki Północnej i Europy. Głównym celem NATO jest zapewnienie wspólnej obrony i bezpieczeństwa państw członkowskich poprzez współpracę wojskową i polityczną. Sojusz ten został utworzony w 1949 roku i od tego czasu stał się kluczowym elementem architektury bezpieczeństwa międzynarodowego.</p>
          <a href="/nato" class="btn btn-link card-text"><small class="text-muted">Czytaj więcej...</small></a>
        </div>
       </div>
     </div> 
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

.card-image-top {
  min-height: 150px;
  max-height: 180px;
}
.card-text {
  display: -webkit-box;
  max-width: 400px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}


.img {
  background-size: cover;
}
</style>