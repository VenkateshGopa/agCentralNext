import type { NextPage } from 'next'
import WhatsNewCard from '../components/WhatsNewCard/WhatsNewCard'
import EntertainmentCard from '../components/EntertainmentCard/EntertainmentCard'
import React from 'react'
import UpcommingEventsCard from '../components/UpcommingEventsCard/UpcommingEventsCard'
import Post from '../components/Post/Post'
import Events from '../components/Events/Events'
import WallOfFameCard from '../components/WallOfFameCard/WallOfFameCard'
import TableComponent from '../components/TableComponent/TableComponent'
import classes from '../styles/Home.module.css'
import CreatePost from '../components/CreatePost/CreatePost'

const tabledata = [
  {
    ticketfrom: 'Bin',
    ticketto: 'Allen',
    createdon: 'Mar 21,22',
    description: 'Clent Engagement Meeting',
    priority: 'High',
  },
  {
    ticketfrom: 'Allen',
    ticketto: 'Bin',
    createdon: 'Mar 6,22',
    description: 'Webinar Discussion',
    priority: 'Medium',
  },
  {
    ticketfrom: 'Arun',
    ticketto: 'Allen',
    createdon: 'Mar 21,22',
    description: 'Sales Enablement',
    priority: 'High',
  },
  {
    ticketfrom: 'Ming',
    ticketto: 'John',
    createdon: 'Mar 21,22',
    description: 'Webapps Discussion',
    priority: 'High',
  },
  {
    ticketfrom: 'John',
    ticketto: 'John',
    createdon: 'Mar 21,22',
    description: 'BA Discussion',
    priority: 'Low',
  },
]

const data = {
  birthday: [
    {
      image: 'assets/images/l2.png',
      desgination: 'Analyst - Software Engineer',
      name: 'Santhiya Viswanathan',
      likes: 12,
    },
    {
      image: 'assets/images/l2.png',
      desgination: 'Analyst - Software Engineer',
      name: 'Santhiya Viswanathan',
      likes: 12,
    },
  ],

  WorkAnniversary: [
    {
      image: 'assets/images/l1.png',
      desgination: 'Analyst - Software Engineer',
      name: 'Santhiya Viswanathan',
      likes: 12,
    },
    {
      image: 'assets/images/l1.png',
      desgination: 'Analyst - Software Engineer',
      name: 'Santhiya Viswanathan',
      likes: 12,
    },
    {
      image: 'assets/images/l1.png',
      desgination: 'Analyst - Software Engineer',
      name: 'Santhiya Viswanathan',
      likes: 12,
    },
    {
      image: 'assets/images/l1.png',
      desgination: 'Analyst - Software Engineer',
      name: 'Santhiya Viswanathan',
      likes: 12,
    },
    {
      image: 'assets/images/l1.png',
      desgination: 'Analyst - Software Engineer',
      name: 'Santhiya Viswanathan',
      likes: 12,
    },
    {
      image: 'assets/images/l1.png',
      desgination: 'Analyst - Software Engineer',
      name: 'Santhiya Viswanathan',
      likes: 12,
    },
  ],

  NewJoiners: [
    {
      image: 'assets/images/r1.png',
      desgination: 'Analyst - Software Engineer',
      name: 'Santhiya Viswanathan',
      likes: 12,
    },
    {
      image: 'assets/images/r1.png',
      desgination: 'Analyst - Software Engineer',
      name: 'Santhiya Viswanathan',
      likes: 12,
    },
  ],

  NewBorn: [
    {
      image: 'assets/images/logo.png',
      desgination: 'Analyst - Software Engineer',
      name: 'Santhiya Viswanathan',
      likes: 12,
    },
  ],
}

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex ">
        <div className={classes['w-20']}>
          <div className=" pl-9 mr-4">
            <WhatsNewCard
              image="assets/images/l1.png"
              title="Build Application Modernization Practice with AWS (Technical)"
              description="Whatever the agency, organization or institution, our customers want to become Whatever the agency, organization or institution, our customers want to becomeWhatever the agency, organization or institution, our customers want to become"
            />
            <EntertainmentCard
              name="Parthiban Ramakrishnan"
              image="assets/images/l2.png"
              desgination="Analyst - Software Engineer"
            />
            <UpcommingEventsCard
              image="assets/images/r1.png"
              title="Aws Certification Guidance"
              date="Mar 23 | 2022"
            />
          </div>
        </div>

        <div className={classes['w-45']}>
          <div className=" bg-gray-100 p-6 m-4">
            <p className={` pb-3 ${classes.feedHeading}`}>Yammer feed</p>
            <CreatePost />
            <Post
              postgroup="photography Communtity"
              posteduserimage="assets/images/l1.png"
              postedusername="Parthiban Ramakrishnan"
              postdate="Feb 28"
              views={178}
              description="Every Sunrise is an invitation for us to arise and brighten someone's day - Jhiess Krieg"
              postimage="assets/images/pimg.jpeg"
            />
          </div>
        </div>

        <div className={classes['w-35']}>
          <div className=" m-4">
            <Events
              birthday={data.birthday}
              NewBorn={data.NewBorn}
              NewJoiners={data.NewJoiners}
              WorkAnniversary={data.WorkAnniversary}
            />
            <TableComponent data={tabledata} />
          </div>
        </div>
      </div>
      <WallOfFameCard />
    </div>
  )
}

export default Home
