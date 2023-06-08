<script>
  import './index.css';
  import { Cover, Title } from '$components';
</script>

<div id="app" class="contents">
  <slot />
  <Cover opaque hideOnDesktop>
    <Title />
    <span class="mt-4 text-center text-3xl font-bold text-white"
      >Mobile support is not here yet! Try playing on a bigger screen.</span
    >
  </Cover>
</div>
