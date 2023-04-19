<template>
  <div class="info-box h-100">
    <slot name="info-box-icon"></slot>
    <!-- <span class="info-box-icon bg-info"><i class="far fa-bookmark"></i></span> -->
    <div class="info-box-content">
      <slot name="info-box-content"></slot>
      <!-- <span class="info-box-text">Bookmarks</span>
      <span class="info-box-number">41,410</span> -->
      <slot name="info-box-progress-bar"></slot>
      <!-- <div class="progress">
        <div class="progress-bar bg-info" style="width: 70%"></div>
      </div>
      <span class="progress-description"> 70% Increase in 30 Days </span> -->
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
