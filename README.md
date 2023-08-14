# <a href="https://1000mj.github.io/weather-app/" target="_blank">weather-app 사이트</a>

## 1.프로젝트 목표
- Weather API를 활용하여 날씨앱을 만들어보자

## 2.프로젝트 인원

- 1인프로젝트

## 3.프로젝트에 사용한 기술
- React
- axios
- API

## 4.프로젝트 기능설명

- 지역을 입력했을때 날씨와 온도를 표시한다

## 5.알게된점

- API, React의 이해범위를 넓히는데 도움을줬다

## 6.제작과정
- API사용을 위한 KEY발급
- creat-react-app (react사용)
- axios라이브러리 install ( 비동기이기때문에(async) API와의 통신을 위해사용 )

![](https://velog.velcdn.com/images/1000mj/post/7783ad0e-ddbb-4b63-8ad1-a3ca23a8cbd2/image.png)

![](https://velog.velcdn.com/images/1000mj/post/008977ce-a433-413c-ad2e-5c615c075df9/image.png)
시작부터 문제구나..... 30분넘게 머리싸매고 코드만 쳐다봤던것같다

![](https://velog.velcdn.com/images/1000mj/post/b3f68d3f-2fd1-4b9a-a2d8-7e5569f0d896/image.png)
${}사용해서 문자열,변수사용할거면 백틱써야한다는걸 잊고있었다 / 해결


![](https://velog.velcdn.com/images/1000mj/post/17e33d17-7908-4b06-9c91-435ffcd176cc/image.png)
`input` 박스에 무언가를 입력하고 엔터를 누르면(onKeyDown)

![](https://velog.velcdn.com/images/1000mj/post/e88e522a-8159-41b3-bbbc-83326081655b/image.png)
 API호출 되도록

![](https://velog.velcdn.com/images/1000mj/post/8c4cd197-758a-4995-8330-3bc67ddfe169/image.png)
정상적으로 호출됨을 console.log로 확인

![](https://velog.velcdn.com/images/1000mj/post/2a476e99-92e1-4e39-94b5-fc1d1ac9d222/image.png)

jsx에서 해당값 접근할수있게 state사용

![](https://velog.velcdn.com/images/1000mj/post/e8c79279-1526-44e1-b31e-8c00d265412c/image.png)

결과값 보여줄 div인데, 
### Uncaught TypeError: Cannot read properties of undefined
에러가 출력되서 해결법을 몰라서 며칠 찾아봤는데 ....
api통신을 통해서 값을 가져오기 전에 해당 값들은 undifind인데, 이상태로 렌더링을 했기때문에
그런거였다
해결법 : result가 {} 비어있는 오브젝트가 아닐때 띄워보았다
`Object.key(result).length != 0 &&( <div~~~)`

![](https://velog.velcdn.com/images/1000mj/post/20d3158c-8071-405c-8e1b-ceb2081174ed/image.png)
해냈다....해냈어....

스타일만 추가하면 될것같다



![](https://velog.velcdn.com/images/1000mj/post/09d7f1bb-7d23-4207-a38d-61140761b7c0/image.png)

결과물
