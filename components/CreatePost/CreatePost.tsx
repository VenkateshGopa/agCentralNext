import classes from './CreatePost.module.css'

const CreatePost = () => {
  return (
    <div className="p-3 bg-white rounded">
      <div className={`pb-1 flex items-center ${classes.feedinput}`}>
        <img className=" mr-2" src="assets/images/l2.png" />
        <input
          className="w-full"
          type="text"
          placeholder="Share thoughts, ideas, or updates"
        />
      </div>
      <hr className="m-0" />
      <div className={`flex pt-2 ${classes.buttons}`}>
        <button className="bg-gray-100 px-2 py-1 mx-1 rounded">
          <img src="//outlook-1.cdn.office.net/yammer/20220315001.3093956/images/Discussion-1d465a271c5923cffdbeed6c5d220058.svg" />
          Discussion
        </button>
        <button className=" mx-2 rounded px-2 py-1 ">
          <img src="//outlook-1.cdn.office.net/yammer/20220315001.3093956/images/Question-a50d2ac128852243612198a48721814f.svg" />
          Question
        </button>
        <button className=" mx-2 rounded px-2 py-1 ">
          <img src="//outlook-1.cdn.office.net/yammer/20220315001.3093956/images/Praise-df4e83c30b8406fc970964e92af1f213.svg" />
          Praise
        </button>
        <button className=" mx-2 rounded px-2 py-1 ">
          <img src="//outlook-1.cdn.office.net/yammer/20220315001.3093956/images/Poll-f3d62d62327271cf28887501cb5ed09d.svg" />
          Poll
        </button>
      </div>
    </div>
  )
}

export default CreatePost
