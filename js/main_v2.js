new Vue({
  el: '#mailApp',
  data: {
    errors: [],
    mailSubject: null,
    currentTab: 0,
    mails: null,
    allMails: [
      [
        {
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
        {
          "id": 6,
          "name": "Mail 6",
          'status': false,
          'checked': false
        },
        {
          "id": 7,
          "name": "Mail 7",
          'status': false,
          'checked': false
        },
      ],
      [
        {
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
        }
      ],
      [
        {
          "id": 4,
          "name": "Deleted Mail 4",
          'status': false,
          'checked': false
        }
      ]
    ],
  },
  created: function () {
    var activeTab = localStorage.getItem('activeTab');
    this.currentTab = localStorage.getItem('currentTab');
    if (!activeTab) {
      localStorage.setItem('activeTab', '#v-pills-home');
    }
    if (!this.currentTab) {
      localStorage.setItem('currentTab', 0);
      this.currentTab = 0;
    }
    this.mails = this.allMails[this.currentTab];
    $('a[href="' + activeTab + '"]').tab('show');
  },
  computed: {
    selectAll: {
      get: function () {
        return this.mails.every(function (mail) {
          return mail.checked;
        });
      },
      // setter
      set: function () {
        return this.mails.every(function (mail) {
          return mail.checked;
        });
      }
    }
  },
  methods: {
    checkMailForm: function (e) {

      this.errors = [];

      if (!this.mailSubject) {
        this.errors.push('Subject required.');
      }
      if (this.errors.length === 0) {
        this.allMails[1].push(
          {
            id: this.allMails[0].length + this.allMails[1].length + this.allMails[2].length + 1,
            name: this.mailSubject,
            status: false,
            checked: false,
          }
        );
        this.allMails[1].reverse();
        $('#modalCompse').modal('hide');
      }

      e.preventDefault();
    },
    tabInbox: function () {
      this.currentTab = 0;
      this.selectAll = false;
      this.mails = this.allMails[0];
      localStorage.setItem('activeTab', '#v-pills-home');
      localStorage.setItem('currentTab', this.currentTab);
    },
    tabSent: function () {
      this.currentTab = 1;
      this.selectAll = false;
      this.mails = this.allMails[1];
      localStorage.setItem('activeTab', '#v-pills-messages');
      localStorage.setItem('currentTab', this.currentTab);
    },
    tabTrash: function () {
      this.currentTab = 2;
      this.selectAll = false;
      this.mails = this.allMails[2];
      localStorage.setItem('activeTab', '#v-pills-settings');
      localStorage.setItem('currentTab', this.currentTab);
    },
    moveToTrash: function () {

      var newMails = this.allMails[this.currentTab].filter(function (value, index, arr) {
        return value.checked != true;
      });
      var mailsDeleted = this.allMails[this.currentTab].filter(function (value, index, arr) {
        return value.checked != false;
      });
      this.allMails[this.currentTab] = this.mails = newMails;
      this.allMails[2].push.apply(this.allMails[2], mailsDeleted);
      this.allMails[2].forEach(function (mailDeleted, index) {
        if (mailDeleted.checked) {
          mailDeleted.checked = false;
        }
      });
      this.allMails[2].reverse();
      select = this.selectAll;
      this.selectAll = false;
    },
    markAsRead: function () {
      this.allMails[this.currentTab].forEach(function (mail, index) {
        if (mail.checked) {
          mail.status = false;
        }
      });
    },
    markAsUnRead: function () {
      this.allMails[this.currentTab].forEach(function (mail, index) {
        if (mail.checked) {
          mail.status = true;
        }
      });
    },
    toggleSelect: function () {
      var select = this.selectAll;
      this.mails.forEach(function (mail) {
        mail.checked = !select;
      });
      this.selectAll = !select;
    }
  }
});