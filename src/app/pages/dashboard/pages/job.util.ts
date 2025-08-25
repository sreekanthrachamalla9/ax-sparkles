// job.util.ts

// Interface
export interface Job {
  company: string;
  description: string;
}

// Utility function to return mock jobs
export function getMockJobs(): Job[] {
  return [
    { 
      company: 'Company A', 
      description: 'Frontend Developer with Angular expertise. Looking for someone with 3+ years experience in modern web development.' 
    },
    { 
      company: 'Company B', 
      description: 'Backend Developer with .NET Core skills and experience in microservices architecture.' 
    },
    { 
      company: 'Company C', 
      description: 'Full Stack Developer - Angular + Node.js. Join our dynamic team working on cutting-edge fintech solutions. Remote work available with flexible hours.' 
    },
    { 
      company: 'Company D', 
      description: 'UI/UX Designer with Figma experience and strong portfolio in mobile app design.' 
    },
    { 
      company: 'Company E', 
      description: 'QA Engineer - Manual & Automation testing. Experience with Selenium, Cypress, and API testing frameworks required. Great benefits package.' 
    },
    { 
      company: 'Company F', 
      description: 'DevOps Engineer with AWS and Docker expertise. Help us scale our infrastructure to serve millions of users worldwide.' 
    },
    { 
      company: 'Company G', 
      description: 'Data Scientist with Python and ML experience.' 
    },
    { 
      company: 'Company H', 
      description: 'Mobile Developer specializing in React Native and Flutter. Work on apps used by thousands of users' 
    },
    { 
      company: 'Company I', 
      description: 'Product Manager with agile methodology experience and strong analytical skills.' 
    }
  ];
}
