function addBudget() {
  
  
  var budget = parseFloat(document.getElementById("budget").value);
  var totalBudget = document.getElementById("totalBudget");
  totalBudget.innerHTML = budget;
  localStorage.setItem("budget", budget);
  

  var remainingBudget = document.getElementById("remainingBudget");
  remainingBudget.innerHTML = budget;


  var totalExpense = document.getElementById("totalExpense");
  totalExpense.innerHTML = "0.00";


  var totalAmount = document.getElementById("totalAmount");
  totalAmount.value = "";

  swal("Good job!", "Budget has been set!", "success");

  // Calculate remaining budget
  var totalExpenseValue = parseFloat(totalExpense.innerHTML);
  var remainingBalance = budget - totalExpenseValue;
  remainingBudget.innerHTML = Math.max(0, remainingBalance).toFixed(2); // Ensure remaining balance is not negative
}

var userData = [];

// Retrieve budget from local storage
// Retrieve budget from local storage
var budget = localStorage.getItem("budget");
if (budget === null || budget === "") {
  budget = 0;
} else {
  budget = parseFloat(budget);
}

var totalBudget = document.getElementById("totalBudget");
totalBudget.innerHTML = budget.toFixed(2);

var remainingBudget = document.getElementById("remainingBudget");
remainingBudget.innerHTML = budget.toFixed(2);

var totalExpense = document.getElementById("totalExpense");
totalExpense.innerHTML = "0.00";

// Calculate remaining budget
var totalExpenseValue = parseFloat(totalExpense.innerHTML);
var remainingBalance = budget - totalExpenseValue;
remainingBudget.innerHTML = Math.max(0, remainingBalance).toFixed(2); // Ensure remaining balance is not negative

// Place the updated code here

var userData = JSON.parse(localStorage.getItem("userData")) || [];
var totalExpense = 0;

if (userData.length > 0) {
  userData.forEach(function (data) {
    totalExpense += parseFloat(data.totalAmount);
  });
}

var remainingBudget = budget - totalExpense;
remainingBudget = Math.max(0, remainingBudget);

var remainingBudgetElement = document.getElementById("remainingBudget");
remainingBudgetElement.innerHTML = remainingBudget.toFixed(2);

var totalExpenseElement = document.getElementById("totalExpense");
totalExpenseElement.innerHTML = totalExpense.toFixed(2);

// Rest of your code...


// Rest of your code

function displayExpenses() {
  tableBody.innerHTML = '';
  var totalExpense = 0;

  userData.forEach((data, index) => {
    // ... existing code ...

    tableBody.appendChild(newRow);

    // Calculate total expense
    totalExpense += parseFloat(data.totalAmount);
  });

  // Update total expense on the page
  document.getElementById("totalExpense").textContent = totalExpense.toFixed(2);

  // Retrieve budget from local storage
  var budget = parseFloat(localStorage.getItem("budget"));

  // Calculate remaining budget
  var remainingBudget = budget - totalExpense;

  // Update remaining budget on the page
  document.getElementById("remainingBudget").textContent = Math.max(0, remainingBudget).toFixed(2);
}

function addExpense() {
  const newExpense = {
    totalAmount: parseFloat(totalAmount.value),
    amountTxt: amountTxt.value,
    amountTax: amountTax.value,
    category: category.value,
    description: description.value,
    paymentDate: paymentDate.value,
  };

  // Retrieve budget from local storage
  var budget = parseFloat(localStorage.getItem("budget"));

  // Calculate total expenses
  var totalExpense = 0;
  userData.forEach((data) => {
    totalExpense += parseFloat(data.totalAmount);
  });

  // Calculate remaining budget
  var remainingBudget = budget - totalExpense;

  // Check if adding the new expense exceeds the remaining budget
  if (newExpense.totalAmount > remainingBudget) {
    swal("Oops!", "Your remaining balance is less than the expense amount!", "error");
    return;
  }

  // Add the expense to the userData array
  userData.push(newExpense);
  localStorage.setItem("userData", JSON.stringify(userData));

  // Update total expenses
  totalExpense += newExpense.totalAmount;
  document.getElementById("totalExpense").textContent = totalExpense.toFixed(2);

  // Update remaining budget
  remainingBudget -= newExpense.totalAmount;
  document.getElementById("remainingBudget").textContent = remainingBudget.toFixed(2);

  // Clear input fields
  totalAmount.value = "";
  amountTxt.value = "";
  amountTax.value = "";
  category.value = "";
  description.value = "";
  paymentDate.value = "";

  swal("Good job!", "Expense added successfully!", "success");
}


var userData = [];

var totalAmount = document.getElementById("totalAmount");
var amountTxt = document.getElementById("amountTxt");
var amountTax = document.getElementById("amountTax");
var category = document.getElementById("category");
var description = document.getElementById("description");
var paymentDate = document.getElementById("paymentDate");
var addExpenseBtn = document.getElementById("addExpense");

var addForm = document.getElementById("addForm");

function resetForm(event) {
  document.getElementById("budgetForm").reset();
  event.preventDefault();
}

function addExpenses(event) {
  if (addExpenseBtn.innerHTML === "Save Budget") {
    if (validateForm()) {
      addExpense();
      displayExpenses();
      resetForm(event);
    }
  } else {
    const index = addExpenseBtn.getAttribute("i");
    if (validateForm()) {
      updateExpense(index);
      displayExpenses();
      resetForm(event);
    }
  }
}

