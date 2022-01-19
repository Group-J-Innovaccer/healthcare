FROM node:13.12.0-alpine
WORKDIR /healthcare/frontend

COPY package.json package-lock.json ./
ENV SKIP_PREFLIGHT_CHECK=true
ENV REACT_APP_API_URL='http://127.0.0.1:8000'
RUN npm install 
COPY . ./
EXPOSE 3000