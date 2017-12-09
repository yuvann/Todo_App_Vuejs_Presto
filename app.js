handleScreenAction = (state) => {
  switch (state.tag) {
    case "InitScreenInit":break;
    case "InitScreenAddTodo":
      update(state.contents);
      break;
    case "InitScreenRemoveTodo":
      update(state.contents);
      break;
    case "InitScreenUpdateTodo":
      update(state.contents);
      break;
    default: console.log("Invalid Tag Passed", state.tag);

  }
}


window.showScreen = function (callBack, data) {
    window.callBack = callBack;
    handleScreenAction(data);
};

update = (val) => {
   if(val==="FAILURE") {
    alert("Server Doesn't respond ; Try to start server using 'npm start' ;")
  }
    application.count = JSON.parse(localStorage.getItem("todos")).length
    application.todos = JSON.parse(localStorage.getItem("todos"))
}
