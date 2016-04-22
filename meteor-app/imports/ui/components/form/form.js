import './form.html';

Template.form.helpers({
  isType: function(type) {

      let formType;

      if(type === 'Login') {

          formType = true;

      } else {

          formType = false;

      }

      return formType;

  }
});
