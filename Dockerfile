FROM node:16-alpine
COPY ./ /app

EXPOSE 8987

# CMD jsipfs daemon
WORKDIR /app
RUN npm i 
# --registry https://registry.npm.taobao.org
RUN npm run build

# Make the image a bit smaller
RUN npm cache clear --force

CMD pwd
CMD node -v

CMD node ./dist/index.js
