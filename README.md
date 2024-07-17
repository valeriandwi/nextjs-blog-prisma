# Next.js Blog with Prisma, NextAuth, and Vercel Postgres

This repository contains the source code for a full-stack blog application built using Next.js, Prisma, NextAuth, and Vercel Postgres. This project is detailed in the following article: [Simple Full Stack with Next.js 14, Prisma, NextAuth 5, and Vercel Postgres (Part 1)](https://medium.com/@valerian.dwi.p/simple-full-stack-with-nextjs-14-prisma-nextauth-5-and-vercel-postgres-part-1-48294f48eff5).

## Features

- **Next.js 14**: React framework for building fast, modern web applications.
- **Prisma**: Next-generation ORM for database access.
- **NextAuth**: Authentication for Next.js applications.
- **Vercel Postgres**: Serverless PostgreSQL database managed by Vercel.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/valeriandwi/nextjs-blog-prisma.git
   cd nextjs-blog-prisma
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
    POSTGRES_URL="your_postgres_url"
    POSTGRES_PRISMA_URL="your_prisma_url"
    POSTGRES_URL_NO_SSL="your_url_no_ssl_url"
    POSTGRES_URL_NON_POOLING="your_url_non_pooling"
    POSTGRES_USER="your_pg_user"
    POSTGRES_HOST="your_pg_host"
    POSTGRES_PASSWORD="your_pg_password"
    POSTGRES_DATABASE="your_db"
   ```

4. Push the Prisma schema to your database:

   ```bash
   npx prisma db push
   ```

5. Start the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## Usage

- Visit the homepage to see a list of blog posts.
- Sign in using the authentication system provided by NextAuth.
- Create, edit, and delete blog posts as an authenticated user.

## Deployment

This project is configured to be deployed on [Vercel](https://vercel.com/). Follow these steps for deployment:

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Set up the environment variables in the Vercel dashboard.
4. Deploy the project.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.
