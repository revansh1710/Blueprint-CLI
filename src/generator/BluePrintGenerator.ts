import fs from 'fs/promises';
export async function generateBluePrint(answers: any, score: number) {
    await fs.mkdir(".blueprint", { recursive: true });
    const content = `
# Project Blueprint

## Problem
${answers.problem}

## Target User
${answers.user}

## MVP Features
${answers.features}

## Architecture
${answers.architecture}

## Risks
${answers.risks}

## Success Metrics
${answers.success}

## Readiness Score
${score}
`;

    await fs.writeFile(".blueprint/blueprint.md", content);

    console.log("\n📂 Blueprint generated successfully!");


}