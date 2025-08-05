import $ from 'jquery'
window.$ = $
window.jQuery = $

export default function tmpcustomAnimation () {
  return {
    init () {
      this.animates()
    },
    animates () {
      const animates = $('.tmp-scroll-trigger')
      if (animates.length > 0) {
        animates.each(function () {
          $(this).on('animationend', function (e) {
            setTimeout(() => {
              $(e.target).attr('animation-end', '')
            }, 1000)
          })
        })
      }
    }
  }
}