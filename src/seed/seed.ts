import * as dotenv from "dotenv";
import "reflect-metadata";
import { AccountType } from "src/account-type/account-type.entity";
import { Account } from "src/account/account.entity";
import { Currency } from "src/currency/currency.entity";
import { ExpenseType } from "src/expense-type/expense-type.entity";
import { Expense } from "src/expense/expense.entity";
import { IncomeType } from "src/income-type/income-type.entity";
import { Income } from "src/income/income.entity";
import { SubscriptionType } from "src/subscription-type/subscription-type.entity";
import { Subscription } from "src/subscription/subscription.entity";
import { User } from "src/user/user.entity";
import { DataSource } from "typeorm";

dotenv.config();

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST ?? "localhost",
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME ?? "postgres",
  password: process.env.DATABASE_PASSWORD ?? "postgres",
  database: process.env.DATABASE_NAME ?? "mydb",
  synchronize: true,
  entities: [
    Currency,
    AccountType,
    ExpenseType,
    IncomeType,
    SubscriptionType,
    User,
    Account,
    Expense,
    Income,
    Subscription,
  ],
});

async function seed() {
  await dataSource.initialize();
  console.log("Database connected.");

  // --- Currencies (2) ---
  const currencyRepo = dataSource.getRepository(Currency);
  const [currency1, currency2] = await currencyRepo.save([
    currencyRepo.create({ name: "US Dollar", value: 1.0 }),
    currencyRepo.create({ name: "Euro", value: 0.92 }),
  ]);
  console.log("Seeded currencies.");

  // --- Account Types (2) ---
  const accountTypeRepo = dataSource.getRepository(AccountType);
  const [accountType1, accountType2] = await accountTypeRepo.save([
    accountTypeRepo.create({ name: "Checking" }),
    accountTypeRepo.create({ name: "Savings" }),
  ]);
  console.log("Seeded account types.");

  // --- Expense Types (2) ---
  const expenseTypeRepo = dataSource.getRepository(ExpenseType);
  const [expenseType1, expenseType2] = await expenseTypeRepo.save([
    expenseTypeRepo.create({ name: "Food" }),
    expenseTypeRepo.create({ name: "Transport" }),
  ]);
  console.log("Seeded expense types.");

  // --- Income Types (2) ---
  const incomeTypeRepo = dataSource.getRepository(IncomeType);
  const [incomeType1, incomeType2] = await incomeTypeRepo.save([
    incomeTypeRepo.create({ name: "Salary" }),
    incomeTypeRepo.create({ name: "Freelance" }),
  ]);
  console.log("Seeded income types.");

  // --- Subscription Types (2) ---
  const subscriptionTypeRepo = dataSource.getRepository(SubscriptionType);
  const [subscriptionType1, subscriptionType2] =
    await subscriptionTypeRepo.save([
      subscriptionTypeRepo.create({ name: "Streaming" }),
      subscriptionTypeRepo.create({ name: "Software" }),
    ]);
  console.log("Seeded subscription types.");

  // --- Users (2) ---
  const userRepo = dataSource.getRepository(User);
  const [user1, user2] = await userRepo.save([
    userRepo.create({
      username: "alice",
      password: "password123",
      role: "user",
    }),
    userRepo.create({
      username: "bob",
      password: "password123",
      role: "user",
    }),
  ]);
  console.log("Seeded users.");

  // --- Accounts (4, 2 per user) ---
  const accountRepo = dataSource.getRepository(Account);
  const [account1, account2, account3, account4] = await accountRepo.save([
    accountRepo.create({
      name: "Alice Checking",
      currency: currency1,
      amount: 1500.0,
      user: user1,
      AccountType: accountType1,
    }),
    accountRepo.create({
      name: "Alice Savings",
      currency: currency1,
      amount: 5000.0,
      user: user1,
      AccountType: accountType2,
    }),
    accountRepo.create({
      name: "Bob Checking",
      currency: currency2,
      amount: 800.0,
      user: user2,
      AccountType: accountType1,
    }),
    accountRepo.create({
      name: "Bob Savings",
      currency: currency2,
      amount: 3200.0,
      user: user2,
      AccountType: accountType2,
    }),
  ]);
  console.log("Seeded accounts.");

  // --- Expenses (4, 2 per user) ---
  const expenseRepo = dataSource.getRepository(Expense);
  await expenseRepo.save([
    expenseRepo.create({
      name: "Grocery Run",
      amount: 75.5,
      user: user1,
      account: account1,
      expenseType: expenseType1,
    }),
    expenseRepo.create({
      name: "Bus Pass",
      amount: 30.0,
      user: user1,
      account: account2,
      expenseType: expenseType2,
    }),
    expenseRepo.create({
      name: "Restaurant",
      amount: 45.0,
      user: user2,
      account: account3,
      expenseType: expenseType1,
    }),
    expenseRepo.create({
      name: "Taxi",
      amount: 20.0,
      user: user2,
      account: account4,
      expenseType: expenseType2,
    }),
  ]);
  console.log("Seeded expenses.");

  // --- Incomes (4, 2 per user) ---
  const incomeRepo = dataSource.getRepository(Income);
  await incomeRepo.save([
    incomeRepo.create({
      name: "Monthly Salary",
      amount: 4000.0,
      user: user1,
      account: account1,
      incomeType: incomeType1,
    }),
    incomeRepo.create({
      name: "Design Project",
      amount: 600.0,
      user: user1,
      account: account2,
      incomeType: incomeType2,
    }),
    incomeRepo.create({
      name: "Monthly Salary",
      amount: 3500.0,
      user: user2,
      account: account3,
      incomeType: incomeType1,
    }),
    incomeRepo.create({
      name: "Consulting",
      amount: 400.0,
      user: user2,
      account: account4,
      incomeType: incomeType2,
    }),
  ]);
  console.log("Seeded incomes.");

  // --- Subscriptions (4, 2 per user) ---
  const subscriptionRepo = dataSource.getRepository(Subscription);
  await subscriptionRepo.save([
    subscriptionRepo.create({
      name: "Netflix",
      amount: 15.99,
      user: user1,
      account: account1,
      subscriptionType: subscriptionType1,
    }),
    subscriptionRepo.create({
      name: "GitHub Pro",
      amount: 4.0,
      user: user1,
      account: account2,
      subscriptionType: subscriptionType2,
    }),
    subscriptionRepo.create({
      name: "Spotify",
      amount: 9.99,
      user: user2,
      account: account3,
      subscriptionType: subscriptionType1,
    }),
    subscriptionRepo.create({
      name: "JetBrains IDE",
      amount: 24.9,
      user: user2,
      account: account4,
      subscriptionType: subscriptionType2,
    }),
  ]);
  console.log("Seeded subscriptions.");

  await dataSource.destroy();
  console.log("Seeding complete.");
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
