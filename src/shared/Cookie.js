


const getCookie = (key) => {
    //모든 쿠키를 가져온다 (분리를 위해 맨 앞에 ; 를 붙여줌)
    //["; A=a; B=b; C=c; D=d; ..."]
    let allCookie = "; "+ document.cookie;

    //가져온 쿠키를 원하는 key의 앞뒤로 자른다. 
    //key 가 B 라고 할 때 ["A=a", "b; C=c; D=d; ..."]
    let Split = allCookie.split(`; ${key}=`);

   if (Split.length === 2){
       //"b; C=c; D=d; ..." 를 가져와(pop) ; 로 나눈다
       //>> ["b", "C=c", "D=d", ...] 에서 제일 앞을 가져온다(shift)
       //>> b
       return Split.pop().split(";").shift();
   }
};


//exp = 현 시각에서 만료일까지의 일 단위의 기간
const setCookie = (key,value, exp = 5 ) => {
    //날짜 생성
    let date =  new Date(); 
    //날짜 설정(현재시각 + 만료기간) >> date = 만료일 로 변한다.
    date.setTime(date.getTime() + exp*24*60*60*1000); 
    //cookie 저장하기
    document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/`; 
};

const deleteCookie = (key) => {
    let date = new Date("2020-01-01").toUTCString();
    document.cookie = key+"=; expires="+date;
};

export {getCookie, setCookie, deleteCookie};