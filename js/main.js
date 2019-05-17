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
      
      
      /*
      {
        id: 1,
        name: 'Richard Hendricks',
        email: 'richard@piedpiper.com',
      },
      {
        id: 2,
        name: 'Bertram Gilfoyle',
        email: 'gilfoyle@piedpiper.com',
      },
      {
        id: 3,
        name: 'Dinesh Chugtai',
        email: 'dinesh@piedpiper.com',
      },
      */
      e.preventDefault();
    }
  }
});