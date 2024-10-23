document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tabs .tab')
  const contents = document.querySelectorAll('.tab-content')

  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      const target = this.dataset.tab

      tabs.forEach((t) => t.classList.remove('active'))
      this.classList.add('active')

      contents.forEach((content) => {
        content.classList.remove('active')
        if (content.id === target) {
          content.classList.add('active')
        }
      })
    })
  })
})
