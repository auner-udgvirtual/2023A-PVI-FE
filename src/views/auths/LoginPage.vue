<template>
  <div class="login-page">
    <div class="login-box">
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>
          <div>
            <div class="input-group mb-3">
              <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="Email"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <!-- <div class="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label for="remember"> Remember Me </label>
                </div> -->
              </div>

              <div class="col-4">
                <button
                  @click="submit"
                  type="submit"
                  class="btn btn-primary btn-block"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
          <!-- <p class="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p>
          <p class="mb-0">
            <a href="register.html" class="text-center"
              >Register a new membership</a
            >
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/auth/auth.service";
import { useAuthStore } from "@/stores/authStore";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      store: useAuthStore(),
      email: null,
      password: null,
    };
  },
  methods: {
    submit() {
      // Swal.isLoading();
      AuthService.login(this.email, this.password)
        .then((res) => {
          this.store.setToken(res.data.token);
          this.$router.push({ name: "rt-status" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.login-page {
  height: 80vh;
}
</style>
