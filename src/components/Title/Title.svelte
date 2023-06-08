<script>
  import logo from '$lib/assets/logo.png';
  import LoaderBar from '$components/LoaderBar';

  let additionalClasses = '';
  export { additionalClasses as class };
</script>

<div
  class={`flex select-none flex-col items-center justify-center overflow-hidden bg-black ${additionalClasses}`}
>
  <div class="flex flex-row items-center justify-center p-8 pt-10">
    <img src={logo} alt="logo" class="mr-4 h-10 w-10 md:h-16 md:w-16" />
    <h1 class="text-3xl font-bold text-white sm:text-5xl md:text-7xl">Cinema Racer</h1>
  </div>
  <LoaderBar />
</div>
