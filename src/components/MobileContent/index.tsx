import './style.css'
import '../Nav/style.css'
import Arrow from '../../img/arrow.svg'
import Button from '../../components/Button'



export default function MobileContent() {
  return (
    <section className="mobileSection">
      <p className="mobileText">O café que fará seu código decolar para o próximo nível.
      </p>
      <Button className="mobileButton">Pegar meu café </Button>
    </section>
  )
}