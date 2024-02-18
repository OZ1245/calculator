export function useFrog () {
  const init = () => {
    const root = document.createElement('div')
    const body = document.querySelector('body')
    const img = document.createElement('img')
    img.src = 'img/frog.jpg'

    root.classList.add('frog')

    root.appendChild(img)
    body?.appendChild(root)
  }

  const destroy = () => {
    const el = document.querySelector('.frog')
    
    if (el) {
      el.classList.add('frog--out')

      setTimeout(() => {
        el.remove()
      }, 1000)
    }
  }

  return {
    init,
    destroy
  }
}