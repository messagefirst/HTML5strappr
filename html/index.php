<!DOCTYPE HTML>
<html>
<head>
	<?php include 'lib/partials/_meta.inc' ?>
	<?php include 'lib/partials/_scripts.inc' ?>
	<title>HTML5 Template</title>
</head>
<body class="dashboard">
<div id="StickyWrap" class="wrapper">
	<div id="HeadNav">
		<?php include 'lib/partials/_nav.inc' ?>
	</div>
	<article id="Main">
		<section>
			<h1>This is an h1</h1>
			<h2>This is an h2</h2>
			<h3>This is an h3</h3>
			<h4>This is an h4</h4>
			<h5>This is an h5</h5>
			<h6>This is an h6</h6>
			<hr>
			<p>
				Example of paragraph text.
			</p>
			<ul>
				<li>List item one</li>
				<li>List item two</li>
				<li>List item three</li>
				<li>List item four</li>
				<li>List item five</li>
			</ul>
			<code>Example source code</code>
			<hr>
			<form action="" method="" accept-charset="utf-8">
			<fieldset id="sample_form" class="">
				<legend>Example form</legend>
				<ol>
					<li><input type="text" name="Name" placeholder="Enter your full name" class="placeholder" required></li>
					<li><input type="email" name="Email" placeholder="Enter your email address" class="placeholder" required></li>
					<li><input type="url" name="URL" placeholder="Enter your web address" class="placeholder" required></li>
					<li><input type="tel" name="Tel" placeholder="+1 123 456 7890" class="placeholder" required></li>
					<li><input type="file"></li>
					<li><input type="submit" name="Send" value="Send it" class="btn"> <span class="quiet">or</span> <a href="#" class="admin">Cancel, don't send</a></li>
				</ol>
			</fieldset>
			</form>
			<hr>
			<table cellspacing="0">
				<tr>
					<th>Header</th>
					<th>Header</th>
					<th>Header</th>
				</tr>
				<tr>
					<td>Data</td>
					<td>Data</td>
					<td>Data</td>
				</tr>
				<tr class="odd">
					<td>Data</td>
					<td>Data</td>
					<td>Data</td>
				</tr>
				<tr>
					<td>Data</td>
					<td>Data</td>
					<td>Data</td>
				</tr>
			</table>
		</section>
	</article>
</div>
<?php include 'lib/partials/_foot.inc' ?>
</body>
</html>