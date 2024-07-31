<template>
  <div class="content sec-content">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-5 order-2 order-lg-0">
          <div class="info">
            <div class="section-head style-4">
              <small class="title_small">{{ rtl ? 'إدارة أفضل للملاحظات' : 'Better Note Management' }}</small>
              <h2 class="mb-30">{{ rtl ? 'ملاحظاتك' : 'Your Notes' }} <span> {{ rtl ? 'في امان' : 'Security' }} </span></h2>
            </div>
            <p class="text mb-40">
              {{
                rtl ? 
                'يتزامن تلقائيًا عبر جميع أجهزتك. يمكنك أيضًا الوصول إلى الملاحظات وكتابتها بدون اتصال بالإنترنت'
                :
                'Automatically syncs across all your devices. You can also access and write notes without internet connection.' 
              }}
            </p>
            <div class="faq style-3 style-4">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item" v-for="(accordion, index) in accordions" :key="index">
                  <h2 class="accordion-header" :id="`heading${accordion.id}`">
                    <button :class="`accordion-button ${index !== 0 ?'collapsed':''}`" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${accordion.id}`" aria-expanded="true" :aria-controls="`collapse${accordion.id}`">
                      {{ accordion.title }}
                    </button>
                  </h2>
                  <div :id="`collapse${accordion.id}`" :class="`accordion-collapse collapse ${index === 0 ?'show':''}`" :aria-labelledby="`heading${accordion.id}`" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      {{ accordion.content }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://chrome.google.com/webstore/category/extensions" rel="noreferrer" class="btn btn-img mt-40 rounded-pill" target="_blank">
              <div class="icon img-contain">
                <img src="/assets/img/icons/chrome_icon.png" alt="" />
              </div>
              <div class="inf">
                <small>{{ rtl ? 'متاح في' : 'Available in the' }}</small>
                <h6>{{ rtl ? 'متجر كروم الالكتروني' : 'Chrome Web Store' }}</h6>
              </div>
            </a>
          </div>
        </div>
        <div class="col-lg-6 order-0 order-lg-2">
          <div class="img mb-30 mb-lg-0">
            <img src="/assets/img/about/2mobiles.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/about/about_s4_bubble2.png" alt="" class="bubble2" />
  </div>
</template>

<script>
export default {
  props: ['rtl', 'accordions']
}
</script>
