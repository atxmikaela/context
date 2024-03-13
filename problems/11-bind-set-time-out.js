function boundFuncTimer(obj, func, delay) {
  // Your code here
  let binder = func.bind(obj)
  return setTimeout(binder, delay)
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
