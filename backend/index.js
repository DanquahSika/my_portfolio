import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import skills from "./routes/skill.routes.js";
import projects from "./routes/projects.routes.js";
import posts from "./routes/posts.routes.js";
import experiences from "./routes/experience.routes.js";
import achievements from "./routes/achievements.routes.js";
import blog from "./routes/blogs.routes.js"


const PORT = process.env.PORT || 4000;

const app = express()

// add middleswares imported
app.use(bodyParser.json()); // parse requests of content type - application/json
app.use(cors()); // enable  CORS request
app.use(bodyParser.urlencoded( { extended: false } )); // parse  requests of content-type - application/x-www-form-urlencoded <form> handler

//load routes
app.use("/skills", skills);
app.use("/projects", projects);
app.use("/posts", posts);
app.use("/experiences", experiences);
app.use("/achievements", achievements);
app.use('/blog', blog);

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on  port ${PORT}`);
});