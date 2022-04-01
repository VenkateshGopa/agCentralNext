import classes from './GradientTitle.module.css'

interface GradientTitletype {
  name: string
}
const GradientTitle = (props: GradientTitletype) => {
  return (
    <p className={`${classes.gradient} mt-10`} id={props.name}>
      {props.name}
    </p>
  )
}

export default GradientTitle
