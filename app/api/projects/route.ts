import { NextResponse } from "next/server"

const projects = [
  {
    id: 12,
    title: "SENN",
    subtitle: "pytorch, python",
    description: "testing self-explaining neural networks against 3d rotational perturbations.",
    imageSrc: "/images/projects/senn.png",
    link: "https://github.com/ngu-khoi/SENN/blob/main/2822r_Final_Report.pdf",
    github: "https://github.com/ngu-khoi/SENN"
  },
  {
    id: 11,
    title: "Planflux",
    subtitle: "next.js, tailwind css, shadcn, django, azure functions",
    description: "intelligent document processing saas.",
    imageSrc: "/images/projects/planflux.png",
    link: "https://planflux.com",
    github: ""
  },
  {
    id: 10,
    title: "Kolly",
    subtitle: "next.js",
    description: "advisor to a more modern and specialized ai college consultant.",
    imageSrc: "/images/projects/kolly.png",
    link: "https://kolly.ai",
    github: ""
  },
  {
    id: 9,
    title: "Delilah",
    subtitle: "next.js, django",
    description: "ai powered text editor and education saas helping students write personal statements and essays.",
    imageSrc: "/images/projects/delilah.png",
    link: "https://www.delilah.ai/",
    github: "https://github.com/ngu-khoi"
  },
  {
    id: 8,
    title: "Personal Website",
    subtitle: "next.js",
    description: "my personal website.",
    imageSrc: "/images/projects/personal_website-removebg-preview.png",
    link: "https://khoi.ai",
    github: "https://github.com/ngu-khoi/ngu-khoi.github.io"
  },
  {
    id: 7,
    title: "Pong",
    subtitle: "swiftui, swift, django",
    description: "anonymous social media platform. effectively a precursor to sidechat.",
    imageSrc: "",
    link: "",
    github: ""
  },
  {
    id: 6,
    title: "&Pizza Auto Order Bot",
    subtitle: "python, selenium",
    description: "automated ordering bot for &pizza.",
    imageSrc: "/images/projects/&pizza.png",
    link: "",
    github: "https://github.com/ngu-khoi/andpizza"
  },
  {
    id: 5,
    title: "Durable Functions Distributed Tracing Repro",
    subtitle: "azure durable functions",
    description: "tutorial on azure durable functions and a repro of a distributed tracing issue (wip)",
    imageSrc: "/images/projects/azure_functions.png",
    link: "https://github.com/Azure/azure-functions-durable-extension/issues/2662#issuecomment-2040475863",
    github: "https://github.com/ngu-khoi/durable-distributed-tracing-repro"
  },
  {
    id: 4,
    title: "PenPal",
    subtitle: "react",
    description: "react text editor with ai",
    imageSrc: "/images/projects/penpal.png",
    link: "https://devpost.com/software/gpt-text-editor",
    github: "https://github.com/artemas-radik/penpal"
  },
  {
    id: 3,
    title: "Finetune Cost Benefit",
    subtitle: "python",
    description: "cost benefit analysis for finetuning llms",
    imageSrc: "/images/projects/finetune_costbenefit.png",
    link: "https://github.com/ngu-khoi/finetune-costbenefit/blob/main/CostBenefit_Analysis_of_Finetuning_Worse_LLMs_for_Specific_Instructions.pdf",
    github: "https://github.com/ngu-khoi/finetune-costbenefit"
  },
  {
    id: 2,
    title: "ISEF ADNI Project",
    subtitle: "python, pytorch",
    description: "a cv project that won 4th place at isef 2021.",
    imageSrc: "/images/projects/regeneron_isef.png",
    link: "https://abstracts.societyforscience.org/Home/FullAbstract?ISEFYears=0%2C&Category=Computational%20Biology%20and%20Bioinformatics&Finalist=nguyen&AllAbstracts=True&FairCountry=Any%20Country&FairState=Any%20State&ProjectId=20983",
    github: "https://github.com/ngu-khoi/ISEF-ADNI"
  },
  {
    id: 1,
    title: "BRITS Project",
    subtitle: "python, pytorch",
    description: "an ml project i worked on at george mason university.",
    imageSrc: "/images/projects/mason_publishing_group.png",
    link: "https://journals.gmu.edu/index.php/jssr/article/view/3159",
    github: "https://github.com/ngu-khoi/BRITS-Realtime-Alive"
  },
  {
    id: 0,
    title: "Datamining / Webscraping Projects",
    subtitle: "python",
    description: "a collection of projects i worked on for fun.",
    imageSrc: "",
    link: "",
    github: "https://github.com/ngu-khoi/webscrape"
  }
]

export async function GET() {
  return NextResponse.json(projects)
} 