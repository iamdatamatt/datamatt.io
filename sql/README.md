## How to Deploy

Use the Cloudflare Wrangler CLI to execute the SQL file. For example,

`npx wrangler d1 execute datamatt --remote --file=sql/clemson_outdoors.sql`

## How to Validate

Use the Cloudflare Wrangler CLI to query the table and check for records. For example, 

`npx wrangler d1 execute datamatt --remote --command "SELECT * FROM clemson_outdoors;"`
