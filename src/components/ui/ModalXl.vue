<template>
  <div
    class="modal fade"
    tabindex="-1"
    aria-labelledby="modal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">
            <slot name="modal-title"></slot>
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <slot name="modal-body"></slot>
        <slot name="modal-footer"></slot>
      </div>
    </div>
  </div>
</template>
