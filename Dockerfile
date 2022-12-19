# ==== CONFIGURE =====
# Use a Node 17 base image
FROM node:17-alpine as build
# Set the working directory to /app inside the container
WORKDIR /portfolio
# Copy app files
COPY package*.json .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm install
COPY . .
# Build the app
RUN npm run build

# ==== NGinx =======
FROM nginx:1.19
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /portfolio/build /usr/share/nginx/html