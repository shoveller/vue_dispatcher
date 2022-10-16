FROM node

# pub 디렉토리 생성
RUN git clone https://github.com/jaehyunlee25/vue_dispatcher

WORKDIR ./vue_dispatcher

RUN npm i

EXPOSE 80 6006 8080

CMD npm start
