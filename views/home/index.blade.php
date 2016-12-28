<!doctype html>
<html lang="en">
<head>
	<title></title>
</head>
<body>
	<h1>Hello World ;)</h1>
</body>

	<script type="text/javascript">../jquery-3.1.0.js</script>
	<script type="text/javascript">../underscore.js</script>
	<script type="text/javascript">../backbone.js</script>

	<script>
		
		(function(){
			window.App = {
				Models: {};
				Views: {};
				Collestions: {}
			};
			App.Model.Task = Backbone.Model.extend ({
				defaults: {
					title: '',
					completed: 0
				},
				urlRoot: '/tasks'
			});
		}());

	</script>

</body>
</html>
