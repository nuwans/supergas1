let actions = {
  addAccount: function(payload) {
    console.log('payload',payload);
    return {
      type: 'ADD_ACCOUNT',
      payload: payload
    }
  }
}

export default actions
