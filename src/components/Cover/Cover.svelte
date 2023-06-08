<script lang="ts">
  export let opaque = false;
  export let hideOnDesktop = false;
</script>

<div class={`absolute inset-0 z-10 flex items-center justify-center ${hideOnDesktop ? 'md:hidden' : ''}`}>
  <div class={`absolute h-full w-full bg-neutral-950 transition-opacity ${opaque ? 'opacity-100' : 'opacity-75'}`} />
  <div class="z-10 flex flex-col p-4">
    <slot />
  </div>
</div>
