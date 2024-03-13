function callOnTarget(func, obj1, obj2) {
  // Your code here
  let binder = func.bind(obj1,obj2)
  return binder()
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
