# 자신의 Repository 에 올리기
1.GitHub 에서 Create a new repository 클릭
: 새로운 저장소를 만들기 위해 new repository 를 선택   

2. git 다운 받기
: github 는 소스 코드를 올리는 공간일 뿐 ! 소스 코드를 내 컴퓨터에서 인터넷으로 올려주는 역할을 git 이 한다.
: 구글에 git 검색하여 다운로드 받는다.
: https://git-scm.com/downloads   

3. Git Bash 를 열어 이름 및 메일 설정하기
: git config --global user.name “my name” 을 입력하여 이름 설정을 해준다.
: git config --global user.email “my email” 을 입력하여 이메일 설정을 해준다.

4. 이름 및 메일 설정 확인하기

: git config --list 를 입력하여 설정한 이름과 이메일을 확인한다.

 

5.VS Code 에서 코드 작성 후 터미널 열어 GitHub 로 업로드 진행하기

: vsc의 터미널을 열고 git init 부터 진행한다.

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

 

# Repository 에 팀원 초대하기
1. 만들어 놓은 Repository - setting - collaborators - add people 를 클릭하여 팀원 초대

: add people 를 누르고 팀원들의 아이디를 입력하여 초대할 수 있습니다.

: 팀원은 메일로 받은 초대장에서 수락을 눌러주면 됩니다.

 


 

2. 프로젝트 리더는팀원별로 Repository 에 각각의 저장공간을 만들어줍니다.

: view all branches 를 클릭하여 우측 상단에 초록 버튼 New branch 를 눌러 팀원들의 저장 공간을 만들어줍니다.


 

 

# git init부터 push 까지의 명령어들
1. git init

: 저장소를 초기화하기 위한 명령어이다. (처음 한번만 입력하면 됨)

 

2. git add .

: 점(.)은 모든 파일이라는 뜻으로, 어떤 파일을 올릴지 찾아보겠다 라는 뜻이다.

 

3. git status

: 위에서 add 명령어를 통해 찾은 파일들의 목록을 보여준다.

 

4. git commit -m “히스토리 내용”

: 어떤 내용의 파일을 올릴지 히스토리를 만드는 것이다. (최종, 진짜 최종 같은 느낌)

 

5. git remote add origin 레파지토리 주소

: 내 컴퓨터(로컬)와 Repository 의 연결고리 만들어준다.

: 즉, 레파지토리 주소로 내 소스 코드를 보낸다는 뜻이다.

 

6. git remote -v

: 연결고리를 만든 것을 확인하는 명령어이다.

 

7. git push origin master

: master 브랜치로 코드를 보낸다는 명령어이다.

 

8. 반복

: 파일에 변경 내용이 있어 다시 업로드 해야하는 경우 2번부터 7번까지를 반복하면 된다.

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

 

# 협업하기
ㅁ 회사의 repository 생성

: 협업을 하기 위해 프로젝트 리더(또는 프로젝트 담당자)는 repository를 생성

 

(내가 회사의 CEO일 때 = 프로젝트 리더일 때)

: git init부터 git push origin master까지 순서대로 진행

 

(신입 사원이 회사 깃허브의 파일들을 자신의 컴퓨터로 가져오는 방법)

1. CMD 를 열어 저장할 폴더로 경로 이동

: cd 명령어를 통해 저장할 폴더까지 경로 이동

 

2. 회사 깃허브 파일들 복제하기

: git clone 회사의 깃허브 주소 폴더 이름 입력하여 복제하기

