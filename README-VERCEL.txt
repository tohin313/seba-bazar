SEBA BAZAR — Vercel Production Setup

1. Connect the GitHub repository to Vercel.
2. Connect the existing Neon database to the Vercel project.
3. The application accepts DATABASE_URL, POSTGRES_URL, or POSTGRES_URL_NON_POOLING.
4. In Neon SQL Editor, run schema.sql once.
5. In Vercel > Environment Variables > Production, set:
   ADMIN_USERNAME
   ADMIN_PASSWORD
   ADMIN_SESSION_SECRET
6. Redeploy after changing environment variables.
7. Test:
   /api/health
   /request
   /track
   /admin/login

IMPORTANT:
- Never commit .env, passwords, or database secrets.
- The Neon integration variables are secrets; do not expose their values publicly.
