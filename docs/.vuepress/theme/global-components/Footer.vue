<template>
  <footer v-if="$page.path" class="footer" :class="checkSidebarAuto">
    <div class="icons">
      <div class="no-wrap-icons">
        <a
          href="https://github.com/decipherDev"
          target="_blank"
          rel="noopener noreferrer"
          ><vp-icon name="GitHub"></vp-icon
        ></a>
        <a
          href="https://www.linkedin.com/in/umeshtoke/"
          target="_blank"
          rel="noopener noreferrer"
          ><vp-icon name="LinkedIn"></vp-icon
        ></a>
<!--       <a
          href="https://codemonkeys.tech/rss.xml"
         target="_blank"
          rel="noopener noreferrer"
          ><vp-icon name="rss"></vp-icon
        ></a>
 -->
      </div>
    </div>
    <p class="made-by">
      Copyright © 2024 rwxcode
    </p>
  </footer>
</template>

<!--  
<script>
  export default {
    name: 'Footer',

  computed: {
    checkSidebarAuto: function() {
      return {
        'is-sidebar-active':
          this.$route.path.includes('/donate/') ||
          this.$route.path.includes('/contact/') ||
          this.$route.path.includes('/resources/') ||
          this.$page.regularPath.includes('_posts')
      };
    }
  }
};
</script>
-->

<style lang="stylus" scoped>
@import '~rfs/stylus'

.footer
  display: flex
  flex-direction: column
  align-items: center
  padding: 2.5rem 2.5rem 2rem
  .icons
    display: flex
    margin-bottom: 1.75rem
    min-width: 12.5rem
    .no-wrap-icons
      padding: 0 0 0 2rem
      display: inline-flex
    .wrap-icons
      display: inline-flex
    svg
      fill: $textColor
    svg:hover
      fill: $accentColor
  .made-by
    text-align: center
    margin: 0
.is-sidebar-active
  padding-left: 22.5rem

@media (max-width: $MQNarrow)
  .is-sidebar-active
    padding-left: 18.9rem

@media (max-width: 61.25rem)
  .is-sidebar-active
    padding-left: 2.5rem

@media (min-width: 61.3125rem) and (max-width: 72.9375rem)
  .is-sidebar-active
    .icons
      flex-wrap: wrap
      .no-wrap-icons
        width: 100%
        justify-content: space-between
      .wrap-icons
        padding-top: 1.75rem
        width: 100%
        justify-content: space-evenly
        a:nth-child(1)
          margin-left: 0
          rfs-margin-right(4.6875rem)
        a:nth-child(2)
          margin-left: 0

@media (max-width: 39.0625rem)
  .icons
    flex-wrap: wrap
    .no-wrap-icons
      width: 100%
      justify-content: space-between
    .wrap-icons
      padding-top: 1.75rem
      width: 100%
      justify-content: space-evenly
      a:nth-child(1)
        margin-left: 0
        rfs-margin-right(4.6875rem)
      a:nth-child(2)
        margin-left: 0
</style>