if (localStorage.getItem("userData") != null) {
  userData = JSON.parse(localStorage.getItem("userData"));
}

function validateForm() {
  if (
    totalAmount.value === "" ||

    // these are optional fields
    // amountTxt.value === "" ||
    // amountTax.value === "" ||

    category.value === "" ||
    description.value === "" ||
    paymentDate.value === ""
  ) {
    swal("Oops!", "Please fill in all the fields.", "error");
    return false;
  }
  return true;
}


function addExpense() {
  const newExpense = {
    totalAmount: parseFloat(totalAmount.value),
    amountTxt: amountTxt.value,
    amountTax: amountTax.value,
    category: category.value,
    description: description.value,
    paymentDate: paymentDate.value,
  };

  // Retrieve budget from local storage
  var budget = parseFloat(localStorage.getItem("budget"));

  // Calculate total expenses
  var totalExpense = 0;
  userData.forEach((data) => {
    totalExpense += parseFloat(data.totalAmount);
  });

  // Calculate remaining budget
  var remainingBudget = budget - totalExpense;

  // Check if adding the new expense exceeds the remaining budget
  if (newExpense.totalAmount > remainingBudget) {
    swal("Oops!", "Your remaining balance is less than the expense amount!", "error");
    return;
  }

  // Add the expense to the userData array
  userData.push(newExpense);
  localStorage.setItem("userData", JSON.stringify(userData));

  // Update total expenses
  totalExpense += newExpense.totalAmount;
  document.getElementById("totalExpense").textContent = totalExpense.toFixed(2);

  // Update remaining budget
  remainingBudget -= newExpense.totalAmount;
  document.getElementById("remainingBudget").textContent = remainingBudget.toFixed(2);

  // Clear input fields
  totalAmount.value = "";
  amountTxt.value = "";
  amountTax.value = "";
  category.value = "";
  description.value = "";
  paymentDate.value = "";

  swal("Good job!", "Expense added successfully!", "success");

  // Call displayExpenses() to update the displayed expenses
  displayExpenses();
}



function updateExpense(index) {
  const updatedExpense = {
    totalAmount: parseFloat(totalAmount.value),
    amountTxt: amountTxt.value,
    amountTax: amountTax.value,
    category: category.value,
    description: description.value,
    paymentDate: paymentDate.value,
  };
  
  // Retrieve the old expense amount
  const oldExpenseAmount = parseFloat(userData[index].totalAmount);

  // Calculate the difference between the old and new expense amount
  const expenseDifference = updatedExpense.totalAmount - oldExpenseAmount;

  // Update the expense in the userData array
  userData[index] = updatedExpense;
  localStorage.setItem("userData", JSON.stringify(userData));
  swal("Good job!", "Expense updated successfully!", "success");

  // Update the displayed expense amount
  const totalExpenseElement = document.getElementById("totalExpense");
  const totalExpense = parseFloat(totalExpenseElement.textContent);
  const newTotalExpense = totalExpense + expenseDifference;
  totalExpenseElement.textContent = newTotalExpense.toFixed(2);

  // Update the remaining budget
  const totalBudget = parseFloat(document.getElementById("totalBudget").textContent);
  const remainingBudget = totalBudget - newTotalExpense;
  const remainingBudgetElement = document.getElementById("remainingBudget");
  remainingBudgetElement.textContent = Math.max(0, remainingBudget).toFixed(2);

  // Call displayExpenses() to update the displayed expenses
  displayExpenses();
}




let tableBody = document.getElementById("tableBody");

function displayExpenses() {
  tableBody.innerHTML = '';

  userData.forEach((data, index) => {
    const newRow = document.createElement('tr');
    newRow.setAttribute('i', index);

    const totalAmountCell = document.createElement('td');
    totalAmountCell.textContent = data.totalAmount;
    newRow.appendChild(totalAmountCell);

    const amountTxtCell = document.createElement('td');
    amountTxtCell.textContent = data.amountTxt;
    newRow.appendChild(amountTxtCell);

    const amountTaxCell = document.createElement('td');
    amountTaxCell.textContent = data.amountTax;
    newRow.appendChild(amountTaxCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = data.category;
    newRow.appendChild(categoryCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = data.description;
    newRow.appendChild(descriptionCell);

    const paymentDateCell = document.createElement('td');
    paymentDateCell.textContent = data.paymentDate;
    newRow.appendChild(paymentDateCell);

    const editBtnCell = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-edit';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function () {
      editExpense(index);
    });
    editBtnCell.appendChild(editBtn);
    newRow.appendChild(editBtnCell);

    const deleteBtnCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
      deleteExpense(index);
    });
    deleteBtnCell.appendChild(deleteBtn);
    newRow.appendChild(deleteBtnCell);

    tableBody.appendChild(newRow);
  });
}

function editExpense(index) {
  const data = userData[index];
  totalAmount.value = data.totalAmount;
  amountTxt.value = data.amountTxt;
  amountTax.value = data.amountTax;
  category.value = data.category;
  description.value = data.description;
  paymentDate.value = data.paymentDate;
  addExpenseBtn.innerHTML = "Update";
  addExpenseBtn.setAttribute("i", index);
}

function deleteExpense(index) {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        userData.splice(index, 1);
        localStorage.setItem("userData", JSON.stringify(userData));
        displayExpenses();
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
}

displayExpenses();

