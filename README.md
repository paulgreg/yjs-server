# yjs-server

That project is a [@y/websocket-server](https://github.com/yjs/y-websocket-server/) launcher with a pm2 ecosystem sample file.

## nginx configuration example

    location /yjs-ws/ {
        rewrite ^/yjs-ws/(.*) /$1 break;  # remove prefix
        proxy_pass http://127.0.0.1:6010/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
    }

