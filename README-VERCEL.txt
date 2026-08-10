SEBA BAZAR — BANGLADESH-WIDE NEXT.JS / VERCEL PRODUCTION MVP

PROJECT SCOPE
- Platform scope: ALL BANGLADESH.
- Launch market: COX'S BAZAR.
- The website is NOT limited to Cox's Bazar.
- The interface uses Bangladesh-wide wording and location selection.
- Cox's Bazar is shown only as the initial launch/operational market.
- Future districts/cities can be activated without redesigning the core platform.

DEPLOY
1. Put the contents of this folder at the ROOT of a GitHub repository.
2. Import the repository into Vercel.
3. Use Node 20.9+.
4. Create a Neon/PostgreSQL database and add DATABASE_URL in Vercel Environment Variables.
5. Run schema.sql once against the database.
6. Add:
   ADMIN_USERNAME=your-admin-username
   ADMIN_PASSWORD=a-long-random-password
   ADMIN_SESSION_SECRET=a-long-random-secret
7. Deploy.
8. Test:
   /api/health
   /request
   /track
   /admin/login

DATABASE
This project uses @neondatabase/serverless and DATABASE_URL. Do not commit secrets.

IMPORTANT
- This is a production-oriented MVP, not a claim of legal/commercial completeness.
- Before public advertising, add CAPTCHA/Turnstile, stronger rate limiting/WAF, monitoring, backup/retention, real business contact information, and a legal review of Privacy/Terms/Refund policies.
- Payment gateway and WhatsApp/SMS automation can be added after the request workflow is validated.
