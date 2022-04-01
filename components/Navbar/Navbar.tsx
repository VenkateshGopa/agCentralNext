import { useRouter } from 'next/router'
import classes from './Navbar.module.css'

const Navbar = () => {
  const Router = useRouter()

  const routes = ['Bu', 'Policy Documents', 'Current Openings', 'Who’s MAD']
  const classname = (path: string) => {
    return Router.pathname.toLowerCase() == path ||
      Router.pathname.indexOf(path.replace('/', '')) > 0
      ? `${classes.navitem} ${classes.active} mx-4 text-warning  hover:cursor-pointer`
      : `${classes.navitem} mx-4 text-warning  hover:cursor-pointer`
  }

  return (
    <nav
      className={`${classes.nav} flex flex-row items-center justify-between`}
    >
      <div className="flex pl-3 ">
        <p className={classname('/')} onClick={() => Router.push('/')}>
          Home
        </p>
        {routes.map((ele) => (
          <p
            key={ele}
            className={classname(`/${ele.replace(' ', '').toLowerCase()}`)}
            onClick={() =>
              Router.push(`/${ele.replace(' ', '').toLocaleLowerCase()}`)
            }
          >
            {ele}
          </p>
        ))}
      </div>
      <div className="flex items-center">
        <div
          className={`${classes.navcheckinbtn} rounded-full text-white p-2 m-2 `}
        >
          <p className={`${classes.check} m-0 text-center`}>check</p>
          <p className={`${classes.in} m-0 text-center`}>IN</p>
        </div>
        <div>
          <button
            className={`${classes.navbtn} flex bg-gray-300 rounded mx-4 px-3 py-2 `}
          >
            Suggestion Box
            <img
              src="../../assets/images/Group 17.svg"
              className={classes.bellicon}
            />
          </button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
