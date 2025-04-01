FROM hexletbasics/base-image

ENV NODE_PATH=/exercises-pre-course-javascript/src
ENV PATH=/exercises-pre-course-javascript/bin:/exercises-pre-course-javascript/node_modules/.bin:$PATH

WORKDIR /exercises-pre-course-javascript

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
