
const loadImages = document.querySelectorAll('.lazy-load') || []

const LazyLoad = class {
  constructor({ images }) {
    this.images = [...images]
    
    window.addEventListener('scroll', () => this.checkPosition())
  }

  checkPosition() {
    this.images.length && this.images.forEach( image => this.isVisible(image) ? this.showImage(image) : undefined )
  }

  isVisible(elem) {

      const coords = elem.getBoundingClientRect();

      const windowHeight = document.documentElement.clientHeight;

      const topVisible = coords.top > 0 && coords.top < windowHeight;
      const bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

      return topVisible || bottomVisible;
  }

  showImage(elem) {
    const _src = elem.getAttribute('realsrc')
    elem.src = _src
    this.images =  this.images.filter( image => image !== elem )
  }
}

const lazy = new LazyLoad({ images: loadImages })
