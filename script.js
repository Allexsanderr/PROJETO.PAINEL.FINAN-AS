const app = document.querySelector('.app')
const btn = document.getElementById('btn')
const overlay = document.querySelector('.overlay')
const sidebar = document.querySelector('.sidebar')
const items = document.querySelectorAll('.menu-item')
const main = document.querySelector('.main')

function openSidebar() {
  app.classList.add('sidebar-open')
}

function closeSidebar() {
  app.classList.remove('sidebar-open')
}

function toggleSidebar() {
  app.classList.toggle('sidebar-open')
}

if (btn) {
  btn.addEventListener('click', toggleSidebar)
}

if (overlay) {
  overlay.addEventListener('click', closeSidebar)
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSidebar()
})

items.forEach(el => {
  el.addEventListener('click', e => {
    el.classList.add('interact')
    el.classList.add('clicked')
    items.forEach(i => i.classList.remove('active'))
    el.classList.add('active')
    if (main) {
      main.classList.add('transition')
      setTimeout(() => main.classList.remove('transition'), 400)
    }
    setTimeout(() => el.classList.remove('interact'), 300)
    setTimeout(() => el.classList.remove('clicked'), 220)
    closeSidebar()
  })
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) closeSidebar()
})
