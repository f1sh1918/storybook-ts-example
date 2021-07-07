FROM nginx:stable-alpine
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY storybook-static/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]