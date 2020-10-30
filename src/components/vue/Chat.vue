<template lang="pug">
.chat
  include ../../pug/utilities/_mixins
  .chat-header
    .chat-title
      | Онлайн чат
      .status.green
        SvgIcon(name='i-online')
        | 2333
    a.specification(href="")
      SvgIcon(name='pravila')
      | Правила
    button.chat-close(type='button')
      SvgIcon(name='arr-right')
  // end chat-header
  .chat-cont
    ul.chat-list
      +chatmessage('ddd')


  // end chat-cont
  .chat-bottom
    .chat-form
      .chat-form__inner
        label.field-wrapper(for='chat-input')
          input#chat-input.field-textarea(type='text' placeholder='Введите сообщение' autocomplete='off' value='')
        button.btn.btn--blue(type='button' disabled='')
          svg(width='26' height='25' viewBox='0 0 26 25' fill='#fff' xmlns='http://www.w3.org/2000/svg')
            path(d='M9.22546 18.569V23.459C9.22546 23.8006 9.44476 24.1032 9.7695 24.2107C9.85068 24.2371 9.93397 24.2497 10.0162 24.2497C10.2629 24.2497 10.5012 24.1337 10.653 23.9271L13.5134 20.0345L9.22546 18.569Z')
            path(d='M24.9719 0.146646C24.7294 -0.0252105 24.411 -0.0484058 24.1474 0.0897116L0.424942 12.4781C0.14449 12.6247 -0.0210397 12.9241 0.00215556 13.2393C0.0264052 13.5556 0.236217 13.8255 0.534593 13.9278L7.12944 16.182L21.1742 4.17314L10.3061 17.2669L21.3587 21.0445C21.4409 21.072 21.5274 21.0867 21.6138 21.0867C21.7572 21.0867 21.8996 21.0477 22.025 20.9718C22.2254 20.8495 22.3614 20.6439 22.3962 20.413L25.2956 0.907873C25.3388 0.61266 25.2144 0.319556 24.9719 0.146646Z')
    // end chat-form
    // end chat-bottom
// end chat
</template>

<script>

export default {

};
</script>

<style lang="sass">
@import '../../assets/sass/components/_chat.sass'

</style>
