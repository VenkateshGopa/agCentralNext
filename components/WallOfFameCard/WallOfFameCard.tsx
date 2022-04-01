import classes from './WallOfFameCard.module.css'
import FameCard from '../FameCard/FameCard'
import Carousel from '../Carousel/Carousel'

const famedata = [
  {
    image: '../assets/images/annimg.png',
    name: 'Surya SivaKumar',
    team: 'UMG',
    description:
      ' raesent at dui tincidunt, accumsan purus et, auctor lorem. Namvehicula lorem nec mauris commodo auctor. Vestibulum tellus arcu, porta at hendrerit vitae, pharetra ac libero. Vivamus hendrerit misem, vel maximus lorem accumsan at. Nam diam orci, luctus vel erateuismod, luctus venenatis justo. Nulla lacinia dui ut tortor maximusimperdiet. Mauris vel nulla vitae metus porta condimentum eget necdui. Quisque nisl odio, pretium a tincidunt nec, ullamcorper quis est. Fusce quis metus a tortor dapibus commodo. Maecenas mattis lorem elementum commodo. Vestibulum purus nibh, lacinia maximus ante non, viverra posuere enim. Proin ultrices imperdiet ex, ac tincidunt Leoposuere eu. Nunc sollicitudin ligula id ligula laoreet consequat. Fusce vulputate vulputate diam suscipit suscipit. Mauris et justoelit. Vivamus sem elit, dignissim ac aliquam consequat, egestas quismi. Interdum et malesuada fames ac ante ipsum primis in faucibus.Morbi nec eros vitae lectus vestibulum blandit sed non risus.',
    title: 'Go-Getter Award',
  },
  {
    image: '../assets/images/annimg.png',
    name: 'Surya SivaKumar',
    team: 'UMG',
    description:
      ' raesent at dui tincidunt, accumsan purus et, auctor lorem. Namvehicula lorem nec mauris commodo auctor. Vestibulum tellus arcu, porta at hendrerit vitae, pharetra ac libero. Vivamus hendrerit misem, vel maximus lorem accumsan at. Nam diam orci, luctus vel erateuismod, luctus venenatis justo. Nulla lacinia dui ut tortor maximusimperdiet. Mauris vel nulla vitae metus porta condimentum eget necdui. Quisque nisl odio, pretium a tincidunt nec, ullamcorper quis est. Fusce quis metus a tortor dapibus commodo. Maecenas mattis lorem elementum commodo. Vestibulum purus nibh, lacinia maximus ante non, viverra posuere enim. Proin ultrices imperdiet ex, ac tincidunt Leoposuere eu. Nunc sollicitudin ligula id ligula laoreet consequat. Fusce vulputate vulputate diam suscipit suscipit. Mauris et justoelit. Vivamus sem elit, dignissim ac aliquam consequat, egestas quismi. Interdum et malesuada fames ac ante ipsum primis in faucibus.Morbi nec eros vitae lectus vestibulum blandit sed non risus.',
    title: 'Go-Getter Award',
  },
  {
    image: '../assets/images/annimg.png',
    name: 'Surya SivaKumar',
    team: 'UMG',
    description:
      ' raesent at dui tincidunt, accumsan purus et, auctor lorem. Namvehicula lorem nec mauris commodo auctor. Vestibulum tellus arcu, porta at hendrerit vitae, pharetra ac libero. Vivamus hendrerit misem, vel maximus lorem accumsan at. Nam diam orci, luctus vel erateuismod, luctus venenatis justo. Nulla lacinia dui ut tortor maximusimperdiet. Mauris vel nulla vitae metus porta condimentum eget necdui. Quisque nisl odio, pretium a tincidunt nec, ullamcorper quis est. Fusce quis metus a tortor dapibus commodo. Maecenas mattis lorem elementum commodo. Vestibulum purus nibh, lacinia maximus ante non, viverra posuere enim. Proin ultrices imperdiet ex, ac tincidunt Leoposuere eu. Nunc sollicitudin ligula id ligula laoreet consequat. Fusce vulputate vulputate diam suscipit suscipit. Mauris et justoelit. Vivamus sem elit, dignissim ac aliquam consequat, egestas quismi. Interdum et malesuada fames ac ante ipsum primis in faucibus.Morbi nec eros vitae lectus vestibulum blandit sed non risus.',
    title: 'Go-Getter Award',
  },
  {
    image: '../assets/images/annimg.png',
    name: 'Surya SivaKumar',
    team: 'UMG',
    description:
      ' raesent at dui tincidunt, accumsan purus et, auctor lorem. Namvehicula lorem nec mauris commodo auctor. Vestibulum tellus arcu, porta at hendrerit vitae, pharetra ac libero. Vivamus hendrerit misem, vel maximus lorem accumsan at. Nam diam orci, luctus vel erateuismod, luctus venenatis justo. Nulla lacinia dui ut tortor maximusimperdiet. Mauris vel nulla vitae metus porta condimentum eget necdui. Quisque nisl odio, pretium a tincidunt nec, ullamcorper quis est. Fusce quis metus a tortor dapibus commodo. Maecenas mattis lorem elementum commodo. Vestibulum purus nibh, lacinia maximus ante non, viverra posuere enim. Proin ultrices imperdiet ex, ac tincidunt Leoposuere eu. Nunc sollicitudin ligula id ligula laoreet consequat. Fusce vulputate vulputate diam suscipit suscipit. Mauris et justoelit. Vivamus sem elit, dignissim ac aliquam consequat, egestas quismi. Interdum et malesuada fames ac ante ipsum primis in faucibus.Morbi nec eros vitae lectus vestibulum blandit sed non risus.',
    title: 'Go-Getter Award',
  },
]
const WallOfFameCard = () => {
  return (
    <div className="mt-9 mb-28">
      <p className={`${classes.blue} text-3xl text-center pb-3 `}>
        Wall Of Fame
      </p>
      <div className="w-5/6 mx-auto relative flex flex-col shadow-2xl rounded-lg ">
        <p className=" absolute top-0 left-36 bg-blue-400 p-2 text-white ">
          March 2022
        </p>
        <div className="flex p-5 mt-9 self-center">
          <p className={`${classes.active} mx-5`}>Go-Getter</p>
          <p className=" mx-5">Monthly Shining Star</p>
          <p className=" mx-5">Tanzanites</p>
          <p className=" mx-5">Alexandrites</p>
          <p className=" mx-5">Jaedites</p>
        </div>
        <Carousel noofslides={famedata.length}>
          {famedata.map((ele, index) => (
            <FameCard
              key={index}
              name={ele.name}
              title={ele.title}
              description={ele.description}
              team={ele.team}
              image={ele.image}
            />
          ))}
        </Carousel>
        <p className={`text-right p-8 ${classes.blue}`}>View All Archives</p>
      </div>
    </div>
  )
}

export default WallOfFameCard
