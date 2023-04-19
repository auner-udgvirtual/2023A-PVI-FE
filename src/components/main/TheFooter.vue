<template>
  <footer class="main-footer">
    <strong
      >Copyright &copy; 2023-{{ new Date().getFullYear() }} | SOFTTEK |
      Localization Testing Team.</strong
    >
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version </b>{{ MyVersion }}
    </div>
  </footer>
</template>

<script>
import packageInfo from "../../../package.json";

export default {
  data() {
    return {
      MyVersion: packageInfo.version,
    };
  },
};
</script>

<style></style>
