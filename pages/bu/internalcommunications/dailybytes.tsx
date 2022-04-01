import Image from 'next/image'
import Archives from '../../../components/Archives/Archives'
import SideNav from '../../../components/SideNav/Sidenav'
import WriteToUS from '../../../components/WriteToUS/WriteToUS'
import styles from './styles.module.css'

const fields = ['Scoop', 'Monthly Digest', '/Daily Bytes']

const Archivesdata = {
  lastweek: [
    {
      title: 'Build Application Modernization Practice with AWS (Technical)',
      description:
        'Whatever the agency, organization or institution, our customers want to become more agile, so they can innovate and respond to change faster.',
    },
    {
      title: 'Build Application Modernization Practice with AWS (Technical)',
      description:
        'Whatever the agency, organization or institution, our customers want to become more agile, so they can innovate and respond to change faster.',
    },
    {
      title: 'Build Application Modernization Practice with AWS (Technical)',
      description:
        'Whatever the agency, organization or institution, our customers want to become more agile, so they can innovate and respond to change faster.',
    },
  ],
  lastmonth: [
    {
      title: 'Build Application Modernization Practice ',
      description:
        'Whatever the agency, organization or institution, our customers want to become more agile, so they can innovate and respond to change faster.',
    },
    {
      title: 'Build Application Modernization Practice ',
      description:
        'Whatever the agency, organization or institution, our customers want to become more agile, so they can innovate and respond to change faster.',
    },
    {
      title: 'Build Application Modernization Practice ',
      description:
        'Whatever the agency, organization or institution, our customers want to become more agile, so they can innovate and respond to change faster.',
    },
  ],
}
const DailyBytes = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className={` w-1/5`}>
          <SideNav name="Internal Communications" fields={fields} />
        </div>

        <div className="w-2/3 ">
          <div className="py-6 px-6 flex align-middle">
            <button className=" flex items-center">
              <Image src="/assets/leftArrow.svg" width={20} height={20} />
            </button>
            <div className={`${styles.textOrange} pl-6 flex align-middle`}>
              Daily Bytes
            </div>
          </div>
          <div className="mx-10 shadow-lg">
            <div className=" p-9">
              <div className={`text-2xl pb-2`}>
                Kudos to the Team for making the Town Hall a Grand Success
              </div>
              <div className="pb-3">
                <button
                  className={`${styles.bgBrown} text-xs text-white flex px-3 justify-center py-1`}
                >
                  Mar 2,2022
                </button>
              </div>
              <div className={` pt-5 `}>
                <p className="pb-2 text-xs">
                  I couldn’t resist writing this email as soon as I watched the
                  townhall recording / streaming video. OMG! how wonderful we
                  have grown. It was a delightful surprise for me to see so many
                  new faces in our company who are sharing the common passion
                  and enthusiasm to be a part of the Agilisium family. I am so
                  very happy that we are growing stronger every day. I remember
                  the day when I joined in 2016when we were a small 75 + company
                  and I always had the belief that we will grow big and strong
                  one day. I joined the townhall meet through teams for the
                  initial 2 hours and had to log out as it was getting late here
                  in the US. I wanted to stay longer and see through the entire
                  session and once I saw the video I realized how much I am
                  missing being part of a wonderful company back in India. The
                  awards / felicitation ceremony were great and a very
                  thoughtful one.
                </p>
                <br />
                <p className="pb-2 text-xs">
                  I realize how much effort has gone behind all of this and
                  kudos to each and every one who made all this possible.
                  The“Real life Hero” felicitation and the speech by the
                  individuals,and the speech by Raj that followed was so
                  inspiring,touching and emotional, that gave me goosebumps.
                </p>
                <br />
                <p className="pb-2 text-xs">
                  Please pass on my appreciation and happiness to all in
                  India.You guys are simply rocking and I am missing all the
                  fun.
                </p>
              </div>
              <div className={`text-lg pt-5`}>
                Girish Ramakrishnan
                <br />
                <p className={`text-xs`}>Associate Director - Delivery (US)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/5">
          <Archives
            lastmonth={Archivesdata.lastmonth}
            lastweek={Archivesdata.lastweek}
          />
        </div>
      </div>
      <WriteToUS />
    </div>
  )
}

export default DailyBytes
