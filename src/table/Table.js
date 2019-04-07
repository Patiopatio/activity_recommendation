import React, {Component} from 'react'

class Table extends Component {

  list = [['0:00 - 0:30', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Moving - social', 'Series / Docu'],
         ['0:30 - 1:00', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['1:00 - 1:30', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['1:30 - 2:00', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['2:00 - 2:30', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['2:30 - 3:00', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['3:00 - 3:30', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['3:30 - 4:00', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['4:00 - 4:30', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['4:30 - 5:00', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['5:00 - 5:30', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['5:30 - 6:00', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['6:00 - 6:30', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['6:30 - 7:00', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['7:00 - 7:30', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['7:30 - 8:00', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['8:00 - 8:30', 'Sleep', 'Food', 'Sleep', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['8:30 - 9:00', 'Sleep', 'Clean', 'Food', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['9:00 - 9:30', 'Clean', 'Clean', 'Clean', 'Sleep', 'Sleep',
          'Sleep', 'Sleep'],
         ['9:30 - 10:00', 'Wasted - Moving', 'Work - Meeting',
          'Moving - learn', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
         ['10:00 - 10:30', 'Work - Meeting', 'Work - Meeting',
          'University - Purpose', 'Sleep', 'Sleep', 'Sleep', 'Sleep'],
         ['10:30 - 11:00', 'Work - Meeting', 'Work - Purpose',
          'University - Purpose', 'Food', 'Food', 'Sleep', 'Sleep'],
         ['11:00 - 11:30', 'Work - Meeting', 'Work - Purpose',
          'University - Purpose', 'Food', 'Sleep', 'Sleep', 'Sleep'],
         ['11:30 - 12:00', 'Work - Meeting', 'Work - Purpose',
          'University - Purpose', 'Analyzing', 'Food', 'Sleep', 'Sleep'],
         ['12:00 - 12:30', 'Work - Meeting', 'Work - Purpose',
          'University - Purpose', 'Learning - university', 'Food', 'Food',
          'Sleep'],
         ['12:30 - 13:00', 'Work - Purpose', 'Work - Social',
          'University - Purpose', 'Learning - university',
          'Purpose - Learning', 'Food', 'Food'],
         ['13:00 - 13:30', 'Work - Purpose', 'Work - Social',
          'University - Purpose', 'Food', 'University - Purpose', 'Food',
          'Food'],
         ['13:30 - 14:00', 'Work - Purpose', 'Work - Purpose',
          'University - Purpose', 'Food', 'University - Purpose', 'Clean',
          'Walking '],
         ['14:00 - 14:30', 'Work - Purpose', 'Work - Purpose', 'Bike',
          'Food', 'University - Purpose', 'Purpose - Learning', 'Food'],
         ['14:30 - 15:00', 'Work - Purpose', 'Work - Purpose',
          'Work - Social', 'Moving - social', 'University - Purpose',
          'Learning - university', 'Food'],
         ['15:00 - 15:30', 'Work - Purpose', 'Work - Purpose', 'Trello',
          'Purpose - Learning', 'Purpose - Learning', 'Purpose - Learning',
          'Moving - social'],
         ['15:30 - 16:00', 'Work - Purpose', 'Work - Purpose',
          'Work - Purpose', 'Purpose - Learning', 'Purpose - Learning',
          'Learning - university', 'Learning - university'],
         ['16:00 - 16:30', 'Work - Purpose', 'Work - Purpose',
          'Work - Purpose', 'University - Purpose', 'Series / Docu',
          'Learning - university', 'Social - girl'],
         ['16:30 - 17:00', 'Work - Purpose', 'Work - Purpose',
          'Work - Purpose', 'Purpose - Creation', 'Learning - university',
          'Walking ', 'Social - girl'],
         ['17:00 - 17:30', 'Work - Purpose', 'Work - Purpose',
          'Work - Purpose', 'Purpose - Creation', 'Purpose - Learning',
          'Moving - Social Media', 'Social - girl'],
         ['17:30 - 18:00', 'Work - Purpose', 'Helpful Future',
          'Work - Purpose', 'Purpose - Learning', 'Food',
          'moving  - groceries', 'Social - girl'],
         ['18:00 - 18:30', 'Moving - learn', 'Helpful Future',
          'Work - Purpose', 'Moving - learn', 'Food', 'Moving - social',
          'Moving - social'],
         ['18:30 - 19:00', 'Wasted - Moving', 'Purpose - Teach',
          'Wasted - Moving', 'Moving - learn', 'Moving - social',
          'Food - shit', 'Analyzing'],
         ['19:00 - 19:30', 'Food', 'Purpose - Teach', 'Food', 'Food',
          'Moving - social', 'Food', 'Moving - social'],
         ['19:30 - 20:00', 'Food', 'Purpose - Teach', 'Food', 'Food',
          'Moving - social', 'Food', 'Trello'],
         ['20:00 - 20:30', 'Food', 'Series / Docu', 'Series / Docu',
          'Food', 'Moving - social', 'Learning - university',
          'Moving - social'],
         ['20:30 - 21:00', 'Food', 'Purpose - Teach', 'Series / Docu',
          'Purpose - Transpose Knowledge', 'Moving - social',
          'Learning - university', 'Trello'],
         ['21:00 - 21:30', 'Helpful Future', 'Learning - university',
          'Series / Docu', 'Food', 'Moving - social', 'Moving - social',
          'Series / Docu'],
         ['21:30 - 22:00', 'Youtube', 'Social - girl',
          'Learning - university', 'Social - girl', 'Moving - social',
          'Celebration - Bar ', 'Series / Docu'],
         ['22:00 - 22:30', 'Youtube', 'Food', 'Learning - university',
          'Social - girl', 'Moving - social', 'Social - Real Life',
          'Series / Docu'],
         ['22:30 - 23:00', 'Sleep', 'Sleep', 'Series / Docu',
          'Social - girl', 'Food', 'Celebration - Bar ', 'Series / Docu'],
         ['23:00 - 23:30', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Food',
          'Social - Real Life', 'Social - Real Life'],
         ['23:30 - 24:00', 'Sleep', 'Sleep', 'Sleep', 'Sleep', 'Food',
          'Sleep', 'Food - shit']];




  render () {


    return (
      <table class='table table-sm table-responsive table-bordered  header-fixed' id='weekActivitiesTable'>
        <thead class='thead-dark'>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>

          { this.list.map((col, idx) => {
            return <tr>
              {
                col.map((cell,idx) => {
                  return <td>{cell}</td>
                })
              }
            </tr>;
          }) }

        // loop for every activity
        </tbody>


      </table>
    )
  }
}

export default Table
