Here's the write up of the commands from the session:

npx prisma generate 

Prisma generates code unique to our application, based on our schema file. This command tells prisma we've updated our schema, and we need to the generated to be updated.

This does not update our database yet!

npx prisma migrate dev

Recreated the shadow database with our existing migrations
It compares the shadow database with our schema.prisma file
If there are any differences - a new migration is created that will bring the database up to the same state as the
schema.prisma file.

We run this command whenever we changes the schema.prisma file.

 --create-only - Creates the migration SQL - but doesn't apply it. 
 
 --skip-seed  - Tells primsa not to run the seed file

 --name ticket - Gives the migration a name (it's a fred) - this is just a label we can use to describe what the migration does
 
npx prisma migrate reset

Recreates our dev database from scratch.
Gets rid of everything! runs all the migrations
Then runs our seed file