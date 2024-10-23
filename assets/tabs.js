document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab')
  const tabContents = document.querySelectorAll('.tab-content')

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'))
      tabContents.forEach((tc) => tc.classList.remove('active'))

      // Add active class to the selected tab and corresponding content
      tab.classList.add('active')
      document.getElementById(tab.dataset.tab).classList.add('active')
    })
  })
})
