<template>
  <section
    :class="`contact section-padding pt-${
      styleType === '4' ? '0' : '50'
    } style-6`"
  >
    <template v-if="styleType === '5'">
      <div class="section-head text-center mb-100 style-5">
        <h2 class="mb-20">
          {{ rtl ? "يسعدنا" : "Hubungi" }}
          <span>{{ rtl ? "تواصلك" : "Kami" }}</span> {{ rtl && "معنا" }}
        </h2>
        <p>
          {{
            rtl
              ? "سنتواصل معك مرة أخرى بعد استلام طلبك خلال 24 ساعة"
              : "We will contact again after receive your request in 24h"
          }}
        </p>
      </div>
    </template>
    <div class="container">
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <form class="form" @submit.prevent="handleFormSubmit">
              <p class="text-center text-danger fs-12px mb-30">
                {{
                  rtl
                    ? "الحقل اللذى يحتوى على هذة العلامة اجبارى *"
                    : "The field is required mark as *"
                }}
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      :placeholder="rtl ? 'الاسم' : 'Name'"
                      v-model="formData.name"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      :placeholder="
                        rtl ? 'البريد الالكترونى *' : 'Email Address *'
                      "
                      v-model="formData.email"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      name="phone"
                      class="form-control"
                      :placeholder="
                        rtl ? 'رقم الهاتف (اختياري)' : 'Phone Number (option)'
                      "
                      v-model="formData.phone"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      name="website"
                      class="form-control"
                      :placeholder="
                        rtl ? 'رابط موقعك (اختيارى)' : 'Your Website (option)'
                      "
                      v-model="formData.website"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      name="subject"
                      class="form-control"
                      :placeholder="rtl ? 'موضوع' : 'Subject'"
                      v-model="formData.subject"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <textarea
                      rows="10"
                      name="message"
                      class="form-control"
                      :placeholder="
                        rtl ? 'كيف يمكننا مساعدتك ؟' : 'How can we help you?'
                      "
                      v-model="formData.message"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-12 text-center">
                  <div class="form-check d-inline-flex mt-30 mb-30">
                    <input
                      class="form-check-input me-2 mt-0"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label small"
                      for="flexCheckDefault"
                    >
                      {{
                        rtl
                          ? "من خلال الإرسال ، أوافق على"
                          : "By submitting, i’m agreed to the"
                      }}
                      <a href="#" class="text-decoration-underline">{{
                        rtl ? "الشروط و الاحكام" : "Terms & Conditons"
                      }}</a>
                    </label>
                  </div>
                </div>
                <div class="col-lg-12 text-center">
                  <input
                    type="submit"
                    :value="rtl ? 'ارسل طلبك' : 'Send Your Request'"
                    :class="`btn rounded-pill ${
                      styleType === '4'
                        ? 'bg-blue4 text-white fs-12px'
                        : 'blue5-3Dbutn hover-blue2 sm-butn'
                    } fw-bold text-light`"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <img src="/assets/img/icons/contact_a.png" alt="" class="contact_a" />
        <img
          src="/assets/img/icons/contact_message.png"
          alt=""
          class="contact_message"
        />
      </div>
    </div>
  </section>
</template>

<script>
import contactInfo from "../../data/Contact/form.json";
import contactInfoRTL from "../../data/Contact/form-rtl.json";

export default {
  props: ["rtl", "styleType"],
  computed: {
    contactInfoData() {
      return this.rtl ? contactInfoRTL : contactInfo;
    },
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        website: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    handleFormSubmit() {
      const adminEmail = "ibnu.braincore@gmail.com";
      const body = `Hello,\n
        Name: ${this.formData.name}\n
        Phone Number: ${this.formData.email ?? "Not included"}\n
        My Website: ${this.formData.website ?? "Not included"}\n\n
        ${this.formData.message}\n\n
        Thank you.
      `;

      const mailtoLink = `mailto:${adminEmail}?subject=${encodeURIComponent(
        this.formData.subject
      )}&body=${encodeURIComponent(body)}`;

      console.log(mailtoLink);

      if (process.client) window.location.href = mailtoLink;
    },
  },
};
</script>
