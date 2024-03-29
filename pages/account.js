const { I } = inject();

module.exports = {
  h1: { xpath: '//*[@id="content"]/h1'},
  firstNameField: { xpath: '//*[@id="input-firstname"]'},
  lastNameField: { xpath: '//*[@id="input-lastname"]'},
  email: { xpath: '//*[@id="input-email"]'},
  telephone: { xpath: '//*[@id="input-telephone"]'},
  password: { xpath: '//*[@id="input-password"]'},
  passwordConfirm: { xpath: '//*[@id="input-confirm"]'},
  privacyPolicyButton: { xpath: '//*[@id="content"]/form/div/div/input[1]'},
  continueButton: { xpath: '//*[@id="content"]/form/div/div/input[2]'},
  verifyRegisterAccountPage(){
    const regTitleText = 'Register Account';
    I.seeTextEquals(regTitleText, this.h1);
  },

  fillNewUserForm(user){
    I.fillField(this.firstNameField,user.firstName);
    I.fillField(this.lastNameField,user.lastNameField);
    I.fillField(this.email, user.email);
    I.fillField(this.telephone, user.telephone);
    I.fillField(this.password, user.password);
    I.fillField(this.passwordConfirm, user.password);
  },
  submitNewUserForm(){
    I.click(this.privacyPolicyButton);
    I.click(this.continueButton);
  },
  verifySuccessfullRegistration(){
    const accountTitleText = 'Your Account Has Been Created!';
    I.seeTextEquals(accountTitleText, this.h1);
  }

}
