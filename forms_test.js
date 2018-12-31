
Feature('Forms');

Scenario('test something', async (I) => {
  await I.resizeWindow(1800, 1800);
  await I.amOnPage('https://google.com');
  await I.amOnPage('https://github.com/login');
  await I.see('Sign in to GitHub', 'h1');
  await I.fillField('Username or email address', 'something@totest.com');
  await I.fillField('Password', '123456');
  await I.click('Sign in');
  await I.see('Incorrect username or password.', '.flash-error');
});
