# vue_dispatcher

## 주요 커맨드 일람

- vue 개발환경 기동 : `npm run dev`
- 스토리북 개발환경 기동 : `npm run storybook`
- 코드 정리 : `npm run lint`
- vue, storybook 빌드: `npm run build`
- vue(8080), storybook(6006), publishing(80) 게시: `npm start`

## 도커라이징 커맨드

- 이미지 빌드 : `docker build . -t cinos81/dispatcher:1.0 --platform linux/amd64`
- 컨테이너 실행 : `docker run -p 80:80 -p 8080:8080 -p 6006:6006 cinos81/dispatcher:1.0`
