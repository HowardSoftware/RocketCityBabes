FROM node:20 AS build

WORKDIR /frontend

# Copy only package files first for caching
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]