<template>
  <nav class="navbar navbar-expand-lg navbar-light style-1 nav-preview py-0">
    <div class="container-xxl">
      <a class="navbar-brand" href="#">
        <img src="/assets/img/logo_cd.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="nav-links dropLink active" href="#">
              Homes
              <small class="icon"><i class="bi bi-chevron-down me-1"></i></small>
            </a>
            <ul class="dropDownMenu">
         
          <li class="nav-item dropDown megaMenu col3">
            <a class="nav-links dropLink active" href="#">
              pages
              <small class="icon"><i class="bi bi-chevron-down me-1"></i></small>
            </a>
            <ul class="dropDownMenu">
              <li class="dropdown-items">
                <a href="#" class="menuLink">app pages</a>
                <ul class="subDropDown">
                  <li>
                    <NuxtLink to="page-about-app" class="subLink">
                      about
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="page-contact-app" class="subLink">
                      contact
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="dropdown-items">
                <a href="#" class="menuLink">Saas</a>
                <ul class="subDropDown">
                  <li>
                    <NuxtLink to="page-about-5" class="subLink">
                      about
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="page-services-5" class="subLink">
                      services
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="page-contact-5" class="subLink">
                      contact
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="dropdown-items">
                <a href="#" class="menuLink">RTL</a>
                <ul class="subDropDown">
                  <li>
                    <NuxtLink to="rtl-page-about" class="subLink">
                      about
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="rtl-page-contact" class="subLink">
                      contact
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item dropDown megaMenu col3">
            <a class="nav-links dropLink active" href="#">
              News
              <small class="icon"><i class="bi bi-chevron-down me-1"></i></small>
            </a>
            <ul class="dropDownMenu">
              <li class="dropdown-items">
                <a href="#" class="menuLink">blog</a>
                <ul class="subDropDown">
                  <li>
                    <NuxtLink to="page-blog-5" class="subLink">
                      saas right side bar blog
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="page-blog-5-left-sidebar" class="subLink">
                      saas left side bar blog
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="page-blog-5-wide" class="subLink">
                      saas wide blog
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="page-blog-app" class="subLink">
                      app right side bar blog
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="page-blog-app-left-sidebar" class="subLink">
                      app left side bar blog
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="page-blog-app-wide" class="subLink">
                      app wide blog
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="rtl-page-blog" class="subLink">
                      RTL blog
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="dropdown-items">
                <a href="#" class="menuLink">post</a>
                <ul class="subDropDown">
                  <li>
                    <NuxtLink to="page-single-post-5" class="subLink">
                      Saas right side bar single post
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="page-single-post-5-left-sidebar" class="subLink">
                      Saas left side bar single post
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="page-single-post-5-wide" class="subLink">
                      Saas wide single post
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="page-single-post-app" class="subLink">
                      app right side bar single post
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="page-single-post-app-left-sidebar" class="subLink">
                      app left side bar single post
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="page-single-post-app-wide" class="subLink">
                      app wide single post
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="rtl-page-single-post" class="subLink">
                      RTL single post
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-links dropLink" :href="appData.itemDocsLink">
              documentations
            </a>
          </li>
        </ul>
        <div class="nav-side flex-shrink-0">
          <div class="qoute-nav">
            <a href="https://1.envato.market/Kemm2e" target="_blank" class="btn sm-butn butn-gard border-0 text-white">
              <span>get started</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import appData from '../../../data/appData.json';

export default {
  data() {
    return {
      appData
    }
  },
}
</script>
