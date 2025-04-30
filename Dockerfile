FROM hexletbasics/base-image

ENV COURSE_DIR=/exercises-pre-course-javascript

ENV NODE_PATH=${COURSE_DIR}/src
ENV PATH=${COURSE_DIR}/bin:${COURSE_DIR}/node_modules/.bin:$PATH

WORKDIR ${COURSE_DIR}

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
