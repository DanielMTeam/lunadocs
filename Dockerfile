FROM node:24-alpine

WORKDIR /app

# Install dependencies separately for better caching
COPY app/package*.json ./

RUN if [ -f package.json ]; then npm install; fi

# Copy project 
COPY app .

EXPOSE 4321

CMD ["sh", "/start.sh"] 
