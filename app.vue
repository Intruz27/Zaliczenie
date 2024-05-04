<script setup>
useHead({
  link: [
    { rel: 'manifest', href: '/manifest.json' }
  ]
})

onMounted(() => {
  try {
    const collapse = new bootstrap.Collapse('#navbarSupportedContent');
    collapse.show();
  } catch (e) {
    console.log('Bootstrap error: ', e);
  }
});





</script>

<template>
  <div>
    <NuxtLayout>
       <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
