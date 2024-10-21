document.querySelectorAll('.tab').forEach((tab, index) => {
  tab.addEventListener('click', function () {
    document
      .querySelectorAll('.tab')
      .forEach((t) => t.classList.remove('active'))
    document
      .querySelectorAll('.tabs-image img')
      .forEach((img) => img.classList.remove('active'))

    tab.classList.add('active')
    document.querySelectorAll('.tabs-image img')[index].classList.add('active')
  })
})
