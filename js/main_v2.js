const mailForm = new Vue({
  el: '#mailApp',
  data: {
    errors: [],
    mailSubject: null,
    mailContent: null,
    currentTab: 0,
    selectAll: false,
    mailsToDisplay: [],
    mails: [
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
  computed: {
  },
  methods: {
    
    checkMailForm: function (e) {

      this.errors = [];

      if (!this.mailSubject) {
        this.errors.push('Subject required.');
      }
      if (this.errors.length === 0) {
        this.mails[1].push(
          {
            id: this.mails.length + 1,
            name: this.mailSubject,
            status: true,
            checked: false,
          }
        );
        this.mails[1].reverse();
        $('#modalCompse').modal('hide');
      }

      e.preventDefault();
    },
    tabInbox: function () {
      this.currentTab = 0;
      this.mailsToDisplay = this.mails[0];
      this.selectAll = false;
    },
    tabSent: function () {
      this.currentTab = 1;
      this.mailsToDisplay = this.mails[1];
      this.selectAll = false;
    },
    tabTrash: function () {
      this.currentTab = 2;
      this.mailsToDisplay = this.mails[2];
      this.selectAll = false;
    },
    toggleSelect: function () {
     
    },
    moveToTrash: function () {
      

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