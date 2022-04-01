import classes from './FameCard.module.css'

interface FameCardtype {
  image: string
  name: string
  team: string
  description: string
  title: string
}

const FameCard = (props: FameCardtype) => {
  //  {/* {Array(10)
  //             .fill(' ')
  //             .map((i) => ()))}
  return (
    <div className="flex justify-around items-center">
      <div className="flex justify-center items-center flex-col w-3/12">
        <img src={props.image} className="w-4/5" />
        <p className={`${classes.blue} mt-6 mb-1 text-xl`}>{props.name}</p>
        <p className={`${classes.blue} text-xl`}> {props.team} </p>
      </div>

      <div className="w-7/12">
        <p className={`${classes.title} text-4xl pb-3 text-left`}>
          {props.title}
        </p>
        <p className="text-sm text-left">{props.description}</p>
      </div>
    </div>
  )
}

export default FameCard
