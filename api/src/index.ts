import { Request, Response } from "express";

const express = require("express");

const app = express();

app.use(express.json());

const courses = [
  {
    id: 1,
    name: "Course1",
    description: "This is Course 1",
  },
  {
    id: 2,
    name: "Course2",
    description: "This is Course 2",
  },
  {
    id: 3,
    name: "Course3",
    description: "This is Course 3",
  },
];

app.get("/", (request: Request, response: Response) => {
  response.send("Hello World");
});

app.get("/courses", (request: Request, response: Response) => {
  response.send(courses);
});

app.get("/courses/:id", (request: Request, response: Response) => {
  const course = courses.find(
    (course) => course.id === parseInt(request.params.id)
  );

  if (!course) response.status(404).send("Course for given id is not found.");
  response.send(course);
});

app.post("/courses", (request: Request, response: Response) => {
  if (!request.body.name || request.body.name.length < 3) {
    response
      .status(400)
      .send("Name is required and should be minimum 3 characters");
    return;
  }

  if (!request.body.description) {
    response.status(400).send("Description is required field");
    return;
  }

  const course = {
    id: courses.length + 1,
    name: request.body.name,
    description: request.body.description,
  };

  courses.push(course);

  response.send(course);
});

app.put("/courses/:id", (request: Request, response: Response) => {
  const course = courses.find(
    (course) => course.id === parseInt(request.params.id)
  );

  if (!course) response.status(404).send("Course for give Id is not found");

  if (!request.body.name || request.body.name.length < 3) {
    response
      .status(400)
      .send("Name is required and should be minimum 3 characters");
    return;
  }

  if (!request.body.description) {
    response.status(400).send("Description is required field");
    return;
  }

  if (course) {
    course.name = request.body.name;
    course.description = request.body.description;
    response.send(course);
  }
});

app.delete(`/courses/:id`, (request: Request, response: Response) => {
  const course = courses.find(
    (course) => course.id === parseInt(request.params.id)
  );

  if (!course) {
    response.status(404).send("Course for give Id is not found");
  }

  if (course) {
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    response.send(course);
  }
});

app.listen(5000, () => console.log(`Listening to port 5000 ...`));
