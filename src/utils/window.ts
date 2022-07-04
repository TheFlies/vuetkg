export function isElementInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export function isBelow(el1: HTMLElement, el2: HTMLElement, overlaped = true) {
  const rect1 = el1.getBoundingClientRect()
  const rect2 = el2.getBoundingClientRect()

  return overlaped ? rect1.top >= rect2.top : rect1.top > rect2.bottom
}
