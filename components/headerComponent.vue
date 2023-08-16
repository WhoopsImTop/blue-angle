<template>
  <div class="header">
    <div class="content-container">
      <div class="header__content">
        <LanguageSwitchComponent />
        <NuxtLink :to="LocalizePath('/')">
          <img
            src="/images/blue-angel-logo-pink.png"
            alt="blue-angle-logo"
            title="blue-angle-logo"
          />
        </NuxtLink>
        <div class="burger__container">
          <div class="burger__line"></div>
          <div class="burger__line"></div>
          <div class="burger__line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        LocalizePath(path) {
            return this.localePath(path)
        },
    }
};
</script>

<style>
.header {
  height: 80px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
}

.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px 0;
}

.burger__container {
  display: flex;
  flex-direction: column;
}

.burger__line {
  width: 28px;
  height: 3px;
  border-radius: 5px;
  background-color: var(--red);
  margin: 3px 0;
}
</style>