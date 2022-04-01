import Carousel from '../../../components/Carousel/Carousel'
import GradientTitle from '../../../components/GradientTitle/GradientTitle'
import SideNav from '../../../components/SideNav/Sidenav'
import WhatsNewCard from '../../../components/WhatsNewCard/WhatsNewCard'
import WriteToUS from '../../../components/WriteToUS/WriteToUS'

const fields = ['Scoop', 'Monthly Digest', '/Daily Bytes']

const data = {
  FunSpace: [
    {
      image: '../../../assets/images/image1.png',
    },
    {
      image: '../../../assets/images/image1.png',
    },
    {
      image: '../../../assets/images/image1.png',
    },
  ],
  Scoop: [
    {
      image: '../../../assets/images/Image5.png',
    },
    {
      image: '../../../assets/images/Image5.png',
    },
    {
      image: '../../../assets/images/Image5.png',
    },
  ],
  MonthlyDigest: [
    {
      image: '../../../assets/images/Image6.png',
    },
    {
      image: '../../../assets/images/Image6.png',
    },
    {
      image: '../../../assets/images/Image6.png',
    },
  ],
}
const InternalCommunication = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className={` w-1/5`}>
          <SideNav name="Internal Communications" fields={fields} />
        </div>
        <div className={`w-3/6 `}>
          <div>
            <GradientTitle name="Fun Space" />
            <Carousel noofslides={data.FunSpace.length}>
              {data.FunSpace.map((ele, i) => (
                <img
                  key={i}
                  src={ele.image}
                  className="object-scale-down h-72  my-10"
                />
              ))}
            </Carousel>
          </div>
          <div id="scoop">
            <GradientTitle name="Scoop" />
            <Carousel noofslides={data.FunSpace.length}>
              {data.Scoop.map((ele, i) => (
                <img
                  key={i}
                  src={ele.image}
                  className="object-scale-down h-72 my-10"
                />
              ))}
            </Carousel>
          </div>
          <div id="monthlydigest">
            <GradientTitle name="Monthly Digest" />
            <Carousel noofslides={data.FunSpace.length}>
              {data.MonthlyDigest.map((ele, i) => (
                <img
                  key={i}
                  src={ele.image}
                  className="object-scale-down h-72 my-10"
                />
              ))}
            </Carousel>
          </div>
        </div>
        <div className={`w-1/5 mr-10`}>
          <WhatsNewCard
            image="../../assets/images/l1.png"
            title="Build Application Modernization Practice with AWS (Technical)"
            description="Whatever the agency, organization or institution, our customers want to become Whatever the agency, organization or institution, our customers want to becomeWhatever the agency, organization or institution, our customers want to become"
          />
        </div>
      </div>

      <WriteToUS />
    </div>
  )
}

export default InternalCommunication
