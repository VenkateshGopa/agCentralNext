import classes from './EntertainmentCard.module.css'

interface EntertainmentCardtype {
  name: string
  image: string
  desgination: string
}
const EntertainmentCard = (props: EntertainmentCardtype) => {
  return (
    <div className="my-3 hover:cursor-pointer hover:shadow-xl ">
      <p className={`${classes.blue} text-lg pb-2 font-medium`}>
        Entertainment Daily
      </p>
      <img className={`${classes.img}`} src={props.image} />
      <div className={`${classes.backgroundbrown} p-2 text-white`}>
        <p className="text-sm m-0"> {props.name}</p>
        <p className="text-sm m-0">{props.desgination}</p>
      </div>
    </div>
  )
}
export default EntertainmentCard
