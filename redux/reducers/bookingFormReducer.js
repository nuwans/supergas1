let bookingFormReducer = function(accounts = [], action) {
  console.log('action?????',action);
  switch (action.type) {
    case 'ADD_ACCOUNT':
      console.log('add account',action.payload);
      return [action.payload,...accounts]
    default: 
      return accounts;
  }
}

export default bookingFormReducer
