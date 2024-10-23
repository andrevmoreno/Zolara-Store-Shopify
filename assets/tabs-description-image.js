document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab')
  const contents = document.querySelectorAll('.tab-content')

  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      // Remover la clase 'active' de todas las tabs y contenidos
      tabs.forEach((t) => t.classList.remove('active'))
      contents.forEach((content) => content.classList.remove('active'))

      // Añadir clase 'active' a la tab seleccionada y su contenido asociado
      this.classList.add('active')
      const tabContent = document.getElementById(this.dataset.tab)
      tabContent.classList.add('active')
    })
  })
})
