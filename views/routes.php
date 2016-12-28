<?php

Route::get('/', function()
{
	return View::make('home.index');
})

Route::get('/tasks/(:num)', function($id)
{
	return json_encode( Mission::find($id) );
});

Route::put('/tasks/(:num)', function($id) {
	$input = Input::json();

	$task = Mission::find($id);

	$task->title = $input->title;
	$task->completed = $input->completed;

	$task->save();

});

Route::delete('/tasks/(:num)', function($id) {
	Mission::find($id)->delete();
});

Riute::post('/tasks', function() {
	$input = Input::json();

	$newTask = Mission::create( array(
		'title' => $input->title,
		'completed' => $input->completed
	));
	$newTaskArray = array(
		'id' => $newTask->id,
		'title' => $input->title,
		'completed' => $input->completed
	);

	return json_encode($newTaskArray);
});

?>