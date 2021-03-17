
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="utf-8">
	<title>clock20191119</title>
	<link rel="stylesheet" href="clock20191119.css">
</head>
<body>
<header><h1>普通のデジタルクロック</h1></header>
<div class="main">
<?php for($s=0; $s<6; $s++):?>
	<div class="segment-container">
		<?php for($i=0; $i<7; $i++) :?>
			<div class="segment<?= $i?>">
				<div class="topTri"></div>
				<div class="pole"></div>
				<div class="bottomTri"></div>
			</div>
		<?php endfor;?>
	</div>
		<div class="collon">
			<div class="top-collon"></div>
			<div class="bottom-collon"></div>
		</div>
<?php endfor;?>
</div>
<footer>
	<h2>時</h2>
	<h2>分</h2>
	<h2>秒</h2>
</footer>
<script src="clock20191119.js"></script>
</body>
</html>
