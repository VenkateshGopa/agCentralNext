import classes from './EventCard.module.css'

interface EventCardtype {
  name: string
  desgination: string
  image: string
  likes: number | string
}

const EventCard = (props: EventCardtype) => {
  return (
    <div className="flex items-center flex-col mx-3 mb-2">
      <img className="w-28 h-28" src={props.image} />
      <div className="w-44 p-2 bg-white flex flex-col justify-between items-center rounded-md shadow-lg ">
        <p className={`${classes['f-12']} m-0 mb-1`}>{props.name} </p>
        <p className={`${classes['f-10']} m-0 mb-1 text-gray-400`}>
          {props.desgination}
        </p>
        <div>
          <i
            className={`${classes['f-12']} fa-regular fa-heart text-gray-500 mr-3`}
          >
            {props.likes}
          </i>
          <i
            className={`${classes['f-12']} far fa-comment-alt text-gray-500 `}
          ></i>
        </div>
      </div>
    </div>
  )
}

export default EventCard
