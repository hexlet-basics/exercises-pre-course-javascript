FROM hexletbasics/base-image

ENV NODE_PATH /exercises-pre-course-javascript/src
ENV PATH=/exercises-pre-course-javascript/bin:$PATH

WORKDIR /exercises-pre-course-javascript

RUN npm i -g vitest
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