(ex git clone https://github.com/HyeongJun030/company_project.git newperson)

ㄴ> 해석해보면 ‘git clone(복사할 것이다) https://github.com/HyeongJun030/company_project.git(이 주소로부터) newperson(newperson)이라는 폴더에’ 라는 의미이다.

 

3. 지정한 폴더로 이동 후 VSC 열기

: CMD 에서 cd newperson(지정한 폴더) 를 입력하여 해당 폴더로 경로 이동 후, code . 을 입력하여 vsc를 열면 회사 깃허브 코드 파일이 열린다.

 

4. 가져온 회사 코드 파일에 신입이 코드를 작성

: 회사 깃허브에서 가져온 파일에 새로운 내용을 추가한다.

 

5. ★ 주의 ★ 신입이 작성한 파일을 회사 깃허브로 올리기 - push master 금지 !!!

: git add . 부터 시작하여 git commit -m 을 지나 git push 까지 하게 될텐데 이때 git push origin master 를 하면 안된다.

: why? git push origin master 라는 것은 master 브랜치 즉, 최상위 브랜치에 파일을 푸쉬하겠다는 뜻인데 최상위 브랜치 master는 회사의 최종 결과물을 말하므로 신입이 감히 회사의 최상위 브랜치에 바로 push 를 한다? 굉장히 위험한 행동일 수도 있기 때문이다.

 

6. 5번의 위험성으로 인해 신입 사원을 위한 공간을 만들기

: 신입 사원을 위한 공간(브랜치)를 만들어 해당 브랜치에 업로드(push) 한다.

: git checkout -b newperson 명령어를 통해 newperson 이라는 브랜치를 새로 만든다.

: 이 명령어를 입력하면 (master) 라고 되어 있던 상태가 (newperson) 상태로 변한 것을 확인할 수 있다.

 

7. 신입 사원의 브랜치에 push 하기

: 새로 만들어놓은 신입사원의 브랜치(newperson)에 git push origin newperson 을 한다.

 

8. github 에서 확인하기

: push 까지 완료했으면 깃허브에서 push 했다는 문구를 볼 수 있고, 그 옆에는 Compare & pull request 라는 초록 버튼이 활성화되어 있다.

: 신입 사원(newperson)은 초록 버튼(compare & pull request)를 클릭한다.

 

9. 제목과 메시지를 입력 후 create pull request 하기

: 제목과 메시지를 작성한 후 초록 버튼(create pull request)를 클릭한다.

: pull request 라는 것은 master 브랜치에 갈 수 있게 허락해달라는 요청이다.

 

10. 신입이 할 일은 끝!

: master 브랜치의 담당자(=프로젝트 리더)가 승인해주기를 기다린다.

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

 

# (내가 회사의 CEO일 때 = 프로젝트 리더일 때)

1. 신입 사원이 보낸 요청(pull request)를 확인한다.

: 회사의 깃허브 레파지토리 화면으로 가면 pull request 에 (1) 이 떠있는 것을 확인할 수 있다.

: 신입 사원이 pull request(요청)을 보냈기 때문에 떠 있는 것인데 이를 확인한 후 Merge pull request 버튼을 눌러주면 신입의 코드가 master의 코드와 합쳐진다(merge).

: 작성 내용이 맘에 안들면 오른쪽의 review change 버튼을 클릭하여 수정하라고 답변을 보내면 된다.

 

# 🔥주의) 동기화(pull) - GitHub의 파일이 바꼈을 때 받아오는 과정에서 주의할 사항!!!

: 프로젝트 리더도 개발을 하고 있을 것이고, 다른 사원들도 개발을 동시에 하고 있을텐데 서로 각자의 일만 하게 되면 깃허브와 로컬의 소스 파일에 차이가 날 것이다.

: 이를 방지하기 위해 master 에 있는 코드랑 동기화를 해줘야 한다.

: master 에 있는 코드랑 내가 로컬에서 작성하고 있는 코드랑 다르니까 내가 가지고 있는 코드들을 git add . 명령어와 git commit -m “히스토리 내용" 명령어를 통해 저장을 먼저 해준다. (이때 push 하면 안됨)

: 저장을 했으면 git pull origin master 명령어를 통해 master 브랜치로부터 코드를 받아온다. 그러면 master 브랜치에 있는 코드들로 vsc 코드들이 바뀐다.

: master에서 받아온 소스 파일에 자신이 개발한 코드를 합쳐 최종본을 만들고 ‘git push origin 브랜치명’을 통해 프로젝트를 완성시킨다.
