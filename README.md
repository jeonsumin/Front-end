# Front-end.

### 필수 설치 파일

프로젝트를 체크아웃 하기 전에 다음의 소프트웨어가 설치되어있는지 확인해주시기 바랍니다.

1. [Git SCM](https://git-scm.com/)
2. [NodeJS](https://nodejs.org/ko/): NodeJS는 14.17.0 LTS버전을 설치하는 것을 추천합니다.
    npm 버전은 6.14.13

### 소스 편집 툴

소스 편집 툴은 어느 툴을 사용해도 무방합니다. 팀 차원에서는 [Visual Studio Code](https://code.visualstudio.com/) 또는 [WebStorm](https://www.jetbrains.com/ko-kr/webstorm/)를 추천합니다.

***이클립스는 추천되지 않습니다.***

## 체크아웃

체크아웃: 프로젝트를 체크아웃 받습니다.
```console
```

브랜치 변경: 마스터 브랜치로의 직접적인 커밋 및 푸시는 금지되어있습니다. 개별 브랜치를 생성하여 사용해주십시오.

```console
# git checkout -b <브랜치 명>
브랜치 명: Gitlab 로그인 ID (이메일 주소인 경우 도메인 제외)
```

변경된 파일 목록 확인
```console
# git status
```

Commit stage에 파일 추가
```console
# git add <파일명>
개별 파일 추가

# git add *
변경된 파일 모두 추가
```

Commit
```console
# git commit -m "커밋 메시지"
```

Push
```console
# git push --set-upstream origin <브랜치 명>
최초 Push 시

# git push
upstream 설정 후
```

Git에 대한 더 많은 정보 [알아보기](https://git-scm.com/book/ko/v2)

## 라이브러리 설치

프로젝트를 구동하기 위해선 NPM 라이브러리들을 설치해야 합니다.

```console
; node-sass는 global에 설치해야 됨
# npm install node-sass@4.14.170 -g
# node-sass 버전 4.14.170 버전은 안보이는데 수정해주세요. 저는 4.14.0을 설치했습니다.

# npm install

NPM 라이브러리 설치
```

## dotenv 설정

프로젝트 Checkout 후 Root 폴더에 보면 `.env.sample`이라는 파일이 있습니다.

개발환경에서 프로젝트를 정상적으로 구동하기 위해선 해당 파일을 `.env`라는 파일로 복사해 넣어야 합니다.

***주의: .env.sample 파일을 삭제하거나, .env 파일을 Push하지 마시오!***

### dotenv 구조

| Env | Description |
| --- | ----------- |
| `API_URL` | API Url 입니다. 기본 값은 `http://localhost:8080`으로 설정되어있으며, Context Path의 마지막에 반드시 `슬래시(/)`를 빼 주시기 바랍니다.|
| `SITE_URL` | 구동되는 사이트 Url. 기본 값은 `http://localhost:3000`으로 설정되어있으며, SNS 로그인 및 서버 리소스 Url 작성 시 사용됩니다. *필수* |
| `CDN_URL` | CDN 서비스의 Url. 기본 값은 `http://localhost:3000`으로 설정되어있으며, 이미지 등 리소스 Url 작성 시 사용됩니다. *필수* |
| `KAKAO_API_KEY` | 카카오 JavaScript API key. [카카오 개발자 사이트](https://developers.kakao.com/)에 등록된 애플리케이션의 JavaScript API Key. |
| `NAVER_CLIENT_ID` | 네이버 Client ID. [네이버 개발자 사이트](https://developers.naver.com/main/)에 등록된 애플리케이션의 Client ID. |
| `ORDER_STORAGE_KEY` | 주문 ID 저장 스토리지 키. (기본 값: SEC_ORDER_ID) |

### Vue에서 불러올 수 있는 env 파라미터

Vue에서 해당 env 파라미터를 다음과 같은 방법으로 호출할 수 있습니다

```vue
<script>
export default {
  mounted() {
    console.log(this.$env.siteUrl); // http://localhost:3000
  }
}
</script>
```

하지만 보안 상의 이유로 Vue에서 모든 파라미터를 받아볼 수 있는 것은 아니며 일부 파라미터만 불러올 수 있습니다.

* `siteUrl`: `SITE_URL`
* `cdnUrl`: `CDN_URL`
* `siteNo`: `SITE_NO`
* `brandNo`: `BRAND_NO`

## 프로젝트 실행하기

프로젝트는 다음과 같은 명령어로 실행할 수 있습니다.
```console
# npm run dev
프로젝트 실행
```

실행 후 [http://localhost:3000](http://localhost:3000)에서 확인하실 수 있습니다.
