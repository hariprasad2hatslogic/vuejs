const mailForm = new Vue({
  el: '#mailApp',
  data: {
    errors: [],
    mailSubject: null,
    mailContent: null,
    currentTab: 'inbox',
    selectAll: false,
    mailsSent: [{
      "id": 1,
      "name": "Sent Mail 1",
      'status': false,
      'checked': false
    },
    {
      "id": 5,
      "name": "Sent Mail 5",
      'status': false,
      'checked': false
    },],
    mailsReceived: [{
      "id": 3,
      "name": "Mail 3",
      'status': true,
      'checked': false
    },
    {
      "id": 2,
      "name": "Mail 2",
      'status': false,
      'checked': false
    },
    ],
    mailsDeleted: [
      {
        "id": 4,
        "name": "Deleted Mail 4",
        'status': false,
        'checked': false
      },

    ],
  },
  computed: {
    selectAll: function () {
      return this.mailsReceived.every(function (mailReceived) {
        return mailReceived.checked;
      });
    }
  },
  methods: {
    checkMailForm: function (e) {

      this.errors = [];

      if (!this.mailSubject) {
        this.errors.push('Subject required.');
      }
      if (this.errors.length === 0) {
        this.mailsSent.push(
          {
            id: this.mailsSent.length + this.mailsReceived.length + this.mailsDeleted.length + 1,
            name: this.mailSubject,
            status: 'true',
            checked: false,
          }
        );
        this.mailsSent.reverse();
        $('#modalCompse').modal('hide');
      }

      e.preventDefault();
    },
    tabInbox: function () {
      this.currentTab = 'inbox';
      this.selectAll = false;
    },
    tabSent: function () {
      this.currentTab = 'sent';
      this.selectAll = false;
    },
    tabTrash: function () {
      this.currentTab = 'trash';
      this.selectAll = false;
    },
    toggleSelect: function () {
      var select = this.selectAll;
      if (this.currentTab == 'inbox') {
        this.mailsReceived.forEach(function (mailReceived) {
          mailReceived.checked = !select;
        });
        this.selectAll = false;
      } else if (this.currentTab == 'sent') {
        this.mailsSent.forEach(function (mailSent) {
          mailSent.checked = !select;
        });
        this.selectAll = false;
      } else if (this.currentTab == 'trash') {
        this.mailsDeleted.forEach(function (mailDeleted) {
          mailDeleted.checked = !select;
        });
        this.selectAll = false;
      }
      this.selectAll = !select;
    },
    moveToTrash: function () {
      var mailsDeleted;
      var select;
      if (this.currentTab == 'inbox') {
        var newMailsRecieved = this.mailsReceived.filter(function (value, index, arr) {
          return value.checked != true;
        });
        mailsDeleted = this.mailsReceived.filter(function (value, index, arr) {
          return value.checked != false;
        });
        this.mailsReceived = newMailsRecieved;
        this.mailsDeleted.push.apply(this.mailsDeleted, mailsDeleted);
        this.mailsDeleted.forEach(function (mailDeleted, index) {
          if (mailDeleted.checked) {
            mailDeleted.checked = false;
          }
        });
        select = this.selectAll;
        this.selectAll = false;
      } else if (this.currentTab == 'sent') {
        var newMailsSent = this.mailsSent.filter(function (value, index, arr) {
          return value.checked != true;
        });
        mailsDeleted = this.mailsSent.filter(function (value, index, arr) {
          return value.checked != false;
        });
        this.mailsSent = newMailsSent;
        this.mailsDeleted.push.apply(this.mailsDeleted, mailsDeleted);
        this.mailsDeleted.forEach(function (mailDeleted, index) {
          if (mailDeleted.checked) {
            mailDeleted.checked = false;
          }
        });
        select = this.selectAll;
        this.selectAll = false;
      }


      /*
      var newMailsRecieved = this.mailsReceived.filter(function (value, index, arr) {
        return value.checked != true;
      });
      var mailsDeleted = this.mailsReceived.filter(function (value, index, arr) {
        return value.checked != false;
      });
      this.mailsReceived = newMailsRecieved;
      this.mailsDeleted.push.apply(this.mailsDeleted, mailsDeleted);
      this.mailsDeleted.forEach(function (mailDeleted, index) {
        if (mailDeleted.checked) {
          mailDeleted.checked = false;
        }
      });
      var select = this.selectAll;
      this.selectAll = false;
      */

      /*
      var mailsReceivedTemp = this.mailsReceived;
      var mailsDeletedTemp = this.mailsDeleted;

      this.mailsReceived.forEach(function (mailReceived, index) {
        if (mailReceived.checked) {
          mailReceived.checked = false;
          mailsReceivedTemp.splice(index, 1);

          mailsDeletedTemp.push(mailReceived);

        }
      });
      this.mailsReceived = mailsReceivedTemp;
      this.mailsDeleted = mailsDeletedTemp;
      this.mailsDeleted.reverse();

      */

      ///


      //

    },
    markAsRead: function () {
      this.mailsReceived.forEach(function (mailReceived, index) {
        if (mailReceived.checked) {
          mailReceived.status = false;
        }
      });
    },
    markAsUnRead: function () {
      this.mailsReceived.forEach(function (mailReceived, index) {
        if (mailReceived.checked) {
          mailReceived.status = true;
        }
      });
    },
  }
});