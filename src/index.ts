import {Command} from 'commander'
import {initProject} from './commands/init.ts'
const Program=new Command();
Program.name("blueprint")
    .description("Project readiness CLI powered by structured planning")
    .version("1.0.0");
Program.command("init").description("Initialize project blueprint").action(initProject);

Program.parse();
