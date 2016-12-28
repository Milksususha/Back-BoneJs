<?php

class Create_Tasks_Table {
	return void
	public function up()
	{
		Schema::create('tasks', function($table){
			$table->increments('id');
			$table->string('title');
			$table->boolean('complete');
		});
	}
	@return void
	public function down()
	{
		Schema::drop('tasks');
	}
}

?>