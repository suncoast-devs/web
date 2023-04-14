import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import cx from 'classnames'

const ProgramSchedule = () => (
  <>
    <h3 className="title is-3">Program Schedule</h3>
    <div className="table-container">
      <table className="table is-fullwidth program-schedule">
        <thead>
          <tr>
            <th>Cohort</th>
            <th>Status</th>
            <th>Classes Start</th>
            <th>Expected Graduation</th>
            <th>Format</th>
            <th>Daily Schedule</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td colSpan={6}>There are currently no cohorts scheduled.</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)

export default ProgramSchedule
