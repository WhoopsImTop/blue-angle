<template>
  <div class="content-container footer-container">
    <img
      src="/images/blue-angel-logo-pink.png"
      alt="blue-angle-logo"
      title="blue-angle-logo"
      style="margin-top: 10px"
    />
    <div class="link-container">
      <NuxtLink to="/impressum">Impressum</NuxtLink>
      <NuxtLink to="/datenschutzerklären">Datenschutzerklärung</NuxtLink>
    </div>
    <div class="social-actions">
      <img src="/images/facebook.svg" alt="facebook" width="30" height="30" />
      <img src="/images/instagram.svg" alt="instagram" width="30" height="30" />
    </div>
  </div>
  <div class="highlighted">
    <div class="content-container" style="padding: 8px 0">
      <p style="text-transform: uppercase">© 2023 Blue Angel Breisach</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.link-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0 20px;
}

.link-container a {
  margin: 5px 0;
  color: var(--red);
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
}

.social-actions {
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 10px 0;
}
</style>