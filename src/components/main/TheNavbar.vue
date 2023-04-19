<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand-md navbar-white navbar-light">
    <div class="container">
      <!-- Brand Logo -->
      <a href="#" class="navbar-brand">
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
        <span class="brand-text font-weight-bold">Loc Testing</span>
      </a>
      <button
        class="navbar-toggler order-1"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Left navbar links -->
      <div class="collapse navbar-collapse order-3" id="navbarCollapse">
        <ul class="navbar-nav">
          <li class="nav-item d-none d-sm-inline-block">
            <router-link :to="{ name: 'rt-status' }" class="nav-link">
              <p>Real-Time Status</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- Right navbar links -->
    <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
      <li class="nav-item">
        <router-link :to="{ name: 'settings' }" class="nav-link">
          <i class="fas fa-gear"></i>
        </router-link>
      </li>
      <!-- <li class="nav-item dropdown show">
        <a
          class="nav-link"
          data-toggle="dropdown"
          href="#"
          aria-expanded="true"
        >
          <i class="fas fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div
          class="dropdown-menu dropdown-menu-lg dropdown-menu-right show"
          style="left: inherit; right: 0px"
        >
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer"
            >See All Notifications</a
          >
        </div>
      </li> -->
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->
</template>

<script></script>

<style></style>
