function allTheArgs(func, ...args) {
  return func.bind(null, ...args)
  // Your code here
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
