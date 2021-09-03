<template>
  <footer>
    <span>Sweet Make-Up 2021 © Made with ♡ by Alex Muñoz</span>
  </footer>
</template>
<script>
export default {
  name: 'app-footer',
};
</script>

<style lang="scss" scoped>
  @import "../styles/reset.scss";
  @import "../styles/colors.scss";
footer {
  box-sizing: border-box;
  background-color:$tertiary-color;
  bottom: 0;
  padding: 1rem;
  width: 100%;
  span{
    color:$fivetiary-color;
    font-size: .5rem ;
  }
}

</style>
