npm init --yes : node에서 패키지가 관리해주는 것!
package.json 이 생성됨

jest --init => 초기화 함

npm install --save-dev jest => 다른 개발자가 npm install만 입력하면 패키지들을 다운받을 수 있음

[ ] npm에 대한 공부 필요

jest.config.js/collectCoverage : 테스트에 대한 정보의 유무 설정 !

- false로 설정해 두고 jest --coverage로 보는 것이 편할 거 같음

package.json/scripts

- test:
  - jest --watchAll => 저장할 때마다 자동적으로 test 할 수 있음
  - jest --watch =>
