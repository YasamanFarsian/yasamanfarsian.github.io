import {
    Code2,
    Layout,
    Server,
    Database,
    Wrench,
    Brain,
    Users,
    MessageSquare,
    PencilRuler,
} from "lucide-react";

import {
    JavaScriptLogo,
    TypeScriptLogo,
    PythonLogo,
    SQLLogo,
    PHPLogo,
    ReactLogo,
    AngularLogo,
    VueLogo,
    HTMLLogo,
    ApiLogo,
    TailwindLogo,
    JestLogo,
    PlaywrightLogo,
    CloudLogo,
    FigmaLogo,
    AdobeXDLogo,
    GitLogo,
    NPMLogo,
    ViteLogo,
    AzureDevOpsLogo,
    WordPressLogo,
    VSCodeLogo,
    PostmanLogo,
    AxiosLogo,
} from "@/components/TechLogos";

export const skills = [
    {
        category: "Programming Languages",
        icon: <Code2 className="w-6 h-6" />,
        items: [
            { name: "JavaScript", icon: <JavaScriptLogo /> },
            { name: "TypeScript", icon: <TypeScriptLogo /> },
            { name: "Python", icon: <PythonLogo /> },
            { name: "SQL", icon: <SQLLogo /> },
            { name: "PHP", icon: <PHPLogo /> },
        ],
    },
    {
        category: "Front-End Development",
        icon: <Layout className="w-6 h-6" />,
        items: [
            { name: "React.js", icon: <ReactLogo /> },
            { name: "Angular", icon: <AngularLogo /> },
            { name: "Vue.js", icon: <VueLogo /> },
            { name: "Axios", icon: <AxiosLogo /> },
            { name: "REST API integration", icon: <ApiLogo /> },
            { name: "HTML5 , CSS3 (Tailwind)" },
           
        ],
    },
    {
        category: "Testing",
        icon: <Server className="w-6 h-6" />,
        items: [
            { name: "Jest (Unit Testing)", icon: <JestLogo />, span: 2 },
            { name: "Playwright (Automation test)", icon: <PlaywrightLogo />, span: 2 },
            { name: "Code Coverage & Quality Assurance", span: 2 },
        ],
    },
    {
        category: "Database and Cloud",
        icon: <Database className="w-6 h-6" />,
        items: [
            { name: "SQL", icon: <SQLLogo /> },
            { name: "REST APIs", icon: <ApiLogo /> },
            { name: "Cloud-based web applications", icon: <CloudLogo />, span: 2 },
            { name: "Azure DevOps (CI/CD pipelines)", icon: <AzureDevOpsLogo />, span: 2 },
        ],
    },
    {
        category: "UI/UX Design",
        icon: <PencilRuler className="w-6 h-6" />,
        items: [
            { name: "Figma", icon: <FigmaLogo /> },
            { name: "Adobe XD", icon: <AdobeXDLogo /> },
            { name: "User Interface Design", span: 2 },
            { name: "User Experience (UX) principles", span: 2 },
            { name: "Responsive and user-centered design", span: 2 },
        ],
    },
    {
        category: "Tools and Platforms",
        icon: <Wrench className="w-6 h-6" />,
        items: [
            { name: "Git / GitHub", icon: <GitLogo /> },
            { name: "NPM", icon: <NPMLogo /> },
            { name: "Vite", icon: <ViteLogo /> },
            { name: "Azure DevOps", icon: <AzureDevOpsLogo /> },
            { name: "WordPress", icon: <WordPressLogo /> },
            { name: "VS Code", icon: <VSCodeLogo /> },
            { name: "Postman", icon: <PostmanLogo /> },
        ],
    },
    {
        category: "Agile",
        icon: <Brain className="w-6 h-6" />,
        items: [
            { name: "Agile / Scrum methodologies", span: 2 },
            { name: "Cross-functional collaboration", span: 2 },
            { name: "Iterative development", span: 2 },
        ],
    },
    {
        category: "Soft Skills",
        icon: <Brain className="w-6 h-6" />,
        items: [
            { name: "Teamwork", icon: <Users className="w-4 h-4" /> },
            { name: "Communication", icon: <MessageSquare className="w-4 h-4" /> },
            { name: "Debugging", icon: <Wrench className="w-4 h-4" /> },
        ],
    },
];