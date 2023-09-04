This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

SQLite rps stats:

```
WITH logs_rounded_to_seconds AS (
  SELECT
    strftime('%s', created_at) AS rounded_created_at,
    created_at
  FROM
    logs
  WHERE endpoint_id = 1
  ORDER BY id DESC

),
logs_with_request_count AS (
  SELECT
  	created_at,
    rounded_created_at,
    COUNT(1) AS requests
  FROM
    logs_rounded_to_seconds
  GROUP BY
    rounded_created_at
)
SELECT
  STRFTIME('%Y/%m/%d %H:%M:%S', created_at) AS created_at,
  requests as rps
FROM
  logs_with_request_count
ORDER BY created_at DESC;
```

```
INSERT INTO "relay_payload_templates" ("id", "title", "body", "created_at") VALUES
('1', 'DLR', '{"dlr": {"sms_message_id": @response.id, "status": "delivered"}}', NULL);
```
```
update endpoints set relay_enabled = 1, relay_target = 'dlr.callback_endpoint', relay_method = 'POST', relay_payload_template_id = 1 where id = 1;
```