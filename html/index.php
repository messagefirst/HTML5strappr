<!DOCTYPE HTML>
<html>
<head>
	<?php include 'lib/inc/_meta.php' ?>
	<?php include 'lib/inc/_scripts.php' ?>
	<script src="/lib/js/jquery.contact.js"></script>
<title>HTML5 BOOTSTRAP</title>
</head>
<body class="home">
<div id="StickyWrap">
	<article>
		<section class="mobile intro">
			<h1>HTML5 Bootstrap</h1>
			<p class="quiet">
				A fully responsive HTML5 and CSS3 framework for bootstrapping your next web project. Designed for mobile first, this future friendly system is fully responsive to automagically adapt for mobile, tablet, desktop and widescreen devices. It even includes a fully flexible grid system for creating 1, 2, 3, 4, and 5 column grids (on only 13 lines of CSS).
			</p>
			<div id="message" class="toggle notice"></div>
      <form method="post" action="/lib/php_scripts/class.mailer.php" name="contactform" id="contactform">
				<legend>Interested?</legend>
				<ol>
					<li><input type="email" placeholder="Enter your email address" name="email" id="email" class="placeholder" value="" required></li>
					<li><input type="submit" name="sendit" value="Tell me when it's ready" class="btn btn-primary" id="sendit"></li>
				</ol>
			</form>
		</section>
	</article>
</div>
</body>
</html>