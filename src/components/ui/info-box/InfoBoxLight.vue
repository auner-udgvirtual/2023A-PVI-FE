<template>
  <div class="info-box bg-light">
    <slot name="info-box-icon"></slot>
    <!-- <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span> -->
    <div class="info-box-content">
      <slot name="info-box-content"></slot>
      <!-- <span class="info-box-text">Messages</span>
      <span class="info-box-number">1,410</span> -->
    </div>
    <div v-if="isLoading" class="overlay dark">
      <i class="fas fa-2x fa-sync-alt fa-spin"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isLoading"],
};
</script>
