# javascript-calculator-precourse

## 기능 요구 사항

### 입력

- [x] 사용자는 문자열을 입력할 수 있다.

### 에러처리

- [ ] "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션을 종료한다.
  - [ ] //로 시작해서 \n으로 끝나지 않는 경우
  - [ ] 사용자가 유효하지 않는 값을 입력할 경우
  - [ ] 구분자만 입력 될 경우
  - [ ] 사용자가 빈 값을 입력할 경우

### 계산기

- [ ] 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자들을 나눈다.
- [x] 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
- [ ] 구분자를 기준으로 분리한 각 숫자의 합을 반환한다

### 출력

- [ ] 입력한 문자열에서 숫자를 추출하여 더한 값을 출력한다.
