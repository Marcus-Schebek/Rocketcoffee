import './style.css'
import Rocketcoffee from '../../img/rocket-coffee.png'

export default function Title() {
  return (
    <section>
      <h1 className="title">Great Coffee</h1>
      <h1 className="title">&lt;Great Code/&gt;</h1>
      <img className="rocketCoffeeImg" src={Rocketcoffee} />
    </section>
  )
}