FROM hexletbasics/base-image

WORKDIR /exercises-pre-course-javascript

COPY . .

ENV NODE_PATH /exercises-pre-course-javascript/src

RUN npm ci

ENV PATH=/exercises-pre-course-javascript/bin:$PATH
