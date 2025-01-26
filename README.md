# **Project Management App**

A simple task management and collaboration tool built using the T3 stack, with a serverless backend powered by AWS SST and Supabase for database integration.

---

## **Features**
- Task creation, assignment, and tracking
- User profiles and project settings
- Serverless backend using AWS SST
- Supabase for database operations
- Dashboard for task and project management (optional)
- Unit tests for key functionalities

---

## **Tech Stack**
- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [AWS SST](https://sst.dev/), [tRPC](https://trpc.io/)
- **Database**: [Supabase](https://supabase.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **ORM**: [Prisma](https://www.prisma.io/)

---

## **Setup Instructions**

### Prerequisites
1. **Node.js**: Install [Node.js](https://nodejs.org/) (version 16.x or 18.x).
2. **npm**: Ensure npm is installed. Update if necessary:
   ```bash
   npm install -g npm@latest
   ```
3. **AWS CLI**: Install and configure the [AWS CLI](https://aws.amazon.com/cli/).
4. **Supabase**: Create a Supabase account and project.

---

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-management-app.git
   cd project-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the project root and add the following:
     ```env
     DATABASE_URL=your_supabase_connection_string
     NEXTAUTH_URL=http://localhost:3000
     AUTH_DISCORD_ID=your_discord_client_id
     AUTH_DISCORD_SECRET=your_discord_client_secret
     ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Access the app:
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## **Architecture Overview**

### Directory Structure
```plaintext
.
├── prisma/              # Prisma schema and migrations
├── src/                 # Source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # Next.js pages
│   ├── server/          # Backend logic and API routes
│   ├── styles/          # Tailwind CSS styles
│   └── tests/           # Unit tests
├── sst/                 # SST configurations and stacks
├── public/              # Static assets
└── package.json         # Project dependencies and scripts
```

### Key Components
- **Prisma**: Manages database schema and migrations.
- **tRPC**: Simplifies API development by type-sharing between frontend and backend.
- **SST**: Serverless backend deployment on AWS.

---

## **Testing Guide**

### Running Tests
1. Ensure dependencies are installed:
   ```bash
   npm install
   ```

2. Run all tests:
   ```bash
   npm test
   ```

### Example Test Case
Tests are located in the `tests/` directory. Example:
```tsx
import { render, screen } from "@testing-library/react";
import Tasks from "../pages/tasks";

test("renders task management page", () => {
  render(<Tasks />);
  const heading = screen.getByText(/Task Management/i);
  expect(heading).toBeInTheDocument();
});
```

---

## **Deployment Steps**

### Prerequisites
- AWS credentials must be configured using the AWS CLI:
  ```bash
  aws configure
  ```

### Deploy SST Backend
1. Deploy the backend to AWS:
   ```bash
   npx sst deploy
   ```

2. Note the API endpoint from the output.

### Deploy Frontend
1. Build the frontend:
   ```bash
   npm run build
   ```

2. Start the production server locally or deploy to a hosting service (e.g., Vercel, Netlify).

---

## **Contributing**
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

