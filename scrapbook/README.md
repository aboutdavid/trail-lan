# the trail scrapbook

Forked from [hackclub/the-zephyr-chronicles](https://github.com/hackclub/the-zephyr-chronicles/tree/main)

### Installation

```
npm install --legacy-peer-deps
npx prisma db push
mkdir public/files
docker-compose up -d # it will be on port 8096
```

### CLI Commands

`node lsuser` - Lists all users and how many posts each user made

`node createuser [username]` - Creates a user

`node rmuser [username]`- Deletes a user
