function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

  function confirm(question){
    return false;
  }
  
  function showOk() {
    console.log( "You agreed." );
  }
  
  function showCancel() {
    console.log( "You canceled the execution." );
  }
  
  ask("Do you agree?", showOk, showCancel);