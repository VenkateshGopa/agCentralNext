import classes from '../../styles/Bu.module.css'
import { useRouter } from 'next/router'

const Bu = () => {
  const Router = useRouter()
  const data = [
    { name: 'HRA', image: 'assets/images/Group 8.svg' },
    { name: 'Internal Communications', image: 'assets/images/Group 6.svg' },
    { name: 'Marketing', image: 'assets/images/Group 4.svg' },
  ]
  return (
    <div>
      <div className="flex p-12">
        {data.map((ele) => (
          <div
            className={`${classes.bluegradient} flex items-center justify-center p-3 flex-col rounded-lg mx-4 w-36 h-48 `}
            key={ele.name}
            onClick={() =>
              Router.push(
                `${Router.pathname}/${ele.name
                  .replace(' ', '')
                  .toLocaleLowerCase()}`
              )
            }
          >
            <div className="h-3/5 flex items-center">
              <img className="w-16 h-16 text-sm " src={ele.image} />
            </div>
            <p className="text-center">{ele.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bu
