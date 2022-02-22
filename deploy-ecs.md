

### nginx config

server { # 服务器端口使用 443，开启 ssl, 这里 ssl 就是上面安装的 ssl 模块
listen 443 ssl; # 域名，多个以空格分开
server_name wrtc-star1.zicui.net;

    # ssl证书地址
    ssl_certificate     /etc/nginx/cert/pub.pem;  # pem文件的路径
    ssl_certificate_key  /etc/nginx/cert/prev.key; # key文件的路径

    # ssl验证相关配置
    ssl_session_timeout  5m;    #缓存有效期
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;    #加密算法
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;    #安全链接可选的加密协议
    ssl_prefer_server_ciphers on;   #使用服务器端的首选算法

        location / {
                proxy_pass  http://0.0.0.0:8987;
                #下面 这两行是为了能把wss 转发到ws
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection upgrade;
        }

}
