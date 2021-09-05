<template>
  <div>
    <h2>Services</h2>
    <div class='app-services'>
      <service-card
        v-for='(service, index) in services'
        :key='index'
        :name='service.name'
        :id='service.id'
        :category='service.category'
      >
      </service-card>
    </div>
  </div>
</template>

<script>
import ServiceCard from './ServiceCard.vue';

export default {
  name: 'home-services-component',
  components: { ServiceCard },
  data() {
    return {
      services: [
        {
          id: '1',
          name: 'Maquillaje y peinados para eventos',
          category: 'beauty_for_brides',
        },
        {
          id: '2',
          name: 'Belleza para novias',
          category: 'make_up_and_hairstyles',
        },
        { id: '3', name: 'Beauty corner', category: 'beauty_corner' },
      ],
    };
  },
};
</script>
