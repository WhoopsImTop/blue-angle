<template>
  <div class="content-container footer-container">
    <img
      src="/blue-angel-stripclub-wortbildmarke.svg"
      alt="blue-angle-logo"
      title="blue-angle-logo"
      width="170"
      style="margin-top: 10px"
    />
    <div class="link-container">
      <NuxtLink :to="LocalizePath('/impressum')">{{
        translations[locale].impressum
      }}</NuxtLink>
      <NuxtLink :to="LocalizePath('/datenschutzerklären')">{{
        translations[locale].datenschutzerklären
      }}</NuxtLink>
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

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const translations = {
  de: {
    impressum: "Impressum",
    datenschutzerklären: "Datenschutzerklärung",
  },
  en: {
    impressum: "Imprint",
    datenschutzerklären: "Privacy Policy",
  },
  fr: {
    impressum: "Mentions légales",
    datenschutzerklären: "Politique de confidentialité",
  },
};

const LocalizePath = (path) => {
  return `/${locale.value}${path}`;
};
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

@media (min-width: 995px) {
  .footer-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    padding: 20px;
  }

  .link-container {
    width: max-content;
    justify-self: center;
    flex-direction: row;
  }

  .link-container a {
    margin: 0 10px;
  }

  .social-actions {
    justify-self: end;
  }
}
</style>