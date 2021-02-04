var DtModuleCourses = (function () {
  'use strict';

  var DOM = {};

  

  var dataSet = {
    'data': [
      {
        'course_name': 'English Language Arts 1',
        'school_name': 'Bridgeway',
        'teacher': 'Cortney Bowen',
        'teacher_assistant': 'Stehanie Mills',
        'grade_level': 'MS',
        'start_date': '04/01/2021',
        'end_date': '04/01/2021',
        'section_name': 'CH-Language Arts 8008',
        'day': 'Wednesday',
        'time': '1:15 PM - 2:15 PM',
        'section_id': 'LLS55803MEET-2021-1',
        'status_enrolled': 'active',
        'avail_seats': 69,
        'total_seats': 69,
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 1',
        'school_name': 'Bridgeway',
        'teacher': 'Angela Schmoyer',
        'teacher_assistant': 'Stehanie Mills',
        'grade_level': 'MS',
        'start_date': '04/01/2021',
        'end_date': '04/01/2021',
        'section_name': 'CH-Language Arts 8008',
        'day': 'Wednesday',
        'time': '1:15 PM - 2:15 PM',
        'section_id': 'LLS55803MEET-2021-1',
        'status_enrolled': 'active',
        'avail_seats': 69,
        'total_seats': 69,
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 1',
        'school_name': 'Bridgeway',
        'teacher': 'Kristy Rhoads',
        'teacher_assistant': 'Stehanie Mills',
        'grade_level': 'MS',
        'start_date': '04/01/2021',
        'end_date': '04/01/2021',
        'section_name': 'CH-Language Arts 8008',
        'day': 'Wednesday',
        'time': '1:15 PM - 2:15 PM',
        'section_id': 'LLS55803MEET-2021-1',
        'status_enrolled': 'active',
        'avail_seats': 69,
        'total_seats': 69,
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 1',
        'school_name': 'Bridgeway',
        'teacher': 'Jaime Goulet',
        'teacher_assistant': 'Stehanie Mills',
        'grade_level': 'MS',
        'start_date': '04/01/2021',
        'end_date': '04/01/2021',
        'section_name': 'CH-Language Arts 8008',
        'day': 'Wednesday',
        'time': '1:15 PM - 2:15 PM',
        'section_id': 'LLS55803MEET-2021-1',
        'status_enrolled': 'active',
        'avail_seats': 69,
        'total_seats': 69,
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 1',
        'school_name': 'Bridgeway',
        'teacher': 'Cortney Bowen',
        'teacher_assistant': 'Ashely Rose',
        'grade_level': 'MS',
        'start_date': '04/01/2021',
        'end_date': '04/01/2021',
        'section_name': 'CH-Language Arts 8008',
        'day': 'Wednesday',
        'time': '1:15 PM - 2:15 PM',
        'section_id': 'LLS55803MEET-2021-1',
        'status_enrolled': 'active',
        'avail_seats': 69,
        'total_seats': 69,
        'zoom_id': '00542469756',
      },
    ]
  };

  var dtConfOnboaardingStudents = {
    'data': dataSet.data,
    'dom': 'l<"toolbar">frtip',
    'responsive': true,
    'columnDefs': [
      {
        'title': 'Course Name',
        'name': 'course_name',
        'data': 'course_name',
        'targets': 0,
        'type': 'hidden'
      },
      {
        'title': 'School Name',
        'name': 'school_name',
        'data': 'school_name',
        'className': 'dt-body-center',
        'targets': 1,
        'type': 'hidden'
      },
      {
        'title': 'Teacher',
        'name': 'teacher',
        'data': 'teacher',
        'className': 'dt-body-center',
        'targets': 2,
      },
      {
        'title': 'Teacher Assistant',
        'name': 'teacher_assistant',
        'data': 'teacher_assistant',
        'className': 'dt-body-center',
        'targets': 3,
      },
      {
        'title': 'Grade Level',
        'name': 'grade_level',
        'data': 'grade_level',
        'className': 'dt-body-center',
        'targets': 4,
        'type': 'hidden'
      },
      {
        'title': 'Start Date',
        'name': 'start_date',
        'data': 'start_date',
        'className': 'dt-body-center',
        'targets': 5,
        'type': 'hidden'
      },
      {
        'title': 'End Date',
        'name': 'end_date',
        'data': 'end_date',
        'className': 'dt-body-center',
        'targets': 6,
        'type': 'hidden'
      },
      {
        'title': 'Section Name',
        'name': 'section_name',
        'data': 'section_name',
        'className': 'dt-body-center',
        'targets': 7,
        'type': 'hidden'
      },
      {
        'title': 'Day',
        'name': 'day',
        'data': 'day',
        'className': 'dt-body-center',
        'targets': 8,
        'type': 'hidden'
      },
      {
        'title': 'Time',
        'name': 'time',
        'data': 'time',
        'className': 'dt-body-center',
        'targets': 9,
        'type': 'hidden'
      },
      {
        'title': 'Section ID',
        'name': 'section_id',
        'data': 'section_id',
        'className': 'dt-body-center',
        'targets': 10,
        'type': 'hidden'
      },
      {
        'title': 'Status Enrolled',
        'name': 'status_enrolled',
        'data': 'status_enrolled',
        'className': 'dt-body-center',
        'targets': 11,
        'type': 'hidden'
      },
      {
        'title': 'Avail Seats',
        'name': 'avail_seats',
        'data': 'avail_seats',
        'className': 'dt-body-center',
        'targets': 12,
        'type': 'hidden'
      },
      {
        'title': 'Total Seats',
        'name': 'total_seats',
        'data': 'total_seats',
        'className': 'dt-body-center',
        'targets': 13,
        'type': 'hidden'
      },
      {
        'title': 'Zoom ID',
        'name': 'zoom_id',
        'data': 'zoom_id',
        'className': 'dt-body-center',
        'targets': 14,
      },
    ],
    select: {
      style: 'single',
      toggleable: false
    },
    altEditor: true,
    buttons: [],
    "createdRow": function( row, data, dataIndex){
      
    },
    'rowCallback': function( row, data ) {
    },
    'initComplete': function (settings, json) {
      var $toolbar = $('#course-sections_wrapper div.toolbar');
      
      $toolbar.after('<select class="mr-1"><option>Term</option></select>');
      $toolbar.after('<select class="mr-1"><option>Scheldue</option></select>');
      $toolbar.after('<select class="mr-1"><option>W/Sections</option></select>');
      $toolbar.after('<select class="mr-1"><option>W/TA</option></select>');
      $toolbar.after('<select class="mr-1"><option>All Schools</option></select>');
      $toolbar.after('<select class="mr-1"><option>2021-2022</option></select>');
    }
  }

  function cacheDom() {
    DOM.$dt = $('#course-sections');
  }

  function initDT() {
    var table = DOM.$dt.DataTable(dtConfOnboaardingStudents);
     // Edit
     $(document).on('click', "[id^='course-sections'] tbody ", 'tr', function () {
      var tableID = $(this).closest('table').attr('id');    // id of the table
      var that = $( '#'+tableID )[0].altEditor;
      that._openEditModal();
      $('#altEditor-edit-form-' + that.random_id)
                  .off('submit')
                  .on('submit', function (e) {
                      e.preventDefault();
                      e.stopPropagation();
                      that._editRowData();
                  });
    });
  }

  // Update
  $(document).on('click', "[id^='editRowBtn'] ", 'tr', function () {
    // add ajax call to update db
  });


  function init() {
    cacheDom();
    initDT();
  }

  return {
    init: init
  };
}());


$(document).ready( function () {
  DtModuleCourses.init();
} );
