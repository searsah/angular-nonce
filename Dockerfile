# Use the official NGINX image as the base image
FROM nginx

# Remove the default NGINX configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the Angular app files to the NGINX document root
COPY dist/browser /usr/share/nginx/html

# Copy a custom NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d

# Expose port 80 for the NGINX server
EXPOSE 80

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]
