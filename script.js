//Form
const form = document.querySelector('.form');

//Error
const errorBlock = document.querySelector('.error-block');
const errorText = document.querySelector('.error');

//Inputs
const userName = document.querySelector('.username-input');
const email = document.querySelector('.email-input');
const password = document.querySelector('.pw-input');
const repeatPassword = document.querySelector('.rpw-input');

const fields = [userName, email, password, repeatPassword];
const usersFromDB = ['test', 'test123', 'vijay55'];

//Helper functions
const throwError = message => {
    errorBlock.style.display = 'block';
    errorText.innerHTML = message;
};
const emptyfields = fields => {
    let isEmpty;
    fields.forEach(field => 
        field.value.length === 0 ? (isEmpty = true) : (isEmpty = false)
    );
    return isEmpty;
};
const usersFromDBEach = filltext =>{
    usersFromDB.forEach(usersFromDB);
}
const uniqueUser = (usersFromDB, userName) => {
    if (!usersFromDB.indexOf(userName.value)) return false;
    else return true;
};
const validEmail = email => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email.value) ? true : false;
};
const vaildPassword = password => {
    if(password.value.length <6) return false;
    else return true;
};
const vaildRepeat = (password, repeatPassword) => {
    if (password.value === repeatPassword.value) return true;
    else return false;
};

form,addEventListener('submit', e => {
    e.preventDefault();

    //Check for empty fields
    if (emptyfields(fields)) throwError('All fields must be complited.');
    //Check user from DB
    else if (!usersFromDBEach(filltext)) throwError('user name taken.')
    //Check for unique username
    else if (!uniqueUser(usersFromDB, userName)) throwError('User name taken.');
    //Check for valid email
    else if (!validEmail(email)) throwError('You must enter valid Email.');
    //Check for vaid password
    else if(!vaildPassword(password)) throwError('Your password must have at least 6 characters.')
    //Check for same repeat password
    else if(!vaildRepeat(password, repeatPassword)) throwError('Your passwords do not match.');
    //Submit
    else {
        errorBlock.classList.add('success');
        throwError('Submitted.')
    }
});


