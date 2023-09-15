# BUILD

### Build image golang.

```bash

   docker build -t lucasnpinheiro/node-nginx .

```

### List image.

```bash

   docker images

```

### Run image.

```bash

   docker run lucasnpinheiro/node-nginx

```

### Pull image.

```bash

   docker pull lucasnpinheiro/node-nginx

```

### Push image.

```bash

   docker push lucasnpinheiro/node-nginx

```

### Repository

[node-nginx](https://github.com/lucasnpinheiro/node-nginx)

### Up Server

```bash

   docker compose up -d --build

```

### Logs Server

```bash

   docker compose logs -f

```

### Down Server

```bash

   docker compose down

```

### Open sistem

[localhost:8080](http://localhost:8080)

### Access container APP

```bash

   docker run -it -w /usr/src/app -v $(pwd):/usr/src/app -p 3000:3000 node:lts-hydrogen bash

```

### Access container Nginx

```bash

   docker run -it -p 8080:80 nginx:latest bash

```
