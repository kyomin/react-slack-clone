# 개요
팀과 업무를 하나로 이어주는 단일 플랫폼인 Slack을 리액트를 이용해 클론해 본다.   
Slack은 클라우드 기반의 팀 협업 도구로, 실시간 메시지, 파일 공유, 작업 관리 등 많은 기능들을 제공하여 사람들이 한 곳에서 통합된 하나의 팀을 운영하여 `조직이 커뮤니케이션 하는  방법을 개선`할 수 있다.   
   
즉, 업무에 관련된 모든 커뮤니케이션이 한 곳으로 집중되어 빠른 업무 확인 및 의사 결정이 가능하여 `이메일을 대체할 수 있는 커뮤니케이션 도구`라고 생각하면 된다.   

### Slack을 사용하면 팀의 업무 효율성이 향상된다.
슬랙은 업무 효율성에 도움이 되는 많은 장점들을 가지고 있다.   
   
1. 실시간 커뮤니케이션
채팅 기능을 통해 실시간으로 팀원들과 대화할 수 있다.   
즉각적인 응답과 빠른 결정을 가능하게 하며, 이메일보다 훨씬 빠른 커뮤니케이션을 제공한다.
2. 팀 협업과 프로젝트 관리
채널을 생성하여 틍정 팀, 프로젝트 또는 주제별로 그룹을 형성할 수 있다.   
그룹 안에서 여러 팀원들이 동시에 파일 공유와 협업 기능을 활용하여 문서 공유, 편집, 리뷰 등을 효율적으로 수행할 수 있다.
3. 이력 및 검색기능
과거의 대화 내용을 쉽게 찾아보고, 필요한 정보나 파일을 빠르게 검색할 수 있다.   
이를 통해 중요한 결정이나 프로젝트 진행 상황을 추적하고, 지식을 공유하는 데 도움을 준다.
4. 화상회의 기능인 허들(Huddle)
허들을 사용하면 채널의 인원들과 음성 또는 화상으로 즉시 연결할 수 있다.   
프로젝트를 하다 메시지로 공유하기 어려운 부분을 서로 생동감 있게 보면서 공유할 수 있다.   
화상통화를 하며 공유하느 모든 링크, 문서, 메시지는 허들이 종료되면 자동으로 저장되기 때문에 팀에서 쉽게 다시 참조할 수 있다.
5. 워크플로
슬랙에는 코드없이 자동화된 작업을 만들게 도와주는 기능인 워크플로가 있다.   
누군가 채널에 들어왔을 때, 채널에 속한 누군가가 특정 이모티콘 반응을 추가했을 때 등 자동으로 시작되고 누군가 단축키 메뉴로 실행했을 때 설정해 놓은 단계별 프로세스가 자동으로 실행되는 기능이다.   
노코드 방식이기 때문에 누구나 쉽게 워크플로를 생성하고 사용할 수 있다.
6. 다양한 앱과 통합
슬랙은 2600개 이상의 다양한 앱과의 통합을 지원하여 업무 생산성을 높이 수 있다.   
예를 들어, 구글 드라이브, 구글 캘린더 등을 연동하여 슬랙 안에서 다양한 기능을 활용할 수 있고,   
세일즈 포스와 연동하여 조직 내에서 발생한 이벤트를 즉각 알림받을 수 있어 중요한 정보를 놓치지 않을 수 있다.   
   
이처럼 슬랙을 사용하다 보면 해당 장점들 말고도 많은 장점들을 느낄 수 있다.   

