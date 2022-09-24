<!-- Based on https://loading.io/css/ with customization -->

<template>
  <div class="lds-grid">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.lds-grid {
  display: inline-block;
  position: relative;
  aspect-ratio: 1 / 1;
  height: 100%;
  margin: 5%;
}

.lds-grid div {
  position: absolute;
  width: 25%;
  height: 25%;
  border-radius: 50%;
  background: var(--primaryColor);
  animation: lds-grid 3s linear infinite;
}

.lds-grid div:nth-child(1) {
  top: 0;
  left: 0;
  animation-delay: 0s;
}

.lds-grid div:nth-child(2) {
  top: 0;
  left: 37%;
  animation-delay: -0.4s;
}

.lds-grid div:nth-child(3) {
  top: 0;
  right: 0;
  animation-delay: -0.8s;
}

.lds-grid div:nth-child(4) {
  top: 37%;
  left: 0;
  animation-delay: -0.4s;
}

.lds-grid div:nth-child(5) {
  top: 37%;
  left: 37%;
  animation-delay: -0.8s;
}

.lds-grid div:nth-child(6) {
  top: 37%;
  right: 0;
  animation-delay: -1.2s;
}

.lds-grid div:nth-child(7) {
  bottom: 0;
  left: 0;
  animation-delay: -0.8s;
}

.lds-grid div:nth-child(8) {
  bottom: 0;
  left: 37%;
  animation-delay: -1.2s;
}

.lds-grid div:nth-child(9) {
  bottom: 0;
  right: 0;
  animation-delay: -1.6s;
}

@keyframes lds-grid {
  0%, 100% {
    border-radius: 0;
    background-color: var(--secondaryColor);
  }

  25% {
    border-radius: 30%;
    background-color: var(--backgroundColor);
  }

  50% {
    border-radius: 100%;
    background-color: var(--primaryColor);
  }
}
</style>