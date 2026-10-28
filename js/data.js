/* ===== CENTRAL DATA FILE: edit this file to update the site =====
   Anything marked TODO is a placeholder. Add only real, verified information. */
window.SITE={
 profile:{
  email:"",    // TODO: your real email, e.g. "name@example.com"
  github:"",   // TODO: e.g. "https://github.com/your-username"
  linkedin:""  // TODO: optional
 },
 formEndpoint:"", // TODO: form service URL (see README). Empty = the form validates but sends nothing.
 // Skill item = [name, level 0-100 (self-assessed: edit honestly), icon text]
 skills:[
  {cat:"Frontend Development",items:[["HTML5",75,"H5"],["CSS3",70,"C3"],["JavaScript",60,"JS"],["Responsive Web Design",70,"RW"],["Bootstrap",55,"Bs"]]},
  {cat:"Backend Development",items:[["Python",65,"Py"],["Flask",60,"Fl"],["REST API fundamentals",45,"API"],["Server-side programming",55,"SS"]]},
  {cat:"Databases",items:[["SQL fundamentals",60,"SQL"],["MySQL",60,"My"],["Database design",55,"DB"],["CRUD operations",70,"CR"],["Relational database concepts",60,"RD"]]},
  {cat:"Tools and Deployment",items:[["Visual Studio Code",80,"VS"],["Git",55,"Git"],["GitHub",55,"GH"],["Render",50,"Rn"],["Environment variables and deployment basics",50,"Env"]]},
  {cat:"Additional Learning Interests",learning:true,items:[["React",0,"Re"],["Advanced backend development",0,"Be"],["PostgreSQL",0,"Pg"],["Artificial Intelligence and Machine Learning",0,"AI"],["Cybersecurity and networking",0,"Sec"]]}
 ],
 projects:[
  {title:"Etmad Dormitory Management System",status:"Featured project",
   summary:"A management system designed for dormitory operations, built with Flask, Python and MySQL.",
   overview:"A web-based management system designed for dormitory operations, with database-driven management functionality. Deployed using Render and Aiven MySQL.",
   tech:["Python","Flask","MySQL","HTML/CSS/JS","Render","Aiven MySQL"],
   features:["Database-driven management functionality"], // TODO: add each feature ONLY once verified
   repo:"", // TODO: GitHub repository URL
   demo:""  // TODO: live demo URL (only if public and working)
  },
  {title:"Future project 1",status:"Placeholder",summary:"Reserved for a future project. Nothing has been built here yet.",tech:["To be decided"],placeholder:true},
  {title:"Future project 2",status:"Placeholder",summary:"Reserved for a future project. Nothing has been built here yet.",tech:["To be decided"],placeholder:true}
 ]
};
