<template>
  <div class="content frs-content"  id="about" data-scroll-index="2">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6">
          <div class="img mb-30 mb-lg-0">
            <img src="/assets/img/about/ipad.png" alt="" />
          </div>
        </div>
        <div class="col-lg-5">
          <div class="info">
            <div class="section-head style-4">
              <small class="title_small">{{ rtl ? 'نوتيرو - تطبيق مذكرة سهل الاستخدام' : 'Notero - Easy Notes App' }}</small>
              <h2 class="mb-30">{{ rtl ? 'تطبيق لاصحاب' : 'The Notero For' }} <span> {{ rtl ? 'الابداع' : 'Creatives' }} </span> </h2>
            </div>
            <p class="text mb-40">
              {{
                rtl && 'حافظ على تركيزك وإنتاجيتك مع مساحة  خالية من الفوضى. الطرق المرنة لتنظيم ملاحظاتك: علامات التجزئة ، دفاتر الملاحظات المتداخلة ، تثبيت الملاحظات في أعلى قائمة الملاحظات ، إلخ.'
              }}
              <span v-if="!rtl">
                Stay focused and productive with a clean and clutter-free note <br /> space. The flexible ways to organize your notes: hashtags, nested notebooks, pinning notes to the top of the note list, etc
              </span> 
            </p>
            <ul>
              <li class="d-flex align-items-center mb-3" v-for="(item, index) in features" :key="index">
                <small class="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                  <i :class="item.icon"></i>
                </small>
                <h6 class="fw-bold">{{item.title}}</h6>
              </li>
            </ul>
            <NuxtLink to="/page-contact-5" class="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
              <small> Free Register </small>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/about/about_s4_lines.png" alt="" class="lines" />
    <img src="/assets/img/about/about_s4_bubble.png" alt="" class="bubble" />
  </div>
</template>

<script>
export default {
  props: ['rtl', 'features']
}
</script>
