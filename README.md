 

## Gutenberg Block Development Basic Concept
### কি ভাবে ব্লক Custom Category Add করবো 
#### নিচে Code গুলি দেখি 
```
add_filter('block_categories','custom_categories',10,2);
// categories add block 
function custom_categories($cat,$post) {

	if('page' !== get_post_type($post)){
		return $cat;
	}

	return array_merge($cat,array(
		array(
			'slug' => 'MyBlock',
			'title' => 'Custom MyBlock'
		)));
}

```


### Block development Supports
```supports: {
		align: ['left', 'right', 'center'],
		anchor: true,
		customClassName: true,
		className:true
	},
	```
	✔️ align: Block কে বিভিন্ন position নিতে align ব্যবহার করে হয় <br/>
	✔️ anchor : Block ক্লিক করলে Side Bar দুইটি অপশন পায় সেই খানে anchor tag আছে anchor:false করে দিলে সেই টা আর শো tag করায় না। <br/>
	✔️ cusotmClassName ঃ  Block ক্লিক করলে Side Bar দুইটি অপশন পায় সেই খানে Custom CSS input box আছে cusotmClassName:false করে দিলে সেই টা আর শো করায় না।<br/>
	✔️ className ঃ Block যদি class দরকার হয় তাহলে true রাখবো আর যদি প্রয়োজন না হয় তাহলে ওইতে থাকবে <br/>
	✔️ html ঃ Block এর অনেক গুলি Option ভিতরে html একটি option <br/>
	✔️ inserted : আমি যদি inserted false করে দেই তাহলে ব্লক টি আর দেখবে না  <br/>
	
