<template>
  <section class="services" id="services">
    <ServicesHomeBanner />
    <div class="app-services">
      <service-card
        v-for="(service, index) in services"
        :key="index"
        :name="service.name"
        :id="service.id"
        :category="service.category"
        :image="service.image"
        :description="service.description"
      >
      </service-card>
    </div>
  </section>
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
            "https://4.bp.blogspot.com/-r72nYOtaH5c/WjqI5DEn1kI/AAAAAAAAKJU/XYTvBoSaccsBt4GBR-KaWysXYXQWMpqmACLcBGAs/s1600/iStock-177511535.jpg",
          description:
            "Si madrinas o damas de honor, te acompañaran en los preparativos y quieren que les maquillemos, disponemos de un equipo el cual se hará cargo de dejarlas increíbles para tu gran día.",
        },
        {
          id: "2",
          name: "Belleza para novias",
          category: "beauty_for_brides",
          image:
            "https://i.ibb.co/9v1VrS4/Here-Comes-The-Bride-45-Wedding-Hairstyles-for-All-Hair-Lengths.jpg",
          description:
            "Déjate asesorar por nosotras y juntas conseguiremos el look perfecto para que luzcas increíble en el día de tu boda.  Tras reunirnos para conocer tu estilo y preferencias, estudiaremos tu morfología y  encontraremos juntas tu maquillaje perfecto.",
        },
        {
          id: "3",
          name: "Beauty corner",
          category: "beauty_corner",
          image:
            "https://1.bp.blogspot.com/-DR83zWxUoQw/V42SiCmHIzI/AAAAAAAAFp4/LafPi58w72U9agN4POWoTpHOTXZNrBFBQCLcB/s1024/beauty-corner.jpg",
          description:
            "Si quieres lucir radiante durante toda tu boda, o cambiar de look para la fiesta, te ofrecemos el servicio de Beauty Corner. Un rincón de retoque de maquillaje para novias e invitadas durante todo el evento. ¡Lucirás perfecta hasta el baile!",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services {
  padding-bottom: 10rem;
}
</style>
