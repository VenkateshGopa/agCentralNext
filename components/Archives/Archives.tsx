import { useState } from 'react'
import classes from './Archives.module.css'

interface Archivestype {
  lastweek: Array<datatype>
  lastmonth: Array<datatype>
}
interface datatype {
  title: string
  description: string
}
const Archives = (props: Archivestype) => {
  const [data, setdata] = useState<Array<datatype>>(props.lastweek)

  const changehandler = (type: string) => {
    const id = Object.keys(props)
    id.map((ele) =>
      ele !== type
        ? (document.getElementById(ele)!.className = `font-bold mr-4`)
        : (document.getElementById(
            ele
          )!.className = `${classes.active} font-bold mr-4`)
    )
    setdata(props[type as keyof Archivestype])
  }
  return (
    <div>
      <p className={`text-center text-lg  pt-7 ${classes.blue}`}>Archives</p>
      <div className="bg-gray-50 p-6  my-5 mx-10">
        <div className="mb-5">
          <button
            className={`font-bold mr-4 ${classes.active}`}
            onClick={() => changehandler('lastweek')}
            id="lastweek"
          >
            Last Week
          </button>
          <button
            className={`font-bold`}
            id="lastmonth"
            onClick={() => changehandler('lastmonth')}
          >
            Last Month
          </button>
        </div>
        {data.map((ele, index) => (
          <div key={index}>
            {index !== 0 && <hr className="border-black my-3" />}
            <p className={`text-sm mb-2 ${classes.blue}`}>{ele.title}</p>
            <p className="text-xs">{ele.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Archives
