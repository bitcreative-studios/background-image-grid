// import 'normalize.css'
import '../css/styles.css'
import { gsap } from 'gsap'
// import { getRandomNumber } from '../../ImageGridMotionEffect-master/dist/demo3.b516845c'

class GridItem {
  constructor(el) {
    this.DOM = { el }
    // super(props)
    this.move()
  }

  // Move the items when moving the cursor.
  move() {
    // amounts to move in each axis
    const translationVals = { tx: 0, ty: 0 }
    // get random start and movement boundries
    // const xstart = getRandomNumber(15,60)
    // const ystart = getRandomNumber(15,60)

    // infinite loop
    const render = () => {
      // Calculate the amount to move.
      // Using linear interpolation to smooth things out.
      // Translation values will be in the range [-start, start] for a cursor movement from 0 to the window's width/height
      // translationVals.tx = lerp(translationVals.tx, map(mousepos.x))
      // translationVals.tx = lerp(translationVals.tx)
    }
  }
}

class Grid {
  constructor(props) {
    const { el } = props
    this.DOM = { el }
    this.gridItems = []
    this.items = [...this.DOM.el.querySelectorAll('.grid__item')]
    this.items.forEach(item => this.gridItems.push(new GridItem(item)))

    this.showItems()
  }

  showItems() {
    gsap
      .timeline()
      .set(this.items, { scale: 0.7, opacity: 0 }, 0)
      .to(
        this.items,
        {
          duration: 2,
          ease: 'Expo.easeOut',
          scale: 1,
          stagger: { amount: 0.6, grid: 'auto', from: 'center' },
        },
        0,
      )
      .to(
        this.items,
        {
          duration: 3,
          ease: 'Power1.easeOut',
          opacity: 0.4,
          stagger: { amount: 0.6, grid: 'auto', from: 'center' },
        },
        0,
      )
  }
}

const lerp = () => {}

// Itialize grid
const grid = new Grid({ el: document.querySelector('.grid') })
