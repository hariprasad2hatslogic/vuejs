const mailForm = new Vue({
  el: '#mailApp',
  data: {
    errors: [],
    mailSubject: null,
    mailContent: null,
    mails: [],
    checkedMails:[],
  },
  methods:{
    checkMailForm: function (e) {    

      this.errors = [];

      if (!this.mailSubject) {
        this.errors.push('Subject required.');
      }
      if (!this.mailContent) {
        this.errors.push('Content required.');
      }
      if (this.errors.length === 0)
      {
        this.mails.push(
          {
            id: this.errors.length+1,
            name: this.mailSubject,
            content: this.mailContent,
          }
          );
          this.mails.reverse();
      }
      
      e.preventDefault();
    }
  }
});

/*

// select all checkbox and add-remove bakgrnd color
$(document).ready(function () {
  $("#ckbCheckAll").click(function () {
    $(".checkBoxClass").prop('checked', $(this).prop('checked'));
    $('tr').addClass('bg-color');
    $("#ckbCheckAll").change(function () {
      if (!$(this).prop("checked")) {
        $(".checkBoxClass").prop("checked", false);
        $('tr').removeClass("bg-color");
      }
    });
  });

  // add remove bkgrnd class single check
  $('#tbl tbody input[type=checkbox]').change(function () {
    $(this).closest('tr').toggleClass("bg-color", this.checked);
  });

  //   delete checked items and move to trash
  $("#deleteAcc").on("click", function () {
    $("input.checkBoxClass:checked").closest('tr').appendTo($(".bin .table tbody "));
  });

  $(".trash-bt").click(function () {
    $("input.checkBoxClass:checked").closest('tr').removeClass('bg-color');
    $("input.checkBoxClass").prop("checked", false);
    $("#ckbCheckAll").prop("checked", false);
  });

  //   unread checked items
  $("#ReadChkB").on("click", function () {
    $("input.checkBoxClass:checked").closest('tr').removeClass('bold', this.checked);
  });

  //   read checked items
  $("#unReadChk").on("click", function () {
    $("input.checkBoxClass:checked").closest('tr').addClass('bold', this.checked);
  });
});
*/