<script lang="ts">
  export let href: string;
  export let label: string;
</script>

<a
  {href}
  class="w-full bg-black px-12 py-6 text-center text-3xl font-bold text-white transition-colors hover:bg-pink-800"
>
  {label}
</a>
