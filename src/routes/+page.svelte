<script>
  import { Title, MenuLink } from '$components';
</script>

<div class="flex h-screen flex-col items-center justify-center">
  <Title class="mb-8" />
  <div class="flex h-[500px] w-full max-w-[400px] flex-col space-y-4">
    <MenuLink href="/" label="Create Game" />
    <MenuLink href="/" label="Join Game" />
    <MenuLink href="/" label="Account" />
    <MenuLink href="/" label="Credits" />
    <MenuLink href="/" label="Settings" />
  </div>
</div>
