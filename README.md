## Introduction

<h3>- What you can do in Jay web </h3>

- Jay web provides a training game for investing with real data to simulate realistic investment scenarios and help users improve their skills.

- Users of Jay web can also take advantage of the communication page, which enables them to exchange investment-related information and ideas with others.

## Some features of Jay web

         1. Jay web uses a memory-dependent backend server instead of a traditional database like MongoDB or MYSQL.
         This means that Apollo server functions as the backend.
         As a result, there are certain advantages and disadvantages associated with this approach.

          - Advantage : Users' personal data, including passwords, cannot be accessed as there is no database. Additionally, the application may run more efficiently, potentially resulting in faster load times.

          - Disadvantage: If the Apollo server reloads or experiences errors, all data may be lost


         2. Fetching Open API data to the client is significantly faster due to the power of GQL in Apollo.


         3. User password security is strengthened through the use of Bcrypt and token.


         4. I created a customizable sidebar component with cookies that can be reused in other projects.

         5. React Hook Form is used for input validation checks.

<div >
      <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white" />
      <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white" />
      <img src="https://img.shields.io/badge/Apollo GraphQL-311C87?style=flat&logo=Apollo GraphQL&logoColor=white" />
      <img src="https://img.shields.io/badge/Recoil-0928FF?style=flat&logo=Atom&logoColor=white" />
      <img src="https://img.shields.io/badge/Apache ECharts-AA344D?style=flat&logo=ApacheECharts&logoColor=white" />
      <img src="https://img.shields.io/badge/Ant Design-0170FE?style=flat&logo=AntDesign&logoColor=white" />
   </div>
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# and then
npm install
```
