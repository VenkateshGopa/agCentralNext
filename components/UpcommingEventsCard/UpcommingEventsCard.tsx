import classes from './UpcommingEventsCard.module.css'

interface UpcommingEventsCardtype {
  image: string
  title: string
  date: string
}

const UpcommingEventsCard = (props: UpcommingEventsCardtype) => {
  return (
    <div className="my-3 hover:cursor-pointer hover:shadow-xl">
      <p className={`${classes.blue} text-lg pb-2 font-medium`}>
        Upcomming Events
      </p>
      <img className={classes.img} src={props.image} />
      <div className={`${classes.backgroundbrown} p-2 text-white`}>
        <p className={`${classes.skyblue} text-sm `}>{props.title}</p>
        <p className={`${classes['font-vsm']} m-0 text-white`}>{props.date}</p>
        <div className="flex flex-row justify-between mt-2 items-center">
          <p className={`${classes['font-vsm']} m-0 text-white`}>
            Available Seats
          </p>
          <button className={`${classes.btn} rounded-sm px-3 py-1`}>
            RVSP
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpcommingEventsCard
