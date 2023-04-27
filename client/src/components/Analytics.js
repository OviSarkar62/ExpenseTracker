import { Progress } from "antd";
import React from "react";

const Analytics = ({ allTransaction }) => {
  const categories = [
    "salary",
    "project",
    "food",
    "movie",
    "bills",
    "medical",
    "fee",
    "tax",
  ];

  // total transaction
  const totalTransaction = allTransaction.length;
  const totalIncome = allTransaction.filter(
    (transaction) => transaction.type === "income"
  ).length;

  const totalExpense = allTransaction.filter(
    (transaction) => transaction.type === "expense"
  ).length;

  const totalIncomePercent = (totalIncome / totalTransaction) * 100;
  const totalExpensePercent = (totalExpense / totalTransaction) * 100;

  //total turnover
  const totalTurnover = allTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncomeTurnover = allTransaction
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenseTurnover = allTransaction
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnoverPercent =
    (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpenseTurnoverPercent =
    (totalExpenseTurnover / totalTurnover) * 100;

  return (
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6">
          <div class="card mb-4">
            <div class="card-header bg-success text-white">
              Total Transactions:{" "}
              <span class="total-transaction">{totalTransaction}</span>
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-6">
                  <h5 class="text-success">
                    Income:{" "}
                    <span class="total-income-transaction">
                      {totalIncome.length}
                    </span>
                  </h5>
                </div>
                <div class="col-6">
                  <h5 class="text-danger">
                    Expense:{" "}
                    <span class="total-expense-transaction">
                      {totalExpense.length}
                    </span>
                  </h5>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-6">
                  <div class="progress-wrapper">
                    <Progress
                      type="circle"
                      percent={totalIncomePercent.toFixed(2)}
                      strokeColor={"green"}
                    />
                  </div>
                  <div class="text-center mt-1">Income</div>
                </div>
                <div class="col-6">
                  <div class="progress-wrapper">
                    <Progress
                      type="circle"
                      percent={totalExpensePercent.toFixed(2)}
                      strokeColor={"red"}
                    />
                  </div>
                  <div class="text-center mt-1">Expense</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-4">
            <div class="card-header bg-info text-white">
              Total Turnover:{" "}
              <span class="total-turnover">{totalTurnover}</span>
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-6">
                  <h5 class="text-success">
                    Income:{" "}
                    <span class="total-income-turnover">
                      {totalIncomeTurnover}
                    </span>
                  </h5>
                </div>
                <div class="col-6">
                  <h5 class="text-danger">
                    Expense:{" "}
                    <span class="total-expense-turnover">
                      {totalExpenseTurnover}
                    </span>
                  </h5>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-6">
                  <div class="progress-wrapper">
                    <Progress
                      type="circle"
                      percent={totalIncomeTurnoverPercent.toFixed(2)}
                      strokeColor={"green"}
                    />
                  </div>
                  <div class="text-center mt-1">Income</div>
                </div>
                <div class="col-6">
                  <div class="progress-wrapper">
                    <Progress
                      type="circle"
                      percent={totalExpenseTurnoverPercent.toFixed(2)}
                      strokeColor={"red"}
                    />
                  </div>
                  <div class="text-center mt-1">Expense</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-6">
            <h4 class="text-center mb-3">Categorywise Income</h4>
            {categories.map((category) => {
              const amount = allTransaction
                .filter(
                  (transaction) =>
                    transaction.type === "income" &&
                    transaction.category === category
                )
                .reduce((acc, transaction) => acc + transaction.amount, 0);
              return (
                amount > 0 && (
                  <div class="card card-equal-width mb-3">
                    <div class="card-body">
                      <h5>{category}</h5>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-success"
                          role="progressbar"
                          style={{ width: `${(amount / totalIncome) * 100}%` }}
                          aria-valuenow={(amount / totalIncome) * 100}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {amount.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <div class="col-md-6">
            <h4 class="text-center mb-3">Categorywise Expense</h4>
            {categories.map((category) => {
              const amount = allTransaction
                .filter(
                  (transaction) =>
                    transaction.type === "expense" &&
                    transaction.category === category
                )
                .reduce((acc, transaction) => acc + transaction.amount, 0);
              return (
                amount > 0 && (
                  <div class="card card-equal-width mb-3">
                    <div class="card-body">
                      <h5>{category}</h5>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-danger"
                          role="progressbar"
                          style={{ width: `${(amount / totalExpense) * 100}%` }}
                          aria-valuenow={(amount / totalExpense) * 100}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {amount.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
