<template>
  <div class="flex min-h-screen flex-col">
    <a href="#conteudo" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-wine focus:px-5 focus:py-3 focus:text-white">
      Pular para o conteúdo
    </a>
    <AppHeader />
    <main id="conteudo" class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
