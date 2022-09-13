# Deploy OrganiGraph to production

This guide will help you deploy OrganiGraph to a production environment.

It includes:
- [Traefik](https://traefik.io) to orchestrate domain names and certificates
- [Apache Jena Fuseki](https://jena.apache.org/documentation/fuseki2/) triplestore to store semantic data (on port 3030)
- [Redis](https://redis.io) to cache data and improve performances

## Configuration

In your DNS registrar, you will need to point two domains to your server:

- `data.mydomain.com` with the domain name where your data will be stored
- `mydomain.com` with the domain name where the frontend will be available

In `docker-compose.yml`:

- Replace `data.mydomain.com` with the domain name where your data will be stored
- Replace `mydomain.com` with the domain name where the frontend will be available
- Replace `myemail@mydomain.com` by your email address (this is for Let's encrypt certificates)
- Replace `mypassword` with the password you want for the Fuseki admin

In `middleware/app/.env.local`:

- Replace `data.mydomain.com` with the domain name where your data will be stored
- Replace `mypassword` by the previously set Fuseki password
- Add the configuration required to connect to your OIDC server

In `frontend/app/.env.local`:

- Replace `data.mydomain.com` with the domain name where your data will be stored
- Replace `My instance` with the name of your instance

> Any file added to the `middleware/app` and `frontend/app` directories will be copied to the Docker containers, eventually overwriting existing files.

## Launch

```bash
docker-compose build
docker-compose up -d
```
