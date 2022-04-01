import classes from './Post.module.css'

interface PostType {
  postgroup: string
  posteduserimage: string
  postedusername: string
  postdate: string
  views: number | string
  description: string
  postimage: string
}

const Post = (props: PostType) => {
  return (
    <div className="p-4 bg-white mt-3 rounded hover:shadow-xl">
      <p className={classes.fvsmall}>
        Posted in
        <span className="font-semibold pl-1">{props.postgroup}</span>
      </p>

      <div className="flex justify-between items-center my-3">
        <div className="flex items-center">
          <img className="w-7 h-7 rounded-full" src={props.posteduserimage} />
          <div className="ml-2">
            <p className="text-sm m-0 font-semibold">{props.postedusername}</p>
            <p className={`${classes.fvsmall} m-0 `}>{props.postdate}</p>
          </div>
        </div>

        <div className="flex items-center">
          <p className={`${classes.fvsmall} m-0 text-gray-500 mr-4`}>
            Seen by {props.views}
          </p>
          <p className="rotate-90 m-0 ">...</p>
        </div>
      </div>

      <div className="mt-2">
        <p className="mb-2">{props.description}</p>
        <img className="Postimg" src={props.postimage} />
      </div>

      {/* <div className="d-flex mt-4">
            <div className="bell">
            <p className="m-0 mr-3 ml-2 medfont px-2 hover" onMouseOver="display()" > <i className="fa fa-thumbs-o-up lcsicon" aria-hidden="true"></i> Like </p>
              <div className="absolute d-flex justify-content-center align-items-center p-2" id="emoji"> 
                <p className="emoji" onClick="hide()" >&#128514;</p>
                <p className="emoji" onClick="hide()" >&#128525;</p>
                <p className="emoji" onClick="hide()" >&#128536;</p>
                <p className="emoji" onClick="hide()" >&#128557;</p>
                <p className="emoji" onClick="hide()" >&#128563;</p>
              </div>
            </div>
            <p className="m-0 mr-3 medfont hover px-2 "> <i className='far fa-comment-alt lcsicon'></i> Comment </p>
            <p className="m-0 mr-3 medfont hover px-2 "> <i className="fa fa-share-square-o lcsicon" aria-hidden="true"></i> Share</p>
          </div>  */}
    </div>
  )
}

export default Post
