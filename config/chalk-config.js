import chalk from "chalk";

export const chalkBold = chalk.bold;
export const chalkInfo = chalk.hex("#0CCAF0");
export const chalkSuccess = chalk.hex("#FFA500");
export const chalkError = chalk.red;
export const chalkValid = chalk.green;
export const chalkSkipped = chalk.yellow;
export const chalkBalance = chalk.blue;
export const chalkToken = chalk.hex("#5C636A");

export const line = "-".repeat(process.stdout.columns);

export const log = console.log;