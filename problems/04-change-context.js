function changeContext(func, obj) {
  let binder = func.bind(obj)
  return binder()

  // Your code here
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
