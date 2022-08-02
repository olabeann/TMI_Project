// npm install express --save 명령어를 통해 서버 설치에 필요한 모듈을 설치한다.

const express = require('express'); // require 를 통해 설치한 모듈(express)을 가져온다.
const app = express();

app.use(express.static('public')); // css를 적용시키기 위해 정적 폴더)를 지정해준다.

//server 를 띄울꺼니까 server 라는 변수를 만들고
const server = app.listen(3000, () => {
  /* 앱이 3000번 포트로 정상적으로 실행되면 */
  console.log('start server localhost:3000'); // 터미널에 start server ~~ 를 출력한다.
});

// 위에서 입력한 코드들이 정상적으로 돌아가는지 터미널에서 node server.js 명령어 입력해보기
// ㄴ> 화면에 cannot get 이라고 뜸 = 웹 서버는 정상적으로 구동되고 있다는 뜻,
// 만약 웹 서버가 정상적으로 구동되지 않으면 '사이트에 연결할 수 없음' 문구가 뜬다.

// 웹 브라우저는 클라이언트이다. 클라이언트에서는 특정 페이지를 들어가서 버튼을 클릭하는 등 특정 행동을 하면
// 서버에 요청(request)을 하게 된다. => 요청을 받은 서버는 클라이언트에게 응답(response)를 해줘야 하는데
// 요청을 받았으면 그에 맞는 응답을 해주기 위해서 라우팅(routing)해줘야 한다.
// 이 부분은 테스트하기 위한 부분이니까 주석처리 ! ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//app.get('/', function (req, res) {  // 라우터 코드
//    res.send('hello world');        // 웹 서버에 정상적으로 연결되면 정의(res)한 hello world 가 웹 브라우저에 표시된다.
//});
//app.get('/about', function (req, res) {  // 라우터 코드
//    res.send('about page');              // localhost:3000 뒤에 /about 를 붙여주면 정의(res)한  about page 가 웹 브라우저에 표시된다.
//});

// html 로 작성한 페이지를 여는 방법 : views 폴더에 작성된 index.html 파일을 불러오기 위해서는
// 사전 세팅이 필요하다.
app.set('views', __dirname + '/views'); // __dirname 이라는 것은 현재 디렉토리를 의미하고, 여기에 /views 폴더
// 안에 있는 파일들을 가져오겠다라는 의미이다.
app.set('view engine', 'ejs'); // 보여줄 엔진을 선언해줘야 하는데, 'ejs'라는 엔진을 사용하겠다.
// 'ejs'란 html 파일 안에서 자바스크립트 코드를 같이 사용할 수 있게 해주는 엔진(템플릿)이다.
app.engine('html', require('ejs').renderFile); // html 파일을 쓸 건데, 'ejs' 엔진을 사용하여 파일을 불러오겠다.
// 'ejs' 모듈도 설치를 해줘야하니까 npm install ejs --save 명령어를 터미널에 입력한다.

// 뷰페이지 호출하기
<<<<<<< HEAD
app.get('/', function (req, res) {  // 라우터 코드
    res.render('index.html')        // main.html 파일을 불러오기 위해 render 명령어를 사용한다.
=======
app.get('/', function (req, res) {
  // 라우터 코드
  res.render('index.html'); // main.html 파일을 불러오기 위해 render 명령어를 사용한다.
>>>>>>> 3549ba292ad16a814d482d79fec5506ace2aa217
});

app.get('/mainnav', function (req, res) {
  // 라우터 코드
  res.render('main_lastpage.html'); // localhost:3000 뒤에 /about 를 붙여주면 정의(res)한  main_lastpage.html 가 웹 브라우저에 표시된다.
});

app.get('/maininfo', function (req, res) {
  // 라우터 코드
  res.render('main-page4.html'); // localhost:3000 뒤에 /about 를 붙여주면 정의(res)한  main_lastpage.html 가 웹 브라우저에 표시된다.
});

app.get('/mainshoppinglist', function (req, res) {
  // 라우터 코드
  res.render('main-page1.html'); // localhost:3000 뒤에 /about 를 붙여주면 정의(res)한  main-page1.html 가 웹 브라우저에 표시된다.
});

app.get('/mainprice', function (req, res) {
  // 라우터 코드
  res.render('main-page2.html'); // localhost:3000 뒤에 /about 를 붙여주면 정의(res)한  main-page2.html 가 웹 브라우저에 표시된다.
});

app.get('/mainaccount', function (req, res) {
  // 라우터 코드
  res.render('main-page3.html'); // localhost:3000 뒤에 /about 를 붙여주면 정의(res)한  main-page3.html 가 웹 브라우저에 표시된다.
});

app.get('/pricedata', function (req, res) {
  // 라우터 코드
  res.render('priceData.html'); // localhost:3000 뒤에 /about 를 붙여주면 정의(res)한  priceData.html 가 웹 브라우저에 표시된다.
});

app.get('/pricedatadetail', function (req, res) {
  // 라우터 코드
  res.render('detailprice.html'); // localhost:3000 뒤에 /about 를 붙여주면 정의(res)한  detailprice.html 가 웹 브라우저에 표시된다.
});

app.get('/shoppinglist', function (req, res) {
  // 라우터 코드
  res.render('ShoppingList.html'); // localhost:3000 뒤에 /about 를 붙여주면 정의(res)한  ShoppingList.html 가 웹 브라우저에 표시된다.
});

app.get('/shoppinglistmap', function (req, res) {
  // 라우터 코드
  res.render('ShoppingList2.html'); // localhost:3000 뒤에 /about 를 붙여주면 정의(res)한  ShoppingList2.html 가 웹 브라우저에 표시된다.
});

app.get('/shoppinglistmart', function (req, res) {
  // 라우터 코드
  res.render('ShoppingList3.html'); // localhost:3000 뒤에 /about 를 붙여주면 정의(res)한  ShoppingList3.html 가 웹 브라우저에 표시된다.
});

app.get('/accountbook', function (req, res) {
  // 라우터 코드
  res.render('accountbook.html'); // localhost:3000 뒤에 /about 를 붙여주면 정의(res)한  accountbook.html 가 웹 브라우저에 표시된다.
});

app.get('/signin', function (req, res) {
  // 라우터 코드
  res.render('signin.html'); // localhost:3000 뒤에 /about 를 붙여주면 정의(res)한  signin.html 가 웹 브라우저에 표시된다.
});
