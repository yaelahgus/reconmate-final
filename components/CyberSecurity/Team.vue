<template>
  <section id="team" class="team style-10 section-padding">
    <div class="container">
      <div class="mb-70 text-center">
        <h2>Team Recon Mate</h2>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-lg-4" v-for="(member, idx) in team" :key="idx">
            <div class="team-card">
              <div class="img">
                <img :src="member.picture" alt="" class="main-img" />
                <span
                  :class="`bg_color bg-${idx === 1 ? 'blue7' : 'orange2'}`"
                ></span>
                <div class="social-icons">
                  <span class="icon"> </span>
                  <div class="socials">
                    <a :href="getSocialLink(member.name, 'linkedin')">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a :href="getSocialLink(member.name, 'instagram')">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a :href="getSocialLink(member.name, 'github')">
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="info">
                <p class="text-capitalize color-blue7">{{ member.position }}</p>
                <h5>{{ member.name }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import team from "../../data/CyberSecurity/team.json";

export default {
  data() {
    return {
      team,
    };
  },
  methods: {
    getSocialLink(name, social) {
      // Implement logic to return different social media links based on the member's name and social platform
      // Example:
      if (name === "Ibnu Fachrizal") {
        if (social === "linkedin") {
          return "https://www.linkedin.com/in/ibnufachrizal";
        } else if (social === "instagram") {
          return "https://www.instagram.com/ibnufachrizal";
        } else if (social === "github") {
          return "https://github.com/ibnufachrizal";
        }
      } else if (name === "Faishal Ananta Ridha") {
        if (social === "linkedin") {
          return "https://linkedin.com/in/Isallkun";
        } else if (social === "instagram") {
          return "https://instagram.com/Isallkun";
        } else if (social === "github") {
          return "https://github.com/Isallkun";
        }
      } else if (name === "Agus Arifudin") {
        if (social === "linkedin") {
          return "https://www.linkedin.com/in/Agusar";
        } else if (social === "instagram") {
          return "https://www.instagram.com/Agus_arifudinnn";
        } else if (social === "github") {
          return "https://github.com/Yaelahgus";
        }
      } else if (name === "Faishal Ananta Ridha") {
        if (social === "linkedin") {
          return "https://linkedin.com/in/Isallkun";
        } else if (social === "instagram") {
          return "https://instagram.com/Isallkun";
        } else if (social === "github") {
          return "https://github.com/Isallkun";
        }
      }
    },
  },
};
</script>
