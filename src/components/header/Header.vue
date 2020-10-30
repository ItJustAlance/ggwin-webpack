<template lang="pug">
// HEADER :: START
header.header
  .container
    .header-left
      .b-logo
        router-link.logo(to="/")
          SvgIcon(name='logo')
      .header__icons
        .header__lang
          .header__lang--value
            SvgIcon(name='lang')
            span RUS
            SvgIcon(name='arr-down')
          .header__lang--list
            ul
              li
                a(href='#')
                  span.ic
                    SvgIcon(name='lang')
                  | ENG
              li
                a(href='#')
                  span.ic
                    SvgIcon(name='lang')
                  | RUS
        .header__icons--sound
          SvgIcon(name='mute')
        .double-check
          button.btn-crash.active
            SvgIcon(name='crash')
            | Crash
          button.btn-double.active
            SvgIcon(name='h-casino')
            | double
      a#hamburger-icon
        span.line.line-1
        span.line.line-2
        span.line.line-3

    .header__float
      nav.header__nav
        ul
          li.active
            router-link(to="/faq")
              SvgIcon(name="i-info")
              | FAQ
          li
            router-link(to="/support")
              SvgIcon(name='i-support')
              | Поддержка
          li
            router-link(to="/bonus")
              SvgIcon(name='i-bonus')
              | Бонусы

      .header__steam
        if aut == true
          .header__login
            .header__login-ava
              img(src="@img/ava.png")
            .header__login--right
              a.header__login--nick(href="#") DENDAKTHEBEST
              a.login-exit(href="#")
                 SvgIcon(name='exit')
        else
          a.btn-steam(href="#")
            SvgIcon(name='steam')
            | Войти через Steam

</template>

<script>


export default {
name: 'Header',
  components: {},
};
</script>

<style lang="sass">
@import '../../assets/sass/components/_header.sass'

</style>
