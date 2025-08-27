export const portfolioData = {
  personalInfo: {
    name: "Ankush Naik",
    title: "AI & Full-Stack Developer",
    location: "Nagpur, India",
    email: "ankushnaik0597@gmail.com",
    phone: "+91 8380974667",
    linkedin: "linkedin.com/in/ankush-naik-467193113/",
    github: "github.com/ankushnaik97",
    objective: "AI and Full-Stack Developer with 4 years of experience in building scalable web and AI-driven applications. Skilled in Python, JavaScript, React.js, Angular, and Node.js with expertise in RAG-based Chatbots using Azure OpenAI Service, Azure AI Search, and LangChain."
  },
  
  skills: {
    languages: ["JavaScript", "HTML5", "CSS3", "Python", "Java", "TypeScript"],
    frameworks: ["React.js", "Angular.js", "Node.js", "Express.js", "Material-UI", "LangChain"],
    technologies: ["TypeScript", "Android UI", "AJAX", "RAG Chatbot Architecture", "Prompt Engineering"],
    databases: ["MySQL", "MongoDB", "Azure Cosmos DB"],
    cloud: ["Azure OpenAI Service", "Azure AI Search", "Azure Functions", "Azure Web App", "Azure Blob Storage", "Azure APIM", "Azure Defender"],
    ai: ["ChatGPT API (Azure OpenAI)", "Google Gemini API", "Embedding & Indexing", "Vector Similarity Search", "LLM Fine-tuning"],
    other: ["Agile Methodologies", "Code Reviews", "Performance Optimization", "Accessibility & Cross-Browser Compatibility"]
  },
  
  certifications: [
    "Microsoft Azure AI Engineer Associate",
    "Microsoft Database Administrator Associate",
    "Microsoft Administrator Associate"
  ],
  
  experience: [
    {
      company: "Fujitsu Consulting India Pvt Ltd",
      position: "Front-End / AI Engineer",
      period: "Feb 2022 - Present",
      projects: [
        {
          name: "AI-powered Inhouse Chat Assistant (Chat AI App)",
          details: [
            "Designed and implemented RAG-based Chatbot for Fujitsu employees' daily searches (code snippets, troubleshooting, documentation)",
            "Integrated both ChatGPT API (Azure OpenAI) and Google Gemini API for flexible LLM selection",
            "Implemented language toggle feature for Japanese/English outputs, improving global usability",
            "Built document chunking & embedding pipelines in Python with LangChain",
            "Stored vector indexes in Azure AI Search for similarity-based retrieval",
            "Deployed on Azure Web App with Azure Functions backend orchestration",
            "Secured APIs using Azure APIM and Azure Defender",
            "Delivered scalable RAG chatbot that significantly reduced internal knowledge search time"
          ],
          technologies: ["Python", "Azure OpenAI (ChatGPT)", "Google Gemini API", "Azure AI Search", "LangChain", "Embedding & Indexing", "Azure Functions", "APIM", "RAG Architecture", "Multilingual Output"]
        },
        {
          name: "AI-powered Japanese-English Translation Solution",
          details: [
            "Developed translation system using Fujitsu proprietary Japanese dataset",
            "Leveraged Azure Blob Storage for dataset management and preprocessing",
            "Fine-tuned OpenAI language models for improved Japanese–English translation accuracy",
            "Ensured cultural and contextual correctness in translations",
            "Integrated solution into internal workflows for efficient multilingual document processing"
          ],
          technologies: ["Python", "Azure Blob Storage", "Azure OpenAI Service", "Machine Translation", "Language Fine-tuning", "Dataset Preprocessing"]
        },
        {
          name: "Utsunomiya City Portal",
          period: "Sept 2023 – Present",
          details: [
            "Built scalable, responsive web application for city staff to manage operational data",
            "Implemented CSV file handling with role-based access control",
            "Designed reusable UI components using Angular, TypeScript, Angular Material, and Sass",
            "Applied RxJS for reactive programming and state handling",
            "Collaborated with backend and cloud teams for API integration",
            "Contributed to Azure DevOps CI/CD pipelines"
          ],
          technologies: ["Angular", "TypeScript", "RxJS", "Angular Material", "Sass", "Node.js", "Express.js", "MongoDB", "Azure DevOps"]
        }
      ]
    },
    {
      company: "MelonSlice Pvt Ltd",
      position: "Junior Full Stack Developer",
      period: "Aug 2021 - Dec 2021",
      details: [
        "Built and redesigned websites using Angular, Node.js, Express.js, JavaScript, MongoDB, JSON, HTML, CSS",
        "Collaborated with senior developers on various projects"
      ]
    },
    {
      company: "Frooty Studios",
      position: "JavaScript Developer",
      period: "3 months internship",
      details: [
        "Developed static web pages into dynamic web pages using JavaScript, HTML5, CSS3, Bootstrap",
        "Created responsive web templates and Chrome Extensions"
      ]
    },
    {
      company: "SSIT PVT LTD",
      position: "Software Developer",
      period: "6 months internship",
      details: [
        "Developed various web pages and managed/updated databases",
        "Worked closely with the web design team using JavaScript, HTML, CSS"
      ]
    }
  ],
  
  projects: [
    {
      name: "Grammar Error Detection & Correction LLM CLI Application",
      description: "Developed AI-driven CLI application that analyzes English sentences and detects grammatical errors. Corrects tense, articles, subject-verb agreement, pronouns, and other grammatical structures. Generated 1M+ error-correction sentence pairs by injecting realistic mistakes into clean corpus data. Fine-tuned T5-small transformer model for sentence-level grammar correction. Implemented command-line interface for real-time grammar correction.",
      technologies: ["Python", "T5-small Transformer (Hugging Face)", "WikiText-103", "OSCAR", "OpenSubtitles", "Hugging Face Transformers", "Datasets", "PyTorch"]
    },
    {
      name: "Nifty50 Price Prediction Model",
      description: "Built machine learning system to forecast Nifty50 index prices using historical data. Engineered 25+ time-series features for improved prediction accuracy. Implemented Gradient Boosting model achieving 94.5% prediction accuracy. Developed Python CLI tool with data visualization capabilities. Incorporated confidence interval predictions for risk assessment.",
      technologies: ["Python", "Pandas", "Scikit-learn", "yfinance", "Matplotlib"]
    },
    {
      name: "CodeSense AI - Intelligent Code Error Detection System using LLMs",
      description: "Developed AI system analyzing Python, JavaScript, Java, and C++ code snippets. Detects syntax and logical errors with human-like explanations. Created custom datasets with 400,000+ code samples with diverse bug patterns. Implemented CLI interface for real-time error analysis.",
      technologies: ["Python", "HuggingFace Transformers", "PyTorch", "T5 Model Architecture", "Datasets Library"]
    },
    {
      name: "Resume Analyzer and ATS Score Generator",
      description: "Developed using Google Gemini API for resume analysis. Provides improvement suggestions based on job descriptions. Generates ATS compatibility scores. Currently enhancing with Machine Learning model.",
      technologies: ["React.js", "Node.js", "Google Gemini-API"]
    }
  ],
  
  education: {
    degree: "Bachelor of Engineering in Electronics & Telecommunication",
    institution: "GH Raisoni College of Engineering (Autonomous), Nagpur",
    graduationYear: "2020",
    cgpa: "6.52"
  },
  
  publications: [
    {
      title: "In the Nexus of Human and Artificial Intelligence: Challenges and Solutions",
      journal: "International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
      year: "2023"
    },
    {
      title: "The Future of Artificial Intelligence: Advancing Intelligence Across Sectors",
      journal: "International Journal of Progressive Research in Engineering Management and Science (IJPREMS)",
      year: "2023"
    }
  ]
};