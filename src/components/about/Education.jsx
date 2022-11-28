import React from 'react'
import "./education.css"
function Education() {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>Degree</th>
                <th>Department</th>
                <th>Institute</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Bachelor of Technology</td>
            <td>Computer Science</td>
            <td>NIT Kurukshetra</td>
            <td>2018-2022</td></tr>

           <tr>
           <td>12th</td>
            <td>Science</td>
            <td>Capital College and Research Center</td>
            <td>2015-2017</td>
           </tr>

           <tr>
           <td>10th</td>
            <td>General</td>
            <td>Laligurans Batika School</td>
            <td>2015</td>
           </tr>
        </tbody>
    </table>
  )
}

export default Education