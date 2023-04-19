<template>
  <div class="card m-2">
    <div class="card-header">
      <h3 class="card-title"><slot name="card-title"></slot></h3>
      <div class="card-tools">
        <!-- Buttons, labels, and many other things can be placed here! -->
        <!-- Here is a label for example -->
        <!-- <span class="badge badge-primary">Label</span> -->
        <slot name="card-tools"></slot>
      </div>
      <!-- /.card-tools -->
    </div>
    <!-- /.card-header -->
    <slot name="card-body"></slot>
    <!-- /.card-body -->
    <slot name="card-footer"></slot>
    <!-- /.card-footer -->
    <div v-if="isLoading" class="overlay dark">
      <i class="fas fa-2x fa-sync-alt fa-spin"></i>
    </div>
  </div>
  <!-- /.card -->
</template>

<script>
export default {
  props: ["isLoading"],
};
</script>
