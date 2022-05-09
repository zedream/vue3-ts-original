export default function (app) {
  app.directive('debounce', (el, binding) => {
    const wait = parseInt(binding.arg) || 1000
    el.addEventListener('click', debounce(binding.value, wait, {
      leading: true,
      trailing: false
    }))
  })
}
