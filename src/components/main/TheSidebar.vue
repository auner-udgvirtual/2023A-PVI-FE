<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
      <img
        src="http://img6.wsimg.com/ux/favicon/favicon-32x32.png"
        alt="GoDaddy Logo"
        class="brand-image"
      />
      <span class="brand-text font-weight-light"
        >GoDaddy <cite class="text-muted text-sm">Intl</cite></span
      >
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- SidebarSearch Form -->
      <!-- <div class="form-inline mt-3">
        <div class="input-group" data-widget="sidebar-search">
          <input
            class="form-control form-control-sidebar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div> -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="true"
        >
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <!-- <li class="nav-item">
            <router-link :to="{ name: 'gdi-dashboard' }" class="nav-link">
              <i class="fas fa-laptop-code nav-icon"></i>
              <p>GDI Dashboard</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'ifa-dashboard' }" class="nav-link">
              <i class="fas fa-laptop-code nav-icon"></i>
              <p>Intl Feat Avail Dashboard</p>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <i class="nav-icon fas fa-vial-circle-check text-primary"></i>
              <p>
                Test Run Results
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'trr-site-monitor' }"
                  class="nav-link"
                >
                  <i class="fas fa-vial-virus nav-icon text-info"></i>
                  <p>Site Monitor</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'trr-gdeye' }" class="nav-link">
                  <i class="fas fa-eye nav-icon text-info"></i>
                  <p>GDEye</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <i class="nav-icon fas fa-check-to-slot text-primary"></i>
              <p>
                Task Status
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'ts-worklog' }" class="nav-link">
                  <i class="fas fa-laptop-file nav-icon text-info"></i>
                  <p>Worklog Info</p>
                </router-link>
                <router-link :to="{ name: 'testing-schedule' }" class="nav-link">
                  <i class="fa-solid fa-bars-progress nav-icon text-info"></i>
                  <p>Testing Schedule</p>
                </router-link>
                <router-link :to="{ name: 'handoff' }" class="nav-link">
                  <i class="fa-solid fa-language nav-icon text-info"></i>
                  <p>Handoff Status</p>
                </router-link>
              </li> -->
          <!-- <li class="nav-item">
                <router-link :to="{ name: 'df-monthly' }" class="nav-link">
                  <i class="fas fa-bugs nav-icon"></i>
                  <p>Monthly Bugs</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'df-ytd' }" class="nav-link">
                  <i class="fas fa-bugs nav-icon"></i>
                  <p>YTD Bugs Details</p>
                </router-link>
              </li> -->
          <!-- </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <i class="nav-icon fas fa-bug text-primary"></i>
              <p>
                Defect Status
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'df-stats-metrics' }"
                  class="nav-link"
                >
                  <i class="fas fa-chart-line nav-icon text-info"></i>
                  <p>Statistics and Metrics</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <i class="nav-icon fas fa-screwdriver-wrench text-primary"></i>
              <p>
                Tools
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a class="nav-link">
                  <i class="fas fa-gear nav-icon text-info"></i>
                  <p>General<i class="right fas fa-angle-left"></i></p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a
                      href="https://intlqatool.partners.test-godaddy.com/price-check"
                      class="nav-link"
                      target="_blank"
                    >
                      <i class="fas fa-check-to-slot nav-icon text-purple"></i>
                      <p>Merchandise Price Check</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://intlqatool.partners.test-godaddy.com/sitecore"
                      class="nav-link"
                      target="_blank"
                    >
                      <i class="fas fa-sitemap nav-icon text-purple"></i>
                      <p>Site Core Bugs Reporting</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'gt-product-name-checker' }"
                      class="nav-link"
                    >
                      <i class="fas fa-user-check nav-icon text-purple"></i>
                      <p>Product Name Checker</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'gt-price-calculator' }"
                      class="nav-link"
                    >
                      <i class="fas fa-calculator nav-icon text-purple"></i>
                      <p>Price Calculator</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'gt-downloads' }"
                      class="nav-link"
                    >
                      <i class="fas fa-download nav-icon text-purple"></i>
                      <p>Downloads</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'gt-patch-status' }"
                      class="nav-link"
                    >
                      <i class="fas fa-computer nav-icon text-purple"></i>
                      <p>Patch Status</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <i class="fas fa-envelope nav-icon text-info"></i>
                  <p>Email<i class="right fas fa-angle-left"></i></p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a
                      href="https://intlqatool.partners.test-godaddy.com/siena"
                      class="nav-link"
                      target="_blank"
                    >
                      <i
                        class="fas fa-envelope-open-text nav-icon text-purple"
                      ></i>
                      <p>Siena</p>
                    </a>
                  </li> -->
          <!-- <li class="nav-item">
                    <router-link
                      :to="{ name: 'et-upload-email' }"
                      class="nav-link"
                    >
                      <i class="fas fa-upload nav-icon text-purple"></i>
                      <p>Upload</p>
                    </router-link>
                  </li> -->
          <!-- <li class="nav-item">
                    <router-link
                      :to="{ name: 'et-import-json-email-template' }"
                      class="nav-link"
                    >
                      <i class="fas fa-file-arrow-up nav-icon text-purple"></i>
                      <p>Import JSON Template</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'et-json-email-template' }"
                      class="nav-link"
                    >
                      <i
                        class="fas fa-envelope-open-text nav-icon text-purple"
                      ></i>
                      <p>JSON Email Templates</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'et-xml-email-template' }"
                      class="nav-link"
                    >
                      <i
                        class="fas fa-envelope-open-text nav-icon text-purple"
                      ></i>
                      <p>XML Email Templates</p>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <i class="fas fa-globe nav-icon text-info"></i>
                  <p>Global Data<i class="right fas fa-angle-left"></i></p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'gdt-sample-data' }"
                      class="nav-link"
                    >
                      <i class="fas fa-info nav-icon text-purple"></i>
                      <p>Sample</p>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      :to="{ name: 'gdt-intl-address' }"
                      class="nav-link"
                    >
                      <i class="fas fa-address-book nav-icon text-purple"></i>
                      <p>Intl Address</p>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li> -->
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {};
</script>

<style>
/* a:hover,
a:active,
a.router-link-exact-active {
  background-color: rgb(67, 67, 67);
  border-radius: 4px;
} */
</style>
