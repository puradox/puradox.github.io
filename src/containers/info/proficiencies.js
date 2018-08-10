// @flow

import React from "react";
import { Text } from "../../components";

export function chooseProficiencies(company: string) {
  switch (company) {
    case "facebook":
      return [
        "HTML, CSS, JavaScript",
        "Large-scale frontend web architecture",
        <Text>
          <b>React</b>, Redux and ES2017
        </Text>,
        "Cross-platform mobile application development",
        <Text>
          <b>React Native</b>, iOS and Android
        </Text>,
        "Reliable backend architecture",
        "Go, Node.js, REST and GraphQL",
        "Scalable distributed systems with elastic application deployment",
        "Docker and Kubernetes"
      ];
    case "google":
    case "sendgrid":
      return [
        <Text>
          <b>Go</b>, C, C++, Java, JavaScript, Python
        </Text>,
        "Scalable distributed systems with elastic application deployment",
        <Text>
          Docker and <b>Kubernetes</b>
        </Text>,
        "Large-scale frontend web architecture",
        "React, Redux and ES2017",
        "Reliable backend architecture",
        "Go, Node.js, REST and GraphQL",
        "Cross-platform mobile application development",
        "React Native, iOS and Android"
      ];
    case "microsoft":
      return [
        "C++, Java, Go, Python, JavaScript",
        "Large-scale frontend web architecture",
        "React, Redux and ES2017",
        "Reliable backend architecture",
        "Go, Node.js, TypeScript, REST and GraphQL",
        "Scalable distributed systems with elastic application deployment",
        "Docker and Kubernetes",
        "Cross-platform mobile application development",
        "React Native, iOS and Android"
      ];
    default:
      return [
        "JavaScript, Go, C++, Java, Python",
        "Large-scale frontend web architecture",
        "React, Redux and ES2017",
        "Reliable backend architecture",
        "Go, Node.js, REST and GraphQL",
        "Scalable distributed systems with elastic application deployment",
        "Docker and Kubernetes",
        "Cross-platform mobile application development",
        "React Native, iOS and Android"
      ];
  }
}
