import classes from './WriteToUS.module.css'

const WriteToUS = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="../../assets/images/Image 7.png"
          className={`${classes.img}`}
        />
        <div className="flex flex-col items-start absolute top-20 left-1/2 w-2/5">
          <p className={`text-4xl ${classes.orange}`}>Write To Us</p>
          <p className=" py-5">Do you have anything in mind to share with us</p>
          <textarea
            className="w-full h-44 border-2 border-gray-200"
            placeholder="Type your ideas/suggestions here"
          />
          <button
            className={`border-0  px-3 rounded text-white mt-4 ${classes.backgroundorange}`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default WriteToUS
