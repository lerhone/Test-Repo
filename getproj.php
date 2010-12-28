<?php 
function getURLJSON($target_url)
{
	$userAgent = "IE 7 - Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.30)";
  
	 $ch = curl_init();
	 
	 curl_setopt($ch, CURLOPT_USERAGENT, $userAgent);
	 curl_setopt($ch, CURLOPT_URL, $target_url);
	 curl_setopt($ch, CURLOPT_FAILONERROR, true);
	 curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	 curl_setopt($ch, CURLOPT_AUTOREFERER, true);
	 curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
	 curl_setopt($ch, CURLOPT_TIMEOUT, 120);
	 $jsonstr = curl_exec($ch);
	 
	if (!$jsonstr) { 
		header('HTTP/1.1 400 Bad Request');
		header('Content-Type: application/json');
		return trim($jsonstr);
	}	 
	

	

	header('Content-Type: application/json');
	return trim($jsonstr);
	
	//return json_decode($jsonstr);
}
$projid = $_POST['projid'];
echo getURLJSON("http://api.donorschoose.org/common/json_feed.html?id={$projid}&APIKey=CjK70pwg");

?>