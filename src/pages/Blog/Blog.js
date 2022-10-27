import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div className="mt-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>what is cors?</Accordion.Header>
          <Accordion.Body>
            Cors full form is "cross origin resource sharing". It is a mechanism
            of requesting restricted content or allowing restricted content from
            another domain or website.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            I am using firebase for authenticate user. Authentication user is a
            complicated and risky task which firebase made easy and more safe.
            For this reason i am using firebase. There are some other options or
            alternative availabe such as Auth0, Supabase and also we can
            implement authentication in backend.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>
            Private route can be implemented by react router. We can check if
            user is logged in or not then by checking user's logged in state we
            can allow user to visit private route. If user is not logged we can
            redirect them to a public default route.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
            Node js is a development platform for executing javascript code in
            server side. Node js run on chrome V8 engine which convert
            javascript code to machine code. That's how node js works.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
