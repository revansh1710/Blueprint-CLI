import inquirer from 'inquirer'
import chalk from 'chalk'
import {runProfessionalFlow} from '../flows/ProfessionalFlow.ts'
import {runPersonalFlow} from '../flows/PersonalFlow.ts';
export async function initProject() {
    console.log(chalk.cyan(`\n Blueprint CLI Initialization\n`));
    const { projectType } = await inquirer.prompt([
        {
            type: "list",
            name: "projectType",
            message: "Select project type:",
            choices: ["Professional Project", "Personal Project"]
        }
    ]);
    if (projectType === "Professional Project") {
        await runProfessionalFlow();
    } else {
        await runPersonalFlow();
    }

}
