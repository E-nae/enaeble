<?php
// Cross-Site Scripting (XSS)을 방지하는 시큐어코딩
// strip_tags() -> 문자열에서 html과 php태그를 제거한다
// htmlspecialchars() -> 특수 문자를 HTML 엔터티로 변환
// 악의적인 특수문자 삽입에 대비하기 위함
 
$name = strip_tags(htmlspecialchars($_POST['name'])); //제목
$email_address = strip_tags(htmlspecialchars($_POST['email_address']));;  //방문자의 메일주소
$phone = strip_tags(htmlspecialchars($_POST['phone'])); //이름
$message = strip_tags(htmlspecialchars($_POST['message'])); //메세지

$to = 'shesrainbow@naver.com'; // 받는 측의 이메일 주소를 기입하는 부분

$email_subject = "[포트폴리오 문의메일]"; // 메일 제목에 해당하는 부분
$email_body = "<table style='width:550px; box-shadow: 2px 2px 8px 2px #eeeeee;' align='center'>
<tr>
    <td colspan='2'>
        <table>
            <th style='text-align:left; padding: 40px 0 0px 20px; height:100px; font-size:30px; color:#2c2c2c; font-weight: bold;'>P o r t f o l i o</th>
            <td style='font-size:18px; color:#2c2c2c; width:310px;  padding: 45px 0 0px 10px;'>메세지 도착</td>
        </table>  
    </td>
</tr>
<tr>
    <td style='color:#868686; text-align: center; padding:10px; background: #f7f7f7; width:70px; border:none; height:30px; font-size: 13px;'>이름</td>
    <th style='color:#2c2c2c; text-align: left; padding:10px; background: #f7f7f7; border:none; font-size: 13px;'>$name</th>
</tr>
<tr>
    <td style='color:#868686; text-align: center;  padding:10px;height:30px; font-size: 13px;'>E-mail</td>
    <th style='color:#2c2c2c; text-align: left; padding:10px; font-size: 13px;'>$email_address</th>
</tr>
<tr>
    <td style='color:#868686; text-align: center;  padding:10px; background: #f7f7f7; height:30px; font-size: 13px;'>연락처</td>
    <th style='color:#2c2c2c; text-align: left; padding:10px; background: #f7f7f7; font-size: 13px;'>$phone</th>
</tr>
<tr>
    <td style='color:#868686; text-align: center; padding:20x 10px 30px; font-size: 13px;'>메세지</td>
    <th style='color:#2c2c2c; text-align: left; padding:20px 10px 37px; font-size: 13px;'>$message</th>
</tr>
</table> ";
$headers = "Return-Path: $email_address\n"; // 답장 주소
$headers .= "From: $name<$email_address>\n";// 사용자 이름 변경
$headers .= "Content-Type: text/html;charset=utf-8\n"; //html문서로 인식
mail($to,'=?UTF-8?B?'.base64_encode($email_subject).'?=',$email_body,$headers,'-f'.$email_address);
$result = array('result'=>'true');
echo json_encode($result);
exit;
?>

