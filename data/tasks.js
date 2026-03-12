const initialTask = [
    { id: crypto.randomUUID(), title: "Wireframes", desc: "Create wireframes for all pages", status: "to-do", category: "design", date: "Aug 26" },
    { id: crypto.randomUUID(), title: "Logo Design", desc: "Design company logo and variants", status: "in-progress", category: "design", date: "Aug 27" },
    { id: crypto.randomUUID(), title: "API Setup", desc: "Initialize REST API endpoints", status: "to-do", category: "backend", date: "Aug 28" },
    { id: crypto.randomUUID(), title: "Database Schema", desc: "Design database tables and relations", status: "to-do", category: "backend", date: "Aug 29" },
    { id: crypto.randomUUID(), title: "User Authentication", desc: "Implement login and signup flows", status: "in-progress", category: "backend", date: "Aug 30" },
    { id: crypto.randomUUID(), title: "Frontend Layout", desc: "Build main layout components", status: "done", category: "frontend", date: "Aug 31" },
    { id: crypto.randomUUID(), title: "Navigation Bar", desc: "Create responsive navigation menu", status: "in-progress", category: "frontend", date: "Sep 1" },
    { id: crypto.randomUUID(), title: "Responsive Design", desc: "Ensure mobile and tablet support", status: "to-do", category: "design", date: "Sep 2" },
    { id: crypto.randomUUID(), title: "Form Validation", desc: "Add client-side form validation", status: "to-do", category: "frontend", date: "Sep 3" },
    { id: crypto.randomUUID(), title: "Error Handling", desc: "Implement global error handling", status: "in-progress", category: "backend", date: "Sep 4" },
    { id: crypto.randomUUID(), title: "Testing Suite", desc: "Write unit and integration tests", status: "to-do", category: "qa", date: "Sep 5" },
    { id: crypto.randomUUID(), title: "Documentation", desc: "Create API and code documentation", status: "to-do", category: "documentation", date: "Sep 6" },
    { id: crypto.randomUUID(), title: "Color Palette", desc: "Define brand colors and scheme", status: "done", category: "design", date: "Aug 25" },
    { id: crypto.randomUUID(), title: "Component Library", desc: "Build reusable UI components", status: "in-progress", category: "frontend", date: "Sep 7" },
    { id: crypto.randomUUID(), title: "Performance Optimization", desc: "Optimize database queries and caching", status: "done", category: "backend", date: "Sep 8" },
    { id: crypto.randomUUID(), title: "Security Review", desc: "Audit security vulnerabilities", status: "done", category: "backend", date: "Sep 9" },
    { id: crypto.randomUUID(), title: "User Feedback", desc: "Collect and analyze user feedback", status: "done", category: "qa", date: "Aug 24" },
    { id: crypto.randomUUID(), title: "Deployment Setup", desc: "Configure CI/CD pipeline", status: "done", category: "devops", date: "Sep 10" },
    { id: crypto.randomUUID(), title: "Analytics Integration", desc: "Integrate tracking and analytics", status: "in-progress", category: "frontend", date: "Sep 11" },
    { id: crypto.randomUUID(), title: "Cache Strategy", desc: "Implement caching mechanism", status: "in-progress", category: "backend", date: "Sep 12" },
    { id: crypto.randomUUID(), title: "Mobile Testing", desc: "Test on various mobile devices", status: "done", category: "qa", date: "Sep 13" },
    { id: crypto.randomUUID(), title: "UI Polish", desc: "Refine visual details and animations", status: "in-progress", category: "design", date: "Sep 14" },
    { id: crypto.randomUUID(), title: "Email Templates", desc: "Create responsive email templates", status: "to-do", category: "frontend", date: "Sep 15" },
    { id: crypto.randomUUID(), title: "Version Control", desc: "Setup Git repositories and workflows", status: "done", category: "devops", date: "Aug 23" }
];

export default initialTask;