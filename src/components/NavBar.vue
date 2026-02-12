<template>
  <nav class="navigation-container">
    <RouterLink class="navigation-link" to="/">Home</RouterLink>
    <RouterLink class="navigation-link" to="/">Men</RouterLink>
    <RouterLink class="navigation-link" to="/">Women</RouterLink>
  </nav>
  <img src="../assets/images/logo.svg" alt="Logo" />
  <div class="user-action-container">
    <div class="user-action-icon">
      <img src="../assets/icons/icon-heart.svg" alt="Heart" />
    </div>
    <div class="cart-icon-container">
      <div class="user-action-icon">
        <img src="../assets/icons/icon-cart.svg" alt="Cart" />
      </div>
      <div class="cart-number-display">0</div>
    </div>
    <div class="user-action-icon">
      <img src="../assets/icons/icon-login.svg" alt="Login" />
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink,
  },
}
</script>

<style scoped>
.navigation-container {
  display: flex;
  gap: 32px;
}

.navigation-link {
  text-decoration: none;
  color: var(--color-text);
}

.navigation-link:hover {
  text-decoration: underline;
}

.user-action-container {
  display: flex;
  gap: 43px;
}

.user-action-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
}

.cart-icon-container {
  display: flex;
}

.cart-number-display {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
}
</style>
