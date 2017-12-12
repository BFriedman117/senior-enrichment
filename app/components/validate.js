function isBlank (obj){
  for (var k in obj){
    if (obj[k] === ''){
      return true
    }
  }
  return false
}

function isNotNum(num){
  if (num === 0){
    return false
  }
  if (!Number(num)){
    return true
  }
  return false
}

function isNotGPA(num){
  return (num < 1 || num > 4)
}

function isNotEmail(email){

  if (email.indexOf('@') === -1){
    return true
  } else if (email.indexOf('.') === -1){
    return true
  } else if (email.lastIndexOf('.') < email.indexOf('@')){
    return true
  } else {
    return false
  }
}


export const validate = function (student){
  let valid = true;
  let warnings = [];

  if (isBlank(student)){
    valid = false
    warnings.push('* Must fill out all fields')
  }
  if (isNotNum(student.gpa)){
    valid = false
    warnings.push('* GPA must be a valid integer')
  }
  if (isNotGPA(student.gpa)){
    valid = false;
    warnings.push('* GPA must be between 1 and 4')
  }
  if (isNotEmail(student.email)){
    valid = false;
    warnings.push('* Must be valid email address')
  }
  let warningString = warnings.join('\n');
  if (warningString.length){
    alert(warningString);  
  }
  return valid
}
