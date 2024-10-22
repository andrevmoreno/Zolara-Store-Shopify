document.addEventListener('DOMContentLoaded', function () {
  const tabTitles = document.querySelectorAll('.tab-title')
  const tabContents = document.querySelectorAll('.tab-content')

  tabTitles.forEach((tab, index) => {
    tab.addEventListener('click', function () {
      // Remover la clase "active" de todos los tabs y contenidos
      tabTitles.forEach((t) => t.classList.remove('active'))
      tabContents.forEach((c) => c.classList.remove('active'))

      // Agregar la clase "active" al tab y contenido clicado
      tab.classList.add('active')
      tabContents[index].classList.add('active')
    })
  })

  // Activar la primera pestaña por defecto
  if (tabTitles.length > 0) {
    tabTitles[0].classList.add('active')
    tabContents[0].classList.add('active')
  }
})
