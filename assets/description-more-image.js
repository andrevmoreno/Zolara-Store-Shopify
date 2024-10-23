document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab')
  const contents = document.querySelectorAll('.tab-content')

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', function () {
      tabs.forEach((t) => t.classList.remove('active'))
      contents.forEach((content) => (content.style.display = 'none'))

      this.classList.add('active')
      document.querySelector(
        `.tab-content[data-index="${index}"]`
      ).style.display = 'block'
    })
  })
})
