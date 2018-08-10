// @flow

import React from "react";
import { Link, Text } from "../../components";

export function chooseExperience(company: string) {
  switch (company) {
    case "google":
    case "sendgrid":
      return [
        <Text>
          Create backitup, a utility program for regularly scheduling database
          backups to Amazon S3; saving the company $30 per month (<b>Go</b>,
          RethinkDB)
        </Text>,
        <Text>
          Redesign the entire application stack for microservice-based
          architecture; increasing API throughput by 300% (Docker,{" "}
          <b>Kubernetes</b>)
        </Text>,
        "Create Ardent Gradebook, a web app used everyday by teacher assistants; reducing time to grade student assignments by ~50% (Python, React)",
        "Develop Ardent HQ, a web app for creation of course curricula, student and classroom management; currently hosting 50 courses and 1,000 users (Node.js, RethinkDB, GraphQL, React, Flow)",
        <Text>
          Maintain{" "}
          <Link to="https://itunes.apple.com/us/app/ardent-solve/id1334285655">
            Ardent Solve
          </Link>
          , an iPad app allowing students to complete assignments; currently
          serving 400 students (Node.js, RethinkDB, REST, React Native)
        </Text>,
        "Interview potential frontend engineers and interns",
        "Lead teams to build the following applications:",
        "Supervise Ardent Classroom, an iPad app for staff; easing student attendance and file management (React Native)",
        "Supervise Ardent Family, an iOS and Android app for parents; notifying of student performance and course updates (React Native)"
      ];
    default:
      return [
        "Create Ardent Gradebook, a web app used everyday by teacher assistants; reducing time to grade student assignments by ~50% (Python, React)",
        "Develop Ardent HQ, a web app for creation of course curricula, student and classroom management; currently hosting 50 courses and 1,000 users (Node.js, RethinkDB, GraphQL, React, Flow)",
        <Text>
          Maintain{" "}
          <Link to="https://itunes.apple.com/us/app/ardent-solve/id1334285655">
            Ardent Solve
          </Link>
          , an iPad app allowing students to complete assignments; currently
          serving 400 students (Node.js, RethinkDB, REST, React Native)
        </Text>,
        "Redesign the entire application stack for microservice-based architecture; increasing API throughput by 300% (Docker, Kubernetes)",
        "Create backitup, a utility program for regularly scheduling database backups to Amazon S3; saving $30 per month (Go, RethinkDB)",
        "Interview potential frontend engineers and interns",
        "Lead teams to build the following applications:",
        "Supervise Ardent Classroom, an iPad app for staff; easing student attendance and file management (React Native)",
        "Supervise Ardent Family, an iOS and Android app for parents; notifying of student performance and course updates (React Native)"
      ];
  }
}
