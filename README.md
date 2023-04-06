# Resume

## 제작 계기...

[기존 이력서](https://github.com/donsonioc2010/resume2) 같은 경우 fork를 떠와서 적당히 내상황에 맞게 기록을 했던 Resume 이력서 페이지이다.
그러다 보니 TypeScript, React, Next.js에 모두 무지했던 내가 관리하기에는 버거운 이력서가 되버림.

그러다 보니 파일이 꼬였는데.. 어디부터 꼬였는지 모르겠더라...

그런김에 그냥 React를 다시 학습할겸, 내가 보기 편한 Resume를 다시 만들면서 익혀가는게 재밌겠다 생각하여 만들게 된 Resume

---

## Domain

> 아직 서버 안띄웠다...

- [이력서 주소](https://resume.jong1.com)

---

## 생각했던 포인트?

- 코드를 모르는 사람도 이해할 수 있게 최대한 단순하게
- 정보전달은 쉽게

> 단 두가지만 최대한 신경쓰면서 개발을 진행함

---

## Reference

- https://github.com/uyu423/resume-nextjs
  - 아무래도..기존 Resume에 영향을 많이 받았다...
  - 감사합니다..

---

## 사용 Dependency

- React
- Redux
  - React-Redux
- React Bootstrap
- Bootstrap
- FontAweSome

---

## 기능 설명

- Data의 수정은 기본적으로 모두 `./src/data/*.json` 파일을 수정하면 된다.
- **이미지 파일**의 경우에는 `./public/img`에 담고 활용해야 한다.

### Profile

> 해당 메뉴의 하위 JSON파일은 모두 `./src/data/Profile.json`을 칭하도록 한다.

#### 프로필 이미지 수정방법

1. `./public/img/`에 사진 추가
2. **JSON**파일 `profile.img`항목에 파일명을 기록한다.

#### 이름 변경

1. **JSON**파일의 `name.title`, `name.small`을 본인의 명칭에 맞게 수정한다.

#### Contact

- **JSON**파일의 `contact`항목의 경우에는 `이메일`, `전화번호`, `깃허브`, `블로그`, `인스타`, `링크드인`의 순서대로 기록되어 있다.
- 기록하기 싫은 항목에 대해서는 `title`항목에 `''`로 기록을 하게 되면 해당 항목을 표시하지 않는다.
- `link`항목을 `''`또는 `#`으로 기록하게 될 경우 링크로 텍스트를 생성하는 것이 아닌, 일반 `span`태그로 생성된다.

#### Contact Notice

> 남겨놓고 싶은 말을 적을떄 활용하면 된다.

- **JSON**파일의 `infoNotice` 항목의 기록을 하면 된다
- 표시를 하기 싫으면 **JSON**파일에서 `#`또는 `''`으로 표현하면 된다.

---

### Introduce

> 해당 메뉴의 하위 JSON파일은 모두 `./src/data/Introduce.json`을 칭하도록 한다.

#### Type

> 해당 항목은 **JSON**파일에서 `type`항목을 수정해서 변경이 가능하다.

- LIST
  - li형식으로 표현하며 ul in ul 방식으로 무한히 표현은 가능하다.
- 혹은 그 이외 (문장으로 표현한다)
  - 배열로 사용이 가능하며 1차원 배열로만 설정이 가능하다
  - `div`태그로 묶기만 한다.

#### List In List 사용법

> **JSON**파일에서 `introduces`항목의 수정을 하면 되며, `html`을 그대로 기록을 한다.  
> 다음의 예제와 스크린샷을 활용해보면 좋을 듯 하다.

> 배열안에 배열을 넣는 것은 **제한**이 없다.

```JSON
"introduces": [
    "안녕하세요 <span style='color:green'>아이유</span> 입니다.",
    "너무 재밌어요",
    [
      "<span style='color:red'>리액트는</span>",
      "<span style='color:orange'>최고에요</span>",
      ["진짜요?","대단해요"]
    ],
    "<span style='color:red'>백수예요..</span>"
  ],
```

![샘플예제](./readme-docs/type-list-introduce.png)
