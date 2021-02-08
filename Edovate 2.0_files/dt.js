var DtModuleCourses = (function () {
  'use strict';

  var DOM = {};
  var groupColumn = 0;

  const popupScheduleHTML = `
  <div class="schedule-popup">
      <form>
        <div class="row border-b1">
          <div class="col-9"><input class="form-control" type="text" value="Schedule ABC"></div>
          <div class="col-3"><select class="form-control"><option>Change Status</option></select></div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="schedule-options-header"><i class="fa fa-calendar-o" aria-hidden="true"></i> Schedule Options</div>
            <div class="schedule-rows">
              <div class="schedule-row row">
                <divc class="schedule-label col-4">School</div>
                <div class="schedule-input col-8"><select><option>Select an Option</option></select></div>
              </div>
            </div>
          </div>
        </div>
      </form>
  </div>
  `;

  var dataSet = {
    'data': [
      {
        'course_name': 'English Language Arts 1',
        'school_name': 'Bridgeway 2',
        'teacher': 'ACortney Bowen',
        'teacher_assistant': 'Stehanie Mills',
        'grade_level': 'MS',
        'start_date': '04/01/2021',
        'end_date': '04/01/2021',
        'section_name': 'CH-Language Arts 8008',
        'day': 'Wednesday',
        'time': '1:15 PM - 2:15 PM',
        'section_id': 'LLS55803MEET-2021-1',
        'status_enrolled': 'inactive',
        'avail_seats': 69,
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'AEnglish Language Arts 2',
        'school_name': 'Bridgeway 2',
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
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 3',
        'school_name': 'Bridgeway 2',
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
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 2',
        'school_name': 'Bridgeway 3',
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
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 5',
        'school_name': 'Bridgeway 2',
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
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 1',
        'school_name': 'Bridgeway 2',
        'teacher': 'Cortney Bowen',
        'teacher_assistant': 'Ashely Rose',
        'grade_level': 'MS',
        'start_date': '041',
        'end_date': '04/01/202/01/2021',
        'section_name': 'CH-Language Arts 8008',
        'day': 'Wednesday',
        'time': '1:15 PM - 2:15 PM',
        'section_id': 'LLS55803MEET-2021-1',
        'status_enrolled': 'active',
        'avail_seats': 69,
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 1',
        'school_name': 'Bridgeway 2',
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
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 1',
        'school_name': 'Bridgeway 3',
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
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 1',
        'school_name': 'Bridgeway 2',
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
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 2',
        'school_name': 'Bridgeway 2',
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
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 2',
        'school_name': 'Bridgeway 2',
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
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 2',
        'school_name': 'Bridgeway 2',
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
        'zoom_id': '00542469756',
      },
      {
        'course_name': 'English Language Arts 2',
        'school_name': 'Bridgeway 2',
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
        'zoom_id': '00542469756',
      },
    ]
  };

  var dataSetSchedules = {
    'data': [
      {
        'schedule_name': 'Schedule A',
        'school_name': 'Bridgeway',
        'year': '2021-2022',
        'charter': 'Yes',
        'number_of_sections': 5,
      },
      {
        'schedule_name': 'Schedule B',
        'school_name': 'Bridgeway',
        'year': '2021-2022',
        'charter': 'Yes',
        'number_of_sections': 5,
      },
      {
        'schedule_name': 'Schedule C',
        'school_name': 'Bridgeway',
        'year': '2021-2022',
        'charter': 'Yes',
        'number_of_sections': 5,
      },
    ]
  }

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
        'type': 'hidden'
      },
      {
        'title': 'Teacher Assistant',
        'name': 'teacher_assistant',
        'data': 'teacher_assistant',
        'className': 'dt-body-center',
        'targets': 3,
        'type': 'hidden'
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
        'title': 'Zoom ID',
        'name': 'zoom_id',
        'data': 'zoom_id',
        'className': 'dt-body-center',
        'targets': 13,
      },
    ],
    colReorder: true,
    select: {
      style: 'single',
      toggleable: false
    }, 
    altEditor: true,
    buttons: [],
    'createdRow': function( row, data, dataIndex){
      
    },
    'rowCallback': function( row, data ) {
    },
    'initComplete': function (settings, json) {
      var $toolbar = $('#course-sections_wrapper div.toolbar');
      $('#course-sections_wrapper').prepend('<div class="group-by">Group By <input id="course" name="group" type="radio" value="0" checked><label for="course">Course</label><input id="school" type="radio" name="group" value="1"><label for="school">School</label><input id="teacher" type="radio" name="group" value="2"><label for="teacher">Teacher</label></div>');
      
      $toolbar.after('<select class="mr-1"><option>Term</option></select>');
      $toolbar.after('<select class="mr-1"><option>Scheldue</option></select>');
      $toolbar.after('<select class="mr-1"><option>W/Sections</option></select>');
      $toolbar.after('<select class="mr-1"><option>W/TA</option></select>');
      $toolbar.after('<select class="mr-1"><option>All Schools</option></select>');
      $toolbar.after('<select class="mr-1"><option>2021-2022</option></select>');

    },
    'drawCallback': function ( settings ) {
      var api = this.api();
      groupRows(api);
      addSortingMsg();
    }
  }


  var dtConfSchedules = {
    'data': dataSetSchedules.data,
    'dom': 'l<"toolbar">frtip',
    'responsive': true,
    'columnDefs': [
      {
        'title': 'Schedule Name',
        'name': 'schedule_name',
        'data': 'schedule_name',
        'targets': 0,
      },
      {
        'title': 'School Name',
        'name': 'school_name',
        'data': 'school_name',
        'targets': 1,
      },
      {
        'title': 'Year',
        'name': 'year',
        'data': 'year',
        'targets': 2,
      },
      {
        'title': 'Charter', 
        'name': 'charter',  
        'data': 'charter',  
        'targets': 3, 
      },
      {
        'title': '# of Sections',
        'name': 'number_of_sections',
        'data': 'number_of_sections',
        'targets': 4,
      },
    ],
    'initComplete': function (settings, json) {
      var $toolbar = $('#schedules_wrapper div.toolbar');
      
      $toolbar.after('<a href="#" class="add-schedule-js float-right mr-1"></i>Add new schedule <i class="fa fa-plus mr-1" aria-hidden="true"></a>');
      $toolbar.after('<select class="mr-1"><option>All Schools</option></select>');
      $toolbar.after('<select class="mr-1"><option>2021-2022</option></select>');

    },
  }

  function cacheDom() {
    DOM.$dtCourse = $('#course-sections');
    DOM.$dtSchedules = $('#schedules');

  }

  function initDT() {
    if (DOM.$dtSchedules.length > 0) {
      var tableSchedules = DOM.$dtSchedules.DataTable(dtConfSchedules);

      // add record
      $(document).on('click', '.add-schedule-js', 'tr', function (e) {
        e.preventDefault();
        $.fancybox.open(popupScheduleHTML);
      });
    }

    if (DOM.$dtCourse.length > 0) {
      var table = DOM.$dtCourse.DataTable(dtConfOnboaardingStudents);
    
      // Edit
      $(document).on('click', "[id^='course-sections'] tbody tr", function () {
        if ($(this).hasClass('group')) {
          return false;
        }
        
      
        var tableID = $(this).closest('table').attr('id');
        var that = $( '#'+tableID )[0].altEditor;
        that._openEditModal();
        var $modal = $('#altEditor-edit-form-' + that.random_id);
        $modal.off('submit')
               .on('submit', function (e) {
                  e.preventDefault();
                    e.stopPropagation();
                    that._editRowData();
                });
  
        
        $('#editRowBtn').text('Update');
  
        var status = $(this).find('td').eq(11).text();
        $modal.find('.modal-body').append('<div class="mb-3"><label>Teacher:</label><select class="form-control" name="teacher"><option value="teacher1">Teacher 1</option><option value="teacher2">Teacher2</option></select></div>');
        $modal.find('.modal-body').append('<div class="mb-3"><label>Teacher Assistent:</label><select class="form-control" name="teacher_assistent"><option value="teacher_assisten1">Teacher Assistent 1</option><option value="teacher_assisten2">Teacher2</option></select></div>');
        $modal.find('.modal-body').append('<div class="mb-3"><label>Status:</label><select class="form-control" name="status"><option value="active">Active</option><option value="inactive">Inactive</option></select></div>');
        
        $modal.find('[name="status"]').val(status);
      });
  
      //Grouping
      $(document).on('change', '[name="group"]', function() {
        groupColumn = $('[name="group"]:checked').val();
          groupRows(table);
          var colOrder = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
          colOrder = colOrder.filter(val => val !== parseInt(groupColumn));
          colOrder.unshift(parseInt(groupColumn));
          table.colReorder.order(colOrder, true);
          addSortingMsg();
      });
  
      // Order by the grouping
      DOM.$dtCourse.on( 'click', 'tbody tr.group', function () {
        var currentOrder = table.order()[0];
        if ( currentOrder[0] === groupColumn && currentOrder[1] === 'asc' ) {
            table.order( [ groupColumn, 'desc' ] ).draw();
        }
        else {
            table.order( [ groupColumn, 'asc' ] ).draw();
        }
    } );
  
      // Update
      $(document).on('click', "[id^='editRowBtn']", 'tr', function () {
        // add ajax call to update db
      });
    }
    }
   

  function addSortingMsg() {
    $('#course-sections_wrapper tr.group td').append('<small class="font-weight-normal"> (Click to sort by group)</small>');
  }
  
  function groupRows(api) {
    DOM.$dtCourse.find('.group').remove();
    var rows = api.rows( {page:'current'} ).nodes();
    var last=null;
    api.column(groupColumn, {page:'current'} ).data().each( function ( group, i ) {
        if ( last !== group ) {
            $(rows).eq( i ).before(
                '<tr class="group"><td colspan="14">'+group+'</td></tr>'
            );

            last = group;
        }
    } );
  }

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
