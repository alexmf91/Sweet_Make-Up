<template>
  <div>
    <ServicesHomeBanner />
    <div class="app-services">
      <service-card
        v-for="(service, index) in services"
        :key="index"
        :name="service.name"
        :id="service.id"
        :category="service.category"
        :image="service.image"
      >
      </service-card>
    </div>
  </div>
</template>

<script>
import ServicesHomeBanner from "./ServicesHomeBanner.vue";
import ServiceCard from "./ServiceCard.vue";

export default {
  name: "home-services-component",
  components: {
    ServiceCard,
    ServicesHomeBanner,
  },
  data() {
    return {
      services: [
        {
          id: "1",
          name: "Maquillaje y peinados para eventos",
          category: "make_up_and_hairstyles",
          image:
            "https://i.ibb.co/9v1VrS4/Here-Comes-The-Bride-45-Wedding-Hairstyles-for-All-Hair-Lengths.jpg",
        },
        {
          id: "2",
          name: "Belleza para novias",
          category: "beauty_for_brides",
          image:
            "https://i.ibb.co/9v1VrS4/Here-Comes-The-Bride-45-Wedding-Hairstyles-for-All-Hair-Lengths.jpg",
        },
        {
          id: "3",
          name: "Beauty corner",
          category: "beauty_corner",
          image:
            "https://i.ibb.co/9v1VrS4/Here-Comes-The-Bride-45-Wedding-Hairstyles-for-All-Hair-Lengths.jpg",
        },
      ],
    };
  },
};
</script>
