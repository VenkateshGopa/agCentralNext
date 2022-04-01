import classes from './Events.module.css'
import EventCard from '../EventCard/EventCard'
import { useState } from 'react'

interface event {
  image: string
  desgination: string
  name: string
  likes: number
}

interface Eventtype {
  birthday: Array<event>
  WorkAnniversary: Array<event>
  NewJoiners: Array<event>
  NewBorn: Array<event>
}

const Events = (props: Eventtype) => {
  const [data, setdata] = useState<Array<event>>(props.birthday)

  const changedata = (name: string) => {
    const id = Object.keys(props)
    // const id = ['birthday', 'WorkAnniversary', 'NewJoiners', 'NewBorn']
    id.map(
      (ele) =>
        (document.getElementById(
          ele
        )!.className = `whitespace-nowrap text-sm mr-4 `)
    )
    document.getElementById(
      name
    )!.className = `${classes.active} whitespace-nowrap text-sm mr-4 `
    setdata(props[name as keyof Eventtype])
  }

  return (
    <div className="p-6 rounded bg-gray-100 ">
      <div className="flex flex-row overflow-auto">
        <button
          className={`${classes.active} whitespace-nowrap text-sm mr-4 `}
          id="birthday"
          onClick={() => changedata('birthday')}
        >
          Birthday
        </button>
        <button
          className="whitespace-nowrap text-sm mr-4 "
          id="WorkAnniversary"
          onClick={() => changedata('WorkAnniversary')}
        >
          Work Anniversary
        </button>
        <button
          className="whitespace-nowrap text-sm mr-4 "
          id="NewJoiners"
          onClick={() => changedata('NewJoiners')}
        >
          New Joiners
        </button>
        <button
          className="whitespace-nowrap text-sm mr-4 "
          id="NewBorn"
          onClick={() => changedata('NewBorn')}
        >
          New Born
        </button>
      </div>
      <div className="flex mt-6 overflow-auto">
        {data.map((ele, index) => (
          <EventCard
            key={index}
            image={ele.image}
            desgination={ele.desgination}
            name={ele.name}
            likes={ele.likes}
          />
        ))}

        {/* <EventCard
          image="assets/images/l2.png"
          desgination="Analyst - Software Engineer"
          name="Santhiya Viswanathan"
          likes={12}
        /> */}
      </div>
    </div>
  )
}

export default Events
