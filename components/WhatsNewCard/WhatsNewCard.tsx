import classes from './WhatsNewCard.module.css'

interface WhatsNewCardtype {
  title: string
  image: string
  description: string
}

const WhatsNewCard = (props: WhatsNewCardtype) => {
  return (
    <div className="my-3 hover:cursor-pointer hover:shadow-xl">
      <p className={`${classes.blue} text-lg pb-2 font-medium`}>What’s New</p>
      <img className={`${classes.img}`} src={props.image} />
      <div className={`${classes.backgroundash} ${classes.smallfont} p-2`}>
        <p className={` ${classes.blue}`}>{props.title}</p>
        <p className={` my-2`}>{props.description.substring(0, 100)}</p>
      </div>
    </div>
  )
}
export default WhatsNewCard
