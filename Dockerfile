FROM node:16-alpine
ENV NODE_ENV=production
ENV PORT=3000
WORKDIR /usr/src/app
COPY dist/* dist/test-app/
COPY package.json .
EXPOSE $PORT
RUN chown -R node /usr/src/app
USER node
RUN cd /usr/src/app
CMD ["npm", "run", "serve:ssr"]