### 슬랙 구성 요소
1. 사이드바
사이드바에서 Slack 대화에 액세스할 수 있다.   
여기에서 참여한 채널 목록, 다이렉트 메시지, 특정 대화에 대한 알림 및 새 메시지 작성 옵션을 확인할 수 있다.   
![사이드바](https://github.com/kyomin/react-slack-clone/assets/46395776/054c9191-745f-43fc-aa52-0e24d2cf6e7f)
2. 채널
Slack의 채널은 작업을 위한 기본적인 공간이다.   
채널은 필요한 사람과 정보를 한데 묶고, 공통의 목적을 달성하기 위한 작업을 구성할 수 있도록 한다.   
![채널](https://github.com/kyomin/react-slack-clone/assets/46395776/6f2ed0b9-47a1-41a4-a427-ef646597cef1)
3. 메시지 필드
Slack에서 작업할 때, 메시지 필드에서 제공하는 다양한 메시지 옵션을 활용해 의사소통을 돕고 팀과 연결될 수 있다.   
![메시지 필드](https://github.com/kyomin/react-slack-clone/assets/46395776/820d79ec-63be-4822-8e00-baaccc173a1b)
4. 탐색 막대
탐색 아이콘을 사용하여 내역에서 앞뒤로 이동하거나(웹 브라우저처럼) 최근 대화를 보거나, 정보를 검색하거나, Slack 관련 도움을 받을 수 있다.   
![탐색 막대](https://github.com/kyomin/react-slack-clone/assets/46395776/a9e96ba9-c8dc-40f4-bd30-78636f6a0727)   
   
이처럼 현 프로젝트에서는 슬랙의 기본적인 구성 요소(워크스페이스, 채널, 다이렉트 메시지 등등)들을 구현해 본다.

# Step 1
1. package.json
  - npm init으로 생성
  - npm i react react-dom
  - npm i typescript @types/react @types/react-dom
  - 설치 후 package-lock.json과 node_modules 폴더가 생성됨
2. .eslintrc
  - eslint 설정 파일
  - 코드 점검 도구, 직접 설정하면 팀원간 의견 충돌이 있으니 prettier에 위임
  - npm i -D eslint
3. .prettierrc
  - prettier 설정 파일
  - 저장하면 알아서 코드를 수정해줌(에디터 설정 필요)
  - npm i -D prettier eslint-plugin-prettier eslint-config-prettier
4. tsconfig.json
  - 타입스크립트 설정
  - 언어 문법과 자바스크립트 결과물이 어떻게 나와야하는지 설정하는 파일
  - lib은 ES2020, DOM(브라우저), module은 esnext처럼 최신 설정이지만 target은 es5로 IE 브라우저에서도 돌아갈 수 있게 변환
  - strict: true를 켜놓아야 타입 체킹을 해줘서 의미가 있음.
5. webpack.config.ts
  - 웹팩 설정
  - ts, css, json, 최신 문법 js 파일들을 하나로 합쳐줌.
  - npm i -D webpack @types/webpack @types/node
  - entry에서 파일을 선택하면 module에 정해진 rules대로 js로 변환하여 하나의 파일로 합쳐줌(output). plugins는 합치는 중 부가적인 효과를 줌
  - ts는 babel-loader로, css는 style-loader와 css-loader를 통해 js로 변환
  - babel에서는 @babel/preset-env(최신문법 변환) @babel/preset-react(리액트 jsx 변환), @babel/preset-typescript(타입스크립트 변환)
  - npm i -D css-loader style-loader @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/preset-typescript
  - publicPath가 /dist/고 [name].js에서 [name]이 entry에 적힌대로 app으로 바뀌어 /dist/app.js가 결과물이 됨.
6. index.html 작성
  - 아이콘, 폰트, 파비콘같은 것은 슬랙에서 그대로 사용
  - client.tsx에 간단한 tsx 작성
  - #app 태그에 리액트가 렌더링됨.
  - ./dist/app.js로 웹팩이 만들어낸 js파일 불러옴
7. tsconfig-for-webpack-config.json
  - webpack할 때 webpack.config.ts를 인식 못하는 문제
  - npm i cross-env
  - package.json의 scripts의 build를 cross-env TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack
  - npm run build
  - index.html 실행해보기
8. 웹팩 데브 서버 설치
  - 개발용 서버인 devServer 옵션 추가(port는 3090, publicPath는 /dist/로)
  - webpack serve할 때 webpack.config.ts를 인식 못하는 문제
  - npm i -D ts-node webpack-dev-server @types/webpack-dev-server webpack-cli
  - package.json의 scripts의 dev를 cross-env TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack serve --env development
  - npm run dev하면 localhost:3090에서 서버 실행됨.
9. hot reloading 설정
  - npm i -D @pmmmwh/react-refresh-webpack-plugin react-refresh
  - webpack의 babel-loader 안에 설정(env) 및 plugin으로 추가
10. fork-ts-checker-webpack-plugin
- webpack은 ts체크 후 eslint체크 후 빌드 시작
- ts랑 eslint는 동시에 체크하면 더 효율적
- 이 플러그인이 동시에 진행하게 해줌.
11. 폴더 구조 세팅
  - 페이지들은 pages
  - 페이지간 공통되는 틀은 layouts
  - 개별 컴포넌트는 components
  - 커스텀훅은 hooks, 기타 함수는 utils 
  - 각 컴포넌트는 컴포넌트 폴더 아래 index.tsx(JSX)와 styles.tsx(스타일링)
12. ts와 webpack에서 alias 지정
  - npm i -D tsconfig-paths
  - tsconfig에서 baseUrl와 paths 설정
  - webpack에서는 resolve안에 alias 설정
  - ../layouts/App같은 것을 @layouts/App으로 접근 가능
13. emotion 세팅
  - styled components와 비슷하지만 설정이 간단함.
  - npm i @emotion/react @emotion/styled
  - npm i -D @emotion/babel-plugin (웹팩에 babel 설정 추가)
  - 스타일드 컴포넌트로 만들 때 변수를 많이 만드는 셈이므로 & 같은 선택자 적극 활용해야 변수 이름짓기를 최소화할 수 있음.
14. @layouts/App 작성
  - 리액트 라우터 적용하기
  - npm i react-router react-router-dom
  - npm i -D @types/react-router @types/react-router-dom
  - client.tsx에서 App을 BrowserRouter로 감싸기
  - @layouts/App에 Switch, Redirect, Route 넣기
15. @loadable/component
- 라우터를 코드스플리팅 해줌
- 회원가입 페이지에 접근한 사람은 회원가입 페이지에 필요한 JS만 받음
- 3초 룰 기억하자!
- npm i @loadable/component @types/loadable__component
16. @pages/SignUp 작성

# Step 2
17. 회원가입 axios로 진행
  - npm i axios
  - CORS 문제를 피하기 위해서 devServer에 proxy 세팅
  - CORS는 브라우저에서 다른 도메인의 서버로 요청을 보낼 때 발생
  - 같은 도메인의 서버로 요청을 보내거나, 서버끼리 요청을 보낼 때는 발생하지 않음
  - 따라서 같은 도메인인 proxy서버를 띄워 CORS를 피해갈 수 있음.
18. useInput 커스텀 훅 만들기
  - 커스텀 훅으로 훅들간에 중복된 것을 제거할 수 있음
  - 훅 내부에 훅을 작성할 수 있는 유일한 케이스
  - useCallback은 return 안에 들어있는 함수에 꼭 적용해주자
  - useMemo는 return 안에 들어있는 값에 적용하자
19. @pages/LogIn 작성 및 SWR
  - 로그인 한 사람이 회원가입/로그인 페이지에 접근한다면?
  - GET 요청은 SWR로 하는 것도 괜찮음
  - npm i swr
  - SWR에 fetcher(axios를 사용)를 달아줌.
  - 로그인했음을 증명하기 위해 withCredentials: true 잊으면 안 됨.
20. @layouts/Workspace 작성
  - 눈에 띄는 구역 단위로 스타일드컴포넌트로 만들어둠.
  - 구역 내부의 태그들은 스타일드컴포넌트로 만들면 변수명 지어야 하니 css선택자로 선택
21. 그라바타
  - npm i gravatar @types/gravatar
  - Github같은 아이콘을 만들 수 있음
22. typescript 정의
  - 기본적으로 변수, 매개변수, 리턴값에 타입을 붙여주면 됨.
  - 남이 타이핑해둔 것 분석하는 게 어려움
  - Go to Type Definition
  - 자바스크립트 라이브러리 작성자와는 다른 사람이 만든 ts 라이브러리가 @types로 시작하는 것들
23. @components/DMList 작성
  - 현재 채널 참여자 목록 가져오기
24. @pages/DirectMessage 작성
  - Header와 ChatList, ChatBox로 구성
25. @components/ChatBox 먼저 작성
  - react-mentions 활용
  - DM에서는 멘션 기능이 없지만 Channel에서는 있을 것
26. DM 보내보기
  - optimistic UI
  - 먼저 프론트에서 표시하고, 서버로는 그 다음에 요청보냄
  - 요청 실패하는 순간 프론트에서 제거하고 에러 메시지 띄움
  - 보낼 때 에러가난 것은 서버쪽에서 socket 연결 여부를 확인하기 때문
27. DM 로딩은 useSWRInfinite 사용
  - 결과물이 2차원 배열 꼴로 나옴.
  - 첫 번째 인자가 주소 문자열이 아닌 주소를 리턴하는 함수
  - 이 함수의 매개변수로 페이지가 들어있어서 현재 몇 페이지인지 알 수 있음.

# Step 3
28. Workspace에 소켓 연결하기
  - socket.emit이 클라이언트에서 서버로, socket.on이 서버에서 클라이언트로
29. DMList에 onlineList, dm 이벤트 연결
30. @components/ChatList 작성 및 @components/Chat 구현
  - npm i react-custom-scrollbars @types/react-custom-scrollbars
31. makeSection 구현
  - npm i dayjs
  - dayjs는 moment를 대체함
32. 프로파일링 하면서 Chat에 memo 적용하기
33. 인피니트 스크롤링 구현
34. @components/ChannelList 작성
35. @pages/ChannelMessage 작성
36. Channel Chat 보내보기
37. 빌드 설정
38. 빌드 결과물인 JS와 html을 서버개발자에게 전달하기
