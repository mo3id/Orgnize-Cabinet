// function togglePopup() {
//   document.getElementById("popup-1").classList.toggle("active");
// }

$(".Click-here").on("click", function () {
  $(".custom-model-main").addClass("model-open");
  let saveButton = $(".submit"),
    that = $(this);
  saveButton.click((e) => {
    // e.preventDefault();
    
    let clotheNameInput = $(".clotheName").val(),
      clotheColorInput = $(".clotheColor").val(),
      newTask = `<span class="task-box">${clotheNameInput} _ ${clotheColorInput}</span>`;

    that.parent().append(newTask).addClass("filled");
    that.remove();
    $(".clotheName").val('')
    $(".clotheColor").val('')
    console.log(clotheNameInput);
    $(".custom-model-main").removeClass("model-open");
  });
  // document.querySelector(".Click-here").remove()
  // saveData();
  // return false;
});

$(".close-btn, .bg-overlay").click(function () {
  $(".custom-model-main").removeClass("model-open");
});

let itemButton = `<button class="Click-here">+ Item</button>`;

saveData = () => {
  let clotheNameInput = document.querySelector(".clotheName"),
    clotheColorInput = document.querySelector(".clotheColor"),
    newTask = `${clotheNameInput.value} _ ${clotheColorInput.value}`;
  alert(newTask);
  document.querySelector(".Click-here1").remove();
  // $(".Click-here").map((item) => item.remove() );
};
// let answerDiv = `<span></span>`

// chooseClothes = () => {
//   $(".custom-model-main").addClass('model-open');
// }

// let clotheNameInput = document.querySelector(".custom-model-main .clotheName"),
//   clotheColorInput = document.querySelector(".custom-model-main .clotheColor"),
// plusButton = document.querySelector(".add-task .plus"),
// tasksContent = document.querySelector(".tasks-content"),
// tasksCount = document.querySelector(".tasks-count span"),
// tasksCompleted = document.querySelector(".tasks-completed span");

// focus on input field
// window.onload = function () {
//     taskInput.focus();
// }

// plusButton.onclick = function () {
//   let taskBox = document.getElementsByClassName("task-box");

//   if (taskInput.value === "" || taskInput.value === null) {
//     console.log("no value");
//   } else {
//     let noTasks = document.querySelector(".no-tasks-message");

//     if (document.body.contains(noTasks)) {
//       noTasks.remove();
//     }

//     let newTask = `<span class="task-box">
//                             ${taskInput.value}
//                             <span class="delete">delete</span>
//                         </span>`;

//     tasksContent.innerHTML += newTask;

//     taskInput.value = "";

//     taskInput.focus();

//     let allTasks = document.getElementsByClassName("task-box");

//     tasksCount.textContent = allTasks.length;
//   }
//   // allDeletes = document.getElementsByClassName("delete");
//   // console.log(allDeletes);
//   // for ( let c = 0; c < allDeletes.length; c++ ) {
//   //     allDeletes[c].addEventListener("click", e => {
//   //         console.log(e);
//   //         e.target.parentElement.remove();
//   //     });
//   // }
// };

// document.addEventListener("click", function (e) {
//   // remove task
//   if (e.target.className == "delete") {
//     e.target.parentElement.remove();

//     let allTasks = document.getElementsByClassName("task-box");

//     tasksCount.textContent = allTasks.length;

//     allFinished = document.getElementsByClassName("finished");

//     tasksCompleted.textContent = allFinished.length;

//     if (allTasks.length == 0) {
//       let noTask = `<span class="no-tasks-message">No Tasks To Show</span>`;

//       tasksContent.innerHTML = noTask;
//     }
//   }

//   // Finish Task
//   if (e.target.classList.contains("task-box")) {
//     e.target.classList.toggle("finished");

//     allFinished = document.getElementsByClassName("finished");

//     tasksCompleted.textContent = allFinished.length;
//   }
// });
