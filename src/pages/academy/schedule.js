import React from 'react'
import Tab from '../../components/Tab'
import AcademyNavigation from '../../components/AcademyNavigation'
import PageHeading from '../../components/PageHeading'

const AcademyPage = () => (
  <div className="AcademyPage">
    <AcademyNavigation />
    <div className="wrap">
      <PageHeading>Web Development Program</PageHeading>
      <ul className="tabs">
        <Tab to="/academy">Our Curriculum</Tab>
        <Tab to="/academy/catalog">Program Catalog</Tab>
        <Tab to="/academy/schedule">Daily Schedule</Tab>
        <Tab to="/academy/career">Career Services</Tab>
      </ul>

      <h3>Daily Schedule</h3>

      <table className="daily-schedule">
        <thead>
          <tr>
            <td />
            <th>Monday–Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>09:00&nbsp;AM</th>
            <td>Instructor’s Hour / Warmup Lab</td>
            <td>Career Support Lab</td>
          </tr>
          <tr>
            <th>10:00&nbsp;AM</th>
            <td rowSpan="2">Classroom</td>
            <td>Career Support Lecture</td>
          </tr>
          <tr>
            <th>11:00&nbsp;AM</th>
            <td>Weekly Review (or extended Career Support)</td>
          </tr>
          <tr>
            <th>12:00&nbsp;PM</th>
            <td colSpan="2">Lunch</td>
          </tr>
          <tr>
            <th>01:00&nbsp;PM</th>
            <td colSpan="2">Lab</td>
          </tr>
          <tr>
            <th>02:00&nbsp;PM</th>
            <td>Classroom: “Review at Two”</td>
            <td>Huddles</td>
          </tr>
          <tr>
            <th>03:00&nbsp;PM</th>
            <td rowSpan="2">Lab</td>
            <td rowSpan="3">End of Day / Optional Social Time</td>
          </tr>
          <tr>
            <th>04:00&nbsp;PM</th>
          </tr>
          <tr>
            <th>05:00&nbsp;PM</th>
            <td>End of Day</td>
          </tr>
        </tbody>
      </table>

      <p>
        The day begins at 9am. This time is used by instructors for reviewing
        the previous night’s assignments and planning the day’s lecture and
        activities accordingly. Students use this first hour to do warmup
        exercises and review daily content. At least one Instructor will be
        available for answering questions and guiding students through the
        optional warmups.
      </p>
      <p>
        The day for students really gets going at 10am with two hours of class
        time (lecture, activities, etc.). After lunch is an hour of lab time
        where students will begin work on the day’s assignment. At 2pm class
        will reconvene for an hour to reinforce the days concepts and answer
        questions that may arise while working on the assignment. Following the
        review, lab hours continue for the rest of the afternoon.
      </p>
      <p>
        Fridays class hour content will be different the rest of the week (e.g.
        Career Support, guest speakers). Fridays end early with optional
        off-campus social time.
      </p>
    </div>
  </div>
)

export default AcademyPage
