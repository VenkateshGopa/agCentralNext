import classes from './SideNav.module.css'

interface SideNavtype {
  name: string
  fields: Array<string>
}
const SideNav = (props: SideNavtype) => {
  return (
    <div className={`${classes.bluegradient} h-screen `}>
      <div className="w-5 h-5 ml-24">
        <div className={classes.triangle}></div>
      </div>
      <p className={`${classes.blue} text-center text-lg pb-4 pt-2`}>
        {props.name}
      </p>
      <hr className="border-white pb-3" />
      {props.fields.map((ele) => (
        <a
          key={ele}
          className="pl-6 py-3 text-sm block"
          href={
            ele.indexOf('/') > -1
              ? `/bu/internalcommunications/${ele
                  .replace('/', '')
                  .replace(' ', '')
                  .toLowerCase()}`
              : `/bu/internalcommunications/#${ele
                  .replace(' ', '')
                  .toLowerCase()}`
          }
        >
          {ele.replace('/', '')}
        </a>
      ))}
    </div>
  )
}
export default SideNav
