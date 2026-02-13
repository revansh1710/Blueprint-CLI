import inquirer from 'inquirer';
import chalk from 'chalk';
import {evaluateAnswers} from '../evaluation/scorer.ts';
import {generateBluePrint}  from '../generator/BluePrintGenerator.ts';
export async function runPersonalFlow() {
    console.log(chalk.yellow("\n🧪 Personal Project Detected"));
    console.log("Entering Blueprint Validation Mode...\n");
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "problem",
            message: "What problem does this project solve?"
        },
        {
            type: "input",
            name: "user",
            message: "Who is the target user?"
        },
        {
            type: "input",
            name: "features",
            message: "List MVP features:"
        },
        {
            type: "input",
            name: "architecture",
            message: "Describe planned architecture:"
        },
        {
            type: "input",
            name: "risks",
            message: "What technical risks do you foresee?"
        },
        {
            type: "input",
            name: "success",
            message: "How will you measure success?"
        }
    ]);
    const result = evaluateAnswers(answers);
    if (result.passed) {
        console.log(chalk.green("\n✅ Project Approved"));
        await generateBluePrint(answers, result.score);
    } else {
        console.log(chalk.red("\n❌ Project Not Ready"));
        console.log(`Readiness Score: ${result.score}`);

    }
}